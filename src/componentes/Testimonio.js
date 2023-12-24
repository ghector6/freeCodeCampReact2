import React from "react";
import "../stylesheets/Testimonio.css";

export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
      className="imagen-testimonio"
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt="Foto 1"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
          </p>

        <p className="cargo-testimonio"><strong>{props.cargo}</strong> en {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
