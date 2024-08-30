import { FaLocationDot } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { _id, ServiceImage, ServiceName, ServiceDescription, ServiceProvider, ServiceArea, ServicePrice } = service;
    return (
        <div className="card card-compact bg-base-100/35 shadow-xl">
            <figure>
                <img src={ServiceImage} alt="Service Image" className="h-[380px]" />
            </figure>
            <div className="card-body ml-6 space-y-1">
                <h2 className="card-title text-3xl">{ServiceName}</h2>
                <p className="text-2xl">{ServiceDescription}</p>
                <div className="flex justify-between">
                    <p className="text-2xl flex items-center gap-3">
                        <FaLocationDot /> {ServiceArea}
                    </p>
                    <p className="text-2xl flex items-center gap-3">
                        <IoPricetagsSharp /> {ServicePrice}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="border-2 rounded-xl px-6 py-2 w-3/4 bg-white/40">
                        <p className="text-2xl mb-2">Service Provider Details</p>
                        <div className="flex items-center gap-4">
                            <img src={ServiceProvider.Image} alt="Service Provider" className="h-14 rounded-full border-2 border-white" />
                            <p className="text-xl"> {ServiceProvider.Name}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/services/${_id}`}>
                    <div className="card-actions justify-start">
                        <button className="btn bg-lime-200 py-2 px-8 text-2xl">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
};

export default Service;
