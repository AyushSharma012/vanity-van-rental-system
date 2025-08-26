// src/components/VanListItem.js
function AdminVanListItem({ van, onView, onApprove, onRemove }) {
  return (
    <tr>
      <td>{van.name}</td>
      <td>{van.type}</td>
      <td>{van.capacity}</td>
      <td>{van.location}</td>
      <td>{van.pricePerHour}</td>
      <td>
        <span className={`badge ${van.approvalStatus ? "bg-success" : "bg-warning text-dark"}`}>
          {van.approvalStatus ? "Approved" : "Pending"}
        </span>
      </td>
      <td>
        <span className={`badge ${van.removalRequest ? "bg-danger" : "bg-secondary"}`}>
          {van.removalRequest ? "Applied" : "Not Requested"}
        </span>
      </td>
      <td>
        <button className="btn btn-sm btn-primary me-2" onClick={() => onView(van.id)}>
          View
        </button>
        <button
          className={`btn btn-sm btn-${van.approvalStatus ? "secondary" : "success"} me-2`}
          onClick={() => onApprove(van.id)}
        >
          {van.approvalStatus ? "Unapprove" : "Approve"}
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => onRemove(van)}>
          Remove
        </button>
      </td>
    </tr>
  );
}

export default AdminVanListItem;
