import React, { useState } from "react";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";
import PreloadingPage from "../../Components/PreloadingPage/index";
import PageBanner from "../../Components/PageBanner";
import { useSelector } from "react-redux";
import { Box, Container } from "@material-ui/core";
import Row from "reactstrap/lib/Row";

const UserInfo = (props) => {
  //Loading Page
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  // End of loaing page

  const [state, setstate] = useState({
    chiTietKhoaHocGhiDanh: {
      maKhoaHoc: "",
      tenKhoaHoc: "",
    },
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    email: "",
  });

  const userInfo = useSelector((state) => {
    return state.auth.userInfo;
  });

  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <PageBanner title={`User Info: ${userInfo.taiKhoan}`} />
          <div className="admin">
          <h3 className="admin__item__account__detail__title">
                    Basic Information
                  </h3>
            <div className="admin__item__top">
              <div className="admin__item__account__detail">
                <div className="admin__item__account__detail__item">

                  <table>
                    <tr>
                      <td>
                        <p>
                          <span>Phone Number:</span>{" "}
                        </p>
                      </td>

                      <td>{userInfo.soDT || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Fullname: </span>
                        </p>
                      </td>

                      <td>{userInfo.hoTen || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Password:</span>{" "}
                        </p>
                      </td>

                      <td>{userInfo.matKhau || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Username: </span>
                        </p>
                      </td>

                      <td>{userInfo.taiKhoan || "N/A"}</td>
                    </tr>
                  </table>
                </div>

                <div className="admin__item__account__detail__item">
                  <table>
                    <tr>
                      <td>
                        <p>
                          <span>User ID Type:</span>
                        </p>
                      </td>

                      <td>{userInfo.maLoaiNguoiDung || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Group ID: </span>
                        </p>
                      </td>

                      <td>{userInfo.maNhom || "N/A"}</td>
                    </tr>

                    <tr>
                      <td>
                        <p>
                          <span>Email Address: </span>
                        </p>
                      </td>

                      <td>{userInfo.email || "N/A"}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <h3 className="admin__item__account__detail__title">
              Registered Courses:
            </h3>
            <Container>
              <Box>
                <Box textAlign="center" className="allCourse__headline"></Box>
                <Row className="admin__item__account__detail__row">
                  {userInfo.chiTietKhoaHocGhiDanh.map((item, index) => {
                    return (
                      <div className="col-3 card admin__item__account__detail__col">
                        <p>
                          <span>Couse Name:</span> {item.tenKhoaHoc}
                        </p>
                        <p>
                          <span>Course ID:</span> {item.maKhoaHoc}
                        </p>
                      </div>
                    );
                  })}
                </Row>
              </Box>
            </Container>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default UserInfo;
