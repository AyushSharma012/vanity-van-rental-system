function StatCard({ title, count, icon, color }) {
    return (
        <div className="col-md-3 col-sm-6">
            <div className={`card shadow-sm border-${color}`}>
                <div className="card-body d-flex flex-column align-items-center">
                    <i className={`bi ${icon} fs-1 text-${color}`}></i>
                    <h5 className="mt-3 fw-semibold">{title}</h5>
                    <p className={`display-6 fw-bold text-${color}`}>{count}</p>
                </div>
            </div>
        </div>
    );
}

export default StatCard;
