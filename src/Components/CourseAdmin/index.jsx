import React, { Component } from "react";
import CourseList from "../CourseList";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { courseService, userService } from "../../Services";
import CourseCatergories from "../CourseCatergories";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import {
  FETCH_COURSE_RESULT,
  FETCH_USER_DETAIL,
} from "../../Redux/Actions/type";
import Button from "reactstrap/lib/Button";

class CourseAdmin extends Component {
  _getAccessToken = () => {
    return JSON.parse(localStorage.getItem("accessToken"));
  };

  state = {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    hinhAnh: "",
    maNhom: "GP01",
    ngayTao: "06/12/2020",
    maDanhMucKhoaHoc: "BackEnd",
    taiKhoanNguoiTao: "admin_test",
    // taiKhoanNguoiTao: this.props.credentials.taiKhoan,
  };

  handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      this.setState({ hinhAnh: e.target.files[0] }, () => {
        console.log(this.state);
      });
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {
        console.log(this.state);
      });
    }
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in this.state) {
      // console.log(key, this.state(key));
      form_data.append(key, this.state[key]);
      console.log("tenKhoaHoc", form_data.get(key));
    }

    // return;

    e.preventDefault();
    const accessToken = this._getAccessToken;
    courseService
      .uploadCourse(form_data, accessToken)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // _handleUpdate = (e) => {
  //   e.preventDefault();
  //   var form_data = new FormData();
  //   for (var key in this.state) {
  //     form_data.append(key, this.state[key]);
  //   }

  //   e.preventDefault();
  //   const accessToken = this._getAccessToken();
  //   console.log(accessToken);
  //   console.log(this.state.maKhoaHoc);
  //   courseService
  //     .updateCourse(form_data, accessToken)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // _handleSearch = (e) => {
  //   e.preventDefault();
  //   courseService
  //     .searchCourse(this.state.tenKhoaHoc)
  //     .then((res) => {
  //       console.log(res.data);
  //       this.props.dispatch(createAction(FETCH_COURSE_RESULT, res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // };

  constructor(props) {
    super(props);
    this.state = {
      showAddCourse: false,
      showCategories: false,
    };
    this._onShowAddCourse = this._onShowAddCourse.bind(this);
    this._onShowCategories = this._onShowCategories.bind(this);
  }

  _onShowAddCourse() {
    this.setState({
      showAddCourse: !this.state.showAddCourse,
    });
  }

  _onShowCategories() {
    this.setState({
      showCategories: !this.state.showCategories,
    });
  }

  render() {
    return (
      <div>
        <div className="admin">
          <div className="admin__item">
            <Button onClick={this._onShowAddCourse}>Add a new course</Button>
            {this.state.showAddCourse ? (
              <>
                <form className="admin__item__top">
                  <div className="form-group">
                    <label>
                      To start mananging courses, please select a Course ID:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="maKhoaHoc"
                      onChange={this.handleChange}
                    ></input>
                    {/* <ErrorMessage name="maKhoaHoc">
                      {(msg) => <div className="alert alert-dander">{msg}</div>}
                    </ErrorMessage> */}
                  </div>
                  <div className="form-group">
                    <label>Course nickname: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="biDanh"
                      onChange={this.handleChange}
                    ></input>
                    {/* <ErrorMessage name="biDanh" /> */}
                  </div>
                  <div className="form-group">
                    <label>Course name: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="tenKhoaHoc"
                      onChange={this.handleChange}
                    ></input>
                    {/* <ErrorMessage name="tenKhoaHoc" /> */}
                  </div>
                  <div className="form-group">
                    <label>Course descriptions: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="moTa"
                      onChange={this.handleChange}
                    ></input>
                    {/* <ErrorMessage name="moTa" /> */}
                  </div>

                  <div className="form-group">
                    <label>Picture: </label>
                    <input
                      type="file"
                      className="form-control"
                      name="hinhAnh"
                      onChange={this.handleChange}
                    ></input>
                    {/* <ErrorMessage name="hinhAnh" /> */}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={this._handleSubmit}
                      className="admin__item__button btn btn-secondary"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </>
            ) : null}
          </div>

          <div className="admin__item">
            <Button onClick={this._onShowCategories}>
              Show Course Catergories
            </Button>
            {this.state.showCategories ? (
              <div className="admin__item__top">
                <p className="text-center">
                  Click on a course catergory to show relevant courses and select to
                  remove any course:
                </p>
                <CourseCatergories />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const accessToken = this._getAccessToken();
    userService
      .fetchUserDetail(accessToken)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_USER_DETAIL, res.data));
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (authReducer) => ({
  credentials: authReducer.credentials || {
    taiKhoan: "",
  },
  accessToken: authReducer.accessToken,
});

export default connect(mapStateToProps)(CourseAdmin);
