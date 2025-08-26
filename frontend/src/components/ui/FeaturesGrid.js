function FeaturesGrid() {
    return (
        <section className="row text-center mt-5">
            <div className="col-md-4 mb-4">
                <i className="bi bi-person-plus display-4 text-dark mb-2"></i>
                <h5 className="fw-semibold">Quick Registration</h5>
                <p className="text-muted">Join as a customer or an agency in just a few steps.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i className="bi bi-check2-circle display-4 text-dark mb-2"></i>
                <h5 className="fw-semibold">Verified Agencies</h5>
                <p className="text-muted">All registered agencies are verified by our admin team.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i className="bi bi-clock display-4 text-dark mb-2"></i>
                <h5 className="fw-semibold">Real-Time Availability</h5>
                <p className="text-muted">Check van availability instantly with up-to-date listings.</p>
            </div>
        </section>
    );
}

export default FeaturesGrid;
