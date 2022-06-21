import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from '../pages/users';

const UsersRoute = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Users />} />
        </Routes>
    );
};

export default UsersRoute;
