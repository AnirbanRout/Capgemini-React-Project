import { useEffect, useState, useContext } from "react";
import api from "../services/api";

import SummaryCards from "../components/SummaryCards";
import ComplaintForm from "../components/ComplaintForm";
import ComplaintList from "../components/ComplaintList";

import { AuthContext } from "../../day2/context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [requests, setRequests] = useState([]);
  const [categories, setCategories] = useState([]);

  const getRequests = () => {
    api.get("/requests").then((res) => {
      const data = res.data;
      if (user.role === "student") {
        setRequests(
          data.filter((r) => String(r.studentId) === String(user.id)),
        );
      } else {
        setRequests(data);
      }
    });
  };

  const getCategories = () => {
    api.get("/categories").then((res) => {
      setCategories(res.data);
    });
  };

  useEffect(() => {
    getRequests();
    getCategories();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Hostel Maintenance Dashboard</h2>

      <div className="row mb-4">
        <div className="col-12">
          <SummaryCards requests={requests} />
        </div>
      </div>

      <div className="row g-4">
        {user.role === "student" && (
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5 className="mb-3">Raise Complaint</h5>
              <ComplaintForm getRequests={getRequests} />
            </div>
          </div>
        )}

        <div className={user.role === "student" ? "col-md-8" : "col-12"}>
          <div className="card shadow-sm p-3">
            <h5 className="mb-3">
              {user.role === "admin" ? "All Complaints" : "My Complaints"}
            </h5>

            <ComplaintList
              requests={requests}
              isAdmin={user.role === "admin"}
              setRequests={setRequests}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
