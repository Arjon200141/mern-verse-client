import { IoLocationSharp, IoPricetagsSharp } from "react-icons/io5";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ManageDetails = ({ manage }) => {
    const {_id, ServiceImage, ServiceName, ServiceDescription, ServiceProvider, ServiceArea, ServicePrice } = manage;
    return (
        <div className="md:mx-40">
            <div className=" bg-white/30 rounded-xl my-8">
                <div className="flex flex-col lg:flex-row gap-6 ">
                    <img src={ServiceImage} className="md:w-[380px] md:h-[330px] ml-6 rounded-lg shadow-2xl my-4 " />
                    <div className="space-y-2 pt-4 md:pl-12">
                        <h1 className="text-3xl font-bold">{ServiceName}</h1>
                        <p className="text-xl">{ServiceDescription}</p>
                        <div className="border-2 p-1 bg-white/30 rounded-lg md:w-[300px] ">
                            <h2 className="text-xl font-medium text-center">Provider Information</h2>
                            <div className="flex justify-center">
                                <img src={ServiceProvider.Image} alt="" className="md:h-16 md:w-16 rounded-full" />
                            </div>
                            <p className="text-xl text-center">{ServiceProvider.Name}</p>
                        </div>
                        <div className="space-y-2 flex gap-8">
                            <p className="text-xl flex items-center gap-3"><IoLocationSharp /> {ServiceArea}</p>
                            <p className="text-xl flex items-center gap-3"><IoPricetagsSharp /> {ServicePrice}</p>
                        </div>
                        <div className="flex gap-20">
                            <Link to={`/update/${_id}`}>
                                <button className="btn text-xl font-semibold text-center px-6 bg-green-200">Update</button>
                            </Link>
                            <button className="btn text-xl font-semibold text-center px-6 bg-purple-200">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ManageDetails.propTypes = {
    manage: PropTypes.object.isRequired,
};

export default ManageDetails;