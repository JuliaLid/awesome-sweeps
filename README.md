# Awesome Sweepstakes

## Overview
This branch intorduces the following functionality:
* Validating user's input prior to submitting the form. The Submit button is deactivated until all fields pass validation.
* Using RegEx to validate email format.
* Displaying errors to the user.


## Process Steps
1. Add a `validation.js` file to the `utils` directory. 
    * It will contain a function to validate the email format using RegEx.
1. Import the validation function to the Registration Component.
1. Add the following properties to state:
    * `formErrors` will be set as an object to hold error messages for first name, last name, and email.
1. Add a new method `validateField` to validate the fields' values using a switch function where each case represents each input field.
    * The switch function evaluates wheather the user's input passes the validation rules. If the input fails validation, it specifies the error message to be displayed and saves them to the state.
    * This method should be invoked by the `handleInputChange` method, after user's input is being saved to the Component's state.
1. Add a new method `validateForm`to validate that all fields pass validation and the Submit button can be enabled.
    * This function will evaluate and update `formValid` state to `true` only if all fields pass validation checks.
1. Add a `disabled` attribute to the form's `<button>` . It should check the state of `formValid` and activate button only when `formValid` is `true`.
1. Add a new component `FormErrors.js` to the `Components/Landmarks` directory.
    * This Component will receive the object with errors, map over them and return markup to display applicable errors.
    * Import `FormErrors` to `Registration.js`.
    * Add an new `<div>` to the `render` function.
    * Add the `FormErrors` component to the new `<div>`  and pass `{this.staste.forValid}` as a prop.
