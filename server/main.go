package main

import (
	"jhudzik/login/src/handlers"
	"log"
	"net/http"

	"github.com/rs/cors"
)

func main() {
	mux := http.NewServeMux()
	mux.Handle("/login", http.HandlerFunc(handlers.Authenticate))
	handler := cors.Default().Handler(mux)
	log.Fatal(http.ListenAndServe(":8000", handler))
}
