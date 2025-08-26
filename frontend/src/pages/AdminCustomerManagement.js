// src/pages/AdminCustomerManagement.js
import { useEffect, useState } from "react";
import CustomerList from "../components/AdminCustomerList";

function AdminCustomerManagement() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/customers");
      const data = await res.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Customer List</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <CustomerList customers={customers} />
      )}
    </div>
  );
}

export default AdminCustomerManagement;
