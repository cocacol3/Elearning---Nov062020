import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import { courseService } from "../../Services";
import {
  FETCH_COURSE_CATEGORIES_DETAIL,
  CLEAR_COURSE_CATEGORIES_DETAIL,
} from "../../Redux/Actions/type";
import CourseItem from "../../Components/CourseItem";
<<<<<<< HEAD
=======
import CourseItemAdmin from "../../Components/CourseItemAdmin";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageBanner from "../../Components/PageBanner";
>>>>>>> update2021

class CourseCategoriesItemDetail extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <div className="container">
              <h1 className="display-4 text-left">
                Các khóa học có mã danh mục "
                {this.props.match.params.courseCategoriesId}" là:
                <div id="no-result"></div>
                <div className="row">
                  {this.props.courseCategoriesItemDetail.map((item, index) => (
                    <div className="col-3">
                      <CourseItem item={item} />
                    </div>
                  ))}
                </div>
              </h1>
        </div>
=======
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
>>>>>>> update2021
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
<<<<<<< HEAD
        document.getElementById("no-result").innerHTML="Không tìm thấy kết quả"
=======
        document.getElementById("no-result").innerHTML="No result(s)"
>>>>>>> update2021
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
