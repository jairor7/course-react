import PropTypes from "prop-types";

const PrimeraApp = ({ saludo = "Hola, soy Goku!" }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(objeto, null, 3)}</pre> */}
      <p>Esta es la descripcion</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
