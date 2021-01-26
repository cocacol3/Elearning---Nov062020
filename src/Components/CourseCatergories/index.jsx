import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCourseCategories } from "../../Redux/Actions/courseAction";

class CourseCategories extends Component {
  render() {
    return (
      <>
        <div className="course__categories row">
          {this.props.CourseCategories.map((course, index) => (
            <Link
              className="course__categories__item card col-3"
              to={`/course-categories-detail/${course.maDanhMuc}`}
            >
              <p>{course.tenDanhMuc}</p>
              {/* <p>ID: {course.maDanhMuc}</p> */}
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
