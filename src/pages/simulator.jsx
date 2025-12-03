import { useState } from "react";
import { creditos } from "../data/creditos";
import CreditCard from "../components/CreditCard";

function Simulador() {
  const [search, setSearch] = useState("");
  const [monto, setMonto] = useState("todos");

  const filtrados = creditos.filter((c) => {
    const coincideNombre = c.nombre.toLowerCase().includes(search.toLowerCase());
    const coincideMonto = monto === "todos" || c.monto === monto;
    return coincideNombre && coincideMonto;
  });

  return (
    <>
      <section className="hero">
        <h2>Simulador de créditos</h2>
      </section>

      <section className="form">
        <fieldset>
          <legend>Buscar crédito</legend>

          <label>Nombre:</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <label>Monto:</label>
          <select value={monto} onChange={(e) => setMonto(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="bajo">Bajo</option>
            <option value="medio">Medio</option>
            <option value="alto">Alto</option>
          </select>
        </fieldset>
      </section>

      <section className="cards">
        {filtrados.length === 0 ? (
          <p style={{ color: "white" }}>No hay créditos disponibles</p>
        ) : (
          filtrados.map((c, i) => <CreditCard key={i} {...c} />)
        )}
      </section>
    </>
  );
}

export default Simulador;