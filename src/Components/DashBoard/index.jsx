import { Box } from "@material-ui/core";
import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import UserControl from "../UserControl/index";
import CourseManagement from "../CourseManagement/index";
=======
import UserControl from "../UserControl/index"
import CourseManagement from "../CourseManagement/index"
>>>>>>> testagain2
=======
import UserControl from "../UserControl/index";
import CourseManagement from "../CourseManagement/index";
>>>>>>> updateSearchApi

import "./index.scss";
=======
import CourseManagement from "../CourseManagement/index";

import "./index.scss";
import UserAdmin from "../UserAdmin";
import CourseAdmin from "../CourseAdmin";
import RegisterAdmin from "../RegisterAdmin";
>>>>>>> update2021

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const DashBoard = () => {
  const [value, setValue] = React.useState(0);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const handleChange = (event, newValue) => {
=======
  const handleChange = (event,newValue) => {
>>>>>>> testagain2
=======
  const handleChange = (event, newValue) => {
>>>>>>> updateSearchApi
=======
  const handleChange = (event, newValue) => {
>>>>>>> update2021
    setValue(newValue);
  };

  return (
    <>
      <Box className="dashBoard">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> updateSearchApi
          <Row>
            <Col xs="12" lg="3" md="3">
              <Box className="dashBoard__left">
                <Box className="dashBoard__user">
                  <AccountCircleIcon className="dashBoard__icon" />
                  <h3>Dang Tuan Binh</h3>
                  <p>Senior Admin</p>
                </Box>

                <Box>
                  <Box className="dashBoard__navigation">
                    <Tabs
                      orientation="vertical"
                      value={value}
                      onChange={handleChange}
                    >
                      <Tab label="User Control" {...a11yProps(0)} />
                      <Tab label="Course Management" {...a11yProps(1)} />
                      <Tab label="Pending Course" {...a11yProps(2)} />
                      <Tab label="Adding Course" {...a11yProps(3)} />
                    </Tabs>
                  </Box>
                  <Box className="dashBoard__logOut">
                    <span>Sign out</span>
                    <ExitToAppIcon />
                  </Box>
                </Box>
              </Box>
            </Col>
            <Col xs="12" lg="9" md="9">
              <Box className="dashBoard__right">
                <TabPanel value={value} index={0}>
                  <UserControl />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <CourseManagement />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Item Four
                </TabPanel>
              </Box>
            </Col>
          </Row>
<<<<<<< HEAD
=======
=======
>>>>>>> update2021
        <Row>
          <Col xs="12" lg="3" md="3">
            <Box className="dashBoard__left">
              <Box className="dashBoard__user">
                <AccountCircleIcon className="dashBoard__icon" />
<<<<<<< HEAD
                <h3>Dang Tuan Binh</h3>
=======
>>>>>>> update2021
                <p>Senior Admin</p>
              </Box>

              <Box>
                <Box className="dashBoard__navigation">
<<<<<<< HEAD
                <Tabs
=======
                  <Tabs
>>>>>>> update2021
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    // aria-label="Vertical tabs example"
                  >
<<<<<<< HEAD
                    <Tab label="User Control" {...a11yProps(0)} />
                    <Tab label="Course Management" {...a11yProps(1)} />
                    <Tab label="Pending Course" {...a11yProps(2)} />
                    <Tab label="Adding Course" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <Box className="dashBoard__logOut">
                  <span>Sign out</span>
                  <ExitToAppIcon />
                </Box>
=======
                    <Tab label="User Management" {...a11yProps(1)} />
                    <Tab label="Register Management" {...a11yProps(2)} />
                    <Tab label="Course Management" {...a11yProps(0)} />
                  </Tabs>
                </Box>
>>>>>>> update2021
              </Box>
            </Box>
          </Col>

          <Col xs="12" lg="9" md="9">
            <Box className="dashBoard__right">
              <TabPanel value={value} index={0}>
<<<<<<< HEAD
                <UserControl />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CourseManagement />
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
=======
                <UserAdmin />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CourseAdmin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <RegisterAdmin />
>>>>>>> update2021
              </TabPanel>
            </Box>
          </Col>
        </Row>
<<<<<<< HEAD
>>>>>>> testagain2
=======
>>>>>>> updateSearchApi
=======
>>>>>>> update2021
      </Box>
    </>
  );
};

export default DashBoard;
