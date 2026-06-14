import { useMemo } from "react";

const SummaryCards = ({ requests }) => {
  const requestCount = useMemo(() => requests.length, [requests]);

  const openRequests = useMemo(
    () => requests.filter((req) => req.status === "Open").length,
    [requests],
  );

  const inProgressRequests = useMemo(
    () => requests.filter((req) => req.status === "In Progress").length,
    [requests],
  );

  const resolvedRequests = useMemo(
    () => requests.filter((req) => req.status === "Resolved").length,
    [requests],
  );

  const highPriorityRequests = useMemo(
    () => requests.filter((req) => req.priority === "High").length,
    [requests],
  );

  const latestComplaint = useMemo(() => {
    if (!requests.length) return "None";
    const latest = [...requests].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
    return latest[0].title;
  }, [requests]);

  return (
    <div
      className="summary-wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "1rem",
      }}
    >
      <div className="summary-card">
        <h6>Total Requests</h6>
        <h2>{requestCount}</h2>
      </div>

      <div className="summary-card">
        <h6>Open</h6>
        <h2>{openRequests}</h2>
      </div>

      <div className="summary-card">
        <h6>In Progress</h6>
        <h2>{inProgressRequests}</h2>
      </div>

      <div className="summary-card">
        <h6>Resolved</h6>
        <h2>{resolvedRequests}</h2>
      </div>

      <div className="summary-card">
        <h6>High Priority</h6>
        <h2>{highPriorityRequests}</h2>
      </div>

      <div className="summary-card">
        <h6>Latest Complaint</h6>
        <small>{latestComplaint}</small>
      </div>
    </div>
  );
};

export default SummaryCards;
