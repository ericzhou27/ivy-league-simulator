import React, { Component } from "react";
import Response from "./response";
import { Link } from "react-router-dom";

import "../styles/results.css";

class Results extends Component {
  constructor(props) {
    super(props);
    this.renderResponses = this.renderResponses.bind(this);
    this.createResponse = this.createResponse.bind(this);
    this.simulateAdmission = this.simulateAdmission.bind(this);
    this.state = {
      applicationData: null
    };
  }

  simulateAdmission(schoolName, SAT, GPA) {
    switch (schoolName) {
      case "harvard":
        return Math.random() < 0.1;
      case "yale":
        return Math.random() < 0.1;
      case "princeton":
        return Math.random() < 0.1;
      case "upenn":
        return Math.random() < 0.25;
      case "columbia":
        return Math.random() < 0.25;
      case "brown":
        return Math.random() < 0.4;
      case "dartmouth":
        return Math.random() < 0.4;
      case "cornell":
        return Math.random() < 0.95;
    }
  }

  componentDidMount() {
    const data = this.props.location.state.application;
    this.setState({ applicationData: data }, () => {
      console.log(this.state.applicationData);
      for (const [key, value] of Object.entries(this.state.applicationData)) {
        var currentApplication = value;

        currentApplication.result = this.simulateAdmission(
          currentApplication.code,
          currentApplication.sat,
          currentApplication.gpa
        );

        this.setState({
          [key]: currentApplication
        });
      }
    });
  }

  createResponse(application) {
    return <Response application={application} />;
  }

  renderResponses(applications) {
    return Object.keys(applications).map(school =>
      this.createResponse(applications[school])
    );
  }

  render() {
    return (
      <div>
        <div class="title">Results</div>
        {this.renderResponses(this.props.location.state.application)}
        <Link
          class="resultsButton"
          to={{
            pathname: "/conclusions",
            state: {
              application: this.state.applicationData
            }
          }}
        >
          Conclusions
        </Link>
      </div>
    );
  }
}

export default Results;
