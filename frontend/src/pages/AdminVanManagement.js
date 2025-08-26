// src/pages/AdminVanManagement.js
import { useEffect, useState } from "react";
import AdminVanList from "../components/AdminVanList";
import AdminVanDetailModal from "../components/AdminVanDetailModal";

function AdminVanManagement() {
  const [vans, setVans] = useState([]);
  const [selectedVan, setSelectedVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState("");

  const fetchVans = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/vans");
      const data = await res.json();
      setVans(data);
    } catch (err) {
      console.error("Failed to fetch vans", err);
    } finally {
      setLoading(false);
    }
  };

  const handleView = async (vanId) => {
    const res = await fetch(`http://localhost:8080/api/admin/vans/${vanId}`);
    const data = await res.json();
    console.log(data);
    setSelectedVan(data);
  };

  const handleApprove = async (vanId) => {
    const res = await fetch(`http://localhost:8080/api/admin/vans/${vanId}`, {
      method: "PUT",
    });
    const updated = await res.json();
    setVans((prev) => prev.map((v) => (v.id === updated.id ? updated : v)));
  };

  const handleRemove = async (van) => {
    if (!van.removalRequest) {
      setAlert("This van has not been marked for removal by the agency.");
      setTimeout(() => setAlert(""), 3000);
      return;
    }

    const res = await fetch(`http://localhost:8080/api/admin/vans/${van.id}`, {
      method: "DELETE",
    });

    if (await res.json()) {
      setVans((prev) => prev.filter((v) => v.id !== van.id));
    }
  };

  useEffect(() => {
    fetchVans();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Van List</h2>

      {alert && <div className="alert alert-warning text-center">{alert}</div>}

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <AdminVanList vans={vans} onView={handleView} onApprove={handleApprove} onRemove={handleRemove} />
      )}

      {selectedVan && (
        <AdminVanDetailModal van={selectedVan} onClose={() => setSelectedVan(null)} />
      )}
    </div>
  );
}

export default AdminVanManagement;
