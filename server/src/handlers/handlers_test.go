package handlers

import (
	"net/http/httptest"
	"strings"
	"testing"
)

func TestAuthenticate(t *testing.T) {

	validCreds := "{\"Username\": \"jhudzik\", \"Password\": \"changeme123\"}"
	invalidCreds := "{\"Username\": \"username\", \"Password\": \"password\"}"
	missingCreds := "{\"Username\": \"\", \"Password\": \"\"}"

	// Valid Creds
	w := httptest.NewRecorder()
	req := httptest.NewRequest("POST", "http://localhost:8000/login", strings.NewReader(validCreds))
	req.Header.Set("Content-Type", "application/json")
	Authenticate(w, req)
	resp := w.Result()

	got := resp.StatusCode
	expected := 200
	if got != expected {
		t.Errorf("Valid Creds Test Fail: got %d, expected %d", got, expected)
	}

	// Invalid Creds
	w = httptest.NewRecorder()
	req = httptest.NewRequest("POST", "http://localhost:8000/login", strings.NewReader(invalidCreds))
	req.Header.Set("Content-Type", "application/json")
	Authenticate(w, req)
	resp = w.Result()

	got = resp.StatusCode
	expected = 401
	if got != expected {
		t.Errorf("Invalid Creds Test Fail: got %d, expected %d", got, expected)
	}

	// Bad Request
	w = httptest.NewRecorder()
	req = httptest.NewRequest("POST", "http://localhost:8000/login", strings.NewReader(missingCreds))
	req.Header.Set("Content-Type", "application/json")
	Authenticate(w, req)
	resp = w.Result()

	got = resp.StatusCode
	expected = 400
	if got != expected {
		t.Errorf("Invalid Creds Test Fail: got %d, expected %d", got, expected)
	}
}
