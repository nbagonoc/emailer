import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import * as actions from "../../actions";

const SurveyFormReview = ({ onBack, reviewValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <dl className="row" key={name}>
        <dt className="col-md-3 col-sm-4">{label}</dt>
        <dd className="col-md-9 col-sm-8">{reviewValues[name]}</dd>
      </dl>
    );
  });

  return (
    <div className="card">
      <div className="card-header">
        Review Email Survey
        <button onClick={onBack} className="btn btn-warning float-right btn-sm">
          <i className="fas fa-arrow-circle-left mr-2" />
          Back
        </button>
      </div>
      <div className="card-body">
        {reviewFields}
        <button
          onClick={() => submitSurvey(reviewValues, history)}
          className="btn btn-info btn-sm"
          type="submit"
        >
          <i className="fas fa-check-circle mr-2" />
          Send
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { reviewValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
