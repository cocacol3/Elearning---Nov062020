let initialState = {
  courseList: [],
  courseResult: [],
  courseDetail: null,
  courseCategories: [],
  courseCategoriesItemDetail: [],
  courseStudents: [],
  courseID: [],
  credentials:[],
};

const courseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_LIST_COURSE":
      state.courseList = actions.payload;
      return { ...state };
    case "FETCH_COURSE_RESULT": 
      state.courseResult = actions.payload;
      return { ...state };
    case "FETCH_COURSE_DETAIL":
      state.courseDetail = actions.payload;
      return { ...state };
    case "FETCH_COURSE_CATEGORIES":
      state.courseCategories = actions.payload;
      return { ...state };
    case "FETCH_COURSE_CATEGORIES_DETAIL":
      state.courseCategoriesItemDetail = actions.payload;
      return { ...state };
    case "CLEAR_COURSE_CATEGORIES_DETAIL":
      state.courseCategoriesItemDetail = [];
      state.courseStudents = [];
      return { ...state };
      case "CLEAR_COURSE_RESULT":
        state.courseResult = [];
        return { ...state };
    case "FETCH_COURSE_STUDENTS":
      state.courseStudents = actions.payload;
      return { ...state };
    default:
      return state;
  }
};

export default courseReducer;
