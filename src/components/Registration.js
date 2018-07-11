import React, { Component } from "react";
import Navbar from "./Landmarks/Navbar/Navbar";
import Footer from "./Landmarks/Footer/Footer";
import Jumbotron from "./Landmarks/Jumbotron/Jumbotron";
import FormErrors from "./Landmarks/FormErrors";
import API from "../utils/api/RegistrationAPI";
import { generateTrackingId } from "../utils/trackingID";
import { checkEmailFormat } from "../utils/validation";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      trackingId: "",
      formErrors: { firstName: "", lastName: "", email: "" },
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      formValid: false
    };
  }
  //Can't extricate vaidation into a separate file since it's saving to state.
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "firstName":
        firstNameValid = value.length >= 1;
        fieldValidationErrors.firstName = firstNameValid
          ? ""
          : " Enter your first name";
        break;
      case "lastName":
        lastNameValid = value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid
          ? ""
          : " Enter your last name";
        break;
      case "email":
        emailValid = checkEmailFormat(value);
        fieldValidationErrors.email = emailValid
          ? ""
          : "Check your email address";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        emailValid: emailValid
      },
      () => {
        if (
          this.state.firstNameValid &&
          this.state.lastNameValid &&
          this.state.emailValid
        ) {
          //if there are no errors, form is valid and Submit button is enabled. If not, buton is disabled.
          this.setState({ formValid: true });
        } else {
          this.setState({ formValid: false });
        }
      }
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ trackingId: generateTrackingId() }, () => {
      //This is a placeholder until we hook up UI to API template. It assumes a return object with order status data.
      API.saveSubmission({
        consumerFirstName: this.state.firstName,
        consumerLastName: this.state.lastName,
        consumerEmail: this.state.email,
        trackingId: this.state.trackingId
      });
    });
    this.props.history.push("/thankyou");
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <section>
          <h2 className="text-center">ENTER FOR A CHANCE TO WIN</h2>
          <div className="container">
            <div className="error">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={this.handleFormSubmit}
                  disabled={!this.state.formValid}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
