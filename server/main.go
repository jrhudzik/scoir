package main

import (
	"jhudzik/login/src/handlers"
	"log"
	"net/http"
)

// do some basic setup
func init() {

}

func main() {
	mux := http.NewServeMux()
	// mux.Handle("/", http.HandlerFunc(handlers.EnableCORS))
	mux.Handle("/login", handlers.EnableCORS(http.HandlerFunc(handlers.Authenticate)))
	log.Fatal(http.ListenAndServe(":8000", mux))
}
