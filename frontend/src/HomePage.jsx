import React from 'react';
import Header from './Header';
import './HomePage.css';

const HomePage = () => {
    return (
        <Header>

        <div>
            <div className="home-content">
                <h1>خوش آمدید به وب سایت املاک ما</h1>
                <p>ما به شما کمک می‌کنیم خانه رؤیایی‌تان را پیدا کنید.</p>
                <p>با تیم حرفه‌ای ما، تجربه خرید یا اجاره خانه بهتری داشته باشید.</p>
            </div>
        </div>
        </Header>
    );
};

export default HomePage;
