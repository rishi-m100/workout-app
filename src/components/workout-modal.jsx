import React, { Component } from "react";
import Dropdown from "./accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";

import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
// import { storage } from "firebase";

class WorkoutModal extends Component {
  state = {
    diplay: { content: "" },
    storage: [],
  };

  handleUpdate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(this.props.day)) {
        arr[i] = arr[i].replace("," + this.props.day, "");
      }
    }
    if (arr.length != 0) {
      arr = arr.filter((e) => e !== this.props.day);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(this.props.day)) {
          arr[i] = arr[i].replace("," + this.props.day, "");
        }
      }
    }

    if (localStorage.getItem("exercises" + this.props.day) != null) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(this.props.day)) {
          arr[i] = arr[i].replace("," + this.props.day, "");
        }
      }
      let arr2 = localStorage.getItem("exercises" + this.props.day).split(",");
      arr2 = arr2.concat(arr);

      arr2 = [...new Set(arr2)];
      arr2 = arr2.filter((e) => e !== this.props.day);
      arr2 = arr2.filter((e) => e !== "");
      arr = arr2;
    } else if (arr.length != 0 && arr[0] != "") {
      //const day = `'${this.props.day}'`;
      arr = arr.filter((e) => e !== this.props.day);
      arr = [...new Set(arr)];
      arr = arr.filter((e) => e !== "");
    }

    if (arr.length == 0 || arr[0] == "") {
      return (
        <center>
          <br />
          <h6>You have no exercises added.</h6>
          <br />

          <Button
            onClick={() => {
              this.props.onExercise();
            }}
            className="workout_button"
            color={"success"}
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faSquarePlus} size="2xl" beat />}
          >
            Add
          </Button>
          <br />
          <br />
          <br />
        </center>
      );
    } else {
      let storage = arr;
      this.state.storage = storage;
      const exercises = this.state.storage;
      localStorage.setItem("exercises" + this.props.day, exercises);
      storage = null;
      this.state.storage = storage;
      arr = arr.filter((e) => e !== this.props.day);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(this.props.day)) {
          arr[i] = arr[i].replace("," + this.props.day, "");
        }
      }
      return arr.map((show) => (
          <Dropdown id={show} key={show} list={this.props.list} />
      ));
    }
  };

  render() {
    const arr_mon = this.props.exercise_mon;
    const arr_tue = this.props.exercise_tue;
    const arr_wed = this.props.exercise_wed;
    const arr_thur = this.props.exercise_thur;
    const arr_fri = this.props.exercise_fri;
    const arr_sat = this.props.exercise_sat;
    const arr_sun = this.props.exercise_sun;

    if (this.props.day == "Mon") {
      return this.handleUpdate(arr_mon);
    } else if (this.props.day == "Tue") {
      return this.handleUpdate(arr_tue);
    } else if (this.props.day == "Wed") {
      return this.handleUpdate(arr_wed);
    } else if (this.props.day == "Thur") {
      return this.handleUpdate(arr_thur);
    } else if (this.props.day == "Fri") {
      return this.handleUpdate(arr_fri);
    } else if (this.props.day == "Sat") {
      return this.handleUpdate(arr_sat);
    } else if (this.props.day == "Sun") {
      return this.handleUpdate(arr_sun);
    }
  }
}

export default WorkoutModal;
