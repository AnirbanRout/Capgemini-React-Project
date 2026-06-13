const SummaryCards = ({ requests }) => {
  const requestCount = requests.length;

  const openRequests = requests.filter((req) => req.status === "open").length;

  const inProgressRequests = requests.filter(
    (req) => req.status === "in_progress",
  ).length;

  const resolvedRequests = requests.filter(
    (req) => req.status === "resolved",
  ).length;

  return (
    <div className="row g-3 mb-4">
      <div className="col-12 col-md-3">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6 className="text-muted">Total Requests</h6>
            <h2 className="fw-bold">{requestCount}</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6 className="text-muted">Open</h6>
            <h2 className="fw-bold">{openRequests}</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6 className="text-muted">In Progress</h6>
            <h2 className="fw-bold">{inProgressRequests}</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6 className="text-muted">Resolved</h6>
            <h2 className="fw-bold">{resolvedRequests}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
