import { Box } from '@material-ui/core';
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import "./index.scss";


const SmallButton = () => {
   
        return (
            <>
            <Box className="button">
                <NavLink className="button__link" to="/course">Get course</NavLink>
            </Box>
            </>
        )
    
}
export default  withRouter(SmallButton);