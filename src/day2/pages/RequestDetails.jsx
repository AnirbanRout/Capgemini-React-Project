import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../day1/services/api";

const RequestDetails = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    api
      .get(`/requests/${id}`)
      .then((res) => setRequest(res.data))
      .catch((err) => console.error("Error fetching request:", err));
  }, [id]);

  if (!request) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-3">
        <h3 className="mb-3">{request.title}</h3>

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
          <strong>Status:</strong>{" "}
          <span
            className={
              request.status === "close" ? "text-success" : "text-danger"
            }
          >
            {request.status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RequestDetails;
