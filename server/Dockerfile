FROM golang:1.18-alpine3.17

RUN mkdir /api
COPY . /api
WORKDIR /api
RUN go build -o server .
CMD ["/api/server"]

