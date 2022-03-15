import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitle }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(objeto, null, 3)}</pre> */}
      <p>{subtitle}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

PrimeraApp.defaultProps = {
  saludo: "Hola, soy Jairo!",
  subtitle: "Soy un subtítulo",
};

export default PrimeraApp;
