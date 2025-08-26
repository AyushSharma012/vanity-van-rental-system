import React, { useEffect, useState } from 'react';
import { useParams, NavLink} from 'react-router-dom';

function CustomerHome() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await fetch(`http://localhost:8080/api/customer/${id}/profile`);
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, [id]);

    return (
        <div className="text-center">
            <h2 className="mb-4">
                {loading
                    ? 'Loading...'
                    : profile
                        ? `Welcome ${profile.name}`
                        : 'Welcome'}
            </h2>

            <div className="row justify-content-center">

                <div className="col-md-4">
                    <NavLink to={`/customer/${id}/home/search-van`} className="text-decoration-none text-dark">
                        <div className="card shadow-sm border-0 mb-4 h-100  hover-shadow transition-transform">
                            <div className="card-body">
                                <h5 className="card-title">Search Vans</h5>
                                <p className="card-text">Explore available vanity vans easily.</p>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="col-md-4">
                    <NavLink to={`/customer/${id}/home/view-profile`} className="text-decoration-none text-dark">
                        <div className="card shadow-sm border-0 mb-4 h-100 hover-shadow transition-transform">
                            <div className="card-body">
                                <h5 className="card-title">View Profile</h5>
                                <p className="card-text">Manage your personal details.</p>
                            </div>
                        </div>
                    </NavLink>
                </div>

            </div>

        </div>
    );
}

export default CustomerHome;
