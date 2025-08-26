import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VanItem from './VanItem';
import VanDetailsModal from './VanDetailsModal';

function VanList({ vans, setVans }) {
    const { id: agencyId } = useParams();
    const [selectedVanId, setSelectedVanId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleItemClick = (vanId) => {
        setSelectedVanId(vanId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVanId(null);
    };

    const handleToggleAvailability = async (vanId) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/agency/${agencyId}/vans/${vanId}/toggle-availability`,
                { method: 'PUT' }
            );

            if (response.ok) {
                const updatedVan = await response.json();

                // Update the van list in parent state
                setVans((prevVans) =>
                    prevVans.map((v) => (v.id === updatedVan.id ? updatedVan : v))
                );
            } else {
                const error = await response.text();
                alert("Toggle failed: " + error);
            }
        } catch (err) {
            console.error("Toggle error", err);
            alert("Something went wrong.");
        }
    };

    return (
        <>
            {vans.length === 0 ? (
                <div className="alert alert-warning">No vans found for this agency.</div>
            ) : (
                vans.map((van) => (
                    <VanItem
                        key={van.id}
                        van={{
                            ...van,
                            approvalStatus: van.approvalStatus ?? false,
                            removalRequest: van.removalRequest ?? false,
                        }}
                        onClick={handleItemClick}
                        onToggleAvailability={handleToggleAvailability}
                    />
                ))
            )}

            {selectedVanId && (
                <VanDetailsModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    vanId={selectedVanId}
                    agencyId={agencyId}
                />
            )}
        </>
    );
}

export default VanList;
