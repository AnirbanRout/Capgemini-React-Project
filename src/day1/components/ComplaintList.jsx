import { useState } from "react";
import FilterBar from "./FilterBar";

import api from "../services/api";

const ComplaintList = ({ requests, isAdmin, getRequests }) => {
  const [search, setSearch] = useState("");

  const filtered_requests = requests.filter((request) =>
    request.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleClose = (id) => {
    api
      .patch(`/requests/${id}`, { status: "close" })
      .then(() => {
        getRequests();
      })
      .catch((err) => {
        console.error("Error updating request status:", err);
      });
  };

  return (
    <div>
      <h2 className="mb-3">{isAdmin ? "All Complaints" : "My Complaints"}</h2>

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

              {isAdmin && (
                <div className="mt-2 d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleClose(req.id)}
                    disabled={req.status === "close"}
                  >
                    Update Status
                  </button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              )}
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
