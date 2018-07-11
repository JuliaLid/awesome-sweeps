import React, { Component } from "react";
import Navbar from "./Landmarks/Navbar/Navbar";
import Footer from "./Landmarks/Footer/Footer";
import Jumbotron from "./Landmarks/Jumbotron/Jumbotron";
import API from "../utils/api/RegistrationAPI";

export default class ThankYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: "July, 1",
      submissionId: "236-545-687-983"
    };
  }

  // componentDidMount() {
  //   this.confirmRegistration()
  // };

  //This is a placeholder until we hook up UI to API template. It will be refactored when redux is added for state management.
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
        <wrapper className="d-flex flex-column">
          <Navbar />
          <Jumbotron />
          <main className="flex-fill">
            <h2 className="text-center">
              THANKS FOR ENTERING THE AWESOME SWEEPSTAKES.
            </h2>
            <div className="container text-center">
              <p>Your submission was received on {this.state.createdAt}.</p>
              <p>Your tracking number is {this.state.submissionId}</p>
            </div>
          </main>
          <Footer />
        </wrapper>
      </div>
    );
  }
}
