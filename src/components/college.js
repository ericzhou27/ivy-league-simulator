import React, { Component } from "react";
import Application from "../models/application";
import "../styles/college.css";
import { nullLiteral } from "@babel/types";

class College extends Component {
  state = {
    applied: false,
    name: null,
    gpa: null,
    sat: null
  };

  render() {
    return (
      <div class="main-container">
        <div class="sub-container">
          <div class="text-box">
            <div class="text">{this.props.name}</div>
          </div>
          <div class="logo-box">
            <img
              class="logo"
              src={require(`../assets/${this.props.image}.png`)}
            />
          </div>
        </div>
        <div class="filter" />
        <video
          src={require(`../assets/${this.props.video}.mp4`)}
          loop="true"
          autoplay="true"
          muted="true"
          class="college-video"
        ></video>
        <div class="overlay" style={{ backgroundColor: this.props.color }}>
          <div class="text2">
            <div class="applyText">Apply</div>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              class="applyInput"
              onChange={event => this.setState({ name: event.target.value })}
            />
            <input
              type="text"
              name="gpa"
              placeholder="GPA"
              value={this.state.gpa}
              class="applyInput"
              onChange={event => this.setState({ gpa: event.target.value })}
            />
            <input
              type="text"
              name="sat"
              placeholder="SAT"
              value={this.state.sat}
              class="applyInput"
              onChange={event => this.setState({ sat: event.target.value })}
            />

            <div
              class={this.state.applied ? "applyButton-clicked" : "applyButton"}
              onClick={() => {
                if (
                  this.state.sat > 1600 ||
                  this.state.sat < 400 ||
                  this.state.sat === null
                ) {
                  alert("Please enter a valid SAT score!");
                } else if (
                  this.state.gpa > 5 ||
                  this.state.gpa < 0 ||
                  this.state.gpa === null
                ) {
                  alert("Please enter a valid GPA!");
                } else if (this.state.name === null) {
                  alert("Please enter a valid name!");
                } else {
                  let application = new Application(
                    this.props.name,
                    this.props.code,
                    this.state.name,
                    this.state.gpa,
                    this.state.sat,
                    null
                  );
                  this.props.action(application);
                  this.setState({ applied: true });
                }
              }}
            >
              <div
                style={{
                  color: this.state.applied ? this.props.color : "white"
                }}
              >
                {this.state.applied ? "Thank You" : "Submit"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default College;
