import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ExpirySession from './utils/expirysession';

import GlobalStyled from './GlobalStyled';
import RequireAuth from './utils/requireAuth';
import RegisterPage from './pages/authpage/Register';
import LoginPage from './pages/authpage/Login';
import HomeRoute from './routes';
// import authService from './services/authService';

const theme = {
    color: '#FFFFFF'
};

function App() {
    // const user = ExpirySession.get('user');

    // useEffect(() => {
    //     if (!user) {
    //         console.log("hello");
    //         authService.refreshToken();
    //     }
    // }, [user]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyled />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/*"
                    element={
                        <RequireAuth>
                            <HomeRoute />
                        </RequireAuth>
                    }
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
