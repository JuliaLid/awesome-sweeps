import React, { Component } from "react";
import Navbar from "./Landmarks/Navbar/Navbar";
import Footer from "./Landmarks/Footer/Footer";
import Jumbotron from "./Landmarks/Jumbotron/Jumbotron";

export default class Registration extends Component {
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
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-info">
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
