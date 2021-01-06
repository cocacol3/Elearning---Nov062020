import { Box, Container } from "@material-ui/core";
import React from "react";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import CardMembershipOutlinedIcon from "@material-ui/icons/CardMembershipOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import classes from "./style.module.css";

<<<<<<< HEAD

=======
>>>>>>> update2021
const Banner = () => {
  return (
    <div>
      <Box className={classes.banner}>
        <Container>
          <Box className={classes.bannerContainer}>
<<<<<<< HEAD
            <Box className={classes.bannerItem}>
=======
            <a className={classes.bannerItem} href="#course">
>>>>>>> update2021
              <Box className={classes.bannerContent}>
                <CollectionsBookmarkOutlinedIcon
                  fontSize="large"
                  className={classes.bannerIcon}
                />
<<<<<<< HEAD
                <Box>
                  <a className={classes.bannerLink} href="#">
                    Backend, Frontend and other IT online courses
                  </a>
                </Box>
              </Box>
            </Box>

            <Box className={classes.bannerItem}>
=======
                <Box className={classes.bannerLink}>
                  Backend, Frontend and other IT online courses
                </Box>
              </Box>
            </a>

            <a className={classes.bannerItem} href="#our-teachers">
>>>>>>> update2021
              <Box className={classes.bannerContent}>
                <CardMembershipOutlinedIcon
                  fontSize="large"
                  className={classes.bannerIcon}
                />
<<<<<<< HEAD
                <Box>
                  <a className={classes.bannerLink} href="#">
                    Certified and passionate teachers and mentors
                  </a>
                </Box>
              </Box>
            </Box>

            <Box className={classes.bannerItem}>
=======
                <Box className={classes.bannerLink}>
                  Certified and passionate teachers and mentors
                </Box>
              </Box>
            </a>

            <a className={classes.bannerItem} href="#course">
>>>>>>> update2021
              <Box className={classes.bannerContent}>
                <WbIncandescentOutlinedIcon
                  fontSize="large"
                  className={classes.bannerIcon}
                />
<<<<<<< HEAD
                <Box>
                  <a className={classes.bannerLink} href="#">
                    Improving coding skills through real projects
                  </a>
                </Box>
              </Box>
            </Box>
=======
                <Box className={classes.bannerLink}>
                  Improving coding skills through real projects
                </Box>
              </Box>
            </a>
>>>>>>> update2021
          </Box>
        </Container>
      </Box>
    </div>
  );
};
export default Banner;
