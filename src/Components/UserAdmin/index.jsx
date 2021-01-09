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
  FETCH_USER_RESULT,
} from "../../Redux/Actions/type";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CourseItem from "../CourseItem";
import { Link } from "react-router-dom";
import { signupUserSchema } from "../../Services/user";
import { getListCourse } from "../../Redux/Actions/courseAction";
import Button from "reactstrap/lib/Button";
import { Box, Container } from "@material-ui/core";
import Row from "reactstrap/lib/Row";

class UserAdmin extends Component {
  _handleAddUser = (values) => {
    userService
      .addUser(values, this.props.accessToken)
      .then((res) => {
        console.log(res.data);
        alert("Đã thêm tài khoản thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleSearch = (searchKey) => {
    console.log(searchKey.searchKey);
    userService
      .searchUser(searchKey.searchKey)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_USER_RESULT, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getUserName = () => {
    const userName = JSON.parse(localStorage.getItem("credentials"));
    return userName.taiKhoan;
  };

  _getUserDetail = () => {
    userService
      .fetchUserDetail(this.props.accessToken)
      .then((res) => {
        console.log(res.data);
        this.props.dispatch(createAction(FETCH_USER_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getUnregisteredCourses = () => {
    const userName = this._getUserName();
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

  _handleUpdateUserDetail = (values) => {
    userService
      .updateUserDetail(values, this.props.accessToken)
      .then((res) => {
        alert("Successfully update user details!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleShowUserInfo = (username) => {
    userService
      .fetchUserInfo({ taiKhoan: username }, this.props.accessToken)
      .then((res) => {
        console.log(res.data);
        this.props.dispatch(createAction(FETCH_USER_INFO, res.data));
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
      showOption5: false,
      showOption6: false,
      showOption7: false,
      showOption8: false,
      showOption9: false,
      showOption10: false,
    };
    this._onShowOption1 = this._onShowOption1.bind(this);
    this._onShowOption2 = this._onShowOption2.bind(this);
    this._onShowOption3 = this._onShowOption3.bind(this);
    this._onShowOption5 = this._onShowOption5.bind(this);
    this._onShowOption6 = this._onShowOption6.bind(this);
    this._onShowOption7 = this._onShowOption7.bind(this);
    this._onShowOption8 = this._onShowOption8.bind(this);
    this._onShowOption9 = this._onShowOption9.bind(this);
    this._onShowOption10 = this._onShowOption10.bind(this);
  }

  _onShowOption1() {
    this.setState({
      showOption1: !this.state.showOption1,
    });
    this._getUserDetail();
  }

  _onShowOption2() {
    this.setState({
      showOption2: !this.state.showOption2,
    });
  }

  _onShowOption3() {
    this.setState({
      showOption3: !this.state.showOption3,
    });
  }

  _onShowOption5() {
    this.setState({
      showOption5: !this.state.showOption5,
    });
  }

  _onShowOption6() {
    this.setState({
      showOption6: !this.state.showOption6,
    });
  }

  _onShowOption7() {
    this.setState({
      showOption7: !this.state.showOption7,
    });
    this._getUnregisteredCourses();
    this._getPendingCourses();
    this._getApprovedCourses();
  }

  _onShowOption8() {
    this.setState({
      showOption8: !this.state.showOption8,
    });
    this._getUnregisteredStudents();
    this._getPendingStudents();
    this._getApprovedStudents();
  }

  _onShowOption9() {
    this.setState({
      showOption9: !this.state.showOption9,
    });
  }

  _onShowOption10() {
    this.setState({
      showOption10: !this.state.showOption10,
    });
  }

  renderRegisteredCourses = () => {
    if (!this.props.userDetail.chiTietKhoaHocGhiDanh) return null;

    return this.props.userDetail.chiTietKhoaHocGhiDanh.map((item, index) => {
      return (
        <div className="col-xl-4 col-lg-6 card admin__item__account__detail__col">
          <p>
            <span>Couse Name:</span> {item.tenKhoaHoc || "N/A"}
          </p>
          <p>
            <span>Course ID:</span> {item.maKhoaHoc || "N/A"}
          </p>
        </div>
      );
    });
  };

  _handleDelete = (user) => {
    userService
      .deleteUser(user, this.props.accessToken)
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderUnregisteredCourses = () => {
    if (!this.props.unregisteredCourses) return null;

    return this.props.unregisteredCourses.map((item, index) => {
      return (
        <div className="col-xl-4 col-lg-6 card admin__item__account__detail__col">
          <p>
            <span>Course Name:</span> {item.tenKhoaHoc || "N/A"}
          </p>
          <p>
            <span>Course Nickname:</span> {item.biDanh || "N/A"}
          </p>
          <p>
            <span>Course ID:</span> {item.maKhoaHoc || "N/A"}
          </p>
        </div>
      );
    });
  };

  renderPendingCourses = () => {
    if (!this.props.pendingCourses) return null;

    return this.props.pendingCourses.map((item, index) => {
      return (
        <div className="col-xl-4 col-lg-6 card admin__item__account__detail__col">
          <p>
            <span>Course Name:</span> {item.tenKhoaHoc || "N/A"}
          </p>
          <p>
            <span>Course Nickname:</span> {item.biDanh || "N/A"}
          </p>
          <p>
            <span>Course ID:</span> {item.maKhoaHoc || "N/A"}
          </p>
        </div>
      );
    });
  };

  renderApprovedCourses = () => {
    if (!this.props.approvedCourses) return null;

    return this.props.approvedCourses.map((item, index) => {
      return (
        <div className="col-xl-4 col-lg-6 card admin__item__account__detail__col">
          <p>
            <span>Course Name:</span> {item.tenKhoaHoc || "N/A"}
          </p>
          <p>
            <span>Course Nickname:</span> {item.biDanh || "N/A"}
          </p>
          <p>
            <span>Course ID:</span> {item.maKhoaHoc || "N/A"}
          </p>
        </div>
      );
    });
  };

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

  _getUserName = () => {
    const userName = JSON.parse(localStorage.getItem("credentials"));
    return userName.taiKhoan;
  };

  render() {
    return (
      <div className="admin">
        <div className="admin__item">
          <Button onClick={this._onShowOption1}>Show Account Detail</Button>
          {this.state.showOption1 ? (
            <div className="admin__item__top">
              <div className="admin__item__account__detail">
                <div className="admin__item__account__detail__item">
                  <table>
                    <tr>
                      <td>
                        <p>
                          <span>Phone Number:</span>{" "}
                        </p>
                      </td>

                      <td>{this.props.userDetail.soDT || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Fullname: </span>
                        </p>
                      </td>

                      <td>{this.props.userDetail.hoTen || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Password:</span>{" "}
                        </p>
                      </td>

                      <td>{this.props.userDetail.matKhau || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Username: </span>
                        </p>
                      </td>

                      <td>{this.props.userDetail.taiKhoan || "N/A"}</td>
                    </tr>
                  </table>
                </div>

                <div className="admin__item__account__detail__item">
                  <table>
                    <tr>
                      <td>
                        <p>
                          <span>User ID Type:</span>
                        </p>
                      </td>

                      <td>{this.props.userDetail.maLoaiNguoiDung || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Group ID: </span>
                        </p>
                      </td>

                      <td>{this.props.userDetail.maNhom || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Email Address: </span>
                        </p>
                      </td>

                      <td>{this.props.userDetail.email || "N/A"}</td>
                    </tr>
                  </table>
                </div>
              </div>

              <h3 className="admin__item__account__detail__title">
                Registered Courses:
              </h3>
              <Container>
                <Box>
                  <Box textAlign="center" className="allCourse__headline"></Box>
                  <Row className="admin__item__account__detail__row">
                    {this.renderRegisteredCourses()}
                  </Row>
                </Box>
              </Container>
            </div>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption2}>Update User Detail</Button>
          {this.state.showOption2 ? (
            <>
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  hoTen: "",
                  soDT: "",
                  email: "",
                  maLoaiNguoiDung: "HV",
                  maNhom: "GP01",
                }}
                validationSchema={signupUserSchema}
                onSubmit={this._handleUpdateUserDetail}
                render={(formikProps) => (
                  <Form>
                    <div className="form-group">
                      <label>Account: </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="taiKhoan"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="taiKhoan">
                        {(msg) => (
                          <div className="alert alert-dander">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Password: </label>
                      <Field
                        type="password"
                        className="form-control"
                        name="matKhau"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="matKhau" />
                    </div>
                    <div className="form-group">
                      <label>Full name: </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="hoTen"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="hoTen" />
                    </div>
                    <div className="form-group">
                      <label>Email: </label>
                      <Field
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="email" />
                    </div>
                    <div className="form-group">
                      <label>Phone number: </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="soDT"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="soDT" />
                    </div>
                    <div className="form-group">
                      <label>Group ID: </label>
                      <Field
                        component="select"
                        className="form-control"
                        name="maNhom"
                        onChange={formikProps.handleChange}
                      >
                        <option>GP01</option>
                        <option>GP02</option>
                        <option>GP03</option>
                        <option>GP04</option>
                        <option>GP05</option>
                        <option>GP06</option>
                        <option>GP07</option>
                        <option>GP08</option>
                        <option>GP09</option>
                        <option>GP10</option>
                      </Field>
                      <div className="form-group">
                        <label>User Type ID: </label>
                        <Field
                          component="select"
                          className="form-control"
                          name="maLoaiNguoiDung"
                          onChange={formikProps.handleChange}
                        >
                          <option>HV</option>
                          <option>GV</option>
                        </Field>
                      </div>
                      <div className="text-center">
                        <button className="admin__item__button btn btn-secondary">
                          Update
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption3}>Add New User</Button>
          {this.state.showOption3 ? (
            <div className="admin__item__top">
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  hoTen: "",
                  soDT: "",
                  email: "",
                  maLoaiNguoiDung: "HV",
                  maNhom: "GP01",
                }}
                validationSchema={signupUserSchema}
                onSubmit={this._handleAddUser}
                render={(formikProps) => (
                  <Form>
                    <div className="form-group">
                      <label>Username: </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="taiKhoan"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="taiKhoan">
                        {(msg) => (
                          <div className="alert alert-dander">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Password: </label>
                      <Field
                        type="password"
                        className="form-control"
                        name="matKhau"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="matKhau" />
                    </div>
                    <div className="form-group">
                      <label>Fullname: </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="hoTen"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="hoTen" />
                    </div>
                    <div className="form-group">
                      <label>Email: </label>
                      <Field
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="email" />
                    </div>
                    <div className="form-group">
                      <label>Phone number: </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="soDT"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <ErrorMessage name="soDT" />
                    </div>
                    <div className="form-group">
                      <label>Group ID: </label>
                      <Field
                        component="select"
                        className="form-control"
                        name="maNhom"
                        onChange={formikProps.handleChange}
                      >
                        <option>GP01</option>
                        <option>GP02</option>
                        <option>GP03</option>
                        <option>GP04</option>
                        <option>GP05</option>
                        <option>GP06</option>
                        <option>GP07</option>
                        <option>GP08</option>
                        <option>GP09</option>
                        <option>GP10</option>
                      </Field>
                      <div className="form-group">
                        <label>User Type ID: </label>
                        <Field
                          component="select"
                          className="form-control"
                          name="maLoaiNguoiDung"
                          onChange={formikProps.handleChange}
                        >
                          <option>HV</option>
                          <option>GV</option>
                        </Field>
                      </div>
                      <div className="text-center">
                        <button className="admin__item__button btn btn-secondary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </div>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption5}>List of All Users</Button>
          {this.state.showOption5 ? (
            <div className="admin__item__top">
              <div className="row admin__item__account__detail__row">
                {this.props.userList.map((item, index) => (
                  <div
                    className="col-xl-4 col-lg-6 card admin__item__account__detail__col"
                    key={index}
                  >
                    <p><span>Username:</span> {item.taiKhoan || "N/A"}</p>
                    <p><span>Fullname:</span> {item.hoTen || "N/A"}</p>
                    <p><span>mail Address:</span>E {item.email || "N/A"}</p>
                    <p><span>Phone Number:</span> {item.soDT || "N/A"}</p>
                    <p>
                      User Type:
                      {item.maLoaiNguoiDung === "HV" ? (
                        <span> Student</span>
                      ) : (
                        <span> Teacher</span>
                      )}
                    </p>
                    <Link
                      to="/user-info"
                      onClick={() => this._handleShowUserInfo(item.taiKhoan)}
                      className="admin__item__user__link"
                    >
                      User Details
                    </Link>
                    <button
                        className="admin__item__button__sub admin__item__button__item btn btn-secondary"
                        onClick={() => this._handleDelete(item.taiKhoan)}
                    >
                      Remove User
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption6}>Find User</Button>
          {this.state.showOption6 ? (
            <>
              <div className="admin__item__top">
                <Formik
                  initialValues={{
                    searchKey: "",
                  }}
                  onSubmit={this._handleSearch}
                  render={(formikProps) => (
                    <>
                      <Form>
                        <div className="form-group">
                          <Field
                            className="form-control"
                            name="searchKey"
                            onChange={formikProps.handleChange}
                          ></Field>
                          <div className="text-center">
                            <button className="admin__item__button btn btn-secondary">
                              Go!
                            </button>
                          </div>
                        </div>
                      </Form>
                    </>
                  )}
                />
              </div>
              <div className="admin__item__top">
                <div className="row admin__item__account__detail__row">
                  {this.props.userResult.map((item, index) => (
                    <div className="col-xl-4 col-lg-6 card admin__item__account__detail__col" key={index}>
                      <p><span>Username:</span> {item.taiKhoan || "N/A"}</p>
                      <p><span>Fullname: </span>{item.hoTen || "N/A"}</p>
                      <p><span>Email Address:</span> {item.email || "N/A"}</p>
                      <p><span>Phone Number:</span> {item.soDT || "N/A"}</p>
                      <p><span>Password:</span> {item.matKhau || "N/A"}</p>
                      <p><span>User Type ID:</span>  {item.maLoaiNguoiDung || "N/A"}</p>
                      <p><span>User Type:</span>  {item.tenLoaiNguoiDung || "N/A"}</p>
                      <Link
                        to="/user-info"
                        onClick={() => this._handleShowUserInfo(item.taiKhoan)}
                      >
                        User Details
                      </Link>
                      <button
                        className="admin__item__button__sub admin__item__button__item btn btn-secondary"
                        onClick={() => this._handleDelete(item.taiKhoan)}
                      >
                        Remove User
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption7}>
            Courses Registration Status
          </Button>
          {this.state.showOption7 ? (
            <div className="admin__item__top">
              <button
                className="admin__item__button btn btn-secondary"
                onClick={this._onShowOption8}
              >
                List of Unregistered Courses
              </button>
              {this.state.showOption8 ? (
                <div className="admin__item__top">
                  <Container>
                    <Box className="allCourse">
                      <Box
                        textAlign="center"
                        className="allCourse__headline"
                      ></Box>
                      <Row className="admin__item__account__detail__row">
                        {this.renderUnregisteredCourses()}
                      </Row>
                    </Box>
                  </Container>
                </div>
              ) : null}

              <button
                className="admin__item__button btn btn-secondary"
                onClick={this._onShowOption9}
              >
                List of Pending for Approval Courses
              </button>
              {this.state.showOption9 ? (
                <div className="admin__item__top">
                  <Container>
                    <Box className="allCourse">
                      <Box
                        textAlign="center"
                        className="allCourse__headline"
                      ></Box>
                      <Row className="admin__item__account__detail__row">
                        {this.renderPendingCourses()}
                      </Row>
                    </Box>
                  </Container>
                </div>
              ) : null}

              <button
                className="admin__item__button btn btn-secondary"
                onClick={this._onShowOption10}
              >
                List of Approved Courses
              </button>
              {this.state.showOption10 ? (
                <div className="admin__item__top">
                  <Container>
                    <Box className="allCourse">
                      <Box
                        textAlign="center"
                        className="allCourse__headline"
                      ></Box>
                      <Row className="admin__item__account__detail__row">
                        {this.renderApprovedCourses()}
                      </Row>
                    </Box>
                  </Container>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getListCourse());
    userService
      .fetchUserList()
      .then((res) => {
        this.props.dispatch(createAction(FETCH_USER_LIST, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => {
  return {
    unregisteredCourses: state.auth.unregisteredCourses,
    pendingCourses: state.auth.pendingCourses,
    approvedCourses: state.auth.approvedCourses,
    userList: state.auth.userList,
    courseList: state.course.courseList,
    courseID: state.course.courseID || { maKhoaHoc: "" },
    accessToken: state.auth.accessToken,
    userList: state.auth.userList,
    credentials: state.auth.loggedInUser,
    userResult: state.auth.userResult || {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      tenLoaiNguoiDung: "",
      email: "",
    },
    userInfo: state.auth.userInfo || {
      chiTietKhoaHocGhiDanh: {
        maKhoaHoc: "",
        tenKhoaHoc: "",
      },
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      email: "",
    },
    userDetail: state.auth.userDetail || {
      chiTietKhoaHocGhiDanh: {
        maKhoaHoc: "",
        tenKhoaHoc: "",
      },
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      email: "",
    },
  };
};

export default connect(mapStateToProps)(UserAdmin);
