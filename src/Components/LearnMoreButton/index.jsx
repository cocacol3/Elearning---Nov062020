import { Box } from "@material-ui/core";
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./index.scss"

const LearnMoreButton = () => {
  return (
    <>
      <Box className="learnMoreButton">
        <Box>
<<<<<<< HEAD
          <NavLink className="learnMoreButton__link" to="/about">
=======
          <NavLink className="learnMoreButton__link" to="/course">
>>>>>>> update2021
            LEARN MORE
          </NavLink>
        </Box>
      </Box>
    </>
  );
};
export default withRouter(LearnMoreButton);
