import React, { Component } from "react";
import Navbar from "./Landmarks/Navbar/Navbar";
import Footer from "./Landmarks/Footer/Footer";
import Jumbotron from "./Landmarks/Jumbotron/Jumbotron";
import OrderStatus from "./OrderStatus";
import API from "../utils/api/oslAPI";

export default class OrderStatusLookup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackingID: "",
      orderStatus: null
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //This is a placeholder until we hook up UI to API template. It assumes a return object with order status data.
  handleFormSubmit = id => {
    API.lookUpOrderStatus(id)
      .then(res => this.setState({ trackingID: " ", orderStatus: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    let orderStatus = this.state.orderStatus !== null;
    console.log(orderStatus);

    return (
      <div>
         <wrapper className="d-flex flex-column">
        <Navbar />
        <Jumbotron />
        <main className="flex-fill">
          <h2 className="text-center">LOOK UP SUBMISSION STATUS</h2>
          <div className="container">
            {orderStatus ? (
              <OrderStatus {...this.state.orderStatus} />
            ) : (
              <form>
                <div className="form-group">
                  <label htmlFor="submissionID">Enter the Submission ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="submissionID"
                    placeholder="Submission ID"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-info"
                    onClick={this.handleFormSubmit(this.state.trackingID)}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
        <Footer />
        </wrapper>
      </div>
    );
  }
}
