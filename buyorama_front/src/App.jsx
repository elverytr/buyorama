import "./App.css";
import { Navbar } from "./components/Navbar";
import Products from "./components/Products";
import { Cloudinary } from "@cloudinary/url-gen";

function App() {
  const cld = new Cloudinary({
    cloud: { cloudName: "react-de-cero-a-experto" },
  });

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
