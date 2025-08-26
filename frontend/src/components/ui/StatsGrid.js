import VanStats from "./VanStats";
import DriverStats from "./DriverStats";

function StatsGrid({ agencyId }) {
    return (
        <div className="row g-4">
            <VanStats agencyId={agencyId} />
            <DriverStats agencyId={agencyId} />
        </div>
    );
}

export default StatsGrid;
