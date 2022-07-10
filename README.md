# Musicify GraphQL Apollo Server

This application contains multiple modules that are used to serve for Musicify Application :
- Albums
- Bands
- Favourites
- Genres
- Tracks
- Users
- Artists

## Installation

### Microservices:

1. Clone/download [repo](https://github.com/rolling-scopes-school/node-graphql-service)
2. Follow repos instructions
3. Run microservices

### Current Repository:

1. Clone/download repo
2. Checkout to "dev" branch 
* ```git checkout dev```
3. `npm install`

## Usage

### You are able to set *ports* where REST calls should be requested as well as server running PORT

#### Default values are:
* Server port - 8000
* Genres port - 3001
* Artists port - 3002
* Bands port - 3003
* Users port - 3004
* Albums port - 3005
* Tracks port - 3006
* Favourites port - 3007

#### Steps to set environment variables:
1. Change *.env.example* filename to *.env*
2. Set corresponding ports to each variable


## Running the application:
* Run in your terminal ```npm start``` from root directory

#### P.S.: [Apollo-Server Docs](https://www.apollographql.com/docs/apollo-server/)
