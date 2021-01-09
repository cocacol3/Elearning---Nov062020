import { Box, Container } from "@material-ui/core";
import React from "react";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import CardMembershipOutlinedIcon from "@material-ui/icons/CardMembershipOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import classes from "./style.module.css";

const Banner = () => {
  return (
    <div>
      <Box className={classes.banner}>
        <Container>
          <Box className={classes.bannerContainer}>
            <a className={classes.bannerItem} href="#course">
              <Box className={classes.bannerContent}>
                <CollectionsBookmarkOutlinedIcon
                  fontSize="large"
                  className={classes.bannerIcon}
                />
                <Box className={classes.bannerLink}>
                  Backend, Frontend and other IT online courses
                </Box>
              </Box>
            </a>

            <a className={classes.bannerItem} href="#our-teachers">
              <Box className={classes.bannerContent}>
                <CardMembershipOutlinedIcon
                  fontSize="large"
                  className={classes.bannerIcon}
                />
                <Box className={classes.bannerLink}>
                  Certified and passionate teachers and mentors
                </Box>
              </Box>
            </a>

            <a className={classes.bannerItem} href="#course">
              <Box className={classes.bannerContent}>
                <WbIncandescentOutlinedIcon
                  fontSize="large"
                  className={classes.bannerIcon}
                />
                <Box className={classes.bannerLink}>
                  Improving coding skills through real projects
                </Box>
              </Box>
            </a>
          </Box>
        </Container>
      </Box>
    </div>
  );
};
export default Banner;
