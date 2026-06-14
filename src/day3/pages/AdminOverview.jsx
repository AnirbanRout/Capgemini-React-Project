import { useMemo } from "react";

const AdminOverview = ({ requests }) => {
  const totalComplaints = useMemo(() => requests.length, [requests]);

  const openCount = useMemo(() => requests.filter((req)=>{
    return req.status === "open";
  }).length, [requests]
  );

  const inProgressCount = useMemo(()=> requests.filter((req)=>{
    return req.status === "in_progress";
  }).length, [requests]
  );

  const resolvedCount = useMemo(() => requests.filter((req)=>{
    return req.status === "resolved";
  }).length, [requests]
  );

  const highPriorityOpenIssues = useMemo(()=> requests.filter((req)=>{
    return req.status === "open" && req.priority === "high";
  }).length, [requests]
  );

  const categoryCounts = useMemo(() => {
    return requests.reduce((acc, req) => {
      acc[req.category] = (acc[req.category] || 0) + 1;
      return acc;
    }, {});
  }, [requests]);

  return (
    <div className="card p-3 mb-4">
      <h4>Admin Overview</h4>

      <p>Total Complaints: {totalComplaints}</p>
      <p>Open: {openCount}</p>
      <p>In Progress: {inProgressCount}</p>
      <p>Resolved: {resolvedCount}</p>
      <p>High Priority Open Issues: {highPriorityOpenIssues}</p>

      <h5 className="mt-3">Category Wise Counts</h5>

      <ul>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <li key={category}>
            {category}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOverview;
