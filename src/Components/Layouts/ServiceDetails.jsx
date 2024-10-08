import { useContext } from "react";
import { IoLocationSharp, IoPricetagsSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    const handlePurchase = e => {
        e.preventDefault();
        const form = e.target;
        const purchase = {
            ServiceId: service._id,
            ServiceName: service.ServiceName,
            ProviderName: service.ServiceProvider?.Name || 'Unknown',
            ProviderEmail: service.ServiceProvider?.Email || 'Unknown',
            UserEmail: user.email,
            UserName: user.displayName,
            Price: service.ServicePrice,
            Date: form.date.value,
            Image: service.ServiceImage,
            ServiceInstruction: form.instruction.value,
            status:'pending'
        };
        
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
        .then(res => res.json())
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Your Booking Has been Confirmed!!!',
                icon: 'success',
                confirmButtonText: 'Close'
            });
        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: `There was a problem: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'Close'
            });
        });
    };

    return (
        <div className="md:m-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-4xl text-center font-semibold mb-6">Service Details</h2>
            <p className="text-xl text-gray-800 text-center mb-10">Discover exquisite event services curated for every occasion, complete with detailed descriptions and provider information to tailor your event to perfection.</p>

            <div className="md:mx-36">
                <div className="hero bg-white/30 rounded-xl">
                    <div className="hero-content flex-col lg:flex-row gap-12">
                        <img src={service.ServiceImage} className="md:w-[500px] md:h-[450px] rounded-lg shadow-2xl my-4" alt={service.ServiceName} />
                        <div className="space-y-3 border-l-2 border-black pl-12">
                            <h1 className="text-5xl font-bold">{service.ServiceName}</h1>
                            <p className="text-2xl">{service.ServiceDescription}</p>
                            <div className="border-2 p-6 bg-white/30 rounded-lg space-y-2">
                                <h2 className="text-2xl font-medium text-center">Provider Information</h2>
                                <img src={service.ServiceProvider?.Image || 'default-image-url'} alt={service.ServiceProvider?.Name || 'Provider'} className="md:h-16 md:w-16 rounded-full md:ml-20" />
                                <p className="text-xl text-center">{service.ServiceProvider?.Name || 'Unknown'}</p>
                            </div>
                            <div className="space-y-2 flex gap-8">
                                <p className="text-xl flex items-center gap-3"><IoLocationSharp /> {service.ServiceArea || 'N/A'}</p>
                                <p className="text-xl flex items-center gap-3"><IoPricetagsSharp /> {service.ServicePrice || 'N/A'}</p>
                            </div>

                            <label htmlFor="my_modal_6" className="btn bg-cyan-100 w-full text-2xl font-semibold">Book Now</label>
                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <form onSubmit={handlePurchase} className="modal-box">
                                    <div className="flex gap-6">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold">Service Id</span>
                                            </div>
                                            <input type="text" name="id" defaultValue={service._id} readOnly className="input input-bordered w-full" />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold">Service Name</span>
                                            </div>
                                            <input type="text" name="name" defaultValue={service.ServiceName} readOnly className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                    <div className="flex gap-6">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold">Provider Name</span>
                                            </div>
                                            <input type="text" name="providername" defaultValue={service.ServiceProvider?.Name || 'Unknown'} readOnly className="input input-bordered w-full" />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold">Provider Email</span>
                                            </div>
                                            <input type="email" name="provideremail" defaultValue={service.ServiceProvider?.Email || 'Unknown'} readOnly className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                    <div className="flex gap-6">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold">Current User Name</span>
                                            </div>
                                            <input type="text" name="username" defaultValue={user.displayName} readOnly className="input input-bordered w-full" />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold">Current User Email</span>
                                            </div>
                                            <input type="email" name="useremail" defaultValue={user.email} readOnly className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                    <div className="flex gap-6">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold">Price</span>
                                            </div>
                                            <input type="text" name="price" defaultValue={service.ServicePrice} readOnly className="input input-bordered w-full" />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold">Service Taking Date</span>
                                            </div>
                                            <input type="date" name="date" className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text text-xl font-semibold">Service Image URL</span>
                                        </div>
                                        <input type="text" name="image" defaultValue={service.ServiceImage} readOnly className="input input-bordered w-full" />
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text text-xl font-semibold">Special Instruction</span>
                                        </div>
                                        <input type="text" name="instruction" className="input input-bordered w-full" />
                                    </label>

                                    <input type="submit" value="Purchase Service" className="btn bg-red-100 w-full mt-6 text-xl font-semibold" />

                                    <div className="modal-action">
                                        <label htmlFor="my_modal_6" className="btn mt-6">Exit</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
