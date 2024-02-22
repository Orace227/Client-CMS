import axios from "axios";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";

function App() {
  // axios.defaults.baseURL = "http://localhost:7000";
  axios.defaults.baseURL = "https://admin.blueescapeholidays.com/api";
  // axios.defaults.baseURL = "https://travelling-cms-backend.onrender.com";
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
