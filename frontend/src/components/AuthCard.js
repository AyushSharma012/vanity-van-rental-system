import { Link } from "react-router-dom";

function AuthCard(props) {
    return (
        <div className="card shadow-sm rounded-4 border-1 hover-shadow transition-transform">
            <div className="card-body d-flex justify-content-center align-items-center flex-column p-5 text-center">
                <h5 className="card-title text-uppercase fw-semibold fs-4 mb-3">
                    For {props.role}
                </h5>

                <Link
                    to={props.role === "Customer" ? "/customer-register" : "/agency-register"}
                    className="btn btn-dark rounded-pill mt-2 px-4 py-2 d-inline-flex align-items-center"
                >
                    <i className="bi bi-person-plus me-2"></i>
                    <span>Register</span>
                </Link>

                <Link
                    to="/login"
                    state={{ role: props.role }}
                    className="btn btn-outline-dark rounded-pill mt-3 px-4 py-2 d-inline-flex align-items-center"
                >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    <span>Login</span>
                </Link>

            </div>
        </div>
    );
}

export default AuthCard;
