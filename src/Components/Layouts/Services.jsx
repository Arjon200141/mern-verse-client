import  { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { Helmet } from "react-helmet";

const Services = () => {
    const allServices = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredServices = allServices.filter(service =>
        service.ServiceName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="my-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-5xl text-center font-semibold text-black">All Services</h2>
            <p className="text-xl text-center text-gray-900 m-8">Explore our comprehensive selection of services designed to elevate every aspect of event planning. From expert coordination to bespoke catering and top-tier entertainment, our offerings ensure a seamless and unforgettable event experience tailored to your unique vision.</p>
            <div className=" text-center mb-8">
                <input
                    type="text"
                    placeholder="Search by service name"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="px-4 py-2 text-black border border-gray-300 bg-white/35 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button className="ml-2 px-4 py-2 bg-emerald-200 text-black rounded-md hover:bg-blue-600 focus:outline-none" onClick={() => setSearchQuery("")}>
                    Clear
                </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8 my-12 mx-16">
                {filteredServices.map(service => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
