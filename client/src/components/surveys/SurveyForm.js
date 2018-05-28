import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";
import validateEmails from "../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, placeholder }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          placeholder={placeholder}
        />
      );
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          New Email Survey
          <Link to="/surveys" className="btn btn-danger float-right btn-sm">
            <i className="fas fa-times-circle mr-2" />
            Cancel
          </Link>
        </div>
        <div className="card-body">
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <button className="btn btn-info btn-sm" type="submit">
              <i className="fas fa-arrow-circle-right mr-2" />
              Review
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "This field is required";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
