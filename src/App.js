import ALlRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>GitHub Repo Search</h1>
      <Navbar />
      <ALlRoutes />
    </div>
  );
}
