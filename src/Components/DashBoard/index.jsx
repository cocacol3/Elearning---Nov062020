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
import CourseManagement from "../CourseManagement/index";

import "./index.scss";
import UserAdmin from "../UserAdmin";
import CourseAdmin from "../CourseAdmin";
import RegisterAdmin from "../RegisterAdmin";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="dashBoard">
        <Row>
          <Col xs="12" lg="3" md="3">
            <Box className="dashBoard__left">
              <Box className="dashBoard__user">
                <AccountCircleIcon className="dashBoard__icon" />
                <p>Senior Admin</p>
              </Box>

              <Box>
                <Box className="dashBoard__navigation">
                  <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    // aria-label="Vertical tabs example"
                  >
                    <Tab label="User Management" {...a11yProps(1)} />
                    <Tab label="Register Management" {...a11yProps(2)} />
                    <Tab label="Course Management" {...a11yProps(0)} />
                  </Tabs>
                </Box>
              </Box>
            </Box>
          </Col>

          <Col xs="12" lg="9" md="9">
            <Box className="dashBoard__right">
              <TabPanel value={value} index={0}>
                <UserAdmin />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CourseAdmin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <RegisterAdmin />
              </TabPanel>
            </Box>
          </Col>
        </Row>
      </Box>
    </>
  );
};

export default DashBoard;
