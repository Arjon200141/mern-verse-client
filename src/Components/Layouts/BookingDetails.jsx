import { BsCalendar2DateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";

const BookingDetails = ({ booking }) => {
    const { ServiceId, ServiceName, UserName, Price, Date, Image, ServiceInstruction } = booking;
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Booking Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-white/35 my-8 rounded-xl md:mx-44 md:flex items-center gap-12 ">
                <div >
                    <img src={Image} alt="" className="h-56 w-72 rounded-sm m-4" />
                </div>
                <div className="text-2xl space-y-2">
                    <h2 className="text-4xl font-semibold ">{ServiceName}</h2>

                    <p><span className="font-semibold">Service Id: </span> {ServiceId}</p>
                    <h2><span className="font-semibold">Service Requester :</span> {UserName}</h2>
                    <div className="md:flex justify-between">
                        <p className="flex items-center gap-2"><IoLocationSharp />{Price}</p>
                        <p className="flex items-center gap-2"><BsCalendar2DateFill /> {Date}</p>
                    </div>
                    <p>{ServiceInstruction}</p>
                    <p>Status : <a className="border-2 rounded-2xl px-6 text-xl py-1 bg-red-200">Pending</a></p>
                </div>
            </div>
        </div>
    );
};
BookingDetails.propTypes = {
    booking: PropTypes.object.isRequired,
};

export default BookingDetails;