const SummaryCards = ({ requests }) => {
  const requestCount = requests.length;

  const openRequests = requests.filter((req) => {
    req.status === "open";
  }).length;

  const inProgressRequests = requests.filter((req) => {
    req.status === "in_progress";
  }).length;

  const resolvedRequests = requests.filter((req) => {
    req.status === "resolved";
  }).length;

  return (
    <div className="row mb-4">
      <div className="col-md-3">
        <div className="card text-center">
          <div className="card-body">
            <h5>Total Requests</h5>
            <h2>{requestCount}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card text-center">
          <div className="card-body">
            <h5>Open</h5>
            <h2>{openRequests}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card text-center">
          <div className="card-body">
            <h5>In Progress</h5>
            <h2>{inProgressRequests}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card text-center">
          <div className="card-body">
            <h5>Resolved</h5>
            <h2>{resolvedRequests}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
