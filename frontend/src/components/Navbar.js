import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm" data-bs-theme="dark">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">VanityRental</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact to="/" className="nav-link px-3" activeClassName="active">Home</NavLink>
                        <NavLink to="/about" className="nav-link px-3" activeClassName="active">About</NavLink>
                        <NavLink to="/contact-us" className="nav-link px-3" activeClassName="active">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
