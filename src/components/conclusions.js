import React, { Component } from "react";
import "../styles/conclusions.css";

import { Link } from "react-router-dom";

class Conclusions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      partTwo: "Ivy League Universities!",
      roastString: ""
    };
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

    this.setState({
      total: totalAdmits,
      roastString: "You clearly don't own enough Patagonia."
    });
  }

  render() {
    return (
      <div>
        <div class="mainConclusionsBox">
          <div class="partOne">You got into</div>
          <div class="resultNumber">{this.state.total}</div>
          <div class="partTwo">{this.state.partTwo}</div>
        </div>
        <div class="comment">{this.state.roastString}</div>

        <Link
          class="resultsButton"
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
