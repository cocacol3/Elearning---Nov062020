import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
<<<<<<< HEAD
  NavItem,  
=======
  NavItem,
>>>>>>> update2021
} from "reactstrap";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import SignInButton from "../../Components/SignInButton/index";
<<<<<<< HEAD
import Switch from "@material-ui/core/Switch";
import LogInUser from "../../Components/LogInUser/index";
import ViewListIcon from "@material-ui/icons/ViewList";
import useModal from "../../HOCs/useModal";
import WishListModal from "../../Components/WishListModal/index";
import { useLocation } from "react-router-dom";
import SearchButton from "../../Components/SearchButton/index";
import { createAction } from "../../Redux/Actions";
import { FETCH_ACCESS_TOKEN, FETCH_CREDENTIALS } from "../../Redux/Actions/type";
=======
import LogInUser from "../../Components/LogInUser/index";
import useModal from "../../HOCs/useModal";
import { useLocation } from "react-router-dom";
import SearchButton from "../../Components/SearchButton/index";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
>>>>>>> update2021

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
<<<<<<< HEAD
  }); 
  // End of user login

  // Wish list modal setup
  const { modal, toggle } = useModal();
  const renderWishListModal = () => {
    return <WishListModal modal={modal} toggleModal={toggle} />;
  };
  // End of wish list modal setup

=======
  });
  // End of user login

>>>>>>> update2021
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
<<<<<<< HEAD
  useEffect(()=>{
    getCredentials()
  },[])
  //End of get credentials and accessToken


=======
  useEffect(() => {
    getCredentials();
  }, []);
  //End of get credentials and accessToken

>>>>>>> update2021
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
<<<<<<< HEAD
                <h4>Cyberpunk</h4>
=======
                <h4>Cyberstudy</h4>
>>>>>>> update2021
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
<<<<<<< HEAD
                    <NavLink className="header__navLink" to="/about">
=======
                    <NavLink className="header__navLink" to="/about-us">
>>>>>>> update2021
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
<<<<<<< HEAD
                    <NavLink className="header__navLink" to="/event">
                      Event
                    </NavLink>
                  </NavItem>
                  <NavItem>
=======
>>>>>>> update2021
                    <NavLink className="header__navLink" to="/contact">
                      Contact
                    </NavLink>
                  </NavItem>

                  <NavItem>
<<<<<<< HEAD
                    <NavLink className="header__navLink" to="/courses">
=======
                    <NavLink className="header__navLink" to="/course">
>>>>>>> update2021
                      Course
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink className="header__navLink" to="/admin">
                      Admin
                    </NavLink>
                  </NavItem>

                  <Box className="header__icon">
                    {/* Signin Button */}
                    <Box>{loggedInUser ? <LogInUser /> : <SignInButton />}</Box>

                    {/* Search Icon */}
                    <Box>
                      <SearchButton />
                    </Box>
<<<<<<< HEAD

                    {/* Wish-list icon */}
                    <Box onClick={toggle} className="header__listIcon">
                      <ViewListIcon />

                      {renderWishListModal()}
                    </Box>

                    {/* Switch button */}
                    <Box className="header__switch">
                      <Switch
                        checked={state.checked}
                        onChange={handleChange}
                        name="checked"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    </Box>
=======
>>>>>>> update2021
                  </Box>
                </Nav>
              </Box>
            </Collapse>
          </Navbar>
        </Box>
<<<<<<< HEAD
=======
        <a className="back-to-top-button" href="#top">
          <KeyboardArrowUpIcon />
        </a>
>>>>>>> update2021
      </Box>
    </>
  );
};
export default Header;
