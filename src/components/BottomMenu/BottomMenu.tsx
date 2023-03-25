import React from 'react'
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { orange } from '@mui/material/colors';

const BottomMenu = () => {
    const [value, setValue] = React.useState(0);
    
        return (
            <Box sx={{ width: 500 }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Profile" component={Link} to="/Profile" icon={<AccountCircleIcon  sx={{ color: orange[500] }} />} />
              <BottomNavigationAction label="Home" component={Link} to="/Home" icon={<HomeIcon sx={{ color: orange[500] }} style={{borderRadius: 10}}/>} />
              <BottomNavigationAction label="Cart" component={Link} to="/Cart" icon={<ShoppingCartIcon sx={{ color: orange[500] }} />} />
            </BottomNavigation>
          </Box> );
    }
    


export default BottomMenu