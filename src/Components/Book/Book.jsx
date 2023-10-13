import React, { useState, useEffect } from "react";
import libroData from "../../assets/libro.json";
import "./Book.css";

const Book = () => {
  const [paginas, setPaginas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(null);
  const [ocultarPagina, setOcultarPagina] = useState(false);

  useEffect(() => {
    setPaginas(libroData);
  }, []);

  const buscarAleatorio = () => {
    const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
    if (paginaAleatoria) {
      setOcultarPagina(true);

      setTimeout(() => {
        setPaginaActual(paginaAleatoria);
        setOcultarPagina(false);
      }, 0); // Ajusta el tiempo según la duración de la animación CSS
    } else {
      alert("No se pudo encontrar una página aleatoria.");
    }
  };

  return (
    <div
      className={`libro-container ${ocultarPagina ? "oculto" : "fadeInOut"}`}
    >
      <div className="busqueda">
        <button onClick={buscarAleatorio}>Buscar Aleatorio</button>
      </div>

      {paginaActual ? (
        <div className="pagina-actual">
          <h3>{paginaActual.titulo}</h3>
          <p>{paginaActual.contenido}</p>
        </div>
      ) : (
        <div className="image">
          <p>
            “Conócete a ti mismo”, por medio de un examen incesante de sí mismo,
            conocerse a sí mismo significa ante todo conocer los propios
            límites, la propia ignorancia; quiere decir “saber que no se sabe”.
            Sócrates.
          </p>
        </div>
      )}
    </div>
  );
};

export default Book;
