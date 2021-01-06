import React, { Component } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { fetchCourses } from "../../Redux/Actions/course";
=======
// import { fetchCourses } from "../../Redux/Actions/courseAction";
>>>>>>> update2021
import CourseItem from "../CourseItem";


class CourseList extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh Sách Khóa Học</h1>
        <button>Thêm khóa học</button>
        <div className="container">
          <div className="row">
<<<<<<< HEAD
            {this.props.courseList.map((item, index) => (
              <div className="col-3">
                <CourseItem item={item} />
              </div>
            ))}
=======
            {/* {this.props.courseList.map((item, index) => (
              <div className="col-3">
                <CourseItem item={item} />
              </div>
            ))} */}
>>>>>>> update2021
          </div>
        </div>
      </div>
    );
  }
<<<<<<< HEAD
  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }
=======
  // componentDidMount() {
  //   this.props.dispatch(fetchCourses());
  // }
>>>>>>> update2021
}

const mapStatetoProps = (state) => ({
    courseList: state.course.courses,
  });

export default connect(mapStatetoProps)(CourseList);
