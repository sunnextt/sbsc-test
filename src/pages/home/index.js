import React from 'react';
import Layout from '../layout';
import Location from '../userLocation';
import UserAccount from './UserAccount';

const Home = () => {
    return (
        <Layout>
            <Location />
            <UserAccount />
        </Layout>
    );
};

export default Home;
