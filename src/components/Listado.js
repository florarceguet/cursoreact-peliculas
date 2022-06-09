import React, { useEffect } from 'react';

export const Listado = ({ listadoState, setListadoState }) => {
  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('Peliculas'));
    setListadoState(peliculas);
  };

  const eliminarPeli = (e, id) => {
    let peliculas = JSON.parse(localStorage.getItem('Peliculas'));
    let nuevo_array_peliculas = peliculas.filter((x) => x.id !== id);
    console.log(nuevo_array_peliculas);
    setListadoState(nuevo_array_peliculas);
    localStorage.setItem('Peliculas', JSON.stringify(nuevo_array_peliculas));
  };

  return (
    <>
      {/*Contenido principal*/}
      <section id="content" className="content">
        {/*aqui van las peliculas*/}
        {listadoState && listadoState.length > 0 ? (
          listadoState.map((pelicula) => {
            return (
              <article className="peli-item" key={pelicula.id}>
                <h3 className="title">{pelicula.titulo}</h3>
                <p className="description">{pelicula.descripcion}</p>
                <button className="edit">Editar</button>
                <button className="delete" onClick={(e) => eliminarPeli(e, pelicula.id)}>
                  Borrar
                </button>
              </article>
            );
          })
        ) : (
          <p>No hay peliculas para mostrar</p>
        )}
      </section>
    </>
  );
};
