import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Update = () => {
    const loadedData = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleUpdateService = e => {

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
        const updatedService = { ServiceImage, ServiceName, ServiceDescription, ServiceProvider, ServiceArea, ServicePrice, UserId };
        console.log(updatedService);
        fetch(`https://mern-verse-server.vercel.app/services/${loadedData._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedService),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Updated")
                }
            })
    }

    return (
        <div className="md:mx-32 mt-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Service</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2>Update Coffee : {loadedData.ServiceName}</h2>
            <form onSubmit={handleUpdateService} className="space-y-5 text-xl font-medium p-12 bg-green-50 rounded-xl">
                <div className="md:flex justify-between gap-10">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Service Name</span>
                        </div>
                        <input type="text" placeholder="Service Name" defaultValue={loadedData.ServiceName} name="name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold"> Service Area</span>
                        </div>
                        <input type="text" placeholder="Service Area" defaultValue={loadedData.ServiceArea} name="area" className="input input-bordered w-full " />
                    </label>
                </div>
                <div className="md:flex justify-between gap-10">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold"> Price </span>
                        </div>
                        <input type="text" placeholder="Service Price" defaultValue={loadedData.ServicePrice} name="price" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold"> Description </span>
                        </div>
                        <input type="text" placeholder="Service Description" name="description" defaultValue={loadedData.ServiceDescription} className="input input-bordered w-full " />
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
                    <input type="text" placeholder="Service Image URL" defaultValue={loadedData.ServiceImage} name="image" className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-xl font-semibold">Provider Image URL </span>
                    </div>
                    <input type="text" placeholder="Provider Image URL" defaultValue={user.photoURL
                    } readOnly name="providerimage" className="input input-bordered w-full " />
                </label>
                <input type="submit" value="Update Service" className="btn bg-orange-100 w-full h-14 text-2xl font-semibold" />
            </form>
        </div>

    );
};

export default Update;