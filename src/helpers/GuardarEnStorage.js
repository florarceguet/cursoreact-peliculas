export const guardarEnStorage = (clave, item) => {
  let elementos = JSON.parse(localStorage.getItem(clave));

  if (Array.isArray(elementos)) {
    elementos.push(item);
  } else {
    elementos = [item];
  }

  localStorage.setItem(clave, JSON.stringify(elementos));

  return item;
};
