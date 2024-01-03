import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";

class Dropdown extends Component {
  state = {};
  render() {
    //  console.log(this.props.list);

    return (
      <Accordion>
        <Accordion.Item eventKey={0}>
          <Accordion.Button
            style={{
              backgroundColor: this.handleColor(this.props.list),
              color: "white",
              borderRadius: "20px",
            }}
          >
            {" "}
            <b> {this.props.id} </b>
          </Accordion.Button>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }

  handleColor = (list) => {
    //const index = list.type.indexOf(this.props.id);
    //console.log(index);
    let color;
    let index;
    for (let i = 0; i < list.length; i++) {
      if (list[i].label.indexOf(this.props.id) > -1) {
        index = i;
      }
    }

    if (list[index].type == "Chest") {
      color = "#8cb8ff";
    } else if (list[index].type == "Biceps") {
      color = "#ff1c2b";
    } else if (list[index].type == "Back") {
      color = "#18076e";
    } else if (list[index].type == "Abs") {
      color = "#d4bf06";
    } else if (list[index].type == "Triceps") {
      color = "#ff5500";
    } else if (list[index].type == "Shoulders") {
      color = "#5ae84d";
    } else if (list[index].type == "Cardio") {
      color = "#ea95f5";
    } else if (list[index].type == "Quads") {
      color = "#4e4a4f";
    } else if (list[index].type == "Hamstrings") {
      color = "#3d2d24";
    } else if (list[index].type == "Calves") {
      color = "#000000";
    }
    return color;
  };
}

export default Dropdown;
