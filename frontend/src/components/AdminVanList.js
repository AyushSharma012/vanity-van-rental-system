// src/components/VanList.js
import AdminVanListItem from "./AdminVanListItem";

function AdminVanList({ vans, onView, onApprove, onRemove }) {
  if (!vans || vans.length === 0) {
    return <p className="text-center">No vans found.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Location</th>
            <th>Price/Hour</th>
            <th>Approval</th>
            <th>Removal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vans.map((van) => (
            <AdminVanListItem
              key={van.id}
              van={van}
              onView={onView}
              onApprove={onApprove}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminVanList;
