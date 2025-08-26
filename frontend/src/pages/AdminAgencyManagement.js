// src/pages/AdminAgencyManagement.js
import { useEffect, useState } from "react";
import AgencyList from "../components/AgencyList";
import AgencyDetailModal from "../components/AgencyDetailModal";

function AdminAgencyManagement() {
  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAgency, setSelectedAgency] = useState(null);

  const fetchAgencies = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/agencies");
      const data = await res.json();
      setAgencies(data);
    } catch (error) {
      console.error("Error fetching agencies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = async (agencyId) => {
    try {
      const res = await fetch(`http://localhost:8080/api/admin/agencies/${agencyId}`);
      const data = await res.json();
      setSelectedAgency(data);
    } catch (error) {
      console.error("Error loading agency details:", error);
    }
  };

  const handleToggleApprove = async (agencyId) => {
    try {
      const res = await fetch(`http://localhost:8080/api/admin/agencies/${agencyId}`, {
        method: "PUT",
      });
      const updated = await res.json();

      setAgencies((prev) =>
        prev.map((a) => (a.id === updated.id ? updated : a))
      );
    } catch (error) {
      console.error("Error approving agency:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedAgency(null);
  };

  useEffect(() => {
    fetchAgencies();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Agency List</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <AgencyList
          agencies={agencies}
          onView={handleView}
          onToggleApprove={handleToggleApprove}
        />
      )}
      {selectedAgency && (
        <AgencyDetailModal agency={selectedAgency} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default AdminAgencyManagement;
