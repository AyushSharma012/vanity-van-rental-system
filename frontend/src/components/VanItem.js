import React from 'react';
import Badge from 'react-bootstrap/Badge';

function VanItem({ van, onClick, onToggleAvailability }) {
    const handleToggleClick = (e) => {
        e.stopPropagation(); // prevent modal open
        onToggleAvailability(van.id);
    };

    return (
        <div
            className="border rounded p-3 mb-2 d-flex justify-content-between align-items-center"
            style={{ cursor: 'pointer', background: van.removalRequest ? '#f8f9fa' : 'white' }}
            onClick={() => onClick(van.id)}
        >
            <div>
                <h6 className="mb-1">
                    {van.name}{' '}
                    <Badge bg={van.approvalStatus ? 'success' : 'secondary'}>
                        {van.approvalStatus ? 'Approved' : 'Pending'}
                    </Badge>{' '}
                    {van.removalRequest && (
                        <Badge bg="warning" text="dark">
                            Removal Requested
                        </Badge>
                    )}
                </h6>
            </div>

            <div>
                {!van.removalRequest && (
                    <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={handleToggleClick}
                    >
                        {van.availabilityStatus ? 'Mark Unavailable' : 'Mark Available'}
                    </button>
                )}
                {van.removalRequest && (
                    <small className="text-muted">Action disabled</small>
                )}
            </div>
        </div>
    );
}

export default VanItem;
