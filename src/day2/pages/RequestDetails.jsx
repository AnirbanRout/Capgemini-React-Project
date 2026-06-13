import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import api from "../../day1/services/api";

const RequestDetails = () => {
  const { id } = useParams();

  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    api
      .get(`/requests/${id}`)
      .then((res) => setRequest(res.data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  if (notFound) {
    return <Navigate to="/404" />;
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
