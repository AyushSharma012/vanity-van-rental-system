// src/components/CustomerListItem.js
function CustomerListItem({ customer }) {
  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.contactNumber}</td>
      <td>{customer.address}</td>
    </tr>
  );
}

export default CustomerListItem;
