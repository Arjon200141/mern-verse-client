const AddServices = () => {
    return (
        <div className="bg-green-100 p-12">
            <h2 className="text-4xl font-semibold text-center">Add a Service</h2>
            <div className="md:mx-32 mt-8">
                <form className="space-y-5 text-xl font-medium p-12 bg-green-50 rounded-xl">
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
                            <input type="text" placeholder="Provider Name" name="providername" className="input input-bordered w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold"> Provider Email </span>
                            </div>
                            <input type="email" placeholder="Provider Email" name="provideremail" className="input input-bordered w-full " />
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
                        <input type="text" placeholder="Provider Image URL" name="providerimage" className="input input-bordered w-full " />
                    </label>
                    <input type="submit" value="Add Service" className="btn bg-orange-100 w-full h-14 text-2xl font-semibold"/>
                </form>
            </div>
        </div>
    );
};

export default AddServices;