import React, { Component } from "react";
import "../styles/conclusions.css";

import { Link } from "react-router-dom";
import { commentText } from "../assets/text.js";

class Conclusions extends Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.state = {
      total: null,
      partTwo: "Ivy League Universities!",
      roastString: ""
    };
  }

  handleText(totalAdmits) {
    if (totalAdmits <= 3) {
      let set = commentText["poor"];
      let text = set[Math.floor(Math.random() * set.length)];
      this.setState({
        total: totalAdmits,
        roastString: text
      });
    } else if (totalAdmits <= 5) {
      let set = commentText["middle"];
      let text = set[Math.floor(Math.random() * set.length)];
      this.setState({
        total: totalAdmits,
        roastString: text
      });
    } else if (totalAdmits <= 7) {
      let set = commentText["rich"];
      let text = set[Math.floor(Math.random() * set.length)];
      this.setState({
        total: totalAdmits,
        roastString: text
      });
    } else {
      let set = commentText["really rich"];
      let text = set[Math.floor(Math.random() * set.length)];
      this.setState({
        total: totalAdmits,
        roastString: text
      });
    }
  }

  componentDidMount() {
    const data = this.props.location.state.application;
    var totalAdmits = 0;

    for (const [key, value] of Object.entries(data)) {
      var currentApplication = value;
      if (currentApplication.result) {
        totalAdmits++;
      }
    }

    if (totalAdmits === 1) {
      this.setState({
        partTwo: "Ivy League University!"
      });
    }

    this.handleText(totalAdmits);
  }

  render() {
    return (
      <div>
        <div className="mainConclusionsBox">
          <div className="partOne">You got into</div>
          <div className="resultNumber">{this.state.total}</div>
          <div className="partTwo">{this.state.partTwo}</div>
        </div>
        <div className="comment">{this.state.roastString}</div>

        <Link
          className="resultsButton"
          to={{
            pathname: "/"
          }}
        >
          Try Again
        </Link>
      </div>
    );
  }
}

export default Conclusions;
