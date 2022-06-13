import Navbar from "./Components/Navbar/Navbar";
import Personajes from "./Components/Personajes/Personajes";
import Pagination from "./Components/Paginacion/Pagination";
import React, { useEffect, useState } from "react";

/* 
  los hooks son funciones especiales que nos permiten acceder a las funcionalidades de React  
  useStateuseState: Permite colocar un estado a la aplicación
*/

function App() {
  const url = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const fetchCharacters = (url) => {
    fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          setCharacters(data.results);
          setInfo(data.info);
        })
        .catch((error) => console.log("Error", error))
    );
  };

  /* 
  Ejecuta código cada vez que nuestro componente se renderiza    
  Le metemos un array vacio para que no haga un loop
  */

  useEffect(() => fetchCharacters(), []);

  const onPrevius = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  return (
    <>
      <Navbar nombre="Rick AND MORTY APP" />
      <div className="container mt-5">
        <Pagination
          mostrarSiguiente={info.next}
          mostrarAnterior={info.prev}
          anteriorPadre={onPrevius}
          siguientePadre={onNext}
        />

        <Personajes characters={characters} />

        <Pagination
          mostrarSiguiente={info.next}
          mostrarAnterior={info.prev}
          anteriorPadre={onPrevius}
          siguientePadre={onNext}
        />
      </div>
    </>
  );
}

export default App;
