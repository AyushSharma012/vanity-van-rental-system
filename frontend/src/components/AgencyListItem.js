// src/components/AgencyListItem.js
function AgencyListItem({ agency, onView, onToggleApprove }) {
  return (
    <tr>
      <td>{agency.name}</td>
      <td>{agency.ownerName}</td>
      <td>{agency.email}</td>
      <td>{agency.contactNumber}</td>
      <td>{agency.location}</td>
      <td>
        <span className={`badge ${agency.verificationStatus ? "bg-success" : "bg-warning text-dark"}`}>
          {agency.verificationStatus ? "Approved" : "Pending"}
        </span>
      </td>
      <td>
        <button className="btn btn-primary btn-sm me-2" onClick={() => onView(agency.id)}>
          View
        </button>
        <button
          className={`btn btn-${agency.verificationStatus ? "secondary" : "success"} btn-sm`}
          onClick={() => onToggleApprove(agency.id)}
        >
          {agency.verificationStatus ? "Unapprove" : "Approve"}
        </button>
      </td>
    </tr>
  );
}

export default AgencyListItem;
