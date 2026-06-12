import axios from "axios";
import { useState, useEffect } from "react";
import api from "../services/api";
import ComplaintList from "../components/ComplaintList";
import ComplaintForm from "../components/ComplaintForm";
import SummaryCards from "../components/SummaryCards";

const DashBoard = () => {
  const [requests, setRequests] = useState([]);
  const [categories, setCategories] = useState([]);

  const getRequests = () => {
    api
      .get("/requests")
      .then((res) => {
        setRequests(res.data);
      })
      .catch((err) => {
        console.error("Error fetching requests", err);
      });
  };

  const getCategories = () => {
    api
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching categories", err);
      });
  };

  useEffect(() => {
    getRequests();
    getCategories();
  }, []);
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Hostel Maintenance Dashboard</h1>

      <SummaryCards requests={requests} />

      <div className="row mt-4">
        <div className="col-md-4">
          <ComplaintForm getRequests={getRequests} />
        </div>

        <div className="col-md-8">
          <ComplaintList requests={requests} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
