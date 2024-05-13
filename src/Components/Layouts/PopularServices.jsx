import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const PopularServices = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className="my-20">
            <h2 className="text-5xl text-center font-semibold text-black mb-4">Our Popular Services</h2>
            <p className="text-xl text-center text-gray-900 m-10"> discover the meticulously curated selection of our most sought-after event management offerings, tailored to meet diverse needs and preferences. From expert event <br /> planning  to exquisite catering and captivating entertainment, these services epitomize our dedication to crafting unforgettable experiences for every occasion.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-16 mx-16">
                {
                    services.slice(0,6).map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default PopularServices;