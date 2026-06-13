import { useEffect, useState, useContext } from "react";
import api from "../services/api";

// import SummaryCards from "../components/SummaryCards";
import SummaryCards from "../../day3/components/SummaryCards";
import ComplaintForm from "../components/ComplaintForm";
import ComplaintList from "../components/ComplaintList";

import { AuthContext } from "../../day2/context/AuthContext";

import FilterBar from "../../day3/components/FilterBar";
import useRequestFilters from "../../day3/hooks/useRequestFilters";

import AdminOverview from "../../day3/pages/AdminOverview";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [requests, setRequests] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [sort, setSort] = useState("");

  const filtered_requests = useRequestFilters(
    requests,
    search,
    category,
    status,
    priority,
    sort,
  );

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
  }, [user]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Hostel Maintenance Dashboard</h2>

      <div className="row mb-4">
        <div className="col-12">
          {user.role === "admin" ? (
            <AdminOverview requests={requests} />
          ) : (
            <SummaryCards requests={requests} />
          )}
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
            <FilterBar
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              status={status}
              setStatus={setStatus}
              priority={priority}
              setPriority={setPriority}
              sort={sort}
              setSort={setSort}
              categories={categories}
            />

            <ComplaintList
              requests={filtered_requests}
              isAdmin={user.role === "admin"}
              getRequests={getRequests}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
