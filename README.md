This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Runs on localhost:3000

### `yarn test`

Launches test and show coverage by file. 

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

## About features on project

This React template project has the following initial features:

 - react-redux
 - redux-saga
 - socket-middleware, if you want to use socket on your application (socket-io-client)
 - react-testing-library: initial setupTests for unit and page tests, it is configured to bypass only saga.js files but you still can test actions and reducers if you want.
 - styled-components: all the css are placed on styles.js files
 - some generic components like dropdown
 - react-router-dom: initial configuration for routes in the application using history
 - react-toastfy: for generic user feedback
 - redux-persist: persist data on browser, usually used for user authentication so you can persist auth information on browser
 - storybook (will be added later)