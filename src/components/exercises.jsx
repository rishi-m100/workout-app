import Ex from "./card";
import React, { Component } from "react";
import Filter from "./filter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Exercises extends Component {
  state = {
    list: [
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
      {
        type: "Abs",
        label: "Front Plank (tripod: 1 arm/2 legs or 2 legs/1 arm)",
      },
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
      {
        type: "Triceps",
        label: "  Decline Single-Arm Dumbbell Triceps Extension",
      },
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
      {
        type: "Triceps",
        label: "  Lying Single-Arm Dumbbell Triceps Extension",
      },
      { type: "Triceps", label: "  Lying Tricep Extensions" },
      { type: "Triceps", label: "  Overhead Dumbbell Triceps Extension" },
      { type: "Triceps", label: "  Overhead EZ-Bar Triceps Extension" },
      { type: "Triceps", label: "  Overhead Rope Cable Tricep Extension" },
      { type: "Triceps", label: "  Overhead Single Dumbbell Tricep Extension" },
      {
        type: "Triceps",
        label: "  Overhead Single-Arm Cable Tricep Extension",
      },
      {
        type: "Triceps",
        label: "  Overhead Single-Arm Dumbbell Tricep Extension",
      },
      { type: "Triceps", label: "  Reverse Tricep Pushdown" },
      { type: "Triceps", label: "  Rope Triceps Pushdown" },
      { type: "Triceps", label: "  Single-Arm Towel Triceps Pushdown" },
      { type: "Triceps", label: "  Single-Arm Triceps Pushdown" },
      { type: "Triceps", label: "  Towel Triceps Pushdown" },
      { type: "Triceps", label: "  Tricep Extensions" },
      { type: "Triceps", label: "  Tricep Pushdown" },
      { type: "Triceps", label: "  V-Bar Tricep Pushdown" },

      //{ label: "Monty Python and the Holy Grail", year: 1975 },
    ],
  };

  handleKey = (id, exList) => {
    const list = exList.filter((c) =>
      c.label.toLowerCase().includes(id.toLowerCase())
    );
    this.setState({ list });
  };

  handleFilter = (id, exList) => {
    var str = "";
    for (let i = 0; i < id.length; i++) {
      str += id[i].exercise;
    }

    const list = exList.filter((c) => str.includes(c.type));
    this.setState({ list });
  };

  //add reset button

  handleReset = (exList) => {
    this.setState({ list: exList });
  };

  handleCheck = (id) => {
    this.props.onCheck(id);
  };

  render() {
    let mon_arr = [];
    let tue_arr = [];
    let wed_arr = [];
    let thur_arr = [];
    let fri_arr = [];
    let sat_arr = [];
    let sun_arr = [];

    if (localStorage.getItem("mon") != null) {
      mon_arr.push(localStorage.getItem("mon"));
      mon_arr = mon_arr.filter((e) => e !== "Mon");
    }
    if (localStorage.getItem("tue") != null) {
      tue_arr.push(localStorage.getItem("tue"));
      tue_arr = tue_arr.filter((e) => e !== "Tue");
    }
    if (localStorage.getItem("wed") != null) {
      wed_arr.push(localStorage.getItem("wed"));
      wed_arr = wed_arr.filter((e) => e !== "Wed");
    }
    if (localStorage.getItem("thur") != null) {
      thur_arr.push(localStorage.getItem("thur"));
      thur_arr = thur_arr.filter((e) => e !== "Thur");
    }
    if (localStorage.getItem("fri") != null) {
      fri_arr.push(localStorage.getItem("fri"));
      fri_arr = fri_arr.filter((e) => e !== "Fri");
    }
    if (localStorage.getItem("sat") != null) {
      sat_arr.push(localStorage.getItem("sat"));
      sat_arr = sat_arr.filter((e) => e !== "Sat");
    }
    if (localStorage.getItem("sun") != null) {
      sun_arr.push(localStorage.getItem("sun"));
      sun_arr = sun_arr.filter((e) => e !== "Sun");
    }

    const cards = this.state.list.map((arr) => (
      <Col key={arr.label} sm={3}>
        <Ex
          content={arr}
          key={arr.label}
          id={arr.type}
          name={arr.label}
          onCheck={(id) => {
            if (id == "m") {
              mon_arr.push(arr.label);

              mon_arr.push("Mon");
              localStorage.setItem("mon", mon_arr);
              this.handleCheck(mon_arr);
            } else if (id == "t") {
              tue_arr.push(arr.label);
              tue_arr.push("Tue");
              localStorage.setItem("tue", tue_arr);

              this.handleCheck(tue_arr);
            } else if (id == "w") {
              wed_arr.push(arr.label);
              wed_arr.push("Wed");
              localStorage.setItem("wed", wed_arr);

              this.handleCheck(wed_arr);
            } else if (id == "th") {
              thur_arr.push(arr.label);
              thur_arr.push("Thur");
              localStorage.setItem("thur", thur_arr);

              this.handleCheck(thur_arr);
            } else if (id == "f") {
              fri_arr.push(arr.label);
              fri_arr.push("Fri");
              localStorage.setItem("fri", fri_arr);

              this.handleCheck(fri_arr);
            } else if (id == "sa") {
              sat_arr.push(arr.label);
              sat_arr.push("Sat");
              localStorage.setItem("sat", sat_arr);

              this.handleCheck(sat_arr);
            } else if (id == "su") {
              sun_arr.push(arr.label);
              sun_arr.push("Sun");
              localStorage.setItem("sun", sun_arr);

              this.handleCheck(sun_arr);
            }
          }}
        />
      </Col>
    ));
    this.shuffle(cards);

    return (
      <React.Fragment>
        <Filter
          component={"span"}
          onKey={this.handleKey}
          onReset={this.handleReset}
          pressed={""}
          onFilter={this.handleFilter}
        />

        <br />
        <center>
          <Container>
            <Row>{cards}</Row>
          </Container>
        </center>
      </React.Fragment>
    );
  }

  shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
}

export default Exercises;
