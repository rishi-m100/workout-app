import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="px-3 py-2 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <i className="fa-solid fa-m"></i>
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a
                    onClick={() => this.props.onNav(0)}
                    className="nav-link text-white"
                  >
                    <div>
                      <center>
                        <FontAwesomeIcon
                          color={"#ff4529"}
                          icon={faCalendarDays}
                        />
                      </center>
                    </div>
                    Schedule
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => this.props.onNav(1)}
                    className="nav-link text-white"
                  >
                    <div>
                      <center>
                        <FontAwesomeIcon color={"#ff4529"} icon={faDumbbell} />
                      </center>
                    </div>
                    Exercises
                  </a>
                </li>
{/*                 <li>
                  <a
                    onClick={() => this.props.onNav(2)}
                    className="nav-link text-white"
                  >
                    <div>
                      <center>
                        <FontAwesomeIcon color={"#ff4529"} icon={faBook} />{" "}
                      </center>
                    </div>
                    Log
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => this.props.onNav(3)}
                    className="nav-link text-white"
                  >
                    <div>
                      <center>
                        <FontAwesomeIcon color={"#ff4529"} icon={faUser} />
                      </center>
                    </div>
                    Profile
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
