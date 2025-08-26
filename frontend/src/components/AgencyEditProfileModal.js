// src/components/AgencyEditProfileModal.js
import { useState } from "react";

function AgencyEditProfileModal({ show, onClose, agencyData, onSave }) {
  const [formData, setFormData] = useState({ ...agencyData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Profile</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label>Name</label>
              <input name="name" className="form-control" value={formData.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Owner Name</label>
              <input name="ownerName" className="form-control" value={formData.ownerName} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input name="email" className="form-control" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Contact Number</label>
              <input name="contactNumber" className="form-control" value={formData.contactNumber} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Location</label>
              <input name="location" className="form-control" value={formData.location} onChange={handleChange} />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyEditProfileModal;
