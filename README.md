# User Login Code Challenge

Using a JavaScript framework of your choice (preferably [React](https://reactjs.org/)), create a simple login screen that allows users to enter their username and password and submit the login form to a backend process.

Create a backend (preferably using [GoLang](https://go.dev/), but not required) that processes the login information and checks if the username and password are valid. If the login information is valid, the backend should return a success message to the user. If the login information is invalid, the backend should return an error message to the user.


# How-To
1. Running the application will require Docker Compose. If you have Docker Desktop installed on Windows or Mac then you already have it. If not, please install Docker Desktop which can be found [here](https://docs.docker.com/desktop/). If you are on
Linux I'll get back to you.
2. Pull down the main latest main branch and open up a terminal session.
3. Move into the root directory of the repository if it's not already your current working directory. 
4. Run `docker-compose up`. This will spin up a container w/ a React application and a container running an http server from golang's `net/http` package.
5. open a browser up to `localhost:3000` - You should see a login form. 
6. Enter a random username and password and hit the login button - maybe you'll get
lucky but I doubt it. You should notice a warning for incorrect username or password.
7. Try one or all of the following valid login credentials.
    - jhudzik, changeme123
    - aowen, scoir
    - sbeyers, drowssap

    You should see a success message after submission.

# Assumptions
1. Some shortcuts can be taken around persitence and security.
    - The back-end does not contain a persistence layer - username & passwords are simply looked up via a map.
    - All requests are made over http (vs. https) and passwords are stored in plaintext (vs. hashed).
2. Not expecting 100% code coverage.
    - Wrote unit test for checking http status code of authorization handler under several scenarios. Does not include
    any tests for the Front-end. See `handlers_test.go` for test cases.
