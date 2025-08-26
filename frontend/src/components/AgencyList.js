// src/components/AgencyList.js
import AgencyListItem from "./AgencyListItem";

function AgencyList({ agencies, onView, onToggleApprove }) {
  if (!agencies || agencies.length === 0) {
    return <p className="text-center">No agencies found.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agencies.map((agency) => (
            <AgencyListItem
              key={agency.id}
              agency={agency}
              onView={onView}
              onToggleApprove={onToggleApprove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgencyList;
