import React, { useEffect, useState } from 'react';

import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);
  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('Peliculas'));
    setListadoState(peliculas);
    return peliculas;
  };

  const eliminarPeli = (e, id) => {
    let peliculas = JSON.parse(localStorage.getItem('Peliculas'));
    let nuevo_array_peliculas = peliculas.filter((x) => x.id !== id);
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
                <button
                  className="edit"
                  onClick={() => {
                    setEditar(pelicula.id);
                  }}
                >
                  Editar
                </button>
                <button className="delete" onClick={(e) => eliminarPeli(e, pelicula.id)}>
                  Borrar
                </button>

                {editar === pelicula.id && (
                  <Editar
                    pelicula={listadoState.find((x) => x.id === pelicula.id)}
                    conseguirPeliculas={conseguirPeliculas}
                    setEditar={setEditar}
                    setListadoState={setListadoState}
                  ></Editar>
                )}
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
