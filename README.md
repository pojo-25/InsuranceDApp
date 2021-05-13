# Insurance Dapp
In this project, subscriber periodically pays some amount of money to insurance company. Subscriber sometimes can arbitrarily request money from the company. When the company approves this request, the amount requested by the subscriber is transferred to the subscriber's account.

You can run this app according to about page properly. 

This app's template code is retrieved from https://github.com/Zetsuboii/reach-react-template. Executes following instructions for running this app. 

## Instructions
* Node.js must be installed in your system.
* After cloning the project with `$ https://github.com/pojo-25/InsuranceDApp.git; cd reach-react-template`
* use `$ npm install package.json` to install dependencies
* You need a copy of reach to get the devnet running. If you don't have one already
* `$ curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach`
* After that running `$ REACH_CONNECTOR_MODE=ALGO ./reach devnet` (which runs the ALGORAND devnet inside the terminal)
* go to the parent directory and start the React app `$ cd .. ; npm run start` 
* This will run the web-app in the localhost:3000
