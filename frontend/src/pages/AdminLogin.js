import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const [adminKey, setAdminKey] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setAdminKey(e.target.value);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const response = await fetch("http://localhost:8080/api/admin/dashboard", {
            headers : {
                "ADMIN-KEY" : adminKey
            }
        });

        if(response.ok){
            alert("admin good");
            navigate("/admin-dashboard");
        }else{
            alert("bad boy");
        }

    }

    return (
        <div className="d-flex align-items-center justify-content-center flex-column main-content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <h3 className="mb-2">Admin Login</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Enter Admin Password</label>
                                <input
                                    type="password"
                                    value={adminKey}
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* <p>{adminKey}</p> */}
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

export default AdminLogin;