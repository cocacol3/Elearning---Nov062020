import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import SignInButton from "../../Components/SignInButton/index";
import LogInUser from "../../Components/LogInUser/index";
import useModal from "../../HOCs/useModal";
import { useLocation } from "react-router-dom";
import SearchButton from "../../Components/SearchButton/index";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const Header = () => {
  // Header size change
  const [navBar, setNavBar] = useState(false);
  const changeNavBar = () => {
    if (window.scrollY > 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeNavBar);
  // End of header size change

  // Switch
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // End of switch

  // NavBar Toggler
  const [isOpen, setIsOpen] = useState(false);
  const navBarToggle = () => setIsOpen(!isOpen);
  // End of navBar Toggler

  // Set up Login user
  const loggedInUser = useSelector((state) => {
    return state.auth.loggedInUser;
  });
  // End of user login

  // Change header
  const location = useLocation();
  const { pathname } = location;
  // End of change header

  //Get credentials and accessToken
  const dispatch = useDispatch();
  const getCredentials = () => {
    const credentialsStr = localStorage.getItem("credentials");
    const accessTokenStr = localStorage.getItem("accessToken");
    if (credentialsStr) {
      dispatch({
        type: "SET_USER",
        payload: JSON.parse(credentialsStr),
      });
      dispatch({
        type: "FETCH_ACCESS_TOKEN",
        payload: JSON.parse(accessTokenStr),
      });
    }
  };
  useEffect(() => {
    getCredentials();
  }, []);
  //End of get credentials and accessToken

  const navClass =
    pathname === "/"
      ? navBar
        ? " header__container__scroll"
        : " header__container"
      : navBar
      ? "header__container__scroll"
      : "header__pageHeader ";

  return (
    <>
      <Box className="header">
        <Box className={navClass}>
          <Navbar light expand="md">
            <NavbarBrand>
              <Box className="header__navBrand">
                {/* <img src={logo}></img> */}
                <h4>Cyberstudy</h4>
                <h3>Academy</h3>
              </Box>
            </NavbarBrand>
            <NavbarToggler onClick={navBarToggle} />
            <Collapse className="header__navBar" isOpen={isOpen} navbar>
              <Box>
                <Nav className="mr-auto header__nav" navBar>
                  <NavItem>
                    <NavLink className="header__navLink" to="/">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="header__navLink" to="/admin">
                      Admin
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="header__navLink" to="/course">
                      Course
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="header__navLink" to="/about-us">
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="header__navLink" to="/contact">
                      Contact
                    </NavLink>
                  </NavItem>

                  <Box className="header__icon">
                    {/* Signin Button */}
                    <Box>{loggedInUser ? <LogInUser /> : <SignInButton />}</Box>

                    {/* Search Icon */}
                    <Box>
                      <SearchButton />
                    </Box>
                  </Box>
                </Nav>
              </Box>
            </Collapse>
          </Navbar>
        </Box>
        <a className="back-to-top-button" href="#top">
          <KeyboardArrowUpIcon />
        </a>
      </Box>
    </>
  );
};
export default Header;
