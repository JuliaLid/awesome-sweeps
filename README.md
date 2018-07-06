# Awesome Sweepstakes

## Overview
This branch intorduces the following functionality:
* Adding `react-router-dom` package and its methods for rendering correct components depending on the URL.
* Using `react-router-dom` methods `Route`, `Switch`, `Link` for front-end rendering and navigation.
* Using `axios` library for API calls.
* Conditional rendering of markup depending on the component's state. 



## Process Steps
1. Install `react-router-dom` and `axios` packages by running `npm install --save react-router axios` in your terminal window.
    * Confirm that they have been added to `dev` dependecies in the `package.json` file.
1. 	Add a `utils` folder in the `src` directory.
    * It will house files for API calls using `axios`.
		a. Create an API folder to house routes for API calls
1. Add an `api` sub-directory to the `utils` directory. 
1. Create two files in the `api` folder.
    * `RegistrationAPI.js` will be used to post registration information to the database.
    * `oslAPI.js` will handle AJAX(?) calls for Order Status Lookup transactions.
1. Add another file named `routes.js` to the `util` folder for specifying the paths for rendering various components depending on user's front-end interactions.
    * We'll use four routes:
        * BASE: '/'
        * REGISTRATION: '/registration'
        * CONFIRMATION: '/thankyou'
        * OSL: '/orderstatuslookup'
1. Modify the `App.js` file to serve up Components based on the correlated routes.
    * Import `BrowserRouter, Route, Switch` from `react-router-dom`.
    * Import routes from the `routes.js` file.
    * Update `render()` function so that a component is rendered based on the URL.
1. Update the `Registration.js` from a presentational to stateful `React Component`that will handle capturing and saving user's registration data.
    * Import `RegistrationAPI.js`.
        * You'll add `axios` methods to it in a later step.
    * Add an initial state to the component to capture `firstName`, `lastName`, and `email`.
       * Set it to empty strings.
     * Add a `handleInputChange` method to capture user's inputs and save them to component's state.
     * Add a `handleFormSubmit` method to make an API call and save the data to the database.
         * Redirect to the `ThankYou` page by using the `history.push` method that passed to the component via `react-router-dom` props.
      capture user's inputs and save them to component's state.
     * Update the `render()` function with new methods.
         * Add `{this.handleChangeInput}` to input fields. This method will trak user's input via DOM's `event.target` API and save the data to the component's state. 
         * Add `{this.handleFormSubmit}` to the `Submit` button to trigger the API call to save user's registration information from the Component's state.
    
