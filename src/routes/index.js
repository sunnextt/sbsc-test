import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import UsersRoute from './users';

const HomeRoute = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/users" element={<UsersRoute />} />
        </Routes>
    );
};

export default HomeRoute;
