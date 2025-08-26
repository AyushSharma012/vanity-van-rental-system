function RoleSummary() {
    return (
        <section className="row mx-5 align-items-center text-center text-md-start my-5">
            <div className="col-md-6 mb-4">
                <div className="p-4 border rounded-4 bg-white shadow-sm h-100">
                    <h4 className="fw-bold text-dark mb-3">For Customers</h4>
                    <ul className="list-unstyled text-muted">
                        <li className="mb-2">
                            <i className="bi bi-truck me-2 text-dark"></i>
                            Browse and book available vanity vans
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-journal-text me-2 text-dark"></i>
                            Track booking history
                        </li>
                        <li>
                            <i className="bi bi-star-fill me-2 text-dark"></i>
                            Rate agency services
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="p-4 border rounded-4 bg-white shadow-sm h-100">
                    <h4 className="fw-bold text-dark mb-3">For Agencies</h4>
                    <ul className="list-unstyled text-muted">
                        <li className="mb-2">
                            <i className="bi bi-building me-2 text-dark"></i>
                            Register your agency
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-bus-front me-2 text-dark"></i>
                            Add and manage your vans
                        </li>
                        <li>
                            <i className="bi bi-person-gear me-2 text-dark"></i>
                            Assign drivers & handle removal requests
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default RoleSummary;
