FROM golang:1.12.0-alpine3.9
WORKDIR /go/src/app
ENV GO111MODULE=on
RUN apk add --no-cache \
        alpine-sdk \
        git \
    && go get github.com/pilu/fresh
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build -o main ./...
RUN ls
CMD ["/app/main"]