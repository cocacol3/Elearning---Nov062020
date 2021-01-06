<<<<<<< HEAD
import Axios from 'axios';
 
export const getListCourse = () => {
    return (dispatch) => {
        Axios({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            method: "GET",
            data: null,
        }).then((res) => {
                dispatch({
                    type: "GET_LIST_COURSE",
                    payload:res.data,
                })
        }).catch((err) => {
            console.log(err)
        });
    }
}
=======
import Axios from "axios";
import { createAction } from ".";
import {
  FETCH_COURSE_CATEGORIES,
  FETCH_COURSE_CATEGORIES_DETAIL,
  FETCH_COURSE_DETAIL,
  FETCH_COURSE_RESULT,
  FETCH_COURSE_STUDENTS,
  GET_LIST_COURSE,
  CLEAR_COURSE_RESULT,
} from "./type";

export const getListCourse = () => {
  return (dispatch) => {
    Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(GET_LIST_COURSE, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const searchCourse = (courseName) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${courseName}&MaNhom=GP01`,
    })
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_RESULT, res.data));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(createAction(CLEAR_COURSE_RESULT, err));
        alert('No course found')
      });
  };
};

export const fetchCourseCategories = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    })
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_CATEGORIES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseCategoriesDetail = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`,
    })
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_CATEGORIES_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseDetail = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    })
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseStudents = (id, accessToken) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${id}`,
      headers: { Authorization: `${accessToken}` },
    })
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_STUDENTS, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const uploadCourse = (form_data) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh",
      data: form_data,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCourse = (courseID, accessToken) => {
  return (dispatch) => {
    Axios({
      method: "DELETE",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${courseID}`,
      headers: { Authorization: `${accessToken}` },
    })
      .then((res) => {
        console.log(res.data);
        alert('Course was deleted successfully!')
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const confirmRegistration = (data, accessToken) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc",
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

export const registerCourse = (data, accessToken) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
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

export const cancelRegistration = (data, accessToken) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
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
>>>>>>> update2021
