<<<<<<< HEAD
import { Box, TextField } from "@material-ui/core";
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./index.scss";

const SearchModal = ({ searchModal, toggleSearchModal }) => {
=======
import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./index.scss";
import { searchCourse } from "../../Redux/Actions/courseAction";
import { Redirect, useHistory } from "react-router-dom";

const SearchModal = ({ searchModal, toggleSearchModal }) => {
  const [state, setState] = useState({ tenKhoaHoc: "" });
  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCourse(state.tenKhoaHoc));
    let path = `/course-result`; 
    history.push(path);
  };

>>>>>>> update2021
  return (
    <>
      <Modal isOpen={searchModal} toggle={toggleSearchModal}>
        <ModalHeader toggle={toggleSearchModal}>
          Finding your suitable course
        </ModalHeader>
        <ModalBody>
          <Box className="searchModal__container">
<<<<<<< HEAD
            <TextField id="standard-basic" label="Course search" />
            <Button variant="contained">Search</Button>
=======
            <input
              className="form-control"
              name="tenKhoaHoc"
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
>>>>>>> update2021
          </Box>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SearchModal;
