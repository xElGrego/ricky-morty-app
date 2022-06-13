import React from "react";

const Pagination = ({
  mostrarAnterior,
  mostrarSiguiente,
  anteriorPadre,
  siguientePadre,
}) => {
  const anterior = () => {
    anteriorPadre();
  };

  const siguiente = () => {
    siguientePadre();
  };

  return (
    <nav>
      <ul className="pagination justity-content-center">
        <li className="page-item">
          {mostrarAnterior ? (
            <button className="page-link" onClick={anterior}>
              Anterior
            </button>
          ) : null}
        </li>
        <li className="page-item">
          {mostrarSiguiente ? (
            <button className="page-link" onClick={siguiente}>
              Siguiente
            </button>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
