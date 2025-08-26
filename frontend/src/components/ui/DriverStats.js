import { useEffect, useState } from "react";
import StatCard from "./StatCard";

function DriverStats({ agencyId }) {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        async function fetchDrivers() {
            try {
                const res = await fetch(`http://localhost:8080/api/agency/${agencyId}/drivers`);
                const data = await res.json();
                setDrivers(data);
            } catch (err) {
                console.error("Error fetching drivers", err);
            }
        }
        fetchDrivers();
    }, [agencyId]);

    const total = drivers.length;
    const active = drivers.filter(d => d.isActive).length;

    return (
        <>
            <StatCard title="Total Drivers" count={total} icon="bi-people" color="info" />
            <StatCard title="Active Drivers" count={active} icon="bi-person-check" color="warning" />
        </>
    );
}

export default DriverStats;
