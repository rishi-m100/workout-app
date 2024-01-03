import React, { Component } from "react";
import Summary from "./summary";

class Day extends Component {
  state = {
    id: this.props.content.id,
    day: this.props.content.day,
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item active">
              <a
                onClick={() => this.props.onSummary(this.props.content.id)}
                className="nav-link active"
                aria-current="true"
                href="#"
              >
                {this.state.day}
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.onWorkout(this.props.content.id)}
                className="nav-link"
                href="#"
              >
                Workout
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.onEdit(this.props.content.id)}
                className="nav-link "
              >
                Edit
              </a>
            </li>
          </ul>
        </div>
        {this.formatDisplay()}
      </div>
    );
  }
  formatDisplay() {
    const { display } = this.props.content;
    return display;
  }
}

export default Day;
