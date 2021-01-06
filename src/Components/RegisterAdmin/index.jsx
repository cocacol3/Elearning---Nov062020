import React, { Component } from "react";
import { userService } from "../../Services";
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
  // _handleAddUser = (values) => {
  //   userService
  //     .addUser(values, this.props.accessToken)
  //     .then((res) => {
  //       console.log(res.data);
  //       alert("Đã thêm tài khoản thành công");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // _handleSearch = (searchKey) => {
  //   console.log(searchKey.searchKey);
  //   userService
  //     .searchUser(searchKey.searchKey)
  //     .then((res) => {
  //       this.props.dispatch(createAction(FETCH_USER_LIST, res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  _getUserName = () => {
    const userName = JSON.parse(localStorage.getItem("credentials"));
    return userName.taiKhoan;
  };

  // _getUserDetail = () => {
  //   // const accessToken = this._getAccessToken();
  //   userService
  //     .fetchUserDetail(this.props.accessToken)
  //     .then((res) => {
  //       console.log(res.data)
  //       this.props.dispatch(createAction(FETCH_USER_DETAIL, res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  _getUnregisteredCourses = () => {
    const userName = this._getUserName();
    console.log(userName);
    console.log(this.props.accessToken);
    userService
      .fetchUnregistedCourses(userName, this.props.accessToken)
      .then((res) => {
        console.log(res);
        this.props.dispatch(createAction(FETCH_UNREGISTERED_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getPendingCourses = () => {
    const userName = this._getUserName();
    userService
      .fetchPendingCourses(userName, this.props.accessToken)
      .then((res) => {
        console.log(res);
        this.props.dispatch(createAction(FETCH_PENDING_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getApprovedCourses = () => {
    const userName = this._getUserName();
    userService
      .fetchApprovedCourses(userName, this.props.accessToken)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_APPROVED_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleSubmit = (values) => {
    console.log(values);
    return this.props.dispatch(createAction(FETCH_COURSE_ID, values));
  };

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
      showOption1: false,
      showOption2: false,
      showOption3: false,
    };
    this._onShowOption1 = this._onShowOption1.bind(this);
    this._onShowOption2 = this._onShowOption2.bind(this);
    this._onShowOption3 = this._onShowOption3.bind(this);
  }

  _onShowOption1() {
    this.setState({
      showOption1: !this.state.showOption1,
    });
  }

  _onShowOption2() {
    this.setState({
      showOption2: !this.state.showOption2,
    });
  }

  _onShowOption3() {
    this.setState({
      showOption3: true,
    });
  }

  renderUnregisteredCourses = () => {
    if (!this.props.unregisteredCourses) return null;

    return this.props.unregisteredCourses.map((course, index) => {
      return (
        <div className="col-3">
          {course.biDanh}
          {course.maKhoaHoc}
          {course.tenKhoaHoc}
        </div>
      );
    });
  };

  renderPendingCourses = () => {
    if (!this.props.pendingCourses) return null;

    return this.props.pendingCourses.map((course, index) => {
      return (
        <div className="col-3">
          {course.biDanh}
          {course.maKhoaHoc}
          {course.tenKhoaHoc}
        </div>
      );
    });
  };

  renderApprovedCourses = () => {
    if (!this.props.approvedCourses) return null;

    return this.props.approvedCourses.map((course, index) => {
      return (
        <div className="col-3">
          {course.biDanh}
          {course.maKhoaHoc}
          {course.tenKhoaHoc}
        </div>
      );
    });
  };

  renderUnregisteredStudents = () => {
    if (!this.props.unregisteredStudents) return null;

    return this.props.unregisteredStudents.map((course, index) => {
      return (
        <div className="col-3">
          {course.taiKhoan}
          {course.hoTen}
          {course.biDanh}
        </div>
      );
    });
  };

  renderPendingStudents = () => {
    if (!this.props.pendingStudents) return null;

    return this.props.pendingStudents.map((course, index) => {
      return (
        <div className="col-3">
          {course.taiKhoan}
          {course.hoTen}
          {course.biDanh}
        </div>
      );
    });
  };

  renderApprovedStudents = () => {
    if (!this.props.approvedStudents) return null;

    return this.props.approvedStudents.map((course, index) => {
      return (
        <div className="col-3">
          {course.taiKhoan}
          {course.hoTen}
          {course.biDanh}
        </div>
      );
    });
  };

  // _handleUpdateUserDetail = (values) => {
  //   userService
  //     .updateUserDetail(values, this.props.accessToken)
  //     .then((res) => {
  //       alert("Cập nhập thông tin tài khoản thành công!");
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // _handleShowUserInfo = () => {
  //   userService
  //     .fetchUserInfo({taiKhoan: this.props.credentials.taiKhoan}, this.props.accessToken)
  //     .then((res) => {
  //       console.log(res.data);
  //       this.props.dispatch(createAction(FETCH_USER_INFO, res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div>
        <div className="admin__item">
          <Button onClick={this._onShowOption1}>Show Course Catergories</Button>
          {this.state.showOption1 ? (
            <div className="admin__item__top">
              <button
                className="admin__item__button btn btn-success"
                onClick={this._getUnregisteredCourses}
              >
                List of Unregistered Courses
              </button>
              <br />
              <Container>
                <Box className="allCourse">
                  <Box textAlign="center" className="allCourse__headline"></Box>
                  <Row>{this.renderUnregisteredCourses()}</Row>
                </Box>
              </Container>
              <button
                className="admin__item__button btn btn-success"
                onClick={this._getPendingCourses}
              >
                List of Pending for Approval Courses
              </button>
              <Container>
                <Box className="allCourse">
                  <Box textAlign="center" className="allCourse__headline"></Box>
                  <Row>{this.renderPendingCourses()}</Row>
                </Box>
              </Container>
              <button
                className="admin__item__button btn btn-success"
                onClick={this._getApprovedCourses}
              >
                List of Pending for Approval Courses
              </button>
              <Container>
                <Box className="allCourse">
                  <Box textAlign="center" className="allCourse__headline"></Box>
                  <Row>{this.renderApprovedCourses()}</Row>
                </Box>
              </Container>
            </div>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption2}>Show Course Catergories</Button>
          {this.state.showOption2 ? (
            <>
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
                          className="admin__item__top admin__item__button btn btn-success"
                        >
                          Select
                        </button>
                        {this.state.showOption3 ? (
                          <>
                            <button
                              className="admin__item__top admin__item__button  btn btn-success"
                              onClick={this._getUnregisteredStudents}
                            >
                              List of Unregistered Students
                            </button>
                            <Container>
                              <Box className="allCourse">
                                <Box
                                  textAlign="center"
                                  className="allCourse__headline"
                                ></Box>
                                <Row>{this.renderUnregisteredCourses()}</Row>
                              </Box>
                            </Container>
                            <button
                              className="admin__item__button btn btn-success"
                              onClick={this._getPendingStudents}
                            >
                              List of Pending for Approval Students
                            </button>
                            <Container>
                              <Box className="allCourse">
                                <Box
                                  textAlign="center"
                                  className="allCourse__headline"
                                ></Box>
                                <Row>{this.renderPendingStudents()}</Row>
                              </Box>
                            </Container>
                            <button
                              className="admin__item__button btn btn-success"
                              onClick={this._getApprovedStudents}
                            >
                              List of Approved Students
                            </button>
                            <Container>
                              <Box className="allCourse">
                                <Box
                                  textAlign="center"
                                  className="allCourse__headline"
                                ></Box>
                                <Row>{this.renderApprovedStudents()}</Row>
                              </Box>
                            </Container>
                          </>
                        ) : null}
                      </div>

                      {/* <div className="admin__item">
                        <Button onClick={this._onShowOption3}>
                          Show Course Catergories
                        </Button>
                        
                      </div> */}
                    </div>
                  </Form>
                )}
              />
            </>
          ) : null}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getListCourse());
  }
}

// // Courses
// const dispatch = useDispatch();
// // getCourseList() will run when the component fist rendered to get courselist
// useEffect(() => {
//   dispatch(getListCourse());
// }, [dispatch]);
// // Get courseList from store
// const courseList = useSelector((state) => {
//   return state.course.courseList;
// });

const mapStateToProps = (state) => {
  return {
    unregisteredCourses: state.auth.unregisteredCourses,
    pendingCourses: state.auth.pendingCourses,
    approvedCourses: state.auth.approvedCourses,
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
