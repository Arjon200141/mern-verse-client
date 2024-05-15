import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddServices = () => {

    const { user } = useContext(AuthContext);

    const handleAddService = e => {

        e.preventDefault();
        const form = e.target;
        const ServiceName = form.name.value;
        const ServiceArea = form.area.value;
        const ServicePrice = form.price.value;
        const ServiceDescription = form.description.value;
        const Name = user.displayName;
        const Email = user.email;
        const ServiceImage = form.image.value;
        const Image = user.photoURL;
        const UserId = user.uid;
        const ServiceProvider = {
            Name, Email, Image
        };
        const newService = { ServiceImage, ServiceName, ServiceDescription, ServiceProvider, ServiceArea, ServicePrice, UserId };
        console.log(newService);
        fetch("http://localhost:5000/services/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newService),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Data Inserted Successfully!!!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }

    return (
        <div className="bg-white/35 p-12">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Service</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-4xl font-semibold text-center">Add a Service</h2>
            <div className="md:mx-32 mt-8">
                <form onSubmit={handleAddService} className="space-y-5 text-xl font-medium p-12 bg-white/45 rounded-xl">
                    <div className="md:flex justify-between gap-10">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Service Name </span>
                            </div>
                            <input type="text" placeholder="Service Name" name="name" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold"> Service Area </span>
                            </div>
                            <input type="text" placeholder="Service Area" name="area" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="md:flex justify-between gap-10">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold"> Price </span>
                            </div>
                            <input type="text" placeholder="Service Price" name="price" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold"> Description </span>
                            </div>
                            <input type="text" placeholder="Service Description" name="description" className="input input-bordered w-full " />
                        </label>
                    </div>

                    <div className="md:flex justify-between gap-10">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold"> Provider Name </span>
                            </div>
                            <input type="text" placeholder="Provider Name" name="providername" defaultValue={user.
                                displayName} readOnly className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold"> Provider Email </span>
                            </div>
                            <input type="email" placeholder="Provider Email" name="provideremail" defaultValue={user.email} readOnly className="input input-bordered w-full " />
                        </label>
                    </div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Service Image URL </span>
                        </div>
                        <input type="text" placeholder="Service Image URL" name="image" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Provider Image URL </span>
                        </div>
                        <input type="text" placeholder="Provider Image URL" defaultValue={user.photoURL
                        } readOnly name="providerimage" className="input input-bordered w-full " />
                    </label>
                    <input type="submit" value="Add Service" className="btn bg-slate-200 w-full h-14 text-2xl font-semibold" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;