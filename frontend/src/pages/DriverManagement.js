import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddDriverModal from "../components/AddDriverModal";
import EditDriverModal from "../components/EditDriverModal";

function DriverManagement() {
  const { id: agencyId } = useParams();
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [van, setVan] = useState(null);

  const fetchDrivers = async () => {
    const res = await fetch(`http://localhost:8080/api/agency/${agencyId}/drivers`);
    const data = await res.json();
    setDrivers(data);
  };

  const fetchVan = async (assignedVanId) => {
    const res = await fetch(`http://localhost:8080/api/agency/${agencyId}/vans/${assignedVanId}`);
    const data = await res.json();
    setVan(data);
  };

  useEffect(() => {
    fetchDrivers();
    fetchVan();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-semibold">Driver Management</h2>
        <button className="btn btn-dark custom-dark-hover" onClick={() => setShowAddModal(true)}>
          Add Driver
        </button>
      </div>

      <div className="row">
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="col-md-4"
            onClick={() => {
              setSelectedDriver(driver);
              setShowEditModal(true);
            }}
          >
            <div className="card mb-3 shadow-sm cursor-pointer">
              <div className="card-body">
                <h5 className="card-title">{driver.name}</h5>
                <p className="card-text">
                  <strong>Contact:</strong> {driver.contactNumber}<br />
                  <strong>Status:</strong> {driver.availabilityStatus ? "Available" : "Not Avaialable"}<br />
                  <strong>Van Assigned:</strong> {driver.assignedVanId !== null ? driver.assignedVanId : "Not Avaialable"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <AddDriverModal
          agencyId={agencyId}
          onClose={() => {
            setShowAddModal(false);
            fetchDrivers();
          }}
        />
      )}

      {showEditModal && selectedDriver && (
        <EditDriverModal
          driver={selectedDriver}
          agencyId={agencyId}
          onClose={() => {
            setShowEditModal(false);
            fetchDrivers();
          }}
        />
      )}
    </div>
  );
}

export default DriverManagement;
