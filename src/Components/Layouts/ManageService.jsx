import { useLoaderData } from "react-router-dom";
import ManageDetails from "./ManageDetails";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const ManageService = () => {
    const manageServices = useLoaderData();
    const { user } = useContext(AuthContext);

    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        if (manageServices && user) {
            const filtered = manageServices.filter(item => item.ServiceProvider.Email === user.email);
            setFilteredItems(filtered);
        }
    }, [manageServices, user]);

    return (
        <div>
            <h2 className="text-4xl text-center font-semibold text-black">Your Booked Services</h2>
            <div>
                {
                    filteredItems.map(manage => <ManageDetails key={manage._id} manage={manage}></ManageDetails>)
                }
            </div>
        </div>
    );
};

export default ManageService;