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
          <h2 className="text-center">THANKS FOR ENTERING</h2>
          <div className="container text-center">
            <p>Your submission was received on xx/xx/xx.</p>
            <p>Your tracking number is xxxxxxxxxxxxx</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
