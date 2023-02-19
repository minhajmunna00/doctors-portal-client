import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Servicces/Services';
import Testimonial from '../Testimonial/Testimonial';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;