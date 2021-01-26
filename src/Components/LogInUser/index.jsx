import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useModal from "../../HOCs/useModal";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import { Redirect } from "react-router-dom";
import { Box, Container, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import TextField from "@material-ui/core/TextField";
import LoginUserCard from "../../Components/LoginUserCard/index";

import "./index.scss";

// Material UI Tabs Set up
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
// End of Material UI Tabs Setup

const LogInUser = () => {
  // Setup modal
  const { modal, toggle } = useModal();
  // End of setup modal

  // Setup login user
  const loggedInUser = useSelector((state) => {
    return state.auth.loggedInUser;
  });
  // End of setup login user

  //Log out
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(null);

  const hanldeLogOut = () => {
    dispatch({
      type: "DELETE_USER",
      payload: "",
    });

    localStorage.removeItem("accessToken");
    localStorage.removeItem("credentials");
    if (localStorage.getItem("accessToken" === null)) {
      setRedirect("/");
    }
  };
  // End of Log out

  // Mui Tab setup
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  // End of Mui tab setup

  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <>
      <Box className="logInUser">
        <Box className="logInUser__control" onClick={toggle}>
          <Box className="logInUser__icon">
            <AccountCircleIcon />
          </Box>
          <Box className="logInUser__user">
            <span>{loggedInUser.hoTen}</span>
          </Box>
        </Box>

        <Box>
          <Modal isOpen={modal} toggle={toggle} className="logInUser__modal">
            <Box className="logInUser__modal__content">
              <ModalHeader toggle={toggle}>
                Welcome, {loggedInUser.hoTen}!
              </ModalHeader>

              <ModalFooter>
                <Button color="danger" onClick={hanldeLogOut}>
                  Sign Out
                </Button>{" "}
              </ModalFooter>
            </Box>
          </Modal>
        </Box>
      </Box>
    </>
  );
};
export default LogInUser;
