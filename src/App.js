import axios from "axios";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";

function App() {
  axios.defaults.baseURL = "http://localhost:7000";
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
