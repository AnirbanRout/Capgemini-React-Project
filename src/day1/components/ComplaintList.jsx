import api from "../services/api";
import RequestCard from "../../day3/components/RequestCard";

const ComplaintList = ({ requests, isAdmin, getRequests }) => {
  const handleClose = (id) => {
    api.patch(`/requests/${id}`, { status: "close" }).then(() => {
      getRequests();
    });
  };

  return (
    <div>
      <h2 className="mb-3">{isAdmin ? "All Complaints" : "My Complaints"}</h2>

      {requests.length > 0 ? (
        requests.map((req) => (
          <RequestCard
            key={req.id}
            request={req}
            isAdmin={isAdmin}
            handleClose={handleClose}
          />
        ))
      ) : (
        <div className="alert alert-info">No complaints found.</div>
      )}
    </div>
  );
};

export default ComplaintList;
