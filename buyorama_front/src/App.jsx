import "./App.css";
import { Navbar } from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="main_container">
      <div className="container-fluid col-12">
        <Navbar />
        <Products />
      </div>
    </div>
  );
}

export default App;
