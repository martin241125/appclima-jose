import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import estilos from "./style/estilos.css";


function App() {
  return (
    <div className="estilos">
      <NavBar />
      <Card />
      <footer className="bg-gray-700">
        <div className="container mx-auto">
          <p className="text-center text-white py-4 text-base">
            © 2022 Martin Miño.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
