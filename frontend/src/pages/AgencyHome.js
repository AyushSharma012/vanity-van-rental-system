import { useParams } from "react-router-dom";
import StatsGrid from "../components/ui/StatsGrid";
import AgencyProfileSummary from "../components/AgencyProfileSummary";
import AgencyQuickActions from "../components/AgencyQuickActions";

function AgencyHome() {
    const { id } = useParams();

    return (
        <div className="container">
            <h2 className="mb-4 fw-semibold">Welcome to Your Dashboard</h2>

            {/* Stats */}
            <StatsGrid agencyId={id} />

            {/* Profile & Quick Actions */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <AgencyProfileSummary />
                </div>
                <div className="col-md-6">
                    <AgencyQuickActions />
                </div>
            </div>
        </div>
    );
}

export default AgencyHome;
