import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AgencyEditProfileModal from "../components/AgencyEditProfileModal";

function AgencyViewProfile() {
  const { id: agencyId } = useParams();  // 👈 Get agencyId from route param
  const [agency, setAgency] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const fetchProfile = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/agency/${agencyId}/profile`);
      const data = await res.json();
      setAgency(data);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedData) => {
    try {
      const res = await fetch(`http://localhost:8080/api/agency/${agencyId}/profile/update-profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      const data = await res.json();
      setAgency(data);
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [agencyId]);

  if (loading) {
    return (
      <div className="container text-center my-4">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="fw-semibold">{agency.name}'s Profile</h2>
      <div className="card">
        <div className="card-body">
          <p><strong>Name:</strong> {agency.name}</p>
          <p><strong>Owner:</strong> {agency.ownerName}</p>
          <p><strong>Email:</strong> {agency.email}</p>
          <p><strong>Contact:</strong> {agency.contactNumber}</p>
          <p><strong>Location:</strong> {agency.location}</p>
          <p><strong>Verification Status:</strong> 
            <span className={`badge ms-2 ${agency.verificationStatus ? "bg-success" : "bg-warning text-dark"}`}>
              {agency.verificationStatus ? "Verified" : "Pending"}
            </span>
          </p>
          <button className="btn btn-dark custom-dark-hover mt-3" onClick={() => setEditModalOpen(true)}>
            Edit Profile
          </button>
        </div>
      </div>

      <AgencyEditProfileModal
        show={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        agencyData={agency}
        onSave={handleSave}
      />
    </div>
  );
}

export default AgencyViewProfile;
