import "@testing-library/jest-dom/extend-expect";
//Configuracion de ENZYME jest para que funcione el testeo de los componentes
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
//Configuracion de Enzym-to-json
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() }); //Configuracion de Enzyme
expect.addSnapshotSerializer(createSerializer({ mode: "deep" })); //Configuracion de Enzyme-to-json
