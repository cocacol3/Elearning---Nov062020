import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/index";
import About from "./Pages/About/index";
import AllCourses from "./Pages/AllCourses/index";
import Contact from "./Pages/Contact/index";
import Detail from "./Pages/Detail";
import Admin from "./Pages/Admin/index";
import CourseCategoriesItemDetail from "./Pages/CourseCategoriesItemDetail";
import SingleEvent from "./Pages/SingleEvent";
import SignUp from "./Pages/SignUp";
import Auth from "./HOCs";
import { connect } from "react-redux";
import { createAction } from "./Redux/Actions";
import { FETCH_ACCESS_TOKEN, SET_USER } from "./Redux/Actions/type";
import AllCoursesResult from "./Pages/AllCoursesResult";
import UserInfo from "./Pages/UserInfo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="top"></div>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/detail/:courseId" component={Detail} />
          <Route path="/course" component={AllCourses} />
          <Route path="/about-us" component={About} />
          <Auth path="/admin" Component={Admin} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/single-event" component={SingleEvent} />
          <Route
            path="/course-categories-detail/:courseCategoriesId"
            component={CourseCategoriesItemDetail}
          />
          <Route path="/course-result" component={AllCoursesResult} />
          <Route path="/user-info" component={UserInfo} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
  getCredentials = () => {
    const credentialsStr = localStorage.getItem("credentials");
    const accessTokenStr = localStorage.getItem("accessToken");
    if (credentialsStr) {
      this.props.dispatch(createAction(SET_USER, JSON.parse(credentialsStr)));
      this.props.dispatch(
        createAction(FETCH_ACCESS_TOKEN, JSON.parse(accessTokenStr))
      );
    }
  };
  componentDidMount() {
    this.getCredentials();
  }
}
export default connect()(App);
