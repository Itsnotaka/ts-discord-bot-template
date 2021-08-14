# TypeScript + MongoDB - Discord Bot Template
A quick way to create a discord bot that is able to utilize MongoDB as it's database and it's highly customizable

## Initialization And Prerequisites
### Installing
You will need to have [nodejs](https://nodejs.org/en/) installed in order to run. You will also need npm but this is installed with nodejs.

First you will `git clone` or `download` this repository. Then open up the console and do the following command.
```
cd discord-bot-base-template
npm install
```
#### Testing
```
npm start
```
#### Building
```
npm build
```
## File layout
All controller files are within the `src` folder. 
### Commands
Contains a controller - `_CommandList.ts` 
An example file that uses the database function - `example.ts`
A easy to read help commad - `help.ts`
### Database
Within the `models` folder contains a simple interface + Schema example for databse usage
`connectDatabase.ts` is a file created to connect to the databse
### Events
`messages.ts` is a message handler
### Interface
`CommandInt.ts` is an interface file for `_CommandList.ts`
### Utils
`validateEnv.ts` is to prevent TypeScript emitting error when using `process.env`
