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
          <Accordion.Body>{this.props.desc}</Accordion.Body>
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
