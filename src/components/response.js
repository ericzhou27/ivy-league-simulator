import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { acceptanceOne } from "../assets/text.js";
import { rejectionOne } from "../assets/text.js";

import "../styles/response.css";

class Response extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isOpen: false,
      opened: false
    };
  }

  createText(accepted) {
    if (accepted) {
      return (
        <div>
          <pre>
            {`Dear ${this.props.application.name}, \n ${acceptanceOne}${this.props.application.college} Admissions`}
          </pre>
        </div>
      );
    } else {
      return (
        <div>
          <pre>
            {`Dear ${this.props.application.name}, \n ${rejectionOne}${this.props.application.college} Admissions`}
          </pre>
        </div>
      );
    }
  }

  handleShow() {
    this.setState({
      isOpen: true
    });
  }

  handleClose() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <div class="mainBox" onClick={this.handleShow}>
        <div
          class={this.state.opened ? "messageBoxOpened" : "messageBoxUnopened"}
        >
          <div class="logoBox">
            <img
              class="logo-results"
              src={require(`../assets/${this.props.application.code}.png`)}
            />
          </div>
          <div
            class={
              this.state.opened ? "universityOpened" : "universityUnopened"
            }
          >
            {this.props.application.college}
          </div>
          <div class={this.state.opened ? "messageOpened" : "messageUnopened"}>
            An update to your application status has been posted.
          </div>
        </div>
        <div
          onClick={e => {
            e.stopPropagation();
            this.setState({
              opened: true
            });
          }}
        >
          <Modal show={this.state.isOpen} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {this.props.application.college} Decision
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.createText(this.props.application.result)}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Response;
