import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import { courseService } from "../../Services";
import {
  FETCH_COURSE_CATEGORIES_DETAIL,
  CLEAR_COURSE_CATEGORIES_DETAIL,
} from "../../Redux/Actions/type";
import CourseItem from "../../Components/CourseItem";
import CourseItemAdmin from "../../Components/CourseItemAdmin";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageBanner from "../../Components/PageBanner";

class CourseCategoriesItemDetail extends Component {
  render() {
    return (
      <div>
        <Header/>
        <PageBanner title={`Catergory: ${this.props.match.params.courseCategoriesId}`}/>
        <div className="container">
                <div id="no-result"></div>
                <div className="row">
                  {this.props.courseCategoriesItemDetail.map((course, index) => (
                      <CourseItemAdmin course={course} />
                  ))}
                </div>
        </div>
        <Footer/>
      </div>
    );
  }

  componentDidMount() {
    courseService
      .fetchCourseCategoriesDetail(this.props.match.params.courseCategoriesId)
      .then((res) => {
        this.props.dispatch(
          createAction(FETCH_COURSE_CATEGORIES_DETAIL, res.data)
        );
      })
      .catch((err) => {
        this.props.dispatch(
          createAction(CLEAR_COURSE_CATEGORIES_DETAIL, err)
        );
        document.getElementById("no-result").innerHTML="No result(s)"
      });
  }
}

const mapStatetoProps = (state) => ({
  courseCategoriesItemDetail: state.course.courseCategoriesItemDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "",
      tenDanhMucKhoaHoc: "",
    },
  },
});

export default connect(mapStatetoProps)(CourseCategoriesItemDetail);
