import React, { Component } from "react";
import NavBar from "./navbar";
import Days from "./days";

class Schedule extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Days
          exercise_mon={this.props.content1}
          exercise_tue={this.props.content2}
          exercise_wed={this.props.content3}
          exercise_thur={this.props.content4}
          exercise_fri={this.props.content5}
          exercise_sat={this.props.content6}
          exercise_sun={this.props.content7}
          list={this.props.list}
          desc={this.props.desc}
          onExercise={() => this.props.onExercise()}
        />
      </React.Fragment>
    );
  }
}

export default Schedule;
