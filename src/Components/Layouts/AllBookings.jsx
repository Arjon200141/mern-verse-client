import { useEffect, useState } from "react";
const AllBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => {
                // Check if data is an array
                if (Array.isArray(data)) {
                    setBookings(data);
                } else {
                    console.error("Data is not an array", data);
                    setBookings([]); // Set an empty array to prevent further errors
                }
            })
            .catch(error => {
                console.error("Error fetching bookings:", error);
                setBookings([]); // Set an empty array on error
            });
    }, []);

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center my-10">All Requests</h2>
            <div className="overflow-x-auto mx-12">
            <table className="table table-md w-full">
                {/* head */}
                <thead>
                    <tr className="text-xl bg-sky-300 text-black">
                        <th>Sl No.</th>
                        <th>Service Name</th>
                        <th>Requester Name</th>
                        <th>Date</th>
                        <th>Service Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={booking.id || booking._id}>
                            <td className="text-xl">{index + 1}</td>
                            <td className="text-lg">{booking.ServiceName}</td>
                            <td className="text-lg">{booking.UserName}</td>
                            <td className="text-lg">{booking.Date}</td>
                            <td className="text-lg">{booking.Price}</td>
                            <td className="text-lg">{booking.status || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllBookings;
