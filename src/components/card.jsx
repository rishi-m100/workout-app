import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

class Ex extends Component {
  state = {
    group: [
      { color: "#8cb8ff", exercise: "Chest" },
      { color: "#ff1c2b", exercise: "Biceps" },
      { color: "#18076e", exercise: "Back" },
      { color: "#d4bf06", exercise: "Abs" },
      { color: "#ff5500", exercise: "Triceps" },
      { color: "#5ae84d", exercise: "Shoulders" },
      { color: "#ea95f5", exercise: "Cardio" },
      { color: "#4e4a4f", exercise: "Quads" },
      { color: "#3d2d24", exercise: "Hamstrings" },
      { color: "#000000", exercise: "Calves" },
    ],
  };

  render() {
    const variant = this.state.group;
    var index;
    if (this.props.id == "Chest") {
      index = 0;
    }
    if (this.props.id == "Biceps") {
      index = 1;
    }

    if (this.props.id == "Back") {
      index = 2;
    }
    if (this.props.id == "Abs") {
      index = 3;
    }
    if (this.props.id == "Triceps") {
      index = 4;
    }
    if (this.props.id == "Shoulders") {
      index = 5;
    }
    if (this.props.id == "Cardio") {
      index = 6;
    }
    if (this.props.id == "Quads") {
      index = 7;
    }
    if (this.props.id == "Hamstrings") {
      index = 8;
    }
    if (this.props.id == "Calves") {
      index = 9;
    }
    var count = 0;
    let mon_arr = [];

    return (
      <Card
        style={{
          backgroundColor: variant[index].color,
          width: "18rem",
          color: "white",
        }}
        key={variant[index]}
        className="mb-2"
      >
        <Card.Header>{variant[index].exercise}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.name} </Card.Title>
          <hr />
          <br />
          <Card.Text>{this.props.desc}</Card.Text>
          <br />
        </Card.Body>
        <Card.Footer>
          <Badge className="pill" pill bg="dark">
            M
            <br />
            <Checkbox
              icon={<AddCircleOutlinedIcon color="error" />}
              checkedIcon={<CheckCircleIcon color="success" />}
              onClick={() => this.props.onCheck("m")}
            />{" "}
          </Badge>{" "}
          <Badge className="pill" pill bg="dark">
            T
            <br />
            <Checkbox
              icon={<AddCircleOutlinedIcon color="error" />}
              checkedIcon={<CheckCircleIcon color="success" />}
              onClick={() => this.props.onCheck("t")}
            />{" "}
          </Badge>{" "}
          <Badge className="pill" pill bg="dark">
            W
            <br />
            <Checkbox
              icon={<AddCircleOutlinedIcon color="error" />}
              checkedIcon={<CheckCircleIcon color="success" />}
              onClick={() => this.props.onCheck("w")}
            />{" "}
          </Badge>{" "}
          <Badge className="pill" pill bg="dark">
            Th
            <br />
            <Checkbox
              icon={<AddCircleOutlinedIcon color="error" />}
              checkedIcon={<CheckCircleIcon color="success" />}
              onClick={() => this.props.onCheck("th")}
            />{" "}
          </Badge>{" "}
          <Badge className="pill" pill bg="dark">
            F
            <br />
            <Checkbox
              icon={<AddCircleOutlinedIcon color="error" />}
              checkedIcon={<CheckCircleIcon color="success" />}
              onClick={() => this.props.onCheck("f")}
            />{" "}
          </Badge>{" "}
          <Badge className="pill" pill bg="dark">
            Sa
            <br />
            <Checkbox
              icon={<AddCircleOutlinedIcon color="error" />}
              checkedIcon={<CheckCircleIcon color="success" />}
              onClick={() => this.props.onCheck("sa")}
            />{" "}
          </Badge>{" "}
          <Badge className="pill" pill bg="dark">
            Su
            <br />
            <Checkbox
              icon={<AddCircleOutlinedIcon color="error" />}
              checkedIcon={<CheckCircleIcon color="success" />}
              onClick={() => this.props.onCheck("su")}
            />{" "}
          </Badge>{" "}
        </Card.Footer>
      </Card>
    );
  }
}

export default Ex;
