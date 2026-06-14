import { Link } from "react-router-dom";

const RequestCard = ({ request, isAdmin, handleClose }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5>{request.title}</h5>

        <p>
          <strong>Description:</strong> {request.description}
        </p>

        <p>
          <strong>Category:</strong> {request.category}
        </p>

        <p>
          <strong>Room No:</strong> {request.roomNo}
        </p>

        <p>
          <strong>Priority:</strong> {request.priority}
        </p>

        <p>
          <strong>Status:</strong> {request.status}
        </p>

        <p>
          <strong>Created At:</strong>{" "}
          {request.createdAt
            ? new Date(request.createdAt).toLocaleString()
            : "N/A"}
        </p>

        {isAdmin && (
          <div className="mt-2 d-flex gap-2">
            <button
              className="btn btn-success btn-sm"
              onClick={() => handleClose(request.id)}
              disabled={request.status === "Resolved"}
            >
              Update Status
            </button>

            <Link to={`/request/${request.id}`} className="btn btn-info btn-sm">
              View Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestCard;
