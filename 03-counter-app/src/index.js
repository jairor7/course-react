import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
// import PrimeraApp from "./PrimeraApp";
import "./index.css";

const divRoot = document.getElementById("root");

ReactDOM.render(<CounterApp value={10} />, divRoot);
// ReactDOM.render(<PrimeraApp saludo="Hola, soy Jairo :D!!" />, divRoot);
