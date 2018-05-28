import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          Dashboard
          <Link to="/surveys/new" className="btn btn-info float-right btn-sm">
            <i className="fas fa-plus-circle mr-2" />
            New Survey
          </Link>
        </div>
        <div className="card-body">
          <SurveyList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
