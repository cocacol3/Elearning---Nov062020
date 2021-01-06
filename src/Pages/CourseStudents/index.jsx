import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import {
  CLEAR_COURSE_CATEGORIES_DETAIL,
  FETCH_COURSE_STUDENTS,
} from "../../Redux/Actions/type";
import { courseService, userService } from "../../Services";

class CourseStudents extends Component {
  _handleConfirmRegistration = (userName) => {
    userService
      .confirmRegistration(
        {
          maKhoaHoc: this.props.match.params.listId,
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

  _handleRegister = (userName) => {
    userService
      .registerCourse(
        {
          maKhoaHoc: this.props.match.params.listId,
          taiKhoan: userName,
        },
        this.props.accessToken
      )
      .then((res) => {
        console.log(res);
        alert("Student was registered successfully to this course!")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleCancelRegistration = (userName) => {
    userService
      .cancelRegistration(
        {
          maKhoaHoc: this.props.match.params.listId,
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

  _getAccessToken = () => {
    return JSON.parse(localStorage.getItem("accessToken"));
  };

  render() {
    return (
      <div>
        DANH SÁCH HỌC VIÊN:
        {/* {this.props.StudentList.map((course, index) => (
          <div className="card col-3">
            <p>{course.hoTen}</p>
            <br />
            <button
              className="btn btn-success"
              onClick={() => this._handleRegister(course.taiKhoan)}
            >
              Đăng ký
            </button>
            <br />
            <button
              className="btn btn-success"
              onClick={() => this._handleConfirmRegistration(course.taiKhoan)}
            >
              Ghi danh
            </button>
            <br />
            <button
              className="btn btn-success"
              onClick={() => this._handleCancelRegistration(course.taiKhoan)}
            >
              Hủy ghi danh
            </button>
          </div>
        ))} */}
      </div>
    );
  }

  componentDidMount() {
    const accessToken = this._getAccessToken();
    console.log(accessToken)
    courseService
      .fetchCourseStudents(this.props.match.params.listId, accessToken)
      .then((res) => {
        this.props.dispatch(
          createAction(FETCH_COURSE_STUDENTS, res.data.lstHocVien)
        );
      })
      .catch((err) => {
        console.log(err);
        this.props.dispatch(createAction(CLEAR_COURSE_CATEGORIES_DETAIL, err));
      });
  }
}

const mapStateToProps = (courseReducer, authReducer) => ({
  StudentList: courseReducer.courseStudents || {
    taiKhoan: "",
    hoTen: "",
  },
  accessToken: authReducer.accessToken,
});

export default connect(mapStateToProps)(CourseStudents);
