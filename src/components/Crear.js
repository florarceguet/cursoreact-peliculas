import React, { useState } from 'react';

import { guardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListadoState }) => {
  const tituloComponente = 'Añadir Película';
  const [peliculaState, setPeliculaState] = useState({
    titulo: '',
    descripcion: '',
  });

  const { titulo, descripcion } = peliculaState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    const peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    setPeliculaState(peli);
    setListadoState((elementos) => {
      if (elementos) {
        return [...elementos, peli];
      } else {
        return [peli];
      }
    });
    guardarEnStorage('Peliculas', peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>{titulo && descripcion && 'Has creado la película: ' + titulo}</strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
        <input type="submit" id="guardar" name="guardar" value="Guardar" />
      </form>
    </div>
  );
};
