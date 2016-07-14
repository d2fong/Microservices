# ChronoKeeper:  A Timestamp Microservice


## Input

This microservice accepts strings from url parameters.

## Output

This microservice recognizes the following patterns:
* "<month> <day> <year>" 
* "[0-9]*"

If the input matches one of these patterns, then the server will 
return both the human readable date and the unix timestamp of that date.


## Installation

Clone this repo, and run :
```
npm install
```


## Usage

To run the server locally, type:
```
node app.js
```

Then open your browser to localhost:8080