import { useMemo } from "react";

const SummaryCards = ({ requests }) => {
  const stats = useMemo(() => {
    return {
      total: requests.length,

      open: requests.filter((req) => req.status === "open").length,

      inProgress: requests.filter((req) => req.status === "in_progress").length,

      resolved: requests.filter((req) => req.status === "resolved").length,

      highPriority: requests.filter((req) => req.priority === "high").length,
    };
  }, [requests]);

  const latestComplaint = useMemo(() => {
    if (!requests.length) return "None";

    const latest = [...requests].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );

    return latest[0].title;
  }, [requests]);

  return (
    <div className="row g-3 mb-4">
      <div className="col-md-2">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6>Total Requests</h6>
            <h2>{stats.total}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6>Open</h6>
            <h2>{stats.open}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6>In Progress</h6>
            <h2>{stats.inProgress}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6>Resolved</h6>
            <h2>{stats.resolved}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h6>High Priority</h6>
            <h2>{stats.highPriority}</h2>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-2">
        <div className="card text-center shadow-sm h-100">
          <div className="card-body">
            <h6 className="card-title">Latest Complaint</h6>
            <small className="card-text">{latestComplaint}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
