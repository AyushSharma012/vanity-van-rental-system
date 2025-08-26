import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VanList from '../components/VanList';
import AddVanModal from '../components/AddVanModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function VanManagement() {
    const { id: agencyId } = useParams();
    const [vans, setVans] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchVans() {
            try {
                const response = await fetch(`http://localhost:8080/api/agency/${agencyId}/vans`);
                const data = await response.json();
                setVans(data);
            } catch (error) {
                console.error('Failed to fetch vans:', error);
            }
        }

        fetchVans();
    }, [agencyId]);


    const handleAddVan = (newVan) => {
        setVans((prev) => [...prev, newVan]);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-semibold">Van Management</h2>
                <button className="btn btn-dark" onClick={() => setShowModal(true)}>
                    Add Van
                </button>
            </div>

            <div className="border rounded p-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <VanList vans={vans} setVans={setVans} />
            </div>

            <AddVanModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                agencyId={agencyId}
                onVanAdded={handleAddVan}
            />
        </div>
    );
}

export default VanManagement;
