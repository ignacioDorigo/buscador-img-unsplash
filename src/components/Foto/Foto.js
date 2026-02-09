import React from "react";
import "./Foto.css";

export default function Foto({ foto }) {
  return (
    <article className="foto" onClick={() => window.open(foto.links.html)}>
      <img
        className="foto__img"
        src={foto.urls.regular ? foto.urls.regular : foto.links.html}
        alt={foto.alt_description}
      ></img>
      <p className="foto__descripcion">{foto.alt_description}</p>
    </article>
  );
}
