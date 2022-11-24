/* eslint-disable no-unused-vars */
import Banner from "./componentes/Banner/Index";
import Formulario from "./componentes/Formulario/Index";
import { useState } from "react";
function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const aoCadastrarNovoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCadastrarColaborador={(colaborador) => {
          aoCadastrarNovoColaborador(colaborador);
        }}
      />
    </div>
  );
}

export default App;
