// src/components/AgencyDetailModal.js
function AgencyDetailModal({ agency, onClose }) {
  if (!agency) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agency Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>Name:</strong> {agency.name}</p>
            <p><strong>Owner:</strong> {agency.ownerName}</p>
            <p><strong>Email:</strong> {agency.email}</p>
            <p><strong>Contact:</strong> {agency.contactNumber}</p>
            <p><strong>Location:</strong> {agency.location}</p>
            <p><strong>Status:</strong> {agency.verificationStatus ? "Approved" : "Pending"}</p>
            <p><strong>Verification Doc:</strong></p>
            <a href={agency.verificationDocsUrl} target="_blank" rel="noopener noreferrer">
              View Document
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyDetailModal;
