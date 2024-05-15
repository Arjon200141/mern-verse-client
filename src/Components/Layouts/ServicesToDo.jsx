import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import BookingDetails from "./BookingDetails";
import { Helmet } from "react-helmet";

const ServicesToDo = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/booking?ServiceProviderEmail=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
            .catch(error => {
                console.error("Error fetching bookings:", error);
            });
    }, [url]);

    if (bookings.length === 0) {
        return (
            <div className="text-center my-8">
                <h2 className="text-4xl font-semibold text-black">Service To Do</h2>
                <p className="text-xl text-gray-900 mt-4">You have no booked services at the moment.</p>
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service to Do</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-4xl text-center font-semibold text-black">Service to Do</h2>
            {bookings.map(booking => (
                <BookingDetails key={booking._id} booking={booking} />
            ))}
        </div>
    );
};

export default ServicesToDo;
