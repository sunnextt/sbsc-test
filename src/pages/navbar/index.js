import React from 'react';
import CHome from './styled';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import authService from '../../services/authService';

export const Navbar = () => {
    const Logout = () => {
        authService.logout();
    };

    return (    
        <CHome>
            <div className="topnav">
                <Link to="/">My Account</Link>
                <Link to="/users">Users</Link>
            </div>
            <Button type="primary" ghost onClick={Logout}>
                Logout
            </Button>
        </CHome>
    );
};
