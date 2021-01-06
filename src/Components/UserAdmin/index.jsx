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
        this.props.dispatch(createAction(FETCH_USER_LIST, res.data));
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
        alert("Cập nhập thông tin tài khoản thành công!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleShowUserInfo = () => {
    userService
      .fetchUserInfo(
        { taiKhoan: this.props.credentials.taiKhoan },
        this.props.accessToken
      )
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
      showOption4: false,
      showOption5: false,
      showOption6: false,
    };
    this._onShowOption1 = this._onShowOption1.bind(this);
    this._onShowOption2 = this._onShowOption2.bind(this);
    this._onShowOption3 = this._onShowOption3.bind(this);
    this._onShowOption4 = this._onShowOption4.bind(this);
    this._onShowOption5 = this._onShowOption5.bind(this);
    this._onShowOption6 = this._onShowOption6.bind(this);
  }

  _onShowOption1() {
    this.setState({
      showOption1: !this.state.showOption1,
    });
    this._handleShowUserInfo();
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

  _onShowOption4() {
    this.setState({
      showOption4: !this.state.showOption4,
    });
    this._getUserDetail()
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

  render() {
    return (
      <div>
        <div className="admin__item">
          <Button onClick={this._onShowOption1}>Show Account Detail</Button>
          {this.state.showOption1 ? (
            <div className="admin__item__top">
              <h1 className="text-center">Show Account Detail</h1>
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
                        <button className="btn btn-success">Update</button>
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
                        <button className="btn btn-success">Submit</button>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </div>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption4}>User Details</Button>
          {this.state.showOption4 ? (
            <div className="admin__item__top">
              <button onClick={this._getUserDetail}>SHOW User Details </button>
            </div>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption5}>Users List</Button>
          {this.state.showOption5 ? (
            <div className="admin__item__top">
              <button>
                <Link to="/user-list">Users List</Link>
              </button>
            </div>
          ) : null}
        </div>

        <div className="admin__item">
          <Button onClick={this._onShowOption6}>Find User</Button>
          {this.state.showOption6 ? (
            <div className="admin__item__top">
              <Formik
                initialValues={{
                  searchKey: "",
                }}
                onSubmit={this._handleSearch}
                render={(formikProps) => (
                  <Form>
                    <div className="form-group">
                      <Field
                        className="form-control"
                        name="searchKey"
                        onChange={formikProps.handleChange}
                      ></Field>
                      <div className="text-center">
                        <button className="btn btn-success">Go!</button>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </div>
          ) : null}
        </div>

        {/* <Formik
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
                  {(msg) => <div className="alert alert-dander">{msg}</div>}
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
                  <button className="btn btn-success">Submit</button>
                </div>
              </div>
            </Form>
          )}
        /> */}
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getListCourse());
  }
}

const mapStateToProps = (state) => {
  return {
    abcCourseList: state.auth.unregisteredCourses,
    courseList: state.course.courseList,
    courseID: state.course.courseID || { maKhoaHoc: "" },
    accessToken: state.auth.accessToken,
    userList: state.auth.userList,
    credentials: state.auth.loggedInUser,
  };
};

export default connect(mapStateToProps)(UserAdmin);
