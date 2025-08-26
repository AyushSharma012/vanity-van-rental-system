import React, { useState } from 'react';

function SearchVan() {
    const [vans, setVans] = useState([]);
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const fetchVans = async (loc) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/customer/vans/search?location=${loc}`);
            const data = await response.json();
            console.log("Fetched vans:", data);

            const availableVans = data.filter(van => van.availabilityStatus === true);
            setVans(availableVans);
        } catch (err) {
            console.error('Failed to fetch vans:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (location.trim().toLowerCase()) {
            setHasSearched(true);
            fetchVans(location.trim().toLowerCase());
        }
    };

    return (
        <div className="container">
            <h3 className='mb-4'>Search Vans</h3>

            {/* 🔍 Search Form */}
            <form onSubmit={handleSearch} className="row mb-4">
                <div className="col-md-6 d-flex">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark custom-dark-hover">
                        Search
                    </button>
                </div>
            </form>

            {/* 🛻 Van Listing & Loading */}
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-dark" role="status"></div>
                    <p>Loading vans...</p>
                </div>
            ) : (
                <>
                    {hasSearched && vans.length === 0 && (
                        <div className="alert alert-warning">
                            No vans available in this location.
                        </div>
                    )}

                    {vans.length > 0 && (
                        <div className="row">
                            {vans.map((van) => (
                                // this will be on seperate component
                                <div className="col-md-4 mb-4" key={van.id}>
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            src={`http://localhost:8080/${van.images}`}
                                            className="card-img-top"
                                            alt={van.name}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{van.name}</h5>
                                            <p className="card-text">
                                                <strong>Type:</strong> {van.type}<br />
                                                <strong>Capacity:</strong> {van.capacity} people<br />
                                                <strong>Price/Hour:</strong> ₹{van.pricePerHour}
                                            </p>
                                        </div>
                                        <div className="card-footer text-end">
                                            <button className="btn btn-dark custom-dark-hover">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default SearchVan;
