import React, { Component } from "react";
import "../styles/apply.css";
import College from "./college";
import Application from "../models/application";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Apply extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      applications: {}
    };
  }

  handler(property) {
    this.state.applications[property.college] = property;
  }

  render() {
    return (
      <div class="main-box">
        <div class="header">Common App</div>
        <College
          action={this.handler}
          code={"harvard"}
          name={"Harvard"}
          color={"#990000"}
          image={"harvard"}
          video={"harvard"}
        />
        <College
          action={this.handler}
          code={"yale"}
          name={"Yale"}
          color={"#0f4d92"}
          image={"yale"}
          video={"yale"}
        />
        <College
          action={this.handler}
          code={"princeton"}
          name={"Princeton"}
          color={"#ff8f00"}
          image={"princeton"}
          video={"princeton"}
        />
        <College
          action={this.handler}
          code={"upenn"}
          name={"University of Pennsylvania"}
          color={"#011F5b"}
          image={"upenn"}
          video={"penn"}
        />
        <College
          action={this.handler}
          code={"columbia"}
          name={"Columbia"}
          color={"#9bddff"}
          image={"columbia"}
          video={"columbia"}
        />
        <College
          action={this.handler}
          code={"brown"}
          name={"Brown"}
          color={"#381C00"}
          image={"brown"}
          video={"brown"}
        />
        <College
          action={this.handler}
          code={"dartmouth"}
          name={"Dartmouth"}
          color={"#005F2F"}
          image={"dartmouth"}
          video={"dartmouth"}
        />
        <College
          action={this.handler}
          code={"cornell"}
          name={"Cornell"}
          color={"#B31B1B"}
          image={"cornell"}
          video={"cornell"}
        />

        <Link
          class="resultsButton"
          to={{
            pathname: "/results",
            state: {
              application: this.state.applications
            }
          }}
        >
          Go to Results
        </Link>
      </div>
    );
  }
}

export default Apply;
