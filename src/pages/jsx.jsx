import Layout from "../components/Layout";

export default function Jsx() {
  const a = 2;
  const b = 3;
  console.log(a * b);

  const obj = { nome: "Joao", idade: 30 };

  const titulo = <h1>JSX é um conceito central com const</h1>;
  return (
    <Layout titulo="Uso de JSX">
      <div className="">
        {titulo}
        <h1>JSX é um conceito central</h1>
        {"console".toUpperCase()}
        <p>{JSON.stringify({ nome: "Joao", idade: 30 })}</p>
      </div>
    </Layout>
  );
}
