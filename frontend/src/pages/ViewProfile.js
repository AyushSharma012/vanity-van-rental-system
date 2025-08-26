import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewProfile() {
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
        <div className="container">
            <h3 className="mb-4">Customer Profile</h3>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-dark" role="status"></div>
                    <p>Loading profile...</p>
                </div>
            ) : profile ? (
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">{profile.name}</h5>
                        <p className="card-text">
                            <strong>Email:</strong> {profile.email} <br />
                            <strong>Contact Number:</strong> {profile.contactNumber} <br />
                            <strong>Address:</strong> {profile.address}
                        </p>
                        <button className="btn btn-dark custom-dark-hover">Edit Profile</button>
                    </div>
                </div>
            ) : (
                <div className="alert alert-danger">
                    Failed to load profile information.
                </div>
            )}
        </div>
    );
}

export default ViewProfile;
