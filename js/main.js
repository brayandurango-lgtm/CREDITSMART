const creditos = [
  {
    nombre: "Crédito educativo",
    monto: "bajo",
    imagen: "img/credito-educativo.png",
    descripcion: "Financia tus estudios universitarios o técnicos."
  },
  {
    nombre: "Crédito empresarial",
    monto: "alto",
    imagen: "img/credito-empresarial.png",
    descripcion: "Apoya el crecimiento de tu empresa con tasas preferenciales."
  },
  {
    nombre: "Crédito libre inversión",
    monto: "medio",
    imagen: "img/credito-libre-inversion.png",
    descripcion: "Usa el dinero como quieras con una tasa fija."
  },
  {
    nombre: "Crédito vehículo",
    monto: "medio",
    imagen: "img/credito-vehiculo.png",
    descripcion: "Adquiere el vehículo de tus sueños fácilmente."
  },
  {
    nombre: "Crédito vivienda",
    monto: "alto",
    imagen: "img/credito-vivienda.png",
    descripcion: "Compra o mejora tu vivienda con tasas competitivas."
  }
];

const resultados = document.getElementById("resultados");
const inputSearch = document.getElementById("search");
const selectMonto = document.getElementById("monto");
const btnFiltrar = document.getElementById("filtrar");
const btnLimpiar = document.getElementById("limpiar");

// Mostrar todos los créditos al cargar la página
mostrarCreditos(creditos);

function mostrarCreditos(lista) {
  resultados.innerHTML = "";

  if (lista.length === 0) {
    resultados.innerHTML = "<p style='color:white;'>No se encontraron créditos.</p>";
    return;
  }

  lista.forEach((credito) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${credito.imagen}" alt="${credito.nombre}">
      <h3>${credito.nombre}</h3>
      <p>${credito.descripcion}</p>
    `;
    resultados.appendChild(card);
  });
}

// Evento para filtrar créditos
btnFiltrar.addEventListener("click", () => {
  const texto = inputSearch.value.toLowerCase();
  const rango = selectMonto.value;

  const filtrados = creditos.filter((credito) => {
    const coincideNombre = credito.nombre.toLowerCase().includes(texto);
    const coincideMonto = rango === "todos" || credito.monto === rango;
    return coincideNombre && coincideMonto;
  });

  mostrarCreditos(filtrados);
});

// Evento para limpiar búsqueda
btnLimpiar.addEventListener("click", () => {
  inputSearch.value = "";
  selectMonto.value = "todos";
  mostrarCreditos(creditos);
});
