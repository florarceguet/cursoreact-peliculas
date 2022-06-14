import React, { useState } from 'react';

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);
  const buscarPeli = (e) => {
    setBusqueda(e.target.value);
    let peliculasEncontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });
    if (peliculasEncontradas.length === 0 && busqueda.length > 3) {
      setNoEncontrado(true);
    }
    if (busqueda.length < 3) {
      peliculasEncontradas = JSON.parse(localStorage.getItem('Peliculas'));
    }
    setListadoState(peliculasEncontradas);
  };
  return (
    <div className="search">
      <h3 className="title">Buscador</h3>

      {noEncontrado && <span className="no-encontrado">No se ha encontrado ninguna coincidencia</span>}
      <form onSubmit={buscarPeli}>
        <input type="text" id="search_field" name="busqueda" autoComplete="off" value={busqueda} onChange={buscarPeli} />
      </form>
    </div>
  );
};
