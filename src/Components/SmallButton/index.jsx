import { Box } from '@material-ui/core';
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import "./index.scss";


const SmallButton = () => {
   
        return (
            <>
            <Box className="button">
<<<<<<< HEAD
                <NavLink className="button__link" to="/event">Get course</NavLink>
=======
                <NavLink className="button__link" to="/course">Get course</NavLink>
>>>>>>> update2021
            </Box>
            </>
        )
    
}
export default  withRouter(SmallButton);