# User Login Code Challenge

# How-To
1. Running the application will require Docker Compose. If you have Docker Desktop installed on Windows or Mac then you already have it. If not, please install Docker Desktop which can be found [here](https://docs.docker.com/desktop/). If you are on
Linux I'll get back to you.
2. Pull down the latest main branch and open up a terminal session.
3. Change your current working directory to the root of the repository. 
4. Run `docker-compose up`.
5. Open a browser up to `localhost:3000`. You should see a login form. 
6. Enter a random username and password and hit the login button. Maybe you'll get
lucky but I doubt it. You should notice a warning for incorrect username or password.
7. Try one or all of the following valid login credentials (username, password).
    - jhudzik, changeme123
    - aowen, scoir
    - sbeyers, drowssap

    You should see a success message after submission.

# Assumptions
1. Some shortcuts can be taken around persitence and security.
    - The back-end does not contain a persistence layer. Username and password are simply looked up via a map.
    - All requests are made over http (vs. https) and passwords are stored in plaintext (vs. hashed).
2. Not expecting 100% code coverage.
    - Wrote a unit test for checking http status code of authorization handler under several scenarios. Does not include
      any tests for the Front-end. See `handlers_test.go` for test cases.
3. API Endpoints can be hardcoded. 
    - E.g. `localhost:8000`. If running in different envs would want to use env vars to
      populate this value dynamically.