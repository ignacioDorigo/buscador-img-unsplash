import { useFormik } from "formik";
import React from "react";
import "./App.css";
const valorInicial = {
  palabraBuscar: "",
};
export default function App() {
  const formik = useFormik({
    initialValues: valorInicial,
    onSubmit: async (formulario) => {
      try {
        console.log(formulario);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <header className="header">
        <form onSubmit={formik.handleSubmit} className="formulario">
          <input
            type="text"
            className="formulario__input"
            name="palabraBuscar"
            {...formik.getFieldProps("palabraBuscar")}
          ></input>
          {/* <button type="submit" className="formulario__boton"></button> */}
          <svg
            type="submit"
            onClick={formik.handleSubmit}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="boton__svg"
          >
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </form>
      </header>
    </div>
  );
}
