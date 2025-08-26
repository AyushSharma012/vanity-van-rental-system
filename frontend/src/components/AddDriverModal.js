import { useState } from "react";

function AddDriverModal({ agencyId, onClose }) {
  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
    licenseNumber: "",
    licenseDocsUrl: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/api/agency/${agencyId}/drivers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Driver</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            Name <br />
            <input name="name" onChange={handleChange} className="form-control mb-2" placeholder="Name" required />
            Contact <br />
            <input name="contactNumber" onChange={handleChange} className="form-control mb-2" placeholder="Contact" required />
            Licence No <br />
            <input name="licenseNumber" onChange={handleChange} className="form-control mb-2" placeholder="License No" required />
            Licence Docs: <br />
            <input name="licenseDocsUrl" onChange={handleChange} className="form-control" placeholder="License Docs URL" />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDriverModal;
