import { useState } from "react";
import Layout from "../components/Layout";
const Integracao = () => {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState({});

  async function obterCliente() {
   const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
   const dados  = await resp.json()
   setCliente(dados)    
  }



  return (
    <Layout>
      <input type="number"  value={codigo}  onChange={e => setCodigo(e.target.value)} />
      <button onClick={obterCliente}>Obter cliente</button>
      <ul>
        <li>Id: {cliente.id} </li>
        <li>Email: {cliente.email} </li>
        <li>Nome: {cliente.nome} </li>
      </ul>
    </Layout>
  );
};

export default Integracao;
