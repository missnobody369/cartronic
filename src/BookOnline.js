import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events.js";
import Modal from "react-modal";

import "react-big-calendar/lib/css/react-big-calendar.css";

class BookOnline extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      modalIsOpen: false,
      title: "",
      description: "",
      startdate: "",
      enddate: "",
      id: 0
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(user, id) {
    this.setState({
      modalIsOpen: true,
      title: user.title,
      description: user.description,
      startdate: user.startdate,
      enddate: user.enddate,
      id: id
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  componentWillMount() {
    BigCalendar.momentLocalizer(moment);
  }

  render() {
    const user_rows = [];
    this.state.users.map((user, i) =>
      user_rows.push(
        <tr key={i}>
          <td>{user.title}</td>
          <td>{user.description}</td>
          <td>{user.startdate}</td>
          <td>{user.enddate}</td>
          <td>
            <a
              onClick={this.deleteusersrequest}
              data-id={user.id}
              className="btn btn-danger btn-xs"
              href=""
              role="button"
            >
              DELETE Request
            </a>
          </td>
          <td>
            <a onClick={() => this.openModal(user, user.id)}>Edit</a>
          </td>
        </tr>
      )
    );

    let user = this;
    let allViews = Object.keys(BigCalendar.Views).map(
      k => BigCalendar.Views[k]
    );

    return (
      <div>
        <button
          onClick={() => this.openModal(user, user.id)}
          className="btn btn-default"
        >
          Book Day
        </button>
        <button className="btn btn-default">View</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
        >
          <form method="POST" action="http://localhost:3001/booktitle">
            <p>
              {" "}
              Title:
              <label for="title" />
              <select id="title" name="title">
                <option name="title" value="mr">
                  WARRANT OF FITNESS (WOF)
                </option>
                <option name="title" value="ms">
                  VECHICLE LICENCE (Rego)
                </option>
                <option name="title" value="mrs">
                  Mrs.
                </option>
              </select>
            </p>
            <label>Another problem pleace add Description</label>
            <input
              className="form-control"
              placeholder="Description"
              name="description"
              validations={["required"]}
            />
            <label>Start Date</label>
            <input
              className="form-control"
              type="date"
              placeholder="Start Date"
              name="startdate"
              validations={["required"]}
            />
            <label>End Date</label>
            <input
              className="form-control"
              type="date"
              placeholder="End Date"
              name="enddate"
              validations={["required"]}
            />
            <div>
              <p>
                {" "}
                PICK A title:
                <label for="title" />
                <select id="title" name="title">
                  <option name="title" value="friend">
                    8:00 AM
                  </option>
                  <option name="title" value="Yellow Pages">
                    8:30 AM
                  </option>
                  <option name="title" value="Drive Past">
                    9:00 AM
                  </option>
                  <option name="title" value="Existing Customer">
                    9:30 AM
                  </option>
                  <option name="title" value="Google">
                    10:00 AM
                  </option>
                  <option name="title" value="News Paper">
                    10:30 AM
                  </option>
                  <option name="title" value="Previous Customer">
                    11:00 AM
                  </option>
                  <option name="title" value="friend">
                    11:30 AM
                  </option>
                  <option name="title" value="friend">
                    12:00 PM
                  </option>
                  <option name="title" value="friend">
                    12:30 PM
                  </option>
                  <option name="title" value="friend">
                    1:00 PM
                  </option>
                  <option name="title" value="friend">
                    1:30 PM
                  </option>
                  <option name="title" value="friend">
                    2:00 PM
                  </option>
                  <option name="title" value="friend">
                    2:30 PM
                  </option>
                  <option name="title" value="friend">
                    3:00 PM
                  </option>
                  <option name="title" value="friend">
                    3:30 PM
                  </option>
                  <option name="title" value="friend">
                    4:00 PM
                  </option>
                  <option name="title" value="friend">
                    4:30 PM
                  </option>
                  <option name="title" value="friend">
                    5:00 PM
                  </option>
                  <option name="title" value="friend">
                    1:00 PM
                  </option>
                </select>
              </p>
            </div>
            <div className="submit-section">
              <button className="btn btn-uth-submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <BigCalendar
          events={events}
          views={allViews}
          step={60}
          onSelectEvent={event => alert(event.title)}
          defaultDate={new Date(2018, 8, 20)}
        />
      </div>
    );
  }
}

export default BookOnline;
