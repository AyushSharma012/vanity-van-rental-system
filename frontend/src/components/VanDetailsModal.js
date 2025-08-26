import React, { useEffect, useState } from 'react';
import { Modal, Button, Spinner, Badge } from 'react-bootstrap';

function VanDetailsModal({ show, handleClose, vanId, agencyId }) {
    const [van, setVan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);

    useEffect(() => {
        if (show && vanId && agencyId) {
            setLoading(true);
            fetch(`http://localhost:8080/api/agency/${agencyId}/vans/${vanId}`)
                .then((res) => res.json())
                .then((data) => setVan(data))
                .catch((err) => console.error("Failed to fetch van details", err))
                .finally(() => setLoading(false));
        }
    }, [show, vanId, agencyId]);

    const handleRemoval = async () => {
        const endpoint = van.removalRequest
            ? `http://localhost:8080/api/agency/${agencyId}/vans/${vanId}/cancel-removal`
            : `http://localhost:8080/api/agency/${agencyId}/vans/${vanId}/request-removal`;

        setIsRemoving(true);
        try {
            const response = await fetch(endpoint, {
                method: 'PUT',
            });

            if (response.ok) {
                const updated = await response.json();
                setVan(updated);
                alert(
                    updated.removalRequest
                        ? "Removal request submitted."
                        : "Removal request cancelled."
                );
            } else {
                const error = await response.text();
                alert("Error: " + error);
            }
        } catch (err) {
            console.error("Request failed", err);
            alert("Something went wrong");
        } finally {
            setIsRemoving(false);
        }
    };


    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Van Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" variant="dark" />
                    </div>
                ) : van ? (
                    <div>
                        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                            <img
                                src={`http://localhost:8080/${van.images}`}
                                alt="Van"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '250px',
                                    objectFit: 'fill',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>

                        <h5>{van.name}</h5>
                        <p>
                            <strong>Type:</strong> {van.type}<br />
                            <strong>Capacity:</strong> {van.capacity}<br />
                            <strong>Location:</strong> {van.location}<br />
                            <strong>Price/Hour:</strong> ₹{van.pricePerHour}<br />
                            <strong>Availability:</strong> {van.availabilityStatus ? 'Available' : 'Unavailable'}<br />
                        </p>

                        <p>
                            <strong>Status:</strong>{' '}
                            <Badge bg={van.approvalStatus ? "success" : "secondary"}>
                                {van.approvalStatus ? "Approved" : "Pending"}
                            </Badge>{' '}
                            {van.removalRequest && (
                                <Badge bg="warning" text="dark">
                                    Removal Requested
                                </Badge>
                            )}
                        </p>
                    </div>
                ) : (
                    <div className="text-muted">No van details found.</div>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="dark"
                    onClick={handleRemoval}
                    disabled={isRemoving}
                >
                    {isRemoving
                        ? van?.removalRequest ? 'Cancelling...' : 'Applying...'
                        : van?.removalRequest ? 'Cancel Removal Request' : 'Apply for Removal'}
                </Button>

            </Modal.Footer>
        </Modal>
    );
}

export default VanDetailsModal;
