import { useLoaderData } from "react-router-dom";

const Services = () => {
    const load = useLoaderData();
    console.log(load);
    return (
        <div>
            <h2>All Services</h2>
        </div>
    );
};

export default Services;

