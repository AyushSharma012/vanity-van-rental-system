import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AgencyProfileSummary() {
    const { id } = useParams();
    const [agency, setAgency] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAgency() {
            try {
                const res = await fetch(`http://localhost:8080/api/agency/${id}/profile`);
                const data = await res.json();
                setAgency(data);
            } catch (err) {
                console.error("Error fetching agency profile:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchAgency();
    }, [id]);

    if (loading) return <div className="card mb-4"><div className="card-body">Loading profile...</div></div>;

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header bg-light fw-semibold">Agency Summary</div>
            <div className="card-body">
                <p className="mb-1"><strong>Name:</strong> {agency.name}</p>
                <p className="mb-1"><strong>Email:</strong> {agency.email}</p>
                <p className="mb-1"><strong>Contact:</strong> {agency.contactNumber}</p>
                <p className="mb-0"><strong>Location:</strong> {agency.location}</p>
            </div>
        </div>
    );
}

export default AgencyProfileSummary;
