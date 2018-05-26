import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Stripe extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emailer"
        description="$5 for 5 email credits"
        amout={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn btn-outline-light" type="button">
          Add Credits <span className="badge">({this.props.auth.credits})</span>
        </button>
      </StripeCheckout>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Stripe);
