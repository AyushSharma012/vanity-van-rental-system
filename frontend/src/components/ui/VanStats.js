import { useEffect, useState } from "react";
import StatCard from "./StatCard";

function VanStats({ agencyId }) {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        async function fetchVans() {
            try {
                const res = await fetch(`http://localhost:8080/api/agency/${agencyId}/vans`);
                const data = await res.json();
                setVans(data);
            } catch (err) {
                console.error("Error fetching vans", err);
            }
        }
        fetchVans();
    }, [agencyId]);

    const total = vans.length;
    const approved = vans.filter(v => v.approvalStatus).length;

    return (
        <>
            <StatCard title="Total Vans" count={total} icon="bi-truck" color="primary" />
            <StatCard title="Approved Vans" count={approved} icon="bi-check-circle" color="success" />
        </>
    );
}

export default VanStats;
