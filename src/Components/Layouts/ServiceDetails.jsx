import { useContext } from "react";
import { IoLocationSharp, IoPricetagsSharp } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const ServiceDetails = () => {

    const {user} = useContext(AuthContext)

    const services = useLoaderData();
    console.log("1", services);
    const { id } = useParams();
    const service = services.find(service => service.id == id);
    console.log(service, id);

    return (
        <div className="md:m-8 " >
            <h2 className="text-4xl text-center font-semibold mb-6">Service Details</h2>
            <p className="text-xl text-gray-800 text-center mb-10">Discover exquisite event services curated for every occasion, complete  with detailed descriptions and <br /> provider information to tailor your event to perfection.</p>

            <div className="md:mx-36">
                <div className="hero bg-white/30 rounded-xl">
                    <div className="hero-content flex-col lg:flex-row gap-12 ">
                        <img src={service.ServiceImage} className="md:w-[500px] md:h-[450px] rounded-lg shadow-2xl my-4 " />
                        <div className="space-y-3 border-l-2 border-black pl-12">
                            <h1 className="text-5xl font-bold">{service.ServiceName}</h1>
                            <p className="text-2xl">{service.ServiceDescription}</p>
                            <div className="border-2 p-6 bg-white/30 rounded-lg space-y-2">
                                <h2 className="text-2xl font-medium text-center">Provider Information</h2>
                                <img src={service.ServiceProvider.Image} alt="" className="md:h-16 md:w-16 rounded-full md:ml-20" />
                                <p className="text-xl text-center">{service.ServiceProvider.Name}</p>
                            </div>
                            <div className="space-y-2 flex gap-8">
                                <p className="text-xl flex items-center gap-3"><IoLocationSharp /> {service.ServiceArea}</p>
                                <p className="text-xl flex items-center gap-3"><IoPricetagsSharp /> {service.ServicePrice}</p>
                            </div>

                            {/* Modal */}
                            <label htmlFor="my_modal_6" className="btn bg-cyan-100 w-full text-2xl font-semibold">Book Now</label>
                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box ">
                                    <div className="flex gap-6">
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold"> Service Id </span>
                                            </div>
                                            <input type="text" placeholder=" Service Id" name="id" defaultValue={service.id} readOnly className="input input-bordered w-full " />
                                        </label>
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold"> Service Name  </span>
                                            </div>
                                            <input type="text"  placeholder=" Service Name " name="name" defaultValue={service.ServiceName} readOnly className="input input-bordered w-full " />
                                        </label>
                                    </div>

                                    <div className="flex gap-6">
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold"> Provider Name </span>
                                            </div>
                                            <input type="text" placeholder="Provider Name" name="providername" defaultValue={service.ServiceProvider.Name} readOnly className="input input-bordered w-full " />
                                        </label>
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold"> Provider Email </span>
                                            </div>
                                            <input type="email" placeholder="Provider Email" defaultValue={service.ServiceProvider.Email} readOnly name="provideremail" className="input input-bordered w-full " />
                                        </label>
                                    </div>

                                    <div className="flex gap-6">
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold"> Current User Name </span>
                                            </div>
                                            <input type="text" placeholder="User Name" name="username" defaultValue={user.displayName} readOnly className="input input-bordered w-full " />
                                        </label>
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold"> Current User Email </span>
                                            </div>
                                            <input type="email" placeholder="User Email" name="useremail" defaultValue={user.email} readOnly className="input input-bordered w-full " />
                                        </label>
                                    </div>

                                    <div className="flex gap-6">
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold"> Price </span>
                                            </div>
                                            <input type="text" placeholder="Price" name="price" defaultValue={service.ServicePrice} readOnly className="input input-bordered w-full " />
                                        </label>
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-xl font-semibold"> Service Taking Date </span>
                                            </div>
                                            <input type="datetime" name="date" id="" placeholder="Service Taking Date" className="input input-bordered w-full " />
                                        </label>
                                    </div>

                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text text-xl font-semibold">Service Image URL </span>
                                        </div>
                                        <input type="text" placeholder="Service Image URL" name="image" defaultValue={service.ServiceImage} readOnly className="input input-bordered w-full " />
                                    </label>

                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text text-xl font-semibold"> Special instruction </span>
                                        </div>
                                        <input type="text" placeholder="Special instruction" name="instruction" className="input input-bordered w-full " />
                                    </label>

                                    <input type="submit" value="Purchase Service" className="btn bg-red-100 w-full mt-6 text-xl font-semibold"/>

                                    <div className="modal-action">
                                        <label htmlFor="my_modal_6" className="btn 
                                         mt-6">Exit</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;

{/* <div className="bg-no-repeat bg-cover blur-md absolute " style={{ backgroundImage: `url(${service.ServiceImage})` }}>
                <div className="hero min-h-screen rounded-xl" >
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold"></h1>
                            <p className="py-6"></p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen rounded-xl bg-white/35" >
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img src={service.ServiceImage} className="md:ml-12 max-w-sm md:h-[450px] rounded-lg shadow-2xl " />
                    <div>
                        <h1 className="text-5xl font-bold">{service.ServiceName}</h1>
                        <p className="py-6">{service.ServiceDescription}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}