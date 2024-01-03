import React, { Component } from "react";
class Summary extends Component {
  state = {
    day: this.props.day,
  };
  render() {
    return (
      <div className="card-body">
        <h5 className="card-title summary-title">{this.state.day}</h5>
        <p className="card-text">
          <b> Today's muscle groups:</b>
          <br />
          <b>Estimated time: </b>
        </p>
        <a href="#" className="btn btn-primary">
          Log
        </a>
      </div>
    );
  }
}

export default Summary;
