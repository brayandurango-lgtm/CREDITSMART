import { useState } from "react";

function Solicitar() {
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    email: "",
    telefono: "",
    tipo: "",
    monto: "",
    plazo: "",
    destino: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();
    alert("Solicitud enviada correctamente ✔️");
    setForm({
      nombre: "",
      cedula: "",
      email: "",
      telefono: "",
      tipo: "",
      monto: "",
      plazo: "",
      destino: ""
    });
  };

  return (
    <>
      <section className="hero">
        <h2>Formulario de solicitud</h2>
      </section>

      <form className="form" onSubmit={enviar}>

        <fieldset>
          <legend>Datos personales</legend>

          <label>Nombre:
            <input name="nombre" value={form.nombre} onChange={handleChange} />
          </label>

          <label>Cédula:
            <input name="cedula" value={form.cedula} onChange={handleChange} />
          </label>

          <label>Email:
            <input name="email" value={form.email} onChange={handleChange} />
          </label>

          <label>Teléfono:
            <input name="telefono" value={form.telefono} onChange={handleChange} />
          </label>
        </fieldset>

        <fieldset>
          <legend>Datos del crédito</legend>

          <label>Tipo:
            <select name="tipo" value={form.tipo} onChange={handleChange}>
              <option value="">Seleccione...</option>
              <option>Crédito libre inversión</option>
              <option>Crédito vehículo</option>
              <option>Crédito vivienda</option>
              <option>Crédito educativo</option>
              <option>Crédito empresarial</option>
            </select>
          </label>

          <label>Monto:
            <input name="monto" value={form.monto} onChange={handleChange} />
          </label>

          <label>Plazo (meses):
            <select name="plazo" value={form.plazo} onChange={handleChange}>
              <option value="">Seleccione…</option>
              <option>12</option>
              <option>24</option>
              <option>36</option>
              <option>48</option>
              <option>60</option>
            </select>
          </label>

          <label>Destino:
            <textarea name="destino" value={form.destino} onChange={handleChange} />
          </label>
        </fieldset>

        <button className="btn">Enviar solicitud</button>
      </form>
    </>
  );
}

export default Solicitar;