const FAQs = () => {
    return (
        <div className="my-12 ">
            <h2 className="text-5xl font-semibold text-center">Frequently Asked Questions</h2>
            <p className="text-gray-800 text-lg text-center mt-5">The Event Elevate FAQ section offers answers to common inquiries about our events and management.<br />  Discover insights on customizations, shipping, and more in our comprehensive FAQ guide.</p>
            <div className="flex flex-col md:flex-row justify-between m-12 gap-4">
                <img src="https://i.ibb.co/27BQGTv/faqs-concept-illustration-114360-5185.jpg" alt="" className="md:h-96 md:w-auto border-2 border-solid rounded-xl bg-white/35"/>
                <div className="mr-12">
                    <div className="collapse collapse-plus bg-white/35 ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                        What type of events does Elevate specialize in organizing?
                        </div>
                        <div className="collapse-content">
                            <p>Elevate specializes in organizing a wide range of events, including corporate conferences, product launches, gala dinners, team-building activities, weddings, and private parties. Our experienced team tailors each event to meet our clients specific needs and preferences.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/35">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        How can I request a quote or inquire about booking an event with Elevate?
                        </div>
                        <div className="collapse-content">
                            <p>To request a quote or inquire about booking an event with Elevate, please visit our Contact Us page. You can fill out the inquiry form with details about your event, including the type of event, preferred date, estimated number of attendees, and any specific requirements. Our team will get in touch with you promptly to discuss your event needs and provide a personalized quote.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/35">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        Does Elevate offer event planning services for virtual or hybrid events?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, Elevate offers comprehensive event planning services for both virtual and hybrid events. Whether you are looking to host a fully virtual conference or incorporate virtual elements into an in-person event, our team can assist with event logistics, technology setup, speaker coordination, attendee engagement strategies, and more.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/35">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        Can Elevate assist with venue selection for my event?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! Elevate has established partnerships with a variety of venues, including hotels, conference centers, and unique event spaces. Our team can recommend suitable venues based on your event requirements, budget, and location preferences. We will handle all negotiations and logistics to secure the perfect venue for your event.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/35">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        How far in advance should I book Event Elevate for my event?
                        </div>
                        <div className="collapse-content">
                            <p>We recommend booking Event Elevate as early as possible to secure your preferred event date and allow ample time for planning and preparation. Contact us to discuss availability and start planning your unforgettable event!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;