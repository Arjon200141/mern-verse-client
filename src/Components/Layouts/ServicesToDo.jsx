import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import BookingDetails from "./BookingDetails";

const ServicesToDo = () => {
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
            <h2 className="text-4xl text-center font-semibold text-black">Your Booked Services</h2>
            {
                bookings.map(booking => <BookingDetails key={booking._id} booking={booking}></BookingDetails>)
            }
        </div>
    );
};

export default ServicesToDo;