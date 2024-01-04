import React, { Component } from "react";
import Day from "./day";
import Summary from "./summary";
import WorkoutModal from "./workout-modal";

class Days extends Component {
  state = {
    text: [
      { id: 1, day: "Mon", display: <Summary /> },
      { id: 2, day: "Tue", display: <Summary /> },
      { id: 3, day: "Wed", display: <Summary /> },
      { id: 4, day: "Thur", display: <Summary /> },
      { id: 5, day: "Fri", display: <Summary /> },
      { id: 6, day: "Sat", display: <Summary /> },
      { id: 7, day: "Sun", display: <Summary /> },
    ],
  };

  handleWorkout = (counter) => {
    const text = [...this.state.text];
    const index = counter - 1;
    text[index].display = (
      <WorkoutModal
        exercise_mon={this.props.exercise_mon}
        exercise_tue={this.props.exercise_tue}
        exercise_wed={this.props.exercise_wed}
        exercise_thur={this.props.exercise_thur}
        exercise_fri={this.props.exercise_fri}
        exercise_sat={this.props.exercise_sat}
        exercise_sun={this.props.exercise_sun}
        list={this.props.list}
        onExercise={() => {
          this.props.onExercise();
        }}
        day={text[index].day}
      />
    );
    this.setState({ text });
  };

  handleSummary = (counter) => {
    const text = [...this.state.text];
    const index = counter - 1;
    text[index].display = <Summary />;

    this.setState({ text });
  };

  handleEdit = (counter) => {
    const text = [...this.state.text];
    const index = counter - 1;
    text[index].display = "nothing to see here";

    this.setState({ text });
  };

  render() {
    return this.state.text.map((arr) => (
      <Day
        onSummary={this.handleSummary}
        onWorkout={this.handleWorkout}
        onEdit={this.handleEdit}
        content={arr}
        key={arr.id}
      />
    ));
  }
}

export default Days;
