function About() {
    return (
        <div className="container-fluid custom-hero-background pt-3">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div>
                        <h2 className="text-center fw-bold text-dark mb-4">About VanityRental</h2>

                        <p className="lead text-center text-muted">
                            VanityRental is a modern platform that connects customers with premium vanity van providers across the region.
                            Whether you're a production team, celebrity, or event organizer, our platform makes it easy to book clean,
                            comfortable, and well-equipped vans in just a few clicks.
                        </p>

                        <h4 className="fw-semibold text-dark">Why Choose VanityRental?</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Hassle-free vanity van booking experience</li>
                            <li className="list-group-item">Verified agencies and professional drivers</li>
                            <li className="list-group-item">Location-based van discovery</li>
                            <li className="list-group-item">Real-time availability and status tracking</li>
                            <li className="list-group-item">Secure and reliable platform</li>
                        </ul>

                        <p className="text-muted mt-3">
                            We’re here to simplify your experience and help agencies and customers connect in a reliable and transparent way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
