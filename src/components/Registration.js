import React, { Component } from "react";
import Navbar from "./Landmarks/Navbar/Navbar";
import Footer from "./Landmarks/Footer/Footer";
import Jumbotron from "./Landmarks/Jumbotron/Jumbotron";
import API from "../utils/api/RegistrationAPI";

export default class Registration extends Component {
  state: {
    firstName: "",
    lastName: "",
    email: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveRecord({
      consumerFirstName: this.state.firstName,
      consumerLastName: this.state.lastName,
      consumerEmail: this.state.email
    });
    this.props.history.push('/thankyou');
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <section>
          <h2 className="text-center">ENTER FOR A CHANCE TO WIN</h2>
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={this.handleFormSubmit}
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
