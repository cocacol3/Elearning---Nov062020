import Axios from "axios";
import { createAction } from ".";
import { FETCH_APPROVED_COURSES, FETCH_APPROVED_STUDENTS, FETCH_PENDING_COURSES, FETCH_PENDING_STUDENTS, FETCH_UNREGISTERED_COURSES, FETCH_UNREGISTERED_STUDENTS, FETCH_USER_DETAIL, FETCH_USER_INFO, FETCH_USER_LIST, SET_USER } from './type';
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Field is required!"),
  matKhau: yup.string().required("*Field is required!"),
  hoTen: yup.string().required("*Field is required!"),
  email: yup
    .string()
    .required("*Field is required!")
    .email("*Email is invalid"),
  soDT: yup
    .string()
    .matches(/^[0-9]+$/)
    .required("*Field is required!"),
  maNhom: yup.string().required("*Field is required!"),
});

export const signUp = (user) => {
  return (dispatch) => {
    Axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((res) => {
        alert("Sign up sucessful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logIn = (loginUser) => {
  return (dispatch) => {
    Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: loginUser,
    })
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("credentials", JSON.stringify(res.data));
        localStorage.setItem("accessToken", JSON.stringify(`Bearer ${res.data.accessToken}`));
        dispatch(createAction(SET_USER, res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const fetchUserType = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung",
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

  export const fetchUnregistedCourses = (user, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${user}`,
        headers: { Authorization: `${accessToken}` },
      })
        .then((res) => {
          dispatch(createAction(FETCH_UNREGISTERED_COURSES, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchPendingCourses = (user, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",
        headers: { Authorization: `${accessToken}` },
        data: { taiKhoan: `${user}` },
      })
        .then((res) => {
  
          dispatch(createAction(FETCH_PENDING_COURSES, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchApprovedCourses = (user, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
        headers: { Authorization: `${accessToken}` },
        data: { taiKhoan: `${user}` },
      })
        .then((res) => {
  
          dispatch(createAction(FETCH_APPROVED_COURSES, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchUnregisteredStudents = (courseID, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
        headers: { Authorization: `${accessToken}` },
        data: { maKhoaHoc: `${courseID}` },
      })
        .then((res) => {
  
          dispatch(createAction(FETCH_UNREGISTERED_STUDENTS, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchPendingStudents = (courseID, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet",
        headers: { Authorization: `${accessToken}` },
        data: { maKhoaHoc: `${courseID}` },
      })
        .then((res) => {
  
          dispatch(createAction(FETCH_PENDING_STUDENTS, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchApprovedStudents = (courseID, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
        headers: { Authorization: `${accessToken}` },
        data: { maKhoaHoc: `${courseID}` },
      })
        .then((res) => {
  
          dispatch(createAction(FETCH_APPROVED_STUDENTS, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchUserDetail = (accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
        headers: { Authorization: `${accessToken}` },
      })
        .then((res) => {
  
          dispatch(createAction(FETCH_USER_DETAIL, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const deleteUser = (userName, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "DELETE",
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`,
        headers: { Authorization: `${accessToken}` },
      })
        .then((res) => {
  
alert('User has been deleted successfully!')        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchUserList = () => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      })
        .then((res) => {
  
          dispatch(createAction(FETCH_USER_LIST, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchUserListByPage = (page, pageSize) => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${page}&pageSize=${pageSize}`,
      })
        .then((res) => {
  console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const searchUser = (searchKey) => {
    return (dispatch) => {
      Axios({
        method: "GET",
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${searchKey}`,
      })
        .then((res) => {
          dispatch(createAction(FETCH_USER_LIST, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const fetchUserInfo = (user, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        headers: { Authorization: `${accessToken}` },
        data:user,
      })
        .then((res) => {
  
          dispatch(createAction(FETCH_USER_INFO, res.data))
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const addUser = (data, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "POST",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        headers: { Authorization: `${accessToken}` },
        data,
      })
        .then((res) => {
  alert('User has been added successfully!')
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const updateUserDetail = (data, accessToken) => {
    return (dispatch) => {
      Axios({
        method: "PUT",
        url:
          'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
        headers: { Authorization: `${accessToken}` },
        data,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };



