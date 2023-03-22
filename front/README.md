# Hangman

This is a portfolio project implemeting the 6-letter word guessing game. It's designed for single player.

This is my first project with a backend and using Python in any projects.

## What to expect
The game will choose a random word from a fixed list of 6-letter words.

A simple animation is on the right of the screen.
As wrong guesses being made, player will slowly hang the man.

When game is finished, the "Submit" buttom will change to "Restart".

## Quality of life features
1. Listed wrong guess for reference
2. Guess validation. Only alphabets are allowed
3. Prevent duplicate guesses, including case difference

## How to run
### Frontend
CD into /hangman/front in terminal then run the below commands
```
npm install
quasar dev
```
### Backend
With Docker, presuming the frontend is running on 8080, run
```
docker build -t hangman_backend .
docker run --name hangman_backend_container -d -p 8181:8080 hangman_backend
```
When done, easy stop and clean up, run
```
docker kill hangman_backend_container && docker rm hangman_backend_container
```
### Yet To Be Done
In the ideal world, the whole project should be Dockerised so it's easy to run.