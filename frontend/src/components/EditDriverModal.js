import { useEffect, useState } from "react";

function EditDriverModal({ driver, agencyId, onClose }) {
    const [form, setForm] = useState(driver);
    const [vans, setVans] = useState([]);
    // const unassignedVans = vans.filter(van => !van.driverId);
    // const [selectedVanId, setSelectedVanId] = useState('');


    useEffect(() => {
        const fetchVans = async () => {
            const res = await fetch(`http://localhost:8080/api/agency/${agencyId}/vans`);
            const data = await res.json();
            setVans(data);
        };

        fetchVans();
    }, [agencyId]);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSave = async () => {
        await fetch(`http://localhost:8080/api/agency/${agencyId}/drivers/${driver.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        onClose();
    };

    const handleAssignVan = async () => {
        if (form.assignedVanId) {
            await fetch(`http://localhost:8080/api/agency/${agencyId}/drivers/${driver.id}/assign-van/${form.assignedVanId}`, {
                method: "PUT"
            });
            onClose();
        }
    };

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Driver</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="form-control mb-2"
                            placeholder="Driver Name"
                        />
                        <input
                            name="contactNumber"
                            value={form.contactNumber}
                            onChange={handleChange}
                            className="form-control mb-2"
                            placeholder="Contact Number"
                        />
                        <input
                            name="licenseNumber"
                            value={form.licenseNumber}
                            onChange={handleChange}
                            className="form-control mb-2"
                            placeholder="License Number"
                        />
                        <input
                            name="licenseDocsUrl"
                            value={form.licenseDocsUrl}
                            onChange={handleChange}
                            className="form-control mb-3"
                            placeholder="License Docs URL"
                        />

                        <label htmlFor="vanSelect" className="form-label">Assign Van</label>
                        <select
                            id="vanSelect"
                            className="form-select"
                            name="assignedVanId"
                            value={form.assignedVanId || ""}
                            onChange={handleChange}
                        >
                            <option value="">-- Select Van --</option>
                            {vans
                                .filter((van) =>
                                    (!van.driverId || van.driverId === driver.id || van.id === form.assignedVanId) && van.driverId === ""
                                )
                                .map((van) => (
                                    <option key={van.id} value={van.id}>
                                        {van.name} ({van.registrationNumber})
                                    </option>
                                ))}
                        </select>

                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-danger me-auto" onClick={onClose}>Cancel</button>
                        <button className="btn btn-secondary" onClick={handleSave}>Update</button>
                        <button className="btn btn-success" onClick={handleAssignVan}>Assign Van</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditDriverModal;
