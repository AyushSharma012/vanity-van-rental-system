import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function CustomerNavbar() {
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
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-light border-bottom border-dark-subtle px-4">
                <div className="container-fluid">

                    {/* Toggle Button for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#customerNavbarContent"
                        aria-controls="customerNavbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Identity Section - Always Visible */}
                    <div className="d-flex align-items-center order-lg-2 ms-auto">
                        <span className="text-dark small d-flex align-items-center gap-2">
                            <i className="bi bi-person-fill text-dark"></i>
                            <strong>
                                {
                                    loading
                                        ? 'Loading...'
                                        : profile
                                            ? `${profile.name}`
                                            : 'User'
                                }
                            </strong>
                        </span>
                    </div>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse order-lg-1" id="customerNavbarContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink
                                    to={`/customer/${id}/home`}
                                    end
                                    className={({ isActive }) =>
                                        `nav-link px-3 ${isActive ? "fw-bold border-bottom border-dark text-dark" : "text-dark"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/customer/${id}/home/search-van`}
                                    className={({ isActive }) =>
                                        `nav-link px-3 ${isActive ? "fw-bold border-bottom border-dark text-dark" : "text-dark"}`
                                    }
                                >
                                    Search Van
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={`/customer/${id}/home/view-profile`}
                                    className={({ isActive }) =>
                                        `nav-link px-3 ${isActive ? "fw-bold border-bottom border-dark text-dark" : "text-dark"}`
                                    }
                                >
                                    View Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default CustomerNavbar;
