import React, { Component } from "react";
import { courseService, userService } from "../../Services";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import {
  FETCH_PENDING_COURSES,
  FETCH_UNREGISTERED_COURSES,
  FETCH_APPROVED_COURSES,
  FETCH_UNREGISTERED_STUDENTS,
  FETCH_PENDING_STUDENTS,
  FETCH_APPROVED_STUDENTS,
  FETCH_COURSE_ID,
  FETCH_USER_INFO,
  FETCH_USER_LIST,
  FETCH_USER_DETAIL,
} from "../../Redux/Actions/type";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CourseItem from "../CourseItem";
import { Link } from "react-router-dom";
import { signupUserSchema } from "../../Services/user";
import { getListCourse } from "../../Redux/Actions/courseAction";
import Button from "reactstrap/lib/Button";
import { Box, Container } from "@material-ui/core";
import Row from "reactstrap/lib/Row";
import CourseItemAdmin from "../CourseItemAdmin";

class RegisterAdmin extends Component {

  _getUnregisteredStudents = () => {
    console.log(this.props.courseID);
    console.log(this.props.accessToken);
    userService
      .fetchUnregisteredStudents(
        this.props.courseID.maKhoaHoc,
        this.props.accessToken
      )
      .then((res) => {
        this.props.dispatch(
          createAction(FETCH_UNREGISTERED_STUDENTS, res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  _getPendingStudents = () => {
    userService
      .fetchPendingStudents(
        this.props.courseID.maKhoaHoc,
        this.props.accessToken
      )
      .then((res) => {
        this.props.dispatch(createAction(FETCH_PENDING_STUDENTS, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  _getApprovedStudents = () => {
    userService
      .fetchApprovedStudents(
        this.props.courseID.maKhoaHoc,
        this.props.accessToken
      )
      .then((res) => {
        this.props.dispatch(createAction(FETCH_APPROVED_STUDENTS, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      showOption2: false,
      showOption3: false,
      showOption7: false,
      showOption8: false,
      showOption9: false,
    };
    this._onShowOption2 = this._onShowOption2.bind(this);
    this._onShowOption3 = this._onShowOption3.bind(this);
    this._onShowOption7 = this._onShowOption7.bind(this);
    this._onShowOption8 = this._onShowOption8.bind(this);
    this._onShowOption9 = this._onShowOption9.bind(this);
  }

  _onShowOption2() {
    this.setState({
      showOption2: !this.state.showOption2,
    });
    this._getUnregisteredStudents();
    this._getPendingStudents();
    this._getApprovedStudents();
  }

  _onShowOption3() {
    this.setState({
      showOption3: true,
    });
    this._getUnregisteredStudents();

  }

  _onShowOption7() {
    this.setState({
      showOption7: !this.state.showOption7,
    });
    this._getPendingStudents();
  }

  _onShowOption8() {
    this.setState({
      showOption8: !this.state.showOption8,
    });
    this._getApprovedStudents();
  }

  _onShowOption9() {
    this.setState({
      showOption9: !this.state.showOption9,
    });
  }

  renderUnregisteredStudents = () => {
    if (!this.props.unregisteredStudents) return null;

    return this.props.unregisteredStudents.map((item, index) => {
      return (
        <div className="col-xl-4 col-lg-6 card admin__item__account__detail__col">
          <p><span>Username:</span> {item.taiKhoan || "N/A"}</p>
          <p><span>Fullname:</span> {item.hoTen || "N/A"}</p>
          <p><span>Nickname:</span> {item.biDanh || "N/A"}</p>
          <button
            className="admin__item__button__sub admin__item__button__item admin__item__user__button btn btn-secondary"
            onClick={() => this._handleRegister(item.taiKhoan)}
          >
            Register
          </button>
        </div>
      );
    });
  };

  renderPendingStudents = () => {
    if (!this.props.pendingStudents) return null;

    return this.props.pendingStudents.map((item, index) => {
      return (
        <div className="col-xl-4 col-lg-6 card admin__item__account__detail__col">
        <p><span>Username:</span> {item.taiKhoan || "N/A"}</p>
        <p><span>Fullname:</span> {item.hoTen || "N/A"}</p>
        <p><span>Nickname:</span> {item.biDanh || "N/A"}</p>
        <button
          className="admin__item__button__sub admin__item__button__item admin__item__user__button btn btn-secondary"
          onClick={() => this._handleConfirmRegistration(item.taiKhoan)}
        >
          Confirm Registration
        </button>
        </div>
      );
    });
  };

  renderApprovedStudents = () => {
    if (!this.props.approvedStudents) return null;

    return this.props.approvedStudents.map((item, index) => {
      return (
        <div className="col-xl-4 col-lg-6 card admin__item__account__detail__col">
        <p><span>Username:</span> {item.taiKhoan || "N/A"}</p>
        <p><span>Fullname:</span> {item.hoTen || "N/A"}</p>
        <p><span>Nickname:</span> {item.biDanh || "N/A"}</p>
        <button
className="admin__item__button__sub admin__item__button__item admin__item__user__button btn btn-secondary"          onClick={() => this._handleCancelRegistration(item.taiKhoan)}
        >
          Cancel Registration
        </button>
        </div>
      );
    });
  };

  _handleRegister = (username) => {
    console.log(username);
    console.log(this.props.courseID.maKhoaHoc);
    courseService
      .registerCourse(
        {
          maKhoaHoc: this.props.courseID.maKhoaHoc,
          taiKhoan: username,
        },
        this.props.accessToken
      )
      .then((res) => {
        console.log(res);
        alert("Student was registered successfully to this course!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleCancelRegistration = (userName) => {
    courseService
      .cancelRegistration(
        {
          maKhoaHoc: this.props.courseID.maKhoaHoc,
          taiKhoan: userName,
        },
        this.props.accessToken
      )
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleConfirmRegistration = (userName) => {
    courseService
      .confirmRegistration(
        {
          maKhoaHoc: this.props.courseID.maKhoaHoc,
          taiKhoan: userName,
        },
        this.props.accessToken
      )
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="admin">

        <div className="admin__item">

              <Formik
                initialValues={{
                  maKhoaHoc: "",
                }}
                onSubmit={this._handleSubmit}
                render={(formikProps) => (
                  <Form>
                    <div className="form-group">
                      <label>Course ID: </label>
                      <Field
                        component="select"
                        className="form-control"
                        name="maKhoaHoc"
                        onChange={formikProps.handleChange}
                      >
                        {this.props.courseList.map((item, index) => (
                          <option>{item.maKhoaHoc}</option>
                        ))}
                      </Field>

                      <div className="admin__item">
                        <button
                          onClick={this._onShowOption3}
                          className="admin__item admin__item__top btn btn-secondary"
                        >
                          Select
                        </button>
                        {this.state.showOption3 ? (
                          <>
                            <button
                              className="admin__item__top admin__item__button  btn btn-secondary"
                              onClick={this._onShowOption7}
                            >
                              List of Unregistered Students
                            </button>
                            {this.state.showOption7 ? (
                              <div className="admin__item__top">
                                <Container>
                                  <Box className="allCourse">
                                    <Box
                                      textAlign="center"
                                      className="allCourse__headline"
                                    ></Box>
                                    <Row className="admin__item__account__detail__row">
                                      {this.renderUnregisteredStudents()}
                                    </Row>
                                  </Box>
                                </Container>
                              </div>
                            ) : null}

                            <button
                              className="admin__item__button btn btn-secondary"
                              onClick={this._onShowOption8}
                            >
                              List of Pending for Approval Students
                            </button>
                            {this.state.showOption8 ? (
                              <div className="admin__item__top">
                                <Container>
                                  <Box className="allCourse">
                                    <Box
                                      textAlign="center"
                                      className="allCourse__headline"
                                    ></Box>
                                    <Row className="admin__item__account__detail__row">{this.renderPendingStudents()}</Row>
                                  </Box>
                                </Container>
                              </div>
                            ) : null}

                            <button
                              className="admin__item__button btn btn-secondary"
                              onClick={this._onShowOption9}
                            >
                              List of Approved Students
                            </button>
                            {this.state.showOption9 ? (
                              <div className="admin__item__top">
                                <Container>
                                  <Box className="allCourse">
                                    <Box
                                      textAlign="center"
                                      className="allCourse__headline"
                                    ></Box>
                                    <Row className="admin__item__account__detail__row">{this.renderApprovedStudents()}</Row>
                                  </Box>
                                </Container>
                              </div>
                            ) : null}
                          </>
                        ) : null}
                      </div>

                    </div>
                  </Form>
                )}
              />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getListCourse());
  }
}

const mapStateToProps = (state) => {
  return {
    unregisteredStudents: state.auth.unregisteredStudents,
    pendingStudents: state.auth.pendingStudents,
    approvedStudents: state.auth.approvedStudents,
    courseList: state.course.courseList,
    courseID: state.auth.courseID || { maKhoaHoc: "" },
    accessToken: state.auth.accessToken,
    userList: state.auth.userList,
    credentials: state.auth.loggedInUser,
  };
};

export default connect(mapStateToProps)(RegisterAdmin);
