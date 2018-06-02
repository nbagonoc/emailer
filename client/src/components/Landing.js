import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Stripe from "./Stripe";

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a
            className="btn btn-lg btn-danger"
            href="/auth/google"
            role="button"
          >
            <i className="fab fa-google mr-1" />Login with Google
          </a>
        );
      default:
        return (
          <a className="btn btn-lg btn-info" href="/surveys" role="button">
            <i className="fas fa-envelope mr-1" />Get Started
          </a>
        );
    }
  }

  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="first-slide"
              style={{
                background: "url(/img/cover-a.jpg) center center"
              }}
            >
              <div className="carousel-text text-center">
                <h1 className="text-uppercase text-light font-weight-bold display-2">
                  eSurvey is easy!
                </h1>
                {this.renderContent()}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="second-slide"
              style={{
                background: "url(/img/cover-b.jpg) center center"
              }}
            >
              <div className="carousel-text text-center">
                <h1 className="text-uppercase text-light font-weight-bold display-2">
                  It's as easy as 1 2 3!
                </h1>
                {this.renderContent()}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="third-slide"
              style={{
                background: "url(/img/cover-c.jpg) center center"
              }}
            >
              <div className="carousel-text text-center">
                <h1 className="text-uppercase text-light font-weight-bold display-2">
                  Try it now!
                </h1>
                {this.renderContent()}
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
