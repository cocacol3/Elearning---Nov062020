import React from "react";
import "./index.scss";
import AdvertBannerContent from "../AdvertBannerContent/index";
import { Box, Container } from "@material-ui/core";

const AdvertBanner = () => {
  return (
    <>
      <Box className="advertBanner">
        <Container className="advertBanner__container">
          <Box className="advertBanner__content">
            <AdvertBannerContent />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default AdvertBanner;
