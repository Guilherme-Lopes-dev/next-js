import { useState } from "react";
import Layout from "../components/Layout";

const Estado = () => {
  const [state, setState] = useState(0);

  const inc = () => {
    setState(state + 1);
  };
  const dec = () => {
    setState(state - 1);
  };
  return (
    <Layout titulo="Componentes com estado">
      <button onClick={dec}>Decrementar</button>
      <span>{state}</span>
      <button onClick={inc}>Incrementar</button>
    </Layout>
  );
};

export default Estado;
