import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
      className="imagen-testimonio"
      src={require("../imagenes/testimonio-imagen1.png")}
      alt="Foto 1"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniero de software en Makingdevs</p>
        <p className="texto-testimonio">Gracias a Makingdevs logré dejar un trabajo horrible y poder tener tiempo para mi</p>
      </div>
    </div>
  );
}

export default Testimonio;