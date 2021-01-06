import { Box } from "@material-ui/core";
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./index.scss";

<<<<<<< HEAD
const PageBanner = () => {
=======
const PageBanner = (props) => {
>>>>>>> update2021
  return (
    <>
      <Box className="pageBanner">
        <Box>
          <Box className="pageBanner__text">
<<<<<<< HEAD
            <h3>About Us</h3>
            <Box className="pageBanner__subText">
              <NavLink className="pageBanner__link" to="/">Home</NavLink>
              <p>/  About us</p>
=======
            <h3>{props.title}</h3>
            <Box className="pageBanner__subText">
              <NavLink className="pageBanner__link" to="/">Home</NavLink>
              <p>/  {props.title}</p>
>>>>>>> update2021
            </Box>
          </Box>
          <Box className="pageBanner__image"></Box>
        </Box>
      </Box>
    </>
  );
};
export default withRouter(PageBanner);
