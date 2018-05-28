import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id}>
          <dl className="mb-0">
            <dt className="text-dark text-capitalize">{survey.title}</dt>
            <dd className="text-muted small mb-0">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </dd>
            <dd className="">{survey.body}</dd>
          </dl>
          <span className="badge badge-success mr-1">Yes: {survey.yes}</span>
          <span className="badge badge-danger">No: {survey.no}</span>
          <hr />
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
