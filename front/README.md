# Hangman

This is a portfolio project implemeting the 6-letter word guessing game. It's designed for single player.

This is my first project with a backend and using Python in any projects.

## What to expect
The game will choose a random word from a fixed list of 6-letter words.

A simple animation of a man will be on the right of the screen.
As wrong guesses being made, player will slowly hang the man.

When game is finished, there will be a pop up for new game.

## Quality of life features
1. Listed wrong guess for reference
2. Forbids duplicate wrong guess submission
3. Forbids non-alphabet guess submission

## How to run
### Frontend
CD into root directory in terminal then run the below commands
```
npm install
quasar dev
```
### Backend
With Docker, presuming the frontend is running on 8080, run
```
docker run -d -p <port>:8080 <image id>
```
### Yet To Be Done
In the ideal world, the whole project should be Dockerised so it's easy to run.