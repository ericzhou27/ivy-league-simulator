import React, { Component } from "react";
import Application from "../models/application";
import "../styles/college.css";

class College extends Component {
  state = {
    applied: false,
    name: "",
    gpa: "",
    sat: ""
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
                let application = new Application(
                  this.props.name,
                  this.props.code,
                  this.state.name,
                  this.state.gpa,
                  this.state.sat,
                  null
                );
                // console.log(application);
                this.props.action(application);
                this.setState({ applied: true });
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
