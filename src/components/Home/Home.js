import React from 'react';
import AllTickets from '../AllTickets/AllTickets';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <AllTickets />
        </div>
    );
};

export default Home;