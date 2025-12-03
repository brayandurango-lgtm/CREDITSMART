function CreditCard({ nombre, descripcion, imagen }) {
  return (
    <article className="card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <button className="btn">Solicitar</button>
    </article>
  );
}

export default CreditCard;