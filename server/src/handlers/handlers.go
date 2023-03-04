package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"jhudzik/login/src/models"
)

const applicationJSON = "application/json"

// user lookup map - maybe replace with memstore for exercise ( time permitting )
var users = make(map[string]*models.User)

func init() {
	// passwords not stored in plaintext in real world! bcrypt to the rescue
	users["jhudzik"] = models.NewUser("jhudzik", "changeme123", "green")
}

func Authenticate(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", applicationJSON)

	value, err := decodeJSONBody(req, &models.Credentials{})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	creds, ok := value.(models.Credentials)
	if !ok {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// required fields missing
	if creds.IsMissingFields() {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(struct{ Msg string }{
			Msg: "Bad Request: Username and or Password missing",
		})
		return
	}

	user, ok := users[creds.Username]

	// user not found or incorrect password
	if !ok || !user.VerifyPassword(creds.Password) {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(struct{ Msg string }{
			Msg: "Username or Password Incorrect",
		})
		return
	}

	// otherwise success
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(struct{ Msg string }{
		Msg: fmt.Sprintf("Hello %s! Are you wearing something %s today?", user.Username, user.FavoriteColor),
	})
}

func EnableCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		// handle preflight
		if req.Method == "OPTIONS" {
			return
		}
		next(w, req)
	}
}

func decodeJSONBody(req *http.Request, value any) (any, error) {
	contentType := req.Header.Get("Content-Type")
	if contentType != applicationJSON {
		err := fmt.Errorf("Expected Content-Type "+applicationJSON+" but found %s", contentType)
		return nil, err
	}
	decoder := json.NewDecoder(req.Body)
	decoder.DisallowUnknownFields()
	if err := decoder.Decode(&value); err != nil {
		return nil, err
	}
	return &value, nil
}
