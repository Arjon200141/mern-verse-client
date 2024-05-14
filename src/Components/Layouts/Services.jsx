import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const load = useLoaderData();
    return (
        <div className="my-12">
            <h2 className="text-5xl text-center font-semibold text-black mb-4">All Services</h2>
            <p className="text-xl text-center text-gray-900 m-8">It is designed to cater to every aspect of event planning and management. From expert event coordination to bespoke catering and top-tier entertainment, our comprehensive offerings ensure a seamless and unforgettable event experience, custom-tailored to your unique vision.</p>
            <div className="grid md:grid-cols-2 gap-8 my-12 mx-16">
                {
                    load.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;

