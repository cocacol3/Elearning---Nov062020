import React, { Component } from "react";
import { connect } from "react-redux";
import { courseService } from "../../Services";
import { createAction } from "../../Redux/Actions";
import { FETCH_COURSE_DETAIL } from "../../Redux/Actions/type";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageBanner from "../../Components/PageBanner";

class CourseDetail extends Component {
  render() {
    return (
      <>
        <Header />
        <PageBanner title='Course Detail'/>
        <div>
          <img src={this.props.courseDetail.hinhAnh} alt="course detail" />
          {/* <h3> */}
        </div>
        <Footer />
      </>
    );
  }
  componentDidMount() {
    courseService
      .fetchCourseDetail(this.props.match.params.courseId)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStatetoProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});

export default connect(mapStatetoProps)(CourseDetail);
