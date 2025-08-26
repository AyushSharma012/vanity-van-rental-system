import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const location = useLocation();
    const navigate = useNavigate();

    const role = location.state?.role || "Customer"; // Default role is Customer

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint =
            role === "Agency"
                ? "http://localhost:8080/api/agency/auth/login"
                : "http://localhost:8080/api/customer/auth/login";

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    hashedPassword: formData.password,
                }),
            });

            if (response.ok) {
                const result = await response.json();

                // ✅ Check if agency is verified
                if (role === "Agency" && !result.verificationStatus) {
                    alert("Your agency is not yet verified by the admin.");
                    return;
                }

                alert(`${role} login successful`);

                // Redirect to respective dashboard
                if (role === "Agency") {
                    navigate("/agency/" + result.id + "/home");
                } else {
                    navigate("/customer/" + result.id + "/home");
                }
            }

        } catch (err) {
            console.error("Login request failed", err);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center flex-column main-content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <h3 className="mb-2">{role} Login</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
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

export default Login;
