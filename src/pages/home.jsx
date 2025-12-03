import CreditCard from "../components/CreditCard";
import { creditos } from "../data/creditos";

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Catálogo de créditos</h2>
        <p>Conoce nuestras 5 opciones de crédito.</p>
      </section>

      <section className="cards">
        {creditos.map((c, i) => (
          <CreditCard key={i} {...c} />
        ))}
      </section>
    </>
  );
}

export default Home;
