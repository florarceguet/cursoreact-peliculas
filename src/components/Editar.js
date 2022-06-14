import React, { useState } from 'react';

export const Editar = ({ pelicula, conseguirPeliculas, setEditar, setListadoState }) => {
  const guardarPelicula = (e, id) => {
    e.preventDefault();
    let target = e.target;
    const peliculas_almacenadas = conseguirPeliculas();
    const index = peliculas_almacenadas.findIndex((x) => x.id === id);

    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    peliculas_almacenadas[index] = peli_actualizada;

    localStorage.setItem('Peliculas', JSON.stringify(peliculas_almacenadas));
    setEditar(0);
    setListadoState(peliculas_almacenadas);
  };
  return (
    <>
      <h3>Editar la pelicula {pelicula.titulo}</h3>
      <form onSubmit={(e) => guardarPelicula(e, pelicula.id)}>
        <input type="hidden" defaultValue={pelicula.id}></input>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" defaultValue={pelicula.titulo} />
        <textarea id="descripcion" name="descripcion" placeholder="Descripción" defaultValue={pelicula.descripcion}></textarea>
        <input type="submit" id="guardar" name="guardar" value="Guardar" />
      </form>
    </>
  );
};
