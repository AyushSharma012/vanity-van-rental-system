function Contact() {
    return (
        <div className="container-fluid custom-hero-background pt-3">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div>
                        <h2 className="mb-4 text-center fw-bold text-dark">Get in Touch</h2>
                        <p className="text-muted text-center mb-4">
                            Have questions or suggestions? We'd love to hear from you.
                        </p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="your@email.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-dark rounded-pill px-4 py-2">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
