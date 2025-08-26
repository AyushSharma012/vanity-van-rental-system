// src/components/CustomerList.js
import AdminCustomerItem from "./AdminCustomerItem";

function CustomerList({ customers }) {
  if (!customers || customers.length === 0) {
    return <p className="text-center">No customers found.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <AdminCustomerItem key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
