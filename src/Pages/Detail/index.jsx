import React, { Component } from "react";
import { connect } from "react-redux";
import { courseService } from "../../Services";
import { createAction } from "../../Redux/Actions";
import { FETCH_COURSE_DETAIL } from "../../Redux/Actions/type";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageBanner from "../../Components/PageBanner";
import { Container } from "@material-ui/core";

class CourseDetail extends Component {
  render() {
    return (
      <>
        <Header />
        <PageBanner title="Course Detail" />
        <div className="single-event-detail">
          <Container>
            <h4>{this.props.courseDetail.tenKhoaHoc}</h4>
            <div className="single-event-detail__subtitle__item">
              <span>Created on: {this.props.courseDetail.ngayTao}</span>
            </div>
            <div className="single-event-detail__picture">
              <img src={this.props.courseDetail.hinhAnh} alt="course detail" />
            </div>

            
            <div className="single-event-detail__middle-text">
              <p>Description: {this.props.courseDetail.moTa}</p>
            </div>
            <div className="admin__item__account__detail">
                <div className="admin__item__account__detail__item">
                  <table>
                    <tr>
                      <td>
                        <p>
                          <span>Course ID:</span>{" "}
                        </p>
                      </td>

                      <td>{this.props.courseDetail.maKhoaHoc || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Course Nickname: </span>
                        </p>
                      </td>

                      <td>{this.props.courseDetail.biDanh || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Views:</span>{" "}
                        </p>
                      </td>

                      <td>{this.props.courseDetail.luotXem || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Group ID: </span>
                        </p>
                      </td>
                      <td>{this.props.courseDetail.maNhom || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Number of Students:</span>{" "}
                        </p>
                      </td>

                      <td>{this.props.courseDetail.soLuongHocVien || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Created by: </span>
                        </p>
                      </td>
                      <td>{this.props.courseDetail.nguoiTao.taiKhoan || "N/A"}</td>
                    </tr>

                  </table>
                </div>

                <div className="admin__item__account__detail__item">
                  <table>
                    <tr>
                      <td>
                        <p>
                          <span>Creator Fullname:</span>
                        </p>
                      </td>
                      <td>{this.props.courseDetail.nguoiTao.hoTen || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>User Type ID of Creator: </span>
                        </p>
                      </td>
                      <td>{this.props.courseDetail.nguoiTao.maLoaiNguoiDung || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Name of User Type: </span>
                        </p>
                      </td>
                      <td>{this.props.courseDetail.nguoiTao.tenLoaiNguoiDung || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Catergory Type ID of Course: </span>
                        </p>
                      </td>
                      <td>{this.props.courseDetail.danhMucKhoaHoc.maDanhMucKhoaHoc || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Name of Catergory Type: </span>
                        </p>
                      </td>
                      <td>{this.props.courseDetail.danhMucKhoaHoc.tenDanhMucKhoaHoc || "N/A"}</td>
                    </tr>
                  </table>
                </div>
              </div>
            
          </Container>
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
    moTa: "",
    luotXem: "",
    hinhAnh: "",
    maNhom: "",
    ngayTao: "",
    soLuongHocVien: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
      maLoaiNguoiDung: "",
      tenLoaiNguoiDung: "",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "",
      tenDanhMucKhoaHoc: "",
    },
  },
});

export default connect(mapStatetoProps)(CourseDetail);
