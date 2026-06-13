import { Navigate } from "react-router-dom";
import ComplaintForm from "./day1/components/ComplaintForm";
import ComplaintList from "./day1/components/ComplaintList";
import DashBoard from "./day1/pages/DashBoard";

const App = () => {
  return (
    <div>
      <button>
        <Navigate to="/student-dashboard"></Navigate>
      </button>
    </div>
  );
};

export default App;
