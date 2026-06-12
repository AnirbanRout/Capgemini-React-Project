import { useState } from "react";
import FilterBar from "./FilterBar";

const ComplaintList = ({ requests }) => {
  const [search, setSearch] = useState("");

  const filtered_requests = requests.filter((request) =>
    request.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2 className="mb-3">Complaint List</h2>

      <FilterBar search={search} setSearch={setSearch} />

      {filtered_requests.length > 0 ? (
        filtered_requests.map((req) => (
          <div key={req.id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{req.title}</h5>

              <p className="card-text">
                <strong>Description:</strong> {req.description}
              </p>

              <p>
                <strong>Category:</strong> {req.category}
              </p>

              <p>
                <strong>Room No:</strong> {req.roomNo}
              </p>

              <p>
                <strong>Priority:</strong> {req.priority}
              </p>

              <p>
                <strong>Status:</strong> {req.status}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-info">No complaints found.</div>
      )}
    </div>
  );
};

export default ComplaintList;
