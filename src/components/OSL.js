import React, { Component } from "react";
import Navbar from "./Landmarks/Navbar/Navbar";
import Footer from "./Landmarks/Footer/Footer";
import Jumbotron from "./Landmarks/Jumbotron/Jumbotron";

export default class OSL extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <section>
          <h2 className="text-center">LOOK UP SUBMISSION STATUS</h2>
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="submissionID">Enter the Submission ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="submissionID"
                  placeholder="Submission ID"
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
