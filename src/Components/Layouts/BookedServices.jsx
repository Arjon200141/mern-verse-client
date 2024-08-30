import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import BookingDetails from "./BookingDetails";
import { Helmet } from "react-helmet";

const BookedServices = () => {

    const { user } = useContext(AuthContext);
    const [bookings, SetBookings] = useState([]);

    const url = `http://localhost:5000/booking?UserEmail=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { SetBookings(data); })
    }, [])

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Booking</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-4xl text-center font-semibold text-black">Your Booked Services</h2>
            {
                bookings.map(booking => <BookingDetails key={booking._id} booking={booking}></BookingDetails>)
            }
        </div>
    );
};

export default BookedServices;