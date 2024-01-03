import React, { Component } from "react";
import WorkoutModal from "./components/workout-modal";
import Summary from "./components/summary";
import Schedule from "./components/schedule";
import Exercises from "./components/exercises";
import Log from "./components/log";
import Profile from "./components/profile";
import NavBar from "./components/navbar";
import { firebase } from "../firebase";
// Initialize Analytics and get a reference to the service
const analytics = firebase.analytics();

class App extends Component {
  state = {
    text: [
      {
        id: 1,
        label: "schedule",
        display: (
          <Schedule
            onExercise={() => {
              this.handleNav(1);
            }}
          />
        ),
      },
      {
        id: 2,
        label: "exercises",
        display: (
          <Exercises
            list={exerciseList}
            onCheck={(id) => this.handleCheck(id)}
          />
        ),
      },
      { id: 3, label: "log", display: <Log /> },
      { id: 4, label: "profile", display: <Profile /> },
    ],
    show: {
      display: (
        <Schedule
          onExercise={() => {
            this.handleNav(1);
          }}
        />
      ),
    },

    exercise_mon: { content1: "" },
    exercise_tue: { content2: "" },
    exercise_wed: { content3: "" },
    exercise_thur: { content4: "" },
    exercise_fri: { content5: "" },
    exercise_sat: { content6: "" },
    exercise_sun: { content7: "" },
    page: { selected: false },
  };
  handlePage = () => {
    this.setState({ page: { selected: true } });
  };
  handleNav = (num) => {
    const text = [...this.state.text];
    const index = num;
    const thing = text[index].display;

    this.setState({ show: { display: thing } });
  };

  handleCheck = (id) => {
    const exercise_mon = this.state.exercise_mon;
    const exercise_tue = this.state.exercise_tue;
    const exercise_wed = this.state.exercise_wed;
    const exercise_thur = this.state.exercise_thur;
    const exercise_fri = this.state.exercise_fri;
    const exercise_sat = this.state.exercise_sat;
    const exercise_sun = this.state.exercise_sun;
    if (id.includes("Mon")) {
      let extra = [];

      if (id[0].includes(",Mon")) {
        extra = extra.concat(id[0].split(","));
        for (let i = 1; i < id.length; i++) {
          extra.push(id[i]);
        }
        id = extra;
      }

      //this.state.exercise_mon.content1 = id;
      //this.state.exercise_mon = exercise_mon;

      exercise_mon.content1 = id;
      this.state.exercise_mon = exercise_mon;
    }
    if (id.includes("Tue")) {
      let extra = [];

      if (id[0].includes(",Tue")) {
        extra = extra.concat(id[0].split(","));
        for (let i = 1; i < id.length; i++) {
          extra.push(id[i]);
        }
        id = extra;
      }

      exercise_tue.content2 = id;
      this.state.exercise_tue = exercise_tue;
    }
    if (id.includes("Wed")) {
      let extra = [];

      if (id[0].includes(",Wed")) {
        extra = extra.concat(id[0].split(","));
        for (let i = 1; i < id.length; i++) {
          extra.push(id[i]);
        }
        id = extra;
      }

      exercise_wed.content3 = id;
      this.state.exercise_wed = exercise_wed;
    }
    if (id.includes("Thur")) {
      let extra = [];

      if (id[0].includes(",Thur")) {
        extra = extra.concat(id[0].split(","));
        for (let i = 1; i < id.length; i++) {
          extra.push(id[i]);
        }
        id = extra;
      }

      exercise_thur.content4 = id;
      this.state.exercise_thur = exercise_thur;
    }
    if (id.includes("Fri")) {
      let extra = [];

      if (id[0].includes(",Fri")) {
        extra = extra.concat(id[0].split(","));
        for (let i = 1; i < id.length; i++) {
          extra.push(id[i]);
        }
        id = extra;
      }

      exercise_fri.content5 = id;
      this.state.exercise_fri = exercise_fri;
    }
    if (id.includes("Sat")) {
      let extra = [];

      if (id[0].includes(",Sat")) {
        extra = extra.concat(id[0].split(","));
        for (let i = 1; i < id.length; i++) {
          extra.push(id[i]);
        }
        id = extra;
      }

      exercise_sat.content6 = id;
      this.state.exercise_sat = exercise_sat;
    }
    if (id.includes("Sun")) {
      let extra = [];

      if (id[0].includes(",Sun")) {
        extra = extra.concat(id[0].split(","));
        for (let i = 1; i < id.length; i++) {
          extra.push(id[i]);
        }
        id = extra;
      }

      exercise_sun.content7 = id;
      this.state.exercise_sun = exercise_sun;
    }
  };

  render() {
    let page = this.state.page.selected;
    function AddExtraProps(
      Component,
      extraProps1,
      extraProps2,
      extraProps3,
      extraProps4,
      extraProps5,
      extraProps6,
      extraProps7,
      exerciseList
    ) {
      if (page == false) {
        return (
          <Component.type
            {...Component.props}
            {...extraProps1}
            {...extraProps2}
            {...extraProps3}
            {...extraProps4}
            {...extraProps5}
            {...extraProps6}
            {...extraProps7}
            {...exerciseList}
          />
        );
      } else {
        page = false;
        return (
          <Exercises
            list={exerciseList}
            onCheck={(id) => this.handleCheck(id)}
          />
        );
      }
    }

    return (
      <React.Fragment>
        <NavBar
          onNav={this.handleNav}
          content={this.state.text}
          key={this.state.text.id}
        />

        {AddExtraProps(
          this.formatDisplay(),
          this.state.exercise_mon,
          this.state.exercise_tue,
          this.state.exercise_wed,
          this.state.exercise_thur,
          this.state.exercise_fri,
          this.state.exercise_sat,
          this.state.exercise_sun,
          { list: exerciseList }
        )}
      </React.Fragment>
    );
  }

  formatDisplay() {
    const { display } = this.state.show;
    return display;
  }
}

const exerciseList = [
  { type: "Abs", label: "Full Reverse Crunch" },
  { type: "Abs", label: "Incline Hip Thrust" },
  { type: "Abs", label: "Incline Reverse Crunch" },
  { type: "Abs", label: "Lying Hip Thrust" },
  { type: "Abs", label: "Reverse Crunch" },
  { type: "Abs", label: "Reverse Medicine Ball Crunch" },
  { type: "Abs", label: "Alternating Heel Touch" },
  { type: "Abs", label: "Bent-Knee Medicine Ball Hip Rotation" },
  { type: "Abs", label: "Cable Chop" },
  { type: "Abs", label: "Cross Crunch" },
  { type: "Abs", label: "Cross Crunch w/ Medicine Ball" },
  { type: "Abs", label: "Decline Cross Sit-Up" },
  { type: "Abs", label: "Decline Sit-Up w/ Twist" },
  { type: "Abs", label: "Reverse Cable Chop" },
  { type: "Abs", label: "Seated Medicine Ball Twist" },
  { type: "Abs", label: "Trunk Rotator" },
  { type: "Abs", label: "Front Plank (from knees)" },
  { type: "Abs", label: "Front Plank (from toes)" },
  { type: "Abs", label: "Front Plank (tripod: 1 arm/2 legs or 2 legs/1 arm)" },
  { type: "Abs", label: "Side-Plank (from knees)" },
  { type: "Abs", label: "Side-Plank (hip lift)" },
  { type: "Abs", label: "Side-Plank (from toes)" },
  { type: "Abs", label: "Ab Cycle" },
  { type: "Abs", label: "Kneeling Ab Rollout" },
  { type: "Abs", label: "Medicine Ball V-Up" },
  { type: "Abs", label: "V-Up" },
  { type: "Abs", label: "Weighted V-Up" },
  { type: "Abs", label: "Bent Knee Sit-Up" },
  { type: "Abs", label: "Bent-Knee Crunch" },
  { type: "Abs", label: "Crunch" },
  { type: "Abs", label: "Decline Crunch" },
  { type: "Abs", label: "Decline Sit-Up" },
  { type: "Abs", label: "Heel Touch" },
  { type: "Abs", label: "Sit-Up" },
  { type: "Abs", label: "Weighted Crunch" },
  { type: "Back", label: "Assisted Pull-Up" },
  { type: "Back", label: "Close-Grip Lat Pulldown" },
  { type: "Back", label: "Inverted Pull-Up" },
  { type: "Back", label: "Lat Pulldown" },
  { type: "Back", label: "Pull-Up" },
  { type: "Back", label: "Reverse-Grip Lat Pullown" },
  { type: "Back", label: "Reverse-Grip Pull-Up" },
  { type: "Back", label: "V-Bar Pull-Up" },
  { type: "Back", label: "Wide-Grip Lat Pulldown" },
  { type: "Back", label: "Bent-Over Alternating Dumbbell Row" },
  { type: "Back", label: "Bent-Over Barbell Row" },
  { type: "Back", label: "Bent-Over Dumbbell Row" },
  { type: "Back", label: "Bent-Over Hammer Dumbbell Row" },
  { type: "Back", label: "Bent-Over Long Barbell Row" },
  { type: "Back", label: "Bent-Over Reverse-Grip Barbell Row" },
  { type: "Back", label: "Bent-Over Single-Arm Long Barbell Row" },
  { type: "Back", label: "Machine Row" },
  { type: "Back", label: "One Arm Dumbbell Row" },
  { type: "Back", label: "Reverse Incline Dumbbell Row" },
  { type: "Back", label: "Rope Cable Row" },
  { type: "Back", label: "Seated Cable Row" },
  { type: "Back", label: "Seated Row" },
  { type: "Back", label: "Single-Arm Cable Row" },
  { type: "Back", label: "Single-Arm Dumbbell Row" },
  { type: "Back", label: "Single-Arm Lat Pulldown" },
  { type: "Back", label: "Standing Cable Row" },
  { type: "Back", label: "Standing Single-Arm Cable Row" },
  { type: "Back", label: "Alternating Superman" },
  { type: "Back", label: "Back Raise" },
  { type: "Back", label: "Quadruped Alternating Superman" },
  { type: "Back", label: "Superman" },
  { type: "Back", label: "Superman Hold" },
  { type: "Biceps", label: "Alternating Dumbbell Curl" },
  { type: "Biceps", label: "Alternating Hammer Curl" },
  { type: "Biceps", label: "Barbell Curl" },
  { type: "Biceps", label: "Bicep Curl" },
  { type: "Biceps", label: "Bottom/Top/Full Curls" },
  { type: "Biceps", label: "Cable Curl" },
  { type: "Biceps", label: "Concentration Dumbbell Curl" },
  { type: "Biceps", label: "Cross Body Hammer Curl" },
  { type: "Biceps", label: "Dumbbell Curl" },
  { type: "Biceps", label: "EZ-Bar Curl" },
  { type: "Biceps", label: "Hammer Curl" },
  { type: "Biceps", label: "Incline Alternating Dumbbell Curl" },
  { type: "Biceps", label: "Incline Alternating Hammer Curl" },
  { type: "Biceps", label: "Incline Dumbbell Curl" },
  { type: "Biceps", label: "Incline Hammer Curl" },
  { type: "Biceps", label: "Kneeling Cable Curl" },
  { type: "Biceps", label: "Lying Cable Curl" },
  { type: "Biceps", label: "Lying Double Biceps Cable Curl" },
  { type: "Biceps", label: "Lying High Cable Curl" },
  { type: "Biceps", label: "Machine Curl" },
  { type: "Biceps", label: "Overhead Double Biceps Cable Curl" },
  { type: "Biceps", label: "Overhead Rope Cable Curl" },
  { type: "Biceps", label: "Preacher Barbell Curl" },
  { type: "Biceps", label: "Preacher Cable Curl" },
  { type: "Biceps", label: "Preacher Dumbbell Curl" },
  { type: "Biceps", label: "Preacher EZ-Bar Curl" },
  { type: "Biceps", label: "Preacher Hammer Dumbbell Curl" },
  { type: "Biceps", label: "Preacher Single-Arm Dumbbell Curl" },
  { type: "Biceps", label: "Reverse Curl" },
  { type: "Biceps", label: "Rope Cable Curl" },
  { type: "Biceps", label: "Seated Alternating Curl" },
  { type: "Biceps", label: "Seated Alternating Hammer Curl" },
  { type: "Biceps", label: "Seated Dumbbell Curl" },
  { type: "Biceps", label: "Seated Hammer Curl" },
  { type: "Biceps", label: "Single-Arm Barbell Curl" },
  { type: "Biceps", label: "Single-Arm Cable Curl" },
  { type: "Biceps", label: "Single-Arm Dumbbell Curl w/ Incline Bench" },
  { type: "Biceps", label: "Spider Curl" },
  { type: "Calves", label: "Barbell Calf Raise" },
  { type: "Calves", label: "Calf Press" },
  { type: "Calves", label: "Calf Raise - Seated" },
  { type: "Calves", label: "Calf Raise - Standing" },
  { type: "Calves", label: "Dumbbell Calf Raise" },
  { type: "Calves", label: "Single-Leg Calf Press" },
  { type: "Calves", label: "Single-Leg Dumbbell Calf Raise" },
  { type: "Calves", label: "Smith Machine Calf Raise" },
  { type: "Calves", label: "Seated Calf Raise" },
  { type: "Calves", label: "Seated Single-Leg Calf Raise" },
  { type: "Chest", label: "Alternating Dumbbell Bench Press" },
  { type: "Chest", label: "Barbell Bench Press" },
  { type: "Chest", label: "Chest Press" },
  { type: "Chest", label: "Decline Dumbbell Bench Press" },
  { type: "Chest", label: "Decline Smith Machine Bench Press" },
  { type: "Chest", label: "Dumbbell Bench Press" },
  { type: "Chest", label: "Dumbbell Push-Up" },
  { type: "Chest", label: "Elevated Push-Up" },
  { type: "Chest", label: "Flat Bench Press" },
  { type: "Chest", label: "Incline Alternating Dumbbell Bench Press" },
  { type: "Chest", label: "Incline Barbell Bench Press" },
  { type: "Chest", label: "Incline Bench Press" },
  { type: "Chest", label: "Incline Dumbbell Bench Press" },
  { type: "Chest", label: "Incline Hammer Dumbbell Bench Press" },
  { type: "Chest", label: "Incline Single-Arm Dumbbell Bench Press" },
  { type: "Chest", label: "Incline Smith Machine Bench Press" },
  { type: "Chest", label: "Incline Twisting Dumbbell Bench Press" },
  { type: "Chest", label: "Kneeling Push-Up" },
  { type: "Chest", label: "Machine Bench Press" },
  { type: "Chest", label: "Machine Vertical Bench Press" },
  { type: "Chest", label: "Medicine Ball Crossover Push-Up" },
  { type: "Chest", label: "Push-Up" },
  { type: "Chest", label: "Single-Arm Dumbbell Bench Press" },
  { type: "Chest", label: "Smith Machine Bench Press" },
  { type: "Chest", label: "Twisting Dumbbell Bench Press" },
  { type: "Chest", label: "Wide-Grip Push-Up" },
  { type: "Chest", label: "Cable Crossover" },
  { type: "Chest", label: "Cable Fly" },
  { type: "Chest", label: "Decline Dumbbell Fly" },
  { type: "Chest", label: "Dumbbell Fly" },
  { type: "Chest", label: "High Cable Crossover" },
  { type: "Chest", label: "Incline Cable Fly" },
  { type: "Chest", label: "Incline Dumbbell Fly" },
  { type: "Chest", label: "Incline Twisting Dumbbell Fly" },
  { type: "Chest", label: "Low Cable Crossover" },
  { type: "Chest", label: "Pec Deck" },
  { type: "Chest", label: "Pec Deck Fly" },
  { type: "Hamstrings", label: "Bent-Knee Single-Leg Hip Lift" },
  { type: "Hamstrings", label: "Elevated Hip Lift" },
  { type: "Hamstrings", label: "Elevated Single-Leg Hip Lift" },
  { type: "Hamstrings", label: "Hip Lift" },
  { type: "Hamstrings", label: "Single-Leg Hip Lift" },
  { type: "Hamstrings", label: "Deadlift" },
  { type: "Hamstrings", label: "Leg Curl" },
  { type: "Hamstrings", label: "Lying Alternating Leg Curl" },
  { type: "Hamstrings", label: "Lying Leg Curl" },
  { type: "Hamstrings", label: "Lying Single-Leg Curl" },
  { type: "Hamstrings", label: "Seated Leg Curl" },
  { type: "Quads", label: "Barbell Diagonal Lunge" },
  { type: "Quads", label: "Barbell Hack Squat" },
  { type: "Quads", label: "Barbell Lunge" },
  { type: "Quads", label: "Barbell Reverse Lunge" },
  { type: "Quads", label: "Barbell Side Lunge" },
  { type: "Quads", label: "Barbell Split Squat" },
  { type: "Quads", label: "Barbell Squat" },
  { type: "Quads", label: "Barbell Step-Up" },
  { type: "Quads", label: "Barbell Walking Lunge" },
  { type: "Quads", label: "Diagonal Lunge" },
  { type: "Quads", label: "Dumbbell Diagonal Lunge" },
  { type: "Quads", label: "Dumbbell Lunge" },
  { type: "Quads", label: "Dumbbell Reverse Lunge" },
  { type: "Quads", label: "Dumbbell Side Lunge" },
  { type: "Quads", label: "Dumbbell Split Squat" },
  { type: "Quads", label: "Dumbbell Squat" },
  { type: "Quads", label: "Dumbbell Step-Up" },
  { type: "Quads", label: "Dumbbell Walking Lunge" },
  { type: "Quads", label: "Forward Lunge" },
  { type: "Quads", label: "Lateral Barbell Squat" },
  { type: "Quads", label: "Lateral Barbell Step-Up" },
  { type: "Quads", label: "Lateral Squat" },
  { type: "Quads", label: "Lateral Step-Up" },
  { type: "Quads", label: "Leg Press" },
  { type: "Quads", label: "Lunge" },
  { type: "Quads", label: "Lying Machine Squat" },
  { type: "Quads", label: "Machine Hack Squat" },
  { type: "Quads", label: "Reverse Lunge" },
  { type: "Quads", label: "Single-Arm Barbell Side Squat" },
  { type: "Quads", label: "Single-Arm Dumbbell Side Squat" },
  { type: "Quads", label: "Single-Leg Barbell Squat" },
  { type: "Quads", label: "Single-Leg Box Squat" },
  { type: "Quads", label: "Single-Leg Dumbbell Box Squat" },
  { type: "Quads", label: "Single-Leg Dumbbell Squat" },
  { type: "Quads", label: "Single-Leg Squat" },
  { type: "Quads", label: "Smith Machine Squat" },
  { type: "Quads", label: "Split Squat" },
  { type: "Quads", label: "Step-Up" },
  { type: "Quads", label: "Walking Lunge" },
  { type: "Quads", label: "Alternating Leg Extension" },
  { type: "Quads", label: "Leg Extension" },
  { type: "Quads", label: "Single-Leg Extension" },
  { type: "Shoulders", label: "Arnold Dumbbell Press" },
  { type: "Shoulders", label: "Barbell Shoulder Press" },
  { type: "Shoulders", label: "Dumbbell Alternating Shoulder Press" },
  { type: "Shoulders", label: "Dumbbell Front Raise" },
  { type: "Shoulders", label: "Dumbbell Shoulder Press" },
  { type: "Shoulders", label: "Dumbbell Twisting Shoulder Press" },
  { type: "Shoulders", label: "Machine Shoulder Press" },
  { type: "Shoulders", label: "Seated Dumbbell Rear Delt Elbow Raise" },
  { type: "Shoulders", label: "Single-Arm Dumbbell Shoulder Press" },
  { type: "Shoulders", label: "Smith Machine Shoulder Press" },
  { type: "Shoulders", label: "Barbell Front Raise" },
  { type: "Shoulders", label: "Bent-Over Cable Rear Delt Raise" },
  { type: "Shoulders", label: "Bent-Over Dumbbell Rear Delt Raise" },
  { type: "Shoulders", label: "Cable Front Raise" },
  { type: "Shoulders", label: "Cable Lateral Raise" },
  { type: "Shoulders", label: "Dumbbell Lateral Raise" },
  { type: "Shoulders", label: "Front Plate Raise" },
  { type: "Shoulders", label: "Kneeling Single-Arm Cable Rear Delt Raise" },
  { type: "Shoulders", label: "Lying Dumbbell External Rotation" },
  { type: "Shoulders", label: "Lying Dumbbell Rear Delt Raise" },
  { type: "Shoulders", label: "Lying Single-Arm Dumbbell Rear Delt Raise" },
  { type: "Shoulders", label: "Pec Deck Real Delt Extensions" },
  { type: "Shoulders", label: "Reverse Incline Dumbbell Rear Delt Raise" },
  { type: "Shoulders", label: "Seated Dumbbell Rear Delt Raise" },
  { type: "Shoulders", label: "Single-Arm Cable Lateral Raise" },
  { type: "Shoulders", label: "Cable External Rotation" },
  { type: "Triceps", label: "  Close-Grip Bench Press" },
  { type: "Triceps", label: "  Forward Lean Dips" },
  { type: "Triceps", label: "  Assisted Dips" },
  { type: "Triceps", label: "  Bench Dips" },
  { type: "Triceps", label: "  Diamond Push-Up" },
  { type: "Triceps", label: "  Dips" },
  { type: "Triceps", label: "  Machine Dips" },
  { type: "Triceps", label: "  Decline Dumbbell Triceps Extension" },
  { type: "Triceps", label: "  Decline EZ-Bar Tricep Extension" },
  { type: "Triceps", label: "  Decline Single Dumbbell Triceps Extension" },
  { type: "Triceps", label: "  Decline Single-Arm Dumbbell Triceps Extension" },
  { type: "Triceps", label: "  Dumbbell Kickback" },
  { type: "Triceps", label: "  Incline EZ-Bar Tricep Extension" },
  { type: "Triceps", label: "  Kneeling Cable Triceps Extension" },
  { type: "Triceps", label: "  Leaning Overhead Tricep Extension" },
  { type: "Triceps", label: "  Low Cable Triceps Extension" },
  { type: "Triceps", label: "  Lying Cable Triceps Extension" },
  { type: "Triceps", label: "  Lying EZ-Bar Triceps Extension" },
  { type: "Triceps", label: "  Lying Overhead EZ-Bar Tricep Extension" },
  { type: "Triceps", label: "  Lying Reverse EZ-Bar Triceps Extension" },
  { type: "Triceps", label: "  Lying Single Dumbbell Triceps Extension" },
  { type: "Triceps", label: "  Lying Single-Arm Dumbbell Triceps Extension" },
  { type: "Triceps", label: "  Lying Tricep Extensions" },
  { type: "Triceps", label: "  Overhead Dumbbell Triceps Extension" },
  { type: "Triceps", label: "  Overhead EZ-Bar Triceps Extension" },
  { type: "Triceps", label: "  Overhead Rope Cable Tricep Extension" },
  { type: "Triceps", label: "  Overhead Single Dumbbell Tricep Extension" },
  { type: "Triceps", label: "  Overhead Single-Arm Cable Tricep Extension" },
  { type: "Triceps", label: "  Overhead Single-Arm Dumbbell Tricep Extension" },
  { type: "Triceps", label: "  Reverse Tricep Pushdown" },
  { type: "Triceps", label: "  Rope Triceps Pushdown" },
  { type: "Triceps", label: "  Single-Arm Towel Triceps Pushdown" },
  { type: "Triceps", label: "  Single-Arm Triceps Pushdown" },
  { type: "Triceps", label: "  Towel Triceps Pushdown" },
  { type: "Triceps", label: "  Tricep Extensions" },
  { type: "Triceps", label: "  Tricep Pushdown" },
  { type: "Triceps", label: "  V-Bar Tricep Pushdown" },

  //{ label: "Monty Python and the Holy Grail", year: 1975 },
];

export default App;
