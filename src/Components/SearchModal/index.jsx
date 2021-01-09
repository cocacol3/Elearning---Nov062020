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

  return (
    <>
      <Modal className="search-modal" isOpen={searchModal} toggle={toggleSearchModal}>
        <ModalHeader toggle={toggleSearchModal}>
          Finding your suitable course
        </ModalHeader>
        <ModalBody>
          <Box className="searchModal__container">
            <input
              className="form-control"
              name="tenKhoaHoc"
              onChange={handleChange}
            />
            <Button id="button" variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SearchModal;
