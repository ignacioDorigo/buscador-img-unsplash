
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Foto from "./components/Foto/Foto";


export default function App() {
  const [fotos, setFotos] = useState([]);

  const actualizarFotos = (data) => {
    setFotos(data);
    console.log(data);
  };

  return (
    <div>
      <Header actualizarFotos={actualizarFotos}></Header>
      <h1>Buscador de Imagenes API unplash</h1>
      <div className="container">
        <div className="fotos">
          {fotos.map((foto, index) => (
            <Foto key={index} foto={foto}></Foto>
          ))}
        </div>
      </div>
    </div>
  );
}
