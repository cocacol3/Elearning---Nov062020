import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { fetchCourseCategories } from "../../Redux/Actions/course";
=======
import { fetchCourseCategories } from "../../Redux/Actions/courseAction";
>>>>>>> update2021

class CourseCategories extends Component {
  render() {
    return (
      <>
<<<<<<< HEAD
        <h1>Danh Mục Khóa Học</h1>
        <div className="row">
          {this.props.CourseCategories.map((item, index) => (
            <Link
              className="card col-3"
              to={`/course-categories-detail/${item.maDanhMuc}`}
            >
              <p>{item.tenDanhMuc}</p>
              <p>ID: {item.maDanhMuc}</p>
=======
        <div className="course__categories row">
          {this.props.CourseCategories.map((course, index) => (
            <Link
              className="course__categories__item card col-3"
              to={`/course-categories-detail/${course.maDanhMuc}`}
            >
              <p>{course.tenDanhMuc}</p>
              {/* <p>ID: {course.maDanhMuc}</p> */}
>>>>>>> update2021
            </Link>
          ))}
        </div>
      </>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseCategories());
  }
}

const mapStateToProps = (state) => ({
  CourseCategories: state.course.courseCategories,
});

export default connect(mapStateToProps)(CourseCategories);
