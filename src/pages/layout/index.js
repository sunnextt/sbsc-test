import React from 'react';
import { Navbar } from '../navbar';

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '3.5rem' }}> {props.children}</div>
        </div>
    );
};

export default Layout;
