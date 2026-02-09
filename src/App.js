import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Foto from "./components/Foto/Foto";

const apiKey = process.env.REACT_APP_API_KEY;

export default function App() {
  const [fotos, setFotos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [palabra, setPalabra] = useState("");

  const resetearBusqueda = (nuevaPalabra) => {
    setPagina(1);
    setPalabra(nuevaPalabra);
  };

  const actualizarFotos = (data) => {
    setFotos(data);
    console.log(data);
  };

  useEffect(() => {
    const buscarFotos = async () => {
      if (palabra.length === 0) {
        return;
      }
      try {
        console.log(
          `https://api.unsplash.com/search/photos?query=${palabra}&per_page=20&page=${pagina}`,
        );
        const buscarFotos = await fetch(
          `https://api.unsplash.com/search/photos?query=${palabra}&per_page=20&page=${pagina}`,
          {
            headers: {
              Authorization: `Client-ID ${apiKey}`,
            },
          },
        );
        const fotosJSON = await buscarFotos.json();
        const fotos = fotosJSON.results;
        actualizarFotos(fotos);
      } catch (error) {
        console.log(error);
      }
    };
    buscarFotos();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pagina, palabra]);

  return (
    <div>
      <Header
        // actualizarFotos={actualizarFotos}
        resetearBusqueda={(nueva) => resetearBusqueda(nueva)}
      ></Header>
      <h1>Buscador de Imagenes API unplash</h1>
      <div className="container">
        <div className="fotos">
          {fotos.map((foto, index) => (
            <Foto key={index} foto={foto}></Foto>
          ))}
        </div>
      </div>

      {palabra.length === 0 ? null : (
        <div className="botones">
          {pagina === 1 ? null : (
            <button
              className="boton"
              onClick={() => setPagina((prevState) => prevState - 1)}
            >
              Anterior
            </button>
          )}

          {(pagina > 1) & (fotos.length === 0) ? null : (
            <button
              className="boton"
              onClick={() => setPagina((prevState) => prevState + 1)}
            >
              Siguiente
            </button>
          )}
        </div>
      )}
    </div>
  );
}
