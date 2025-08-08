function Titulo() {
  //jsx -> Ract.createElement
  const nombre = "Chachito feliz";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1> Hola Mundo </h1>;
}

export default Titulo;
