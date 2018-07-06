import React, { Component } from "react";
import Navbar from "./Landmarks/Navbar/Navbar";
import Footer from "./Landmarks/Footer/Footer";
import Jumbotron from "./Landmarks/Jumbotron/Jumbotron";
import API from "../utils/api/RegistrationAPI";

export default class ThankYou extends Component {
  state: {
    createdAt: "July, 1",
    submissionId: "23654568783"
  };

  // componentDidMount() {
  //   this.confirmRegistration()
  // };

  cofirmRegistration = () => {
    API.getSubmissionID()
      .then(res =>
        this.setState({ createdAt: res.data, submissionId: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <section>
          <h2 className="text-center">THANKS FOR ENTERING</h2>
          <div className="container text-center">
            <p>
              Your submission was received on{" "}
              {this.state && this.state.createdAt}
            </p>
            {/* <p>Your tracking number is {this.state.submissionId}</p> */}
            <p>Your submission was received on xx/xx/xx.</p>
            <p>Your tracking number is xxxxxxxxxx.</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
