import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VanSearchBar({ customerId }) {
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (location.trim() !== '') {
            navigate(`/customer/${customerId}/search?location=${location}`);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSearch} className="row justify-content-center">
                <div className="col-md-6 d-flex">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Enter city or location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default VanSearchBar;
