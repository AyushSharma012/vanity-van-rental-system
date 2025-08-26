import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AgencyRegister() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        ownerName: '',
        email: '',
        hashedPassword: '',
        contactNumber: '',
        location: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/agency/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const message = await response.text();
                alert(`Success: ${message}`);

                // ✅ Redirect to agency login page
                navigate('/login', { state: { role: 'Agency' } });
            } else {
                const error = await response.text();
                alert(`Error: ${error}`);
            }
        } catch (err) {
            console.error('Registration failed:', err);
            alert('Something went wrong!');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        {/* Title aligned with form */}
                        <h3 className="mb-2">Agency Register</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputName"
                                    aria-describedby="nameHelp"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="hashedPassword"
                                    value={formData.hashedPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputOwnerName" className="form-label">Owner Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputOwnerName"
                                    aria-describedby="nameHelp"
                                    name="ownerName"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputTelephone" className="form-label">Contact Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="exampleInputTelephone"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        // Allow only digits and max 10 characters
                                        if (/^\d{0,10}$/.test(value)) {
                                            handleChange(e); // call your handler
                                        }
                                    }}
                                    inputMode="numeric"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputLocation" className="form-label">Location (City)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputLocation"
                                    aria-describedby="nameHelp"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-dark custom-dark-hover">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgencyRegister;