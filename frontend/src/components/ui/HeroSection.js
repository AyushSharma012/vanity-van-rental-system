import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="text-center">
            <h1 className="display-5 fw-bold">Your Premium Vanity Van Booking Partner</h1>
            <p className="lead text-muted">
                Effortlessly connect with agencies and book fully-equipped vanity vans across cities.
            </p>
            <Link to="/about" className="btn btn-dark custom-dark-hover px-4 py-2 mt-3 rounded-pill">
                Learn More
            </Link>
        </section>
    );
}

export default HeroSection;
