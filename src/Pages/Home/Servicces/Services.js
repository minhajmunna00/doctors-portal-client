import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'lorem ipsum Fluoride Treatment Fluoride Treatment Fluoride Treatment Fluoride Treatment Fluoride Treatment',
            img:fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'lorem ipsum Fluoride Treatment Fluoride Treatment Fluoride Treatment Fluoride Treatment Fluoride Treatment',
            img:cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'lorem ipsum Fluoride Treatment Fluoride Treatment Fluoride Treatment Fluoride Treatment Fluoride Treatment',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className=' text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;