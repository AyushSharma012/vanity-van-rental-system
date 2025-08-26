import AuthCard from "../components/AuthCard";
import HeroSection from "../components/ui/HeroSection";
import FeaturesGrid from "../components/ui/FeaturesGrid";
import RoleSummary from "../components/ui/RoleSummary";
import FaqAccordion from "../components/ui/FaqAccordion";

function Home() {
    return (
        <div className="container-fluid bg-light" style={{ fontFamily: "Urbanist, sans-serif" }}>
            <div className="d-flex align-items-center justify-content-center flex-column custom-hero-background">
                <HeroSection />
                <FeaturesGrid />
            </div>
            
            <RoleSummary />

            <section className="row justify-content-center gap-4 mb-5">
                <div className="col-12 col-md-5">
                    <AuthCard role="Customer" />
                </div>
                <div className="col-12 col-md-5">
                    <AuthCard role="Agency" />
                </div>
            </section>

            <FaqAccordion />
        </div>
    );
}

export default Home;
