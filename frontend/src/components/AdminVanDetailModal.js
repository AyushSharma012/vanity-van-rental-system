// src/components/VanDetailModal.js
function AdminVanDetailModal({ van, onClose }) {
    if (!van) return null;

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Van Details</h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p><strong>Name:</strong> {van.name}</p>
                        <p><strong>Type:</strong> {van.type}</p>
                        <p><strong>Capacity:</strong> {van.capacity}</p>
                        <p><strong>Location:</strong> {van.location}</p>
                        <p><strong>Price/Hour:</strong> ₹{van.pricePerHour}</p>
                        <p><strong>Availability:</strong> {van.availabilityStatus ? "Available" : "Unavailable"}</p>
                        <p><strong>Approval:</strong> {van.approvalStatus ? "Approved" : "Pending"}</p>
                        <p><strong>Removal Request:</strong> {van.removalRequest ? "Yes" : "No"}</p>
                        <p><strong>Registration No:</strong> {van.registrationNumber}</p>
                        <p><strong>Driver:</strong> {van.driverName || "N/A"}</p>
                        <p><strong>Agency:</strong> {van.agencyName || "N/A"}</p>

                        <div className="mt-3">
                            <strong>Registration Docs:</strong><br />
                            {van.registrationDocsUrl?.endsWith('.pdf') ? (
                                <a
                                    href={`http://localhost:8080/${van.registrationDocsUrl}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Registration Docs
                                </a>


                            ) : (
                                <div className="text-center mt-2">
                                    <img
                                        src={van.registrationDocsUrl}
                                        alt="Registration Document"
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '300px',
                                            objectFit: 'contain',
                                            borderRadius: '8px',
                                            boxShadow: '0 0 8px rgba(0,0,0,0.1)'
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdminVanDetailModal;
