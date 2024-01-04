import React, { Component } from "react";
import WorkoutModal from "./components/workout-modal";
import Summary from "./components/summary";
import Schedule from "./components/schedule";
import Exercises from "./components/exercises";
import Log from "./components/log";
import Profile from "./components/profile";
import NavBar from "./components/navbar";

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU0RIxegiB2AZ8gZUVzWGKC0G1mbuLyqY",
  authDomain: "workout-app-498b1.firebaseapp.com",
  projectId: "workout-app-498b1",
  storageBucket: "workout-app-498b1.appspot.com",
  messagingSenderId: "595596484905",
  appId: "1:595596484905:web:366b45f9ae5a3fb08f9738",
  measurementId: "G-YNNNTPNHTY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

// export { firebaseConfig as firebase };

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
          desc={exerciseList.description}
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
  {
    type: "Abs",
    label: "Full Reverse Crunch",
    description:
      "Lie on your back, legs extended, and lift them towards the ceiling, curling your hips off the floor. Lower them back down without letting your feet touch the ground.",
  },
  {
    type: "Abs",
    label: "Incline Hip Thrust",
    description:
      "Using an incline bench, support your upper back and shoulders, then thrust your hips upward, engaging your core and glutes.",
  },
  {
    type: "Abs",
    label: "Incline Reverse Crunch",
    description:
      "Lie on an incline bench and perform a reverse crunch by lifting your hips towards your chest, targeting the lower abdominal muscles.",
  },
  {
    type: "Abs",
    label: "Lying Hip Thrust",
    description:
      "Lie on your back, bend your knees, and lift your hips towards the ceiling. Squeeze your glutes at the top of the movement.",
  },
  {
    type: "Abs",
    label: "Reverse Crunch",
    description:
      "Lie on your back, bring your knees towards your chest, and lift your hips off the ground. Focus on contracting your lower abs.",
  },
  {
    type: "Abs",
    label: "Reverse Medicine Ball Crunch",
    description:
      "Hold a medicine ball overhead while lying on your back. Crunch up, bringing the ball towards your knees, engaging your abdominal muscles.",
  },
  {
    type: "Abs",
    label: "Alternating Heel Touch",
    description:
      "Lie on your back, knees bent. Reach your hands towards your heels, alternating sides to touch your heels while keeping your shoulders off the ground.",
  },
  {
    type: "Abs",
    label: "Bent-Knee Medicine Ball Hip Rotation",
    description:
      "Hold a medicine ball with bent knees. Rotate your hips side to side, engaging your obliques and core muscles.",
  },
  {
    type: "Abs",
    label: "Cable Chop",
    description:
      "Attach a cable at shoulder height, stand with feet shoulder-width apart, and pull the cable diagonally across your body, engaging your core and obliques.",
  },
  {
    type: "Abs",
    label: "Cross Crunch",
    description:
      "Lie on your back, knees bent, and cross one leg over the other. Crunch diagonally, bringing your elbow towards the opposite knee.",
  },
  {
    type: "Abs",
    label: "Cross Crunch w/ Medicine Ball",
    description:
      "Perform a cross crunch while holding a medicine ball, adding resistance to target your obliques and improve overall core strength.",
  },
  {
    type: "Abs",
    label: "Decline Cross Sit-Up",
    description:
      "Perform a sit-up on a decline bench, adding a cross-body twist to target your obliques and upper abs.",
  },
  {
    type: "Abs",
    label: "Decline Sit-Up w/ Twist",
    description:
      "On a decline bench, perform a sit-up with a twist at the top, engaging your obliques and upper abdominal muscles.",
  },
  {
    type: "Abs",
    label: "Reverse Cable Chop",
    description:
      "Using a cable machine, pull the cable from high to low or low to high, rotating your torso and engaging your core muscles.",
  },
  {
    type: "Abs",
    label: "Seated Medicine Ball Twist",
    description:
      "Sit on the floor, holding a medicine ball. Twist your torso side to side, engaging your obliques and improving rotational strength.",
  },
  {
    type: "Abs",
    label: "Trunk Rotator",
    description:
      "Sit on the floor, lean back slightly, and rotate your torso side to side, targeting your obliques and improving overall core flexibility.",
  },
  {
    type: "Abs",
    label: "Front Plank (from knees)",
    description:
      "Assume a plank position with your weight on your knees and forearms. Keep your body in a straight line, engaging your core muscles.",
  },
  {
    type: "Abs",
    label: "Front Plank (from toes)",
    description:
      "Assume a plank position on your toes and forearms, maintaining a straight line from head to heels. Engage your core and hold the position.",
  },
  {
    type: "Abs",
    label: "Front Plank (tripod: 1 arm/2 legs or 2 legs/1 arm)",
    description:
      "Assume a plank position, then lift one arm and the opposite leg, maintaining a straight line from head to toe. Switch sides periodically.",
  },
  {
    type: "Abs",
    label: "Side-Plank (from knees)",
    description:
      "Assume a side-plank position with your weight on your knees and elbow. Keep your body in a straight line, engaging your core and targeting the obliques.",
  },
  {
    type: "Abs",
    label: "Side-Plank (hip lift)",
    description:
      "In a side-plank position, lift your hips towards the ceiling, engaging your obliques and lateral core muscles.",
  },
  {
    type: "Abs",
    label: "Side-Plank (from toes)",
    description:
      "Perform a side-plank on your toes, maintaining a straight line from head to heels. Engage your core and focus on stabilizing your body.",
  },
  {
    type: "Abs",
    label: "Ab Cycle",
    description:
      "While lying on your back, bring one knee towards your chest while twisting your torso to touch the opposite elbow. Alternate sides in a cycling motion.",
  },
  {
    type: "Abs",
    label: "Kneeling Ab Rollout",
    description:
      "Kneel on the ground and roll a wheel or ball forward, extending your arms in front of you. Engage your core to control the movement.",
  },
  {
    type: "Abs",
    label: "Medicine Ball V-Up",
    description:
      "Hold a medicine ball overhead and perform a V-up, lifting your legs and torso towards each other. Engage your core for a full contraction.",
  },
  {
    type: "Abs",
    label: "V-Up",
    description:
      "Lie on your back, and simultaneously lift your legs and torso towards each other, forming a V shape with your body. Engage your core throughout the movement.",
  },
  {
    type: "Abs",
    label: "Weighted V-Up",
    description:
      "Perform a V-Up exercise while holding a weight, adding resistance to intensify the workout and target the abdominal muscles.",
  },
  {
    type: "Abs",
    label: "Bent Knee Sit-Up",
    description:
      "Lie on your back with knees bent and perform a sit-up, engaging your core to lift your torso towards your knees. Focus on controlled movements.",
  },
  {
    type: "Abs",
    label: "Bent-Knee Crunch",
    description:
      "Lie on your back with knees bent, and perform a crunch by lifting your shoulders off the ground. Focus on contracting your abdominal muscles.",
  },
  {
    type: "Abs",
    label: "Crunch",
    description:
      "Lie on your back, knees bent, and perform a basic crunch by lifting your shoulders off the ground. Engage your core muscles throughout the movement.",
  },
  {
    type: "Abs",
    label: "Decline Crunch",
    description:
      "Perform a crunch on a decline bench, adding resistance to target your upper abdominal muscles. Keep your movements controlled and deliberate.",
  },
  {
    type: "Abs",
    label: "Decline Sit-Up",
    description:
      "Perform a sit-up on a decline bench, engaging both your upper and lower abdominal muscles. Focus on controlled movements for optimal results.",
  },
  {
    type: "Abs",
    label: "Heel Touch",
    description:
      "Lie on your back with knees bent, and touch your heels alternately with your fingertips while lifting your shoulders off the ground. Engage your obliques.",
  },
  {
    type: "Abs",
    label: "Sit-Up",
    description:
      "Perform a classic sit-up by lying on your back and lifting your torso towards your knees. Engage your core muscles and avoid straining your neck.",
  },
  {
    type: "Abs",
    label: "Weighted Crunch",
    description:
      "Hold a weight while performing a standard crunch. The added resistance challenges your abdominal muscles, promoting strength and definition.",
  },
  {
    type: "Back",
    label: "Assisted Pull-Up",
    description:
      "Use an assisted pull-up machine or a band for assistance while performing pull-ups. Focus on proper form and engage your back muscles throughout the movement.",
  },
  {
    type: "Back",
    label: "Close-Grip Lat Pulldown",
    description:
      "Using a cable machine, perform lat pulldowns with a close-grip attachment. Targeting the middle of your back, this exercise helps develop the lat muscles.",
  },
  {
    type: "Back",
    label: "Inverted Pull-Up",
    description:
      "Hang from a bar with your palms facing you and pull your chest towards the bar. This variation targets your back muscles, especially the upper traps and lats.",
  },
  {
    type: "Back",
    label: "Lat Pulldown",
    description:
      "Using a cable machine, perform lat pulldowns with a wide-grip attachment. Engage your lats and upper back muscles throughout the movement.",
  },
  {
    type: "Back",
    label: "Pull-Up",
    description:
      "Hang from a bar with palms facing away, then pull your body upward until your chin is over the bar. Engage your back muscles throughout the movement.",
  },
  {
    type: "Back",
    label: "Reverse-Grip Lat Pulldown",
    description:
      "Using a cable machine, perform lat pulldowns with a reverse (underhand) grip. Targeting the lower lats, this exercise helps build width in the back.",
  },
  {
    type: "Back",
    label: "Reverse-Grip Pull-Up",
    description:
      "Similar to a standard pull-up but with an underhand grip. This variation emphasizes the biceps and lower lats during the upward movement.",
  },
  {
    type: "Back",
    label: "V-Bar Pull-Up",
    description:
      "Perform pull-ups using a V-shaped bar attachment. This grip variation targets the middle of the back, providing a different stimulus for muscle development.",
  },
  {
    type: "Back",
    label: "Wide-Grip Lat Pulldown",
    description:
      "Using a cable machine, perform lat pulldowns with a wide grip. Targeting the upper lats, this exercise helps create width in the back.",
  },
  {
    type: "Back",
    label: "Bent-Over Alternating Dumbbell Row",
    description:
      "Bend at the hips, keep your back straight, and row dumbbells alternately towards your hip. This exercise targets the lats and helps improve unilateral strength.",
  },
  {
    type: "Back",
    label: "Bent-Over Barbell Row",
    description:
      "Bend at the hips, keep your back straight, and row a barbell towards your hip. Engage your back muscles and maintain proper form throughout the movement.",
  },
  {
    type: "Back",
    label: "Bent-Over Dumbbell Row",
    description:
      "Bend at the hips, keep your back straight, and row dumbbells towards your hip. Focus on engaging your lats and maintaining a controlled movement.",
  },
  {
    type: "Back",
    label: "Bent-Over Hammer Dumbbell Row",
    description:
      "Perform a bent-over row using a hammer grip (palms facing each other). This variation targets the lats and the middle of the back.",
  },
  {
    type: "Back",
    label: "Bent-Over Long Barbell Row",
    description:
      "Perform a bent-over row with a longer barbell. This exercise targets the lats and the middle of the back, providing a unique range of motion.",
  },
  {
    type: "Back",
    label: "Bent-Over Reverse-Grip Barbell Row",
    description:
      "Perform a bent-over row with a reverse (underhand) grip on the barbell. This targets the lower lats and biceps during the pulling motion.",
  },
  {
    type: "Back",
    label: "Bent-Over Single-Arm Long Barbell Row",
    description:
      "Perform a single-arm bent-over row with a long barbell. This exercise helps improve unilateral strength and targets the lats and upper back.",
  },
  {
    type: "Back",
    label: "Machine Row",
    description:
      "Using a rowing machine, sit and pull the handle towards your torso, engaging your back muscles. Adjust the machine settings to target specific areas of the back.",
  },
  {
    type: "Back",
    label: "One Arm Dumbbell Row",
    description:
      "Place one knee and hand on a bench, and row a dumbbell with the opposite arm. This exercise targets the lats and improves unilateral strength.",
  },
  {
    type: "Back",
    label: "Reverse Incline Dumbbell Row",
    description:
      "Lie face down on an incline bench and row dumbbells towards your hips. This variation targets the upper back and helps improve back thickness.",
  },
  {
    type: "Back",
    label: "Rope Cable Row",
    description:
      "Using a cable machine with a rope attachment, sit and pull the rope towards your torso, squeezing your shoulder blades together. Engage your back muscles throughout the movement.",
  },
  {
    type: "Back",
    label: "Seated Cable Row",
    description:
      "Sit at a cable row machine, use a v-bar attachment, and pull the handle towards your torso. This exercise targets the middle and upper back, promoting overall back development.",
  },
  {
    type: "Back",
    label: "Seated Row",
    description:
      "Sit at a cable row machine with a wide grip handle, and pull it towards your torso, focusing on squeezing your shoulder blades together. Engage your back muscles throughout the movement.",
  },
  {
    type: "Back",
    label: "Single-Arm Cable Row",
    description:
      "Using a cable machine, perform a rowing motion with one arm at a time. This exercise helps improve unilateral strength and targets the lats and upper back.",
  },
  {
    type: "Back",
    label: "Single-Arm Dumbbell Row",
    description:
      "Bend at the hips, keep your back straight, and row a dumbbell towards your hip with one arm at a time. Focus on engaging your lat muscles and maintaining a controlled movement.",
  },
  {
    type: "Back",
    label: "Single-Arm Lat Pulldown",
    description:
      "Using a cable machine, perform a lat pulldown with one arm at a time. This exercise helps improve unilateral strength and targets the lats and upper back.",
  },
  {
    type: "Back",
    label: "Standing Cable Row",
    description:
      "Using a cable machine, stand and pull the handle towards your torso, squeezing your shoulder blades together. Engage your back muscles throughout the movement.",
  },
  {
    type: "Back",
    label: "Standing Single-Arm Cable Row",
    description:
      "Using a cable machine, perform a rowing motion with one arm while standing. This exercise targets the lats and upper back, promoting unilateral strength development.",
  },
  {
    type: "Back",
    label: "Alternating Superman",
    description:
      "Lie face down on the ground and lift your opposite arm and leg off the ground simultaneously. Alternate sides in a controlled manner, engaging your lower back and glutes.",
  },
  {
    type: "Back",
    label: "Back Raise",
    description:
      "Position yourself face down on a back raise bench and lower your torso towards the ground, then raise it back up, targeting your lower back muscles. Use controlled movements.",
  },
  {
    type: "Back",
    label: "Quadruped Alternating Superman",
    description:
      "Get on all fours, lift one arm and the opposite leg off the ground simultaneously, and then alternate sides. This exercise engages your lower back and glutes.",
  },
  {
    type: "Back",
    label: "Superman",
    description:
      "Lie face down on the ground and lift both arms and legs off the ground simultaneously, engaging your lower back muscles and glutes. Hold the position briefly before lowering.",
  },
  {
    type: "Back",
    label: "Superman Hold",
    description:
      "Similar to the Superman exercise, but hold the lifted position for an extended period. This isometric hold engages and strengthens your lower back and glutes.",
  },
  {
    type: "Biceps",
    label: "Alternating Dumbbell Curl",
    description:
      "Stand with dumbbells in hand and alternate curling each arm towards your shoulder. Focus on controlled movements and engage your biceps throughout the exercise.",
  },
  {
    type: "Biceps",
    label: "Alternating Hammer Curl",
    description:
      "Perform alternating bicep curls with a hammer grip (palms facing each other). This variation targets both the biceps and the brachialis muscle for overall arm development.",
  },
  {
    type: "Biceps",
    label: "Barbell Curl",
    description:
      "Hold a barbell with an underhand grip, and curl it towards your shoulders. Keep your elbows close to your body and focus on contracting your biceps at the top of the movement.",
  },
  {
    type: "Biceps",
    label: "Bicep Curl",
    description:
      "Perform a classic bicep curl by curling a dumbbell towards your shoulder. Keep your movements controlled and engage your biceps throughout the exercise.",
  },
  {
    type: "Biceps",
    label: "Bottom/Top/Full Curls",
    description:
      "Perform curls in different ranges of motion: start from the bottom, top, and full range of the curl. This variation helps target various parts of the bicep muscle.",
  },
  {
    type: "Biceps",
    label: "Cable Curl",
    description:
      "Using a cable machine with a straight bar attachment, curl the bar towards your shoulders, keeping your elbows stationary. Focus on a controlled, smooth motion to engage the biceps.",
  },
  {
    type: "Biceps",
    label: "Concentration Dumbbell Curl",
    description:
      "Sit on a bench with a dumbbell in one hand, and perform curls concentrating on that arm. This exercise isolates the biceps and improves arm definition.",
  },
  {
    type: "Biceps",
    label: "Cross Body Hammer Curl",
    description:
      "Hold dumbbells with a hammer grip and curl them across your body towards the opposite shoulder. This exercise targets the biceps and brachialis muscle.",
  },
  {
    type: "Biceps",
    label: "Dumbbell Curl",
    description:
      "Stand with dumbbells in hand and curl them towards your shoulders. Keep your movements controlled, and focus on contracting your biceps at the top of the movement.",
  },
  {
    type: "Biceps",
    label: "EZ-Bar Curl",
    description:
      "Using an EZ-bar, curl the bar towards your shoulders. The EZ-bar grip can be more wrist-friendly, and this exercise targets the biceps with a slightly different hand position.",
  },
  {
    type: "Biceps",
    label: "Hammer Curl",
    description:
      "Hold dumbbells with a hammer grip (palms facing each other) and curl them towards your shoulders. This exercise targets the biceps and the brachialis muscle.",
  },
  {
    type: "Biceps",
    label: "Incline Alternating Dumbbell Curl",
    description:
      "Sit on an incline bench and perform alternating dumbbell curls. The incline position emphasizes the biceps and provides a different angle for muscle engagement.",
  },
  {
    type: "Biceps",
    label: "Incline Alternating Hammer Curl",
    description:
      "Sit on an incline bench and perform alternating hammer curls. This variation targets the biceps and brachialis muscle with a different hand position.",
  },
  {
    type: "Biceps",
    label: "Incline Dumbbell Curl",
    description:
      "Sit on an incline bench and curl dumbbells towards your shoulders. The incline position isolates the biceps and provides a unique angle for muscle engagement.",
  },
  {
    type: "Biceps",
    label: "Incline Hammer Curl",
    description:
      "Sit on an incline bench and perform hammer curls. The incline position targets the biceps and brachialis muscle with a hammer grip.",
  },
  {
    type: "Biceps",
    label: "Kneeling Cable Curl",
    description:
      "Kneel in front of a cable machine with a straight bar attachment, and curl the bar towards your shoulders. This exercise provides constant tension on the biceps.",
  },
  {
    type: "Biceps",
    label: "Lying Cable Curl",
    description:
      "Lie on a bench and use a cable machine with a straight bar attachment to perform curls. This exercise isolates the biceps and eliminates the use of body momentum.",
  },
  {
    type: "Biceps",
    label: "Lying Double Biceps Cable Curl",
    description:
      "Lie on a bench and use a cable machine with two independent cables to perform double biceps curls. This exercise targets both biceps simultaneously.",
  },
  {
    type: "Biceps",
    label: "Lying High Cable Curl",
    description:
      "Lie on a bench and use a cable machine with a straight bar attachment to perform curls at a higher position. This variation targets the biceps from a different angle.",
  },
  {
    type: "Biceps",
    label: "Machine Curl",
    description:
      "Sit at a bicep curl machine, adjust the settings, and curl the machine's handles towards your shoulders. This exercise provides a controlled movement to target the biceps.",
  },
  {
    type: "Biceps",
    label: "Overhead Double Biceps Cable Curl",
    description:
      "Stand between two cable machines, use a double cable attachment, and curl both handles towards your shoulders. This exercise targets the biceps from an overhead position.",
  },
  {
    type: "Biceps",
    label: "Overhead Rope Cable Curl",
    description:
      "Using a cable machine with a rope attachment, stand and curl the rope handles towards your shoulders. This variation targets the biceps from an overhead position.",
  },
  {
    type: "Biceps",
    label: "Preacher Barbell Curl",
    description:
      "Sit or kneel at a preacher bench, grip a barbell, and curl it towards your shoulders. The preacher bench isolates the biceps and helps maintain proper form.",
  },
  {
    type: "Biceps",
    label: "Preacher Cable Curl",
    description:
      "Perform cable curls on a preacher bench using a cable machine. This exercise isolates the biceps and provides constant tension throughout the movement.",
  },
  {
    type: "Biceps",
    label: "Preacher Dumbbell Curl",
    description:
      "Sit or kneel at a preacher bench, hold dumbbells in each hand, and curl them towards your shoulders. The preacher bench helps isolate the biceps for targeted development.",
  },
  {
    type: "Biceps",
    label: "Preacher EZ-Bar Curl",
    description:
      "Sit or kneel at a preacher bench, grip an EZ-bar, and curl it towards your shoulders. The preacher bench supports your arms and isolates the biceps during the curl.",
  },
  {
    type: "Biceps",
    label: "Preacher Hammer Dumbbell Curl",
    description:
      "Sit or kneel at a preacher bench, hold dumbbells in a hammer grip, and curl them towards your shoulders. This variation targets the biceps and brachialis muscle.",
  },
  {
    type: "Biceps",
    label: "Preacher Single-Arm Dumbbell Curl",
    description:
      "Sit or kneel at a preacher bench, hold a dumbbell in one hand, and curl it towards your shoulder. This exercise isolates each arm for focused bicep development.",
  },
  {
    type: "Biceps",
    label: "Reverse Curl",
    description:
      "Stand with a barbell or dumbbells, palms facing down, and curl the weight towards your shoulders. This exercise targets the brachialis and brachioradialis muscles on the reverse side of the forearm.",
  },
  {
    type: "Biceps",
    label: "Rope Cable Curl",
    description:
      "Using a cable machine with a rope attachment, stand and curl the rope handles towards your shoulders. This exercise provides a different grip and engages the biceps.",
  },
  {
    type: "Biceps",
    label: "Seated Alternating Curl",
    description:
      "Sit on a bench and perform alternating dumbbell curls. This exercise helps isolate each bicep and promotes balanced development between the left and right arms.",
  },
  {
    type: "Biceps",
    label: "Seated Alternating Hammer Curl",
    description:
      "Sit on a bench and perform alternating hammer curls. This variation targets the biceps and brachialis muscle while providing a neutral grip for wrist comfort.",
  },
  {
    type: "Biceps",
    label: "Seated Dumbbell Curl",
    description:
      "Sit on a bench and curl dumbbells towards your shoulders. The seated position helps isolate the biceps and prevents the use of body momentum during the exercise.",
  },
  {
    type: "Biceps",
    label: "Seated Hammer Curl",
    description:
      "Sit on a bench and perform hammer curls. This exercise targets the biceps and brachialis muscle while providing a neutral grip for wrist comfort.",
  },
  {
    type: "Biceps",
    label: "Single-Arm Barbell Curl",
    description:
      "Hold a barbell in one hand and curl it towards your shoulder. This unilateral exercise helps address muscle imbalances and targets the biceps on each side independently.",
  },
  {
    type: "Biceps",
    label: "Single-Arm Cable Curl",
    description:
      "Using a cable machine, perform a bicep curl with one arm at a time. This exercise helps improve unilateral strength and targets the biceps with constant tension.",
  },
  {
    type: "Biceps",
    label: "Single-Arm Dumbbell Curl w/ Incline Bench",
    description:
      "Sit on an incline bench and perform a single-arm dumbbell curl. This exercise isolates the biceps and provides a unique angle for muscle engagement.",
  },
  {
    type: "Biceps",
    label: "Spider Curl",
    description:
      "Lie face down on a spider curl bench and curl a barbell towards your shoulders. This exercise isolates the biceps and eliminates the use of body momentum.",
  },
  {
    type: "Calves",
    label: "Barbell Calf Raise",
    description:
      "Stand with a barbell across your shoulders and raise your heels off the ground, contracting your calf muscles. This exercise targets the gastrocnemius and helps build calf size.",
  },
  {
    type: "Calves",
    label: "Calf Press",
    description:
      "Using a calf press machine or a leg press machine, position your toes on the platform and press it downwards, contracting your calf muscles. This exercise targets the gastrocnemius.",
  },
  {
    type: "Calves",
    label: "Calf Raise - Seated",
    description:
      "Sit on a calf raise machine or bench, place the balls of your feet on the edge, and raise your heels, contracting your calf muscles. This exercise targets the soleus muscle.",
  },
  {
    type: "Calves",
    label: "Calf Raise - Standing",
    description:
      "Stand on a raised surface, like a step or calf block, and raise your heels off the edge, contracting your calf muscles. This exercise targets both the gastrocnemius and soleus muscles.",
  },
  {
    type: "Calves",
    label: "Dumbbell Calf Raise",
    description:
      "Hold dumbbells in your hands or rest them on your shoulders, then raise your heels off the ground, contracting your calf muscles. This exercise targets both the gastrocnemius and soleus muscles.",
  },
  {
    type: "Calves",
    label: "Single-Leg Calf Press",
    description:
      "Using a calf press machine or leg press machine, press the platform with one foot, raising your heel and contracting the calf muscles. This exercise focuses on unilateral calf development.",
  },
  {
    type: "Calves",
    label: "Single-Leg Dumbbell Calf Raise",
    description:
      "Hold a dumbbell in one hand or rest it on the same-side shoulder, then raise your heel off the ground with one leg. This unilateral exercise targets the calf muscles individually.",
  },
  {
    type: "Calves",
    label: "Smith Machine Calf Raise",
    description:
      "Place your shoulders under the Smith machine bar, position your toes on a calf block or platform, and raise your heels off the ground, contracting your calf muscles. This exercise targets the gastrocnemius.",
  },
  {
    type: "Calves",
    label: "Seated Calf Raise",
    description:
      "Sit at a calf raise machine or use a bench, place the balls of your feet on the edge, and raise your heels, contracting your calf muscles. This exercise targets the soleus muscle.",
  },
  {
    type: "Calves",
    label: "Seated Single-Leg Calf Raise",
    description:
      "Sit at a calf raise machine or bench, lift one leg, place the ball of your foot on the edge, and raise your heel, contracting your calf muscles. This unilateral exercise targets the soleus.",
  },
  {
    type: "Chest",
    label: "Alternating Dumbbell Bench Press",
    description:
      "While lying on a bench, hold dumbbells in each hand, and alternate pressing one dumbbell up at a time. This exercise engages the chest muscles and enhances stability.",
  },
  {
    type: "Chest",
    label: "Barbell Bench Press",
    description:
      "Lie on a flat bench, grip a barbell with both hands, and lower it to your chest before pressing it back up. This classic exercise targets the overall chest and triceps.",
  },
  {
    type: "Chest",
    label: "Chest Press",
    description:
      "Using a chest press machine, sit or lie down and push the handles or bar away from your chest, engaging your chest muscles. This exercise mimics the bench press motion.",
  },
  {
    type: "Chest",
    label: "Decline Dumbbell Bench Press",
    description:
      "Lie on a decline bench, hold dumbbells in each hand, and press them upward. This exercise targets the lower chest and enhances the range of motion.",
  },
  {
    type: "Chest",
    label: "Decline Smith Machine Bench Press",
    description:
      "Lie on a decline bench beneath a Smith machine, grip the barbell, and press it upward. This variation targets the lower chest and provides stability with the Smith machine.",
  },
  {
    type: "Chest",
    label: "Dumbbell Bench Press",
    description:
      "While lying on a bench, hold a dumbbell in each hand, and press them upward. This exercise engages the chest muscles and allows for individual arm movement.",
  },
  {
    type: "Chest",
    label: "Dumbbell Push-Up",
    description:
      "Perform a push-up while holding dumbbells in each hand. This variation adds intensity to the standard push-up, engaging the chest, shoulders, and triceps.",
  },
  {
    type: "Chest",
    label: "Elevated Push-Up",
    description:
      "Perform a push-up with your hands elevated on platforms or handles. This exercise targets the upper chest and places less stress on the shoulders compared to a standard push-up.",
  },
  {
    type: "Chest",
    label: "Flat Bench Press",
    description:
      "Lie on a flat bench, grip a barbell with both hands, and lower it to your chest before pressing it back up. This classic exercise targets the overall chest and triceps.",
  },
  {
    type: "Chest",
    label: "Incline Alternating Dumbbell Bench Press",
    description:
      "Lie on an incline bench, hold dumbbells in each hand, and alternate pressing one dumbbell up at a time. This exercise targets the upper chest and enhances stability.",
  },
  {
    type: "Chest",
    label: "Incline Barbell Bench Press",
    description:
      "Lie on an incline bench, grip a barbell with both hands, and lower it to your upper chest before pressing it back up. This targets the upper chest and shoulders.",
  },
  {
    type: "Chest",
    label: "Incline Bench Press",
    description:
      "Lie on an incline bench, grip a barbell with both hands, and lower it to your upper chest before pressing it back up. This exercise targets the upper chest and shoulders.",
  },
  {
    type: "Chest",
    label: "Incline Dumbbell Bench Press",
    description:
      "Lie on an incline bench, hold dumbbells in each hand, and press them upward. This exercise targets the upper chest and shoulders.",
  },
  {
    type: "Chest",
    label: "Incline Hammer Dumbbell Bench Press",
    description:
      "Lie on an incline bench, hold dumbbells in each hand with a hammer grip, and press them upward. This variation targets the upper chest and brachialis muscle.",
  },
  {
    type: "Chest",
    label: "Incline Single-Arm Dumbbell Bench Press",
    description:
      "Lie on an incline bench, hold a dumbbell in one hand, and press it upward. This unilateral exercise targets the upper chest and improves stability.",
  },
  {
    type: "Chest",
    label: "Incline Smith Machine Bench Press",
    description:
      "Lie on an incline bench beneath a Smith machine, grip the barbell, and press it upward. This variation targets the upper chest with added stability from the Smith machine.",
  },
  {
    type: "Chest",
    label: "Incline Twisting Dumbbell Bench Press",
    description:
      "Lie on an incline bench, hold dumbbells in each hand, and alternate pressing them up while twisting the wrists. This exercise targets the upper chest and engages the stabilizing muscles.",
  },
  {
    type: "Chest",
    label: "Kneeling Push-Up",
    description:
      "Perform a push-up from a kneeling position. This variation is suitable for individuals who may find a standard push-up challenging and still targets the chest, shoulders, and triceps.",
  },
  {
    type: "Chest",
    label: "Machine Bench Press",
    description:
      "Using a chest press machine, sit or lie down and push the handles or bar away from your chest. This exercise mimics the bench press motion and targets the chest muscles.",
  },
  {
    type: "Chest",
    label: "Machine Vertical Bench Press",
    description:
      "Using a vertical chest press machine, sit and push the handles forward, engaging the chest muscles. This variation provides a different angle for chest development.",
  },
  {
    type: "Chest",
    label: "Medicine Ball Crossover Push-Up",
    description:
      "Perform a push-up with one hand on a medicine ball and the other on the ground, then alternate sides. This exercise adds instability, engaging the chest, shoulders, and core.",
  },
  {
    type: "Chest",
    label: "Push-Up",
    description:
      "Assume a plank position and lower your body towards the ground by bending your elbows, then push back up. This classic bodyweight exercise targets the chest, shoulders, and triceps.",
  },
  {
    type: "Chest",
    label: "Single-Arm Dumbbell Bench Press",
    description:
      "Lie on a bench, hold a dumbbell in one hand, and press it upward. This unilateral exercise targets the chest and engages stabilizing muscles for improved balance and strength.",
  },
  {
    type: "Chest",
    label: "Smith Machine Bench Press",
    description:
      "Lie on a flat bench beneath a Smith machine, grip the barbell, and press it upward. This variation of the bench press provides stability from the Smith machine and targets the overall chest.",
  },
  {
    type: "Chest",
    label: "Twisting Dumbbell Bench Press",
    description:
      "Lie on a bench, hold dumbbells in each hand, and alternate pressing them up while twisting the wrists. This exercise engages the chest, shoulders, and adds a rotational element for muscle activation.",
  },
  {
    type: "Chest",
    label: "Wide-Grip Push-Up",
    description:
      "Perform a push-up with hands placed wider than shoulder-width. This variation targets the chest muscles, particularly the outer chest, and shoulders.",
  },
  {
    type: "Chest",
    label: "Cable Crossover",
    description:
      "Stand in the center of two cable machines, grasp the handles, and bring them together in front of you. This exercise targets the chest, emphasizing the inner chest muscles.",
  },
  {
    type: "Chest",
    label: "Cable Fly",
    description:
      "Using cable machines, stand in the center, and perform a fly motion by bringing the handles together in front of you. This exercise targets the chest muscles, providing constant tension.",
  },
  {
    type: "Chest",
    label: "Decline Dumbbell Fly",
    description:
      "Lie on a decline bench, hold dumbbells in each hand, and open your arms wide, then bring them back together. This exercise targets the lower chest and outer chest muscles.",
  },
  {
    type: "Chest",
    label: "Dumbbell Fly",
    description:
      "Lie on a flat bench, hold dumbbells in each hand, and open your arms wide before bringing them back together. This exercise isolates the chest muscles and improves chest flexibility.",
  },
  {
    type: "Chest",
    label: "High Cable Crossover",
    description:
      "Perform a cable crossover with the handles set high, bringing them down and together in front of you. This exercise targets the upper chest and provides a full range of motion.",
  },
  {
    type: "Chest",
    label: "Incline Cable Fly",
    description:
      "Lie on an incline bench between two cable machines, grasp the handles, and bring them together in front of you. This exercise targets the upper chest and emphasizes the incline angle.",
  },
  {
    type: "Chest",
    label: "Incline Dumbbell Fly",
    description:
      "Lie on an incline bench, hold dumbbells in each hand, and open your arms wide, then bring them back together. This exercise targets the upper chest and shoulders.",
  },
  {
    type: "Chest",
    label: "Incline Twisting Dumbbell Fly",
    description:
      "Lie on an incline bench, hold dumbbells in each hand, and alternate opening your arms wide while twisting the wrists. This exercise targets the upper chest and engages stabilizing muscles.",
  },
  {
    type: "Chest",
    label: "Low Cable Crossover",
    description:
      "Perform a cable crossover with the handles set low, bringing them up and together in front of you. This exercise targets the lower chest and provides constant tension.",
  },
  {
    type: "Chest",
    label: "Pec Deck",
    description:
      "Sit at a pec deck machine, grasp the handles, and bring them together in front of you. This machine isolates the chest muscles and provides a controlled range of motion.",
  },
  {
    type: "Chest",
    label: "Pec Deck Fly",
    description:
      "Sit at a pec deck machine, open your arms wide, and bring them back together in front of you. This machine isolates the chest muscles and emphasizes the fly motion.",
  },
  {
    type: "Hamstrings",
    label: "Bent-Knee Single-Leg Hip Lift",
    description:
      "Lie on your back, bend one knee, and lift the opposite leg and hips towards the ceiling. This exercise targets the hamstrings and glutes, enhancing hip strength and stability.",
  },
  {
    type: "Hamstrings",
    label: "Elevated Hip Lift",
    description:
      "Lie on your back with your feet elevated on a surface, and lift your hips towards the ceiling. This exercise engages the hamstrings and glutes, promoting hip extension and strength.",
  },
  {
    type: "Hamstrings",
    label: "Elevated Single-Leg Hip Lift",
    description:
      "Lie on your back with one foot elevated, and lift your hips towards the ceiling using the other leg. This unilateral exercise targets the hamstrings and glutes for improved hip strength and stability.",
  },
  {
    type: "Hamstrings",
    label: "Hip Lift",
    description:
      "Lie on your back and lift your hips towards the ceiling. This exercise targets the hamstrings and glutes, promoting hip extension and overall lower body strength.",
  },
  {
    type: "Hamstrings",
    label: "Single-Leg Hip Lift",
    description:
      "Lie on your back, lift one leg towards the ceiling, and raise your hips using the other leg. This unilateral exercise targets the hamstrings and glutes for balanced lower body development.",
  },
  {
    type: "Hamstrings",
    label: "Deadlift",
    description:
      "Stand with a barbell or dumbbells in front of you, hinge at the hips, and lower the weight towards the ground before returning to an upright position. This compound exercise targets the hamstrings, glutes, and lower back.",
  },
  {
    type: "Hamstrings",
    label: "Leg Curl",
    description:
      "Using a leg curl machine, lie down and curl your legs towards your glutes. This exercise isolates the hamstrings, providing a controlled movement for targeted muscle engagement.",
  },
  {
    type: "Hamstrings",
    label: "Lying Alternating Leg Curl",
    description:
      "Lie face down on a leg curl machine and alternate curling one leg at a time towards your glutes. This exercise targets the hamstrings, providing isolation and control.",
  },
  {
    type: "Hamstrings",
    label: "Lying Leg Curl",
    description:
      "Lie face down on a leg curl machine and curl both legs towards your glutes. This exercise isolates the hamstrings, promoting strength and development in the back of the thighs.",
  },
  {
    type: "Hamstrings",
    label: "Lying Single-Leg Curl",
    description:
      "Lie face down on a leg curl machine and curl one leg at a time towards your glutes. This unilateral exercise targets the hamstrings, helping to address muscle imbalances.",
  },
  {
    type: "Hamstrings",
    label: "Seated Leg Curl",
    description:
      "Sit at a leg curl machine, adjust the settings, and curl both legs towards your glutes. This machine-based exercise targets the hamstrings, providing a controlled range of motion.",
  },
  {
    type: "Quads",
    label: "Barbell Diagonal Lunge",
    description:
      "Hold a barbell across your upper back, step forward diagonally, and lunge down. This exercise targets the quads and glutes while engaging the stabilizing muscles for balance.",
  },
  {
    type: "Quads",
    label: "Barbell Hack Squat",
    description:
      "Position a barbell behind your legs, feet hip-width apart, and squat down. This variation of the squat targets the quads and glutes with a focus on the lower portion of the movement.",
  },
  {
    type: "Quads",
    label: "Barbell Lunge",
    description:
      "Hold a barbell across your upper back, step forward, and lunge down. This exercise targets the quads, hamstrings, and glutes while improving balance and stability.",
  },
  {
    type: "Quads",
    label: "Barbell Reverse Lunge",
    description:
      "Hold a barbell across your upper back, step backward, and lunge down. This variation targets the quads, hamstrings, and glutes with a focus on the reverse movement.",
  },
  {
    type: "Quads",
    label: "Barbell Side Lunge",
    description:
      "Hold a barbell across your upper back, step to the side, and lunge down. This exercise targets the quads, hamstrings, and adductors, enhancing lateral leg strength.",
  },
  {
    type: "Quads",
    label: "Barbell Split Squat",
    description:
      "Hold a barbell across your upper back, step one foot forward, and lunge down. This exercise targets the quads, hamstrings, and glutes with a focus on unilateral leg development.",
  },
  {
    type: "Quads",
    label: "Barbell Squat",
    description:
      "Place a barbell on your upper back, feet shoulder-width apart, and squat down. This classic compound exercise targets the quads, hamstrings, and glutes, promoting overall lower body strength.",
  },
  {
    type: "Quads",
    label: "Barbell Step-Up",
    description:
      "Hold a barbell across your upper back, step onto a platform, and lift your body upward. This exercise targets the quads, hamstrings, and glutes, emphasizing single-leg strength.",
  },
  {
    type: "Quads",
    label: "Barbell Walking Lunge",
    description:
      "Hold a barbell across your upper back, take steps forward, and lunge down with each step. This dynamic exercise targets the quads, hamstrings, and glutes while promoting balance and coordination.",
  },
  {
    type: "Quads",
    label: "Diagonal Lunge",
    description:
      "Step forward diagonally, lunge down, and push back to the starting position. This exercise targets the quads, hamstrings, and glutes, with a focus on diagonal movement for muscle engagement.",
  },
  {
    type: "Quads",
    label: "Dumbbell Diagonal Lunge",
    description:
      "Hold dumbbells in your hands, step forward diagonally, and lunge down. This exercise targets the quads, hamstrings, and glutes while engaging stabilizing muscles.",
  },
  {
    type: "Quads",
    label: "Dumbbell Lunge",
    description:
      "Hold dumbbells in your hands, step forward, and lunge down. This exercise targets the quads, hamstrings, and glutes, promoting unilateral leg strength and stability.",
  },
  {
    type: "Quads",
    label: "Dumbbell Reverse Lunge",
    description:
      "Hold dumbbells in your hands, step backward, and lunge down. This variation targets the quads, hamstrings, and glutes with a focus on the reverse movement.",
  },
  {
    type: "Quads",
    label: "Dumbbell Side Lunge",
    description:
      "Hold dumbbells in your hands, step to the side, and lunge down. This exercise targets the quads, hamstrings, and adductors, enhancing lateral leg strength.",
  },
  {
    type: "Quads",
    label: "Dumbbell Split Squat",
    description:
      "Hold dumbbells in your hands, step one foot forward, and lunge down. This exercise targets the quads, hamstrings, and glutes with a focus on unilateral leg development.",
  },
  {
    type: "Quads",
    label: "Dumbbell Squat",
    description:
      "Hold dumbbells in your hands at your sides, feet shoulder-width apart, and squat down. This exercise targets the quads, hamstrings, and glutes, providing an alternative to the barbell squat.",
  },
  {
    type: "Quads",
    label: "Dumbbell Step-Up",
    description:
      "Hold dumbbells in your hands, step onto a platform, and lift your body upward. This exercise targets the quads, hamstrings, and glutes, emphasizing single-leg strength.",
  },
  {
    type: "Quads",
    label: "Dumbbell Walking Lunge",
    description:
      "Hold dumbbells in your hands, take steps forward, and lunge down with each step. This dynamic exercise targets the quads, hamstrings, and glutes while promoting balance and coordination.",
  },
  {
    type: "Quads",
    label: "Forward Lunge",
    description:
      "Step forward, lunge down, and push back to the starting position. This exercise targets the quads, hamstrings, and glutes, promoting unilateral leg strength and stability.",
  },
  {
    type: "Quads",
    label: "Lateral Barbell Squat",
    description:
      "Hold a barbell on your upper back, step to the side, and squat down. This lateral movement variation targets the quads, hamstrings, and adductors, enhancing overall leg strength.",
  },
  {
    type: "Quads",
    label: "Lateral Barbell Step-Up",
    description:
      "Hold a barbell on your upper back, step laterally onto a platform, and lift your body upward. This exercise targets the quads, hamstrings, and adductors, emphasizing lateral leg strength.",
  },
  {
    type: "Quads",
    label: "Lateral Squat",
    description:
      "Stand with feet wider than shoulder-width apart, shift your hips to one side, and squat down. This exercise targets the quads, hamstrings, and adductors, promoting lateral leg strength.",
  },
  {
    type: "Quads",
    label: "Lateral Step-Up",
    description:
      "Step laterally onto a platform, lifting your body upward. This exercise targets the quads, hamstrings, and adductors, emphasizing lateral leg strength and stability.",
  },
  {
    type: "Quads",
    label: "Leg Press",
    description:
      "Sit on a leg press machine and press the platform away with your feet. This compound exercise targets the quads, hamstrings, and glutes, providing a controlled and supportive movement.",
  },
  {
    type: "Quads",
    label: "Lunge",
    description:
      "Step forward or backward and lower your body into a lunge position. Lunges target the quads, hamstrings, and glutes, promoting unilateral leg strength and stability.",
  },
  {
    type: "Quads",
    label: "Lying Machine Squat",
    description:
      "Lie on a specialized lying squat machine and press the platform with your feet. This exercise targets the quads, hamstrings, and glutes in a supported lying position.",
  },
  {
    type: "Quads",
    label: "Machine Hack Squat",
    description:
      "Use a hack squat machine to perform a squatting motion. This machine-based exercise targets the quads, hamstrings, and glutes, providing a guided range of motion.",
  },
  {
    type: "Quads",
    label: "Reverse Lunge",
    description:
      "Step backward and lower your body into a lunge position. This variation of the lunge targets the quads, hamstrings, and glutes, with a focus on the reverse movement.",
  },
  {
    type: "Quads",
    label: "Single-Arm Barbell Side Squat",
    description:
      "Hold a barbell with one hand and perform a side squat. This unilateral exercise targets the quads, hamstrings, and glutes while engaging core muscles for stability.",
  },
  {
    type: "Quads",
    label: "Single-Arm Dumbbell Side Squat",
    description:
      "Hold a dumbbell with one hand and perform a side squat. This unilateral exercise targets the quads, hamstrings, and glutes, promoting single-leg strength and stability.",
  },
  {
    type: "Quads",
    label: "Single-Leg Barbell Squat",
    description:
      "Squat on one leg while holding a barbell for resistance. This challenging exercise targets the quads, hamstrings, and glutes while improving balance and coordination.",
  },
  {
    type: "Quads",
    label: "Single-Leg Box Squat",
    description:
      "Squat on one leg with one foot elevated on a box or bench. This exercise targets the quads, hamstrings, and glutes with a focus on unilateral leg strength and stability.",
  },
  {
    type: "Quads",
    label: "Single-Leg Dumbbell Box Squat",
    description:
      "Squat on one leg with one foot elevated on a box or bench, holding a dumbbell. This exercise targets the quads, hamstrings, and glutes while enhancing single-leg strength.",
  },
  {
    type: "Quads",
    label: "Single-Leg Dumbbell Squat",
    description:
      "Hold a dumbbell in one hand and squat on one leg. This unilateral exercise targets the quads, hamstrings, and glutes while engaging stabilizing muscles for balance.",
  },
  {
    type: "Quads",
    label: "Single-Leg Squat",
    description:
      "Squat on one leg without additional weight. This bodyweight exercise targets the quads, hamstrings, and glutes while challenging balance and stability.",
  },
  {
    type: "Quads",
    label: "Smith Machine Squat",
    description:
      "Perform a squat using a Smith machine, providing guided vertical movement. This exercise targets the quads, hamstrings, and glutes with added stability.",
  },
  {
    type: "Quads",
    label: "Split Squat",
    description:
      "Step one foot forward and one foot backward, then lunge down. This exercise targets the quads, hamstrings, and glutes, with a focus on unilateral leg development.",
  },
  {
    type: "Quads",
    label: "Step-Up",
    description:
      "Step onto a platform, lifting your body upward. This exercise targets the quads, hamstrings, and glutes, emphasizing single-leg strength and stability.",
  },
  {
    type: "Quads",
    label: "Walking Lunge",
    description:
      "Take steps forward, lunging down with each step. This dynamic exercise targets the quads, hamstrings, and glutes while promoting balance and coordination.",
  },
  {
    type: "Quads",
    label: "Alternating Leg Extension",
    description:
      "Sit on a leg extension machine and extend one leg at a time. This isolation exercise targets the quads, providing focused resistance for muscle development.",
  },
  {
    type: "Quads",
    label: "Leg Extension",
    description:
      "Sit on a leg extension machine and extend both legs simultaneously. This machine-based exercise isolates the quads, promoting strength and definition.",
  },
  {
    type: "Quads",
    label: "Single-Leg Extension",
    description:
      "Sit on a leg extension machine and extend one leg at a time. This unilateral exercise targets the quads, helping to address muscle imbalances and enhance single-leg strength.",
  },
  {
    type: "Shoulders",
    label: "Arnold Dumbbell Press",
    description:
      "Hold dumbbells and perform a shoulder press with a rotating motion. This compound exercise targets the deltoids and engages the trapezius and triceps for overall shoulder development.",
  },
  {
    type: "Shoulders",
    label: "Barbell Shoulder Press",
    description:
      "Press a barbell overhead while sitting or standing. This classic shoulder exercise targets the deltoids, trapezius, and triceps, promoting overall shoulder strength.",
  },
  {
    type: "Shoulders",
    label: "Dumbbell Alternating Shoulder Press",
    description:
      "Hold dumbbells and alternate pressing them overhead. This exercise targets the deltoids, engaging stabilizing muscles for balance and control.",
  },
  {
    type: "Shoulders",
    label: "Dumbbell Front Raise",
    description:
      "Hold dumbbells and raise them in front of you. This isolation exercise targets the front deltoids, enhancing shoulder definition and strength.",
  },
  {
    type: "Shoulders",
    label: "Dumbbell Shoulder Press",
    description:
      "Press dumbbells overhead while sitting or standing. This exercise targets the deltoids, trapezius, and triceps, providing a free-weight alternative to the barbell press.",
  },
  {
    type: "Shoulders",
    label: "Dumbbell Twisting Shoulder Press",
    description:
      "Hold dumbbells and press them overhead with a twisting motion. This compound exercise targets the deltoids, engaging core muscles for stability and control.",
  },
  {
    type: "Shoulders",
    label: "Machine Shoulder Press",
    description:
      "Sit on a shoulder press machine and press the handles overhead. This machine-based exercise targets the deltoids, providing a controlled and guided range of motion.",
  },
  {
    type: "Shoulders",
    label: "Seated Dumbbell Rear Delt Elbow Raise",
    description:
      "Sit on a bench, lean forward, and raise dumbbells to the sides. This exercise targets the rear deltoids, promoting shoulder symmetry and development.",
  },
  {
    type: "Shoulders",
    label: "Single-Arm Dumbbell Shoulder Press",
    description:
      "Press a dumbbell overhead with one arm at a time. This unilateral exercise targets the deltoids and engages core muscles for stability.",
  },
  {
    type: "Shoulders",
    label: "Smith Machine Shoulder Press",
    description:
      "Press a barbell on a Smith machine overhead. This machine-based exercise targets the deltoids with added stability from the guided barbell.",
  },
  {
    type: "Shoulders",
    label: "Barbell Front Raise",
    description:
      "Hold a barbell with an overhand grip and raise it in front of you. This isolation exercise targets the front deltoids, aiding in shoulder definition and strength.",
  },
  {
    type: "Shoulders",
    label: "Bent-Over Cable Rear Delt Raise",
    description:
      "Bend at the hips and raise cables to the sides. This exercise targets the rear deltoids, contributing to a balanced and well-rounded shoulder development.",
  },
  {
    type: "Shoulders",
    label: "Bent-Over Dumbbell Rear Delt Raise",
    description:
      "Bend at the hips and raise dumbbells to the sides. This isolation exercise targets the rear deltoids, enhancing shoulder aesthetics and symmetry.",
  },
  {
    type: "Shoulders",
    label: "Cable Front Raise",
    description:
      "Use a cable machine to lift the weight in front of you. This exercise targets the front deltoids, enhancing shoulder definition and strength with continuous tension.",
  },
  {
    type: "Shoulders",
    label: "Cable Lateral Raise",
    description:
      "Perform lateral raises using a cable machine. This exercise targets the lateral deltoids, promoting shoulder width and definition with controlled resistance.",
  },
  {
    type: "Shoulders",
    label: "Dumbbell Lateral Raise",
    description:
      "Hold dumbbells and lift them to the sides. This isolation exercise targets the lateral deltoids, contributing to broader and more defined shoulders.",
  },
  {
    type: "Shoulders",
    label: "Front Plate Raise",
    description:
      "Hold a weight plate and raise it in front of you. This exercise targets the front deltoids, helping to build strength and definition in the anterior shoulder muscles.",
  },
  {
    type: "Shoulders",
    label: "Kneeling Single-Arm Cable Rear Delt Raise",
    description:
      "Kneel and use a cable machine to perform rear delt raises. This exercise targets the rear deltoids, contributing to balanced shoulder development.",
  },
  {
    type: "Shoulders",
    label: "Lying Dumbbell External Rotation",
    description:
      "Lie on your side and externally rotate the dumbbell away from your body. This exercise targets the rotator cuff muscles, enhancing shoulder stability and function.",
  },
  {
    type: "Shoulders",
    label: "Lying Dumbbell Rear Delt Raise",
    description:
      "Lie face down on an incline bench and lift dumbbells to the sides. This exercise targets the rear deltoids, providing a unique angle for shoulder development.",
  },
  {
    type: "Shoulders",
    label: "Lying Single-Arm Dumbbell Rear Delt Raise",
    description:
      "Lie face down on an incline bench and lift a single dumbbell to the side. This unilateral exercise targets the rear deltoids, promoting balance and symmetry.",
  },
  {
    type: "Shoulders",
    label: "Pec Deck Real Delt Extensions",
    description:
      "Use the pec deck machine to target the rear delts. This exercise isolates the posterior shoulder muscles, contributing to overall shoulder development.",
  },
  {
    type: "Shoulders",
    label: "Reverse Incline Dumbbell Rear Delt Raise",
    description:
      "Lie face down on an incline bench and lift dumbbells to the sides in a reverse incline position. This exercise targets the rear deltoids, emphasizing the posterior shoulder muscles.",
  },
  {
    type: "Shoulders",
    label: "Seated Dumbbell Rear Delt Raise",
    description:
      "Sit and raise dumbbells to the sides. This exercise targets the rear deltoids, promoting shoulder symmetry and rear deltoid development.",
  },
  {
    type: "Shoulders",
    label: "Single-Arm Cable Lateral Raise",
    description:
      "Use a cable machine to perform lateral raises with one arm at a time. This unilateral exercise targets the lateral deltoids, promoting balance and control.",
  },
  {
    type: "Shoulders",
    label: "Cable External Rotation",
    description:
      "Attach a cable to a low point and externally rotate your arm away from your body. This exercise targets the rotator cuff muscles, enhancing shoulder stability.",
  },
  {
    type: "Triceps",
    label: "Close-Grip Bench Press",
    description:
      "Perform a bench press with a narrow grip, targeting the triceps more than a standard grip. This compound exercise engages the triceps, chest, and shoulders.",
  },
  {
    type: "Triceps",
    label: "Forward Lean Dips",
    description:
      "Perform dips with a forward lean to emphasize triceps engagement. This bodyweight exercise targets the triceps while also involving the chest and shoulders.",
  },
  {
    type: "Triceps",
    label: "Assisted Dips",
    description:
      "Use a dip machine or assistance to perform dips, targeting the triceps. This exercise provides support for individuals working on building triceps strength.",
  },
  {
    type: "Triceps",
    label: "Bench Dips",
    description:
      "Sit on the edge of a bench and dip down, targeting the triceps. This bodyweight exercise is effective for isolating and strengthening the triceps.",
  },
  {
    type: "Triceps",
    label: "Diamond Push-Up",
    description:
      "Perform push-ups with hands close together in a diamond shape. This variation targets the triceps, inner chest, and shoulders for a challenging upper body workout.",
  },
  {
    type: "Triceps",
    label: "Dips",
    description:
      "Use parallel bars to perform dips, targeting the triceps, chest, and shoulders. This bodyweight exercise is effective for building upper body strength.",
  },
  {
    type: "Triceps",
    label: "Machine Dips",
    description:
      "Use a dip machine to perform dips with added resistance. This machine-based exercise targets the triceps, chest, and shoulders while providing controlled movement.",
  },
  {
    type: "Triceps",
    label: "Decline Dumbbell Triceps Extension",
    description:
      "Lie on a decline bench and extend dumbbells overhead. This exercise isolates the triceps, providing a stretch and contraction for muscle development.",
  },
  {
    type: "Triceps",
    label: "Decline EZ-Bar Tricep Extension",
    description:
      "Perform tricep extensions on a decline bench using an EZ-bar. This exercise targets the triceps, emphasizing the long head for overall triceps development.",
  },
  {
    type: "Triceps",
    label: "Decline Single Dumbbell Triceps Extension",
    description:
      "Lie on a decline bench and extend a single dumbbell overhead. This unilateral exercise targets the triceps, enhancing muscle balance and coordination.",
  },
  {
    type: "Triceps",
    label: "Decline Single-Arm Dumbbell Triceps Extension",
    description:
      "Lie on a decline bench and extend a single dumbbell overhead with one arm. This unilateral exercise isolates the triceps, promoting balanced strength development.",
  },
  {
    type: "Triceps",
    label: "Dumbbell Kickback",
    description:
      "Hold a dumbbell in one hand and extend your arm back. This isolation exercise targets the triceps, promoting muscle definition and strength in the back of the arms.",
  },
  {
    type: "Triceps",
    label: "Incline EZ-Bar Tricep Extension",
    description:
      "Perform tricep extensions on an inclined bench using an EZ-bar. This exercise emphasizes the long head of the triceps, aiding in overall triceps development.",
  },
  {
    type: "Triceps",
    label: "Kneeling Cable Triceps Extension",
    description:
      "Kneel in front of a cable machine and extend the cable downward. This exercise targets the triceps, providing constant tension for muscle engagement and growth.",
  },
  {
    type: "Triceps",
    label: "Leaning Overhead Tricep Extension",
    description:
      "Lean to one side and extend a dumbbell overhead. This unilateral exercise targets the triceps, enhancing muscle balance and stability.",
  },
  {
    type: "Triceps",
    label: "Low Cable Triceps Extension",
    description:
      "Use a cable machine with a low attachment point to perform triceps extensions. This exercise targets the triceps with a different angle, promoting overall muscle development.",
  },
  {
    type: "Triceps",
    label: "Lying Cable Triceps Extension",
    description:
      "Lie on a bench and perform tricep extensions using a cable machine. This variation targets the triceps, providing a unique range of motion for muscle engagement.",
  },
  {
    type: "Triceps",
    label: "Lying EZ-Bar Triceps Extension",
    description:
      "Lie on a bench and extend an EZ-bar overhead. This exercise isolates the triceps, emphasizing the long head for enhanced muscle definition.",
  },
  {
    type: "Triceps",
    label: "Lying Overhead EZ-Bar Tricep Extension",
    description:
      "Lie on a bench and extend an EZ-bar overhead with a reverse grip. This exercise targets the triceps, emphasizing the lateral head for well-rounded development.",
  },
  {
    type: "Triceps",
    label: "Lying Reverse EZ-Bar Triceps Extension",
    description:
      "Lie on a bench and extend an EZ-bar overhead with a reverse grip. This exercise targets the triceps, emphasizing the long head for overall triceps development.",
  },
  {
    type: "Triceps",
    label: "Lying Single Dumbbell Triceps Extension",
    description:
      "Lie on a bench and extend a single dumbbell overhead. This unilateral exercise targets the triceps, promoting muscle balance and coordination.",
  },
  {
    type: "Triceps",
    label: "Lying Single-Arm Dumbbell Triceps Extension",
    description:
      "Lie on a bench and extend a single dumbbell overhead with one arm. This unilateral exercise isolates the triceps, enhancing balanced strength development.",
  },
  {
    type: "Triceps",
    label: "Lying Tricep Extensions",
    description:
      "Lie on a bench and perform tricep extensions using dumbbells or an EZ-bar. This exercise isolates the triceps, providing a stretch and contraction for muscle development.",
  },
  {
    type: "Triceps",
    label: "Overhead Dumbbell Triceps Extension",
    description:
      "Hold a dumbbell overhead and extend your arm. This isolation exercise targets the triceps, promoting muscle definition and strength.",
  },
  {
    type: "Triceps",
    label: "Overhead EZ-Bar Triceps Extension",
    description:
      "Extend an EZ-bar overhead to target the triceps. This exercise emphasizes the long head of the triceps, contributing to overall triceps development.",
  },
  {
    type: "Triceps",
    label: "Overhead Rope Cable Tricep Extension",
    description:
      "Use a rope attachment on a cable machine to perform tricep extensions. This exercise targets the triceps with continuous tension for optimal muscle engagement.",
  },
  {
    type: "Triceps",
    label: "Overhead Single Dumbbell Tricep Extension",
    description:
      "Hold a single dumbbell overhead and extend your arm. This unilateral exercise targets the triceps, promoting balance and coordination.",
  },
  {
    type: "Triceps",
    label: "Overhead Single-Arm Cable Tricep Extension",
    description:
      "Use a cable machine to perform tricep extensions with one arm at a time. This unilateral exercise targets the triceps, promoting balance and control.",
  },
  {
    type: "Triceps",
    label: "Overhead Single-Arm Dumbbell Tricep Extension",
    description:
      "Hold a single dumbbell overhead and extend your arm with one arm at a time. This unilateral exercise isolates the triceps, enhancing muscle balance and development.",
  },
  {
    type: "Triceps",
    label: "Reverse Tricep Pushdown",
    description:
      "Perform tricep pushdowns with a reverse grip on the cable machine. This exercise targets the triceps, emphasizing the lateral head for well-rounded development.",
  },
  {
    type: "Triceps",
    label: "Rope Triceps Pushdown",
    description:
      "Use a rope attachment on a cable machine to perform tricep pushdowns. This exercise targets the triceps, providing continuous tension for muscle engagement.",
  },
  {
    type: "Triceps",
    label: "Single-Arm Towel Triceps Pushdown",
    description:
      "Attach a towel to the cable machine and perform tricep pushdowns with one arm. This unilateral exercise targets the triceps, enhancing muscle balance and control.",
  },
  {
    type: "Triceps",
    label: "Single-Arm Triceps Pushdown",
    description:
      "Perform tricep pushdowns with one arm at a time using the cable machine. This unilateral exercise targets the triceps, promoting balance and control.",
  },
  {
    type: "Triceps",
    label: "Towel Triceps Pushdown",
    description:
      "Attach a towel to the cable machine and perform tricep pushdowns. This exercise targets the triceps, providing a unique grip challenge for muscle engagement.",
  },
  {
    type: "Triceps",
    label: "Tricep Extensions",
    description:
      "Perform tricep extensions with dumbbells or an EZ-bar. This isolation exercise targets the triceps, promoting muscle definition and strength.",
  },
  {
    type: "Triceps",
    label: "Tricep Pushdown",
    description:
      "Use a cable machine to perform tricep pushdowns. This exercise targets the triceps, providing continuous tension for optimal muscle engagement.",
  },
  {
    type: "Triceps",
    label: "V-Bar Tricep Pushdown",
    description:
      "Perform tricep pushdowns with a V-bar attachment on the cable machine. This exercise targets the triceps, emphasizing the lateral head for well-rounded development.",
  },

  //{ label: "Monty Python and the Holy Grail", year: 1975 },
];

export default App;
