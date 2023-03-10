import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate,setSelectedDate}) => {

    const[appointmentOptions,setappointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect( () =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setappointmentOptions(data))

    }, [])
    return (
        <section className='my-16'>
             <p className='text-center text-secondary font-bold'>Appointments Available on {format(selectedDate, 'PP')} </p>
             <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setTreatment={setTreatment}
                    
                    ></AppointmentOption>)
                }
             </div>
             {
                treatment && 
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
             
             ></BookingModal>
             }
        </section>
    );
};

export default AvailableAppointments;