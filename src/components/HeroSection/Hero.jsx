import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero.css"

function HeroSection() {
    return (
        <section className='hero-section'>
            <h1>Connecting Corporate sponsors <br />
                & Event Organizers</h1>
            <p>"Reach your target audience, surpass your revenue goals".</p>
            <h4>Who Are You?</h4>
            <div className='hero-btn'>
                <Link to="/organiser">ORGANIZER</Link>
                <Link to="/sponsor">SPONSOR</Link>
            </div>
        </section>
    )
}

export default HeroSection