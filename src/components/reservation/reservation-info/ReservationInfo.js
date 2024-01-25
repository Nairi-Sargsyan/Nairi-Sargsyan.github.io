import React, { forwardRef } from 'react';
import './ReservationInfo.scss';

const ReservationInfo = forwardRef(({ clientReservationDate }, ref) => {
    const { nameInput, emailInput, personeInput, timeInput, dateInput, nubmerTable } = clientReservationDate;


    return (
        <div ref={ref} className='reservation__info p-3 w-100 text-center'>
            <h5> Welcome to our exquisite restaurant!</h5 >
            <h5>Your table under the name {nameInput} is booked for {timeInput} on {dateInput}!</h5>
            <h5>We look forward to welcoming you at our establishment at table number {nubmerTable}, is reserved for {personeInput} people.</h5>
            <h5>Have a great evening! Stay tuned for our updates and special offers!</h5>
            <h5>Your future notifications will be sent to the email address {emailInput}. </h5>
            <h5>Thank you for choosing our venue – we await your visit with excitement!"</h5>
            <h5>Best wishes,</h5>
            <h5>The "The TasteEat" Restaurant Team</h5>
        </div >
    )
})

export default ReservationInfo;