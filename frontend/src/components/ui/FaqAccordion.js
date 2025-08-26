function FaqAccordion() {
    return (
        <section className="mb-5">
            <h3 className="text-center fw-bold mb-4">Frequently Asked Questions</h3>
            <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                            What is a Vanity Van?
                        </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            A vanity van is a luxurious mobile vehicle often used by actors or VIPs for comfort and privacy. Our platform allows easy rental of such vans.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                            How do I register as an agency?
                        </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Click on "Register" under Agency and fill out the required information. Once approved by the admin, you can start listing your vans.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                            How does booking work?
                        </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Customers can browse available vans, check availability in real-time, and place a booking request directly through the platform.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqAccordion;
