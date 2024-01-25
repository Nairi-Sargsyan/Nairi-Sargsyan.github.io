import { useState, useRef } from 'react';
import ReservationInfo from './reservation-info/ReservationInfo';
import './resevation.scss';

const Reservation = () => {

    const [clientReservationDate, setClientReservationDate] = useState({
        nameInput: '',
        emailInput: '',
        personeInput: '',
        timeInput: '',
        dateInput: '',
        nubmerTable: Math.floor(Math.random() * 51)
    });

    const nameInputRef = useRef(),
        emailInputRef = useRef(),
        personeInputRef = useRef(),
        timeInputRef = useRef(),
        dateInputRef = useRef(),
        reservationInfoRef = useRef()

    const bookATable = (e) => {
        e.preventDefault();
        if (clientReservationDate.nameInput.trim() === '' || clientReservationDate.emailInput.trim() === '' || clientReservationDate.personeInput.trim() === '' || clientReservationDate.timeInput.trim() === '' || clientReservationDate.dateInput.trim() === '') {
            nameInputRef.current.style.border = '1px solid red';
            emailInputRef.current.style.border = '1px solid red';
            personeInputRef.current.style.border = '1px solid red';
            timeInputRef.current.style.border = '1px solid red';
            dateInputRef.current.style.border = '1px solid red';
            return;
        }

        const reservationInfoElement = reservationInfoRef.current;


        if (reservationInfoElement) {
            reservationInfoElement.classList.add('animation__active');

            setTimeout(() => {
                reservationInfoElement.classList.remove('animation__active');
                setClientReservationDate({
                    nameInput: '',
                    emailInput: '',
                    personeInput: '',
                    timeInput: '',
                    dateInput: ''
                })
            }, 20000);
        }

        nameInputRef.current.style.border = '';
        emailInputRef.current.style.border = '';
        personeInputRef.current.style.border = '';
        timeInputRef.current.style.border = '';
        dateInputRef.current.style.border = '';
    }

    return (
        <section className="reservation">
            <a href='true' name='reservation'> </a>
            <div className="container-fluid">
                <div className="container">
                    <div className="reservation__content">
                        <div className="reservation__content_title text-center mb-4">
                            <h5 className="content__aside_title text-white">reservation</h5>
                            <h3 className="inner__title text-white">Book Your Table</h3>
                        </div>
                        <form className="reservation__form d-block text-center">
                            <div className="row mb-5">
                                <div className="col-md-6 mb-4">
                                    <input ref={nameInputRef} onChange={e => setClientReservationDate({ ...clientReservationDate, nameInput: e.target.value })} type="text" name="name" placeholder="Name" />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input ref={emailInputRef} onChange={e => setClientReservationDate({ ...clientReservationDate, emailInput: e.target.value })} type="email" name="email" placeholder="Email" />
                                </div>
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <input ref={personeInputRef} onChange={e => setClientReservationDate({ ...clientReservationDate, personeInput: e.target.value })} type="number" name="person" placeholder="Persone" />
                                </div>
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <input ref={timeInputRef} onChange={e => setClientReservationDate({ ...clientReservationDate, timeInput: e.target.value })} type="time" name="time" placeholder="Timenig" />
                                </div>
                                <div className="col-md-4">
                                    <input ref={dateInputRef} onChange={e => setClientReservationDate({ ...clientReservationDate, dateInput: e.target.value })} type="date" name="date" placeholder="Date" />
                                </div>
                            </div>
                            <button onClick={bookATable} type="button" className="registration__form_btn">Book A Table</button>
                        </form>

                        <ReservationInfo ref={reservationInfoRef} clientReservationDate={clientReservationDate} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Reservation;