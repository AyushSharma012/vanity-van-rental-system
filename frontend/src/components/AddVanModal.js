import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddVanModal({ show, handleClose, agencyId, onVanAdded }) {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        registrationNumber: '',
        capacity: '',
        images: '',
        pricePerHour: '',
        location: '',
        availabilityStatus: true,
        driverId: '',
        registrationDocsUrl: ''
    });

    const [regStatus, setRegStatus] = useState(null); // null | true | false
    const [checkingReg, setCheckingReg] = useState(false);

    // 👉 Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // 🔍 Check Registration Number Validity
    useEffect(() => {
        const delayCheck = setTimeout(() => {
            const reg = formData.registrationNumber.trim();
            if (reg.length > 0) {
                setCheckingReg(true);
                fetch(`http://localhost:8080/api/vans/check-registration?registrationNumber=${reg}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setRegStatus(data); // true = available
                        setCheckingReg(false);
                    })
                    .catch((err) => {
                        console.error("Check failed", err);
                        setRegStatus(null);
                        setCheckingReg(false);
                    });
            } else {
                setRegStatus(null); // reset when input empty
            }
        }, 400); // debounce

        return () => clearTimeout(delayCheck);
    }, [formData.registrationNumber]);

    // 🚀 Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("data", new Blob([JSON.stringify({
            ...formData,
            agencyId
        })], { type: "application/json" }));

        if (formData.imageFile) form.append("image", formData.imageFile);
        if (formData.docFile) form.append("document", formData.docFile);

        try {
            const response = await fetch(`http://localhost:8080/api/agency/${agencyId}/vans/upload`, {
                method: "POST",
                body: form
            });

            if (response.ok) {
                const newVan = await response.json();
                onVanAdded(newVan);
                handleClose();

                // reset form
                setFormData({
                    name: '',
                    type: '',
                    registrationNumber: ''.toLowerCase(),
                    capacity: '',
                    imageFile: null,
                    docFile: null,
                    pricePerHour: '',
                    location: '',
                    availabilityStatus: true,
                    driverId: '',
                    registrationDocsUrl: '',
                    images: ''
                });
                setRegStatus(null);
                setCheckingReg(false);
            } else {
                const error = await response.text();
                alert("Failed to add van: " + error);
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Something went wrong");
        }
    };


    return (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Van</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" name="type" value={formData.type} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Registration Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            required
                            maxLength={10}
                        />

                        {checkingReg && <Form.Text className="text-muted">Checking availability...</Form.Text>}
                        {!checkingReg && regStatus === true && (
                            <Form.Text className="text-success">✅ Available</Form.Text>
                        )}
                        {!checkingReg && regStatus === false && (
                            <Form.Text className="text-danger">❌ Already exists</Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control type="number" name="capacity" value={formData.capacity} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Van Image</Form.Label>
                        <Form.Control type="file" name="image" onChange={(e) => setFormData(prev => ({ ...prev, imageFile: e.target.files[0] }))} />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Registration Document</Form.Label>
                        <Form.Control type="file" name="document" onChange={(e) => setFormData(prev => ({ ...prev, docFile: e.target.files[0] }))} />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Price per Hour (₹)</Form.Label>
                        <Form.Control
                            type="number"
                            name="pricePerHour"
                            value={formData.pricePerHour}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Available"
                            name="availabilityStatus"
                            checked={formData.availabilityStatus}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button type="submit" variant="dark" disabled={regStatus === false}>Add Van</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default AddVanModal;
