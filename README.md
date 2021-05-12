# Reach React Template

This repository has many tools that you can use in your Reach projects, such as connect wallet button, faucet modals and a simple framework to build your own websites.

Or you can just tweak the files in the participant folder and the routes in App.js to configure the already working site for your needs.

Project uses React Hooks and Context for state management and Bootstrap for styling. 

## Instructions
* Node.js must be installed in your system.
* After cloning the project with `$ git clone https://github.com/Zetsuboii/reach-react-template.git; cd reach-react-template`
* use `$ npm install package.json` to install dependencies
* You need a copy of reach to get the devnet running. If you don't have one already
* `$ curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach`
* After that running `$ REACH_CONNECTOR_MODE=ALGO ./reach devnet` (which runs the ALGORAND devnet inside the terminal)
* go to the parent directory and start the React app `$ cd .. ; npm run start` 
* This will run the web-app in the localhost:3000
