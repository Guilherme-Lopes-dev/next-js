import Link from 'next/link'
import Navegation from '../components/Navegation';

export default function Inicio(props) {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'wrap',
      height: '100vh'

    }}> 
      <Navegation texto="estiloso" destino="/estiloso" cor="crimson"/>
      <Navegation texto="app" destino="/app" cor="purple"/>
      <Navegation texto="jsx" destino="/jsx" cor="green"/>
      <Navegation texto="Navegação #01" destino="/navegacao" cor="orange"/>
      <Navegation texto="Navegação #02" destino="/cliente/sp/123" cor="black"/>
      <Navegation texto="Componentes com estado" destino="/estado" cor="brown"/>
      <Navegation texto="Integração com API" destino="/integracao_1" cor="blue"/>
      <Navegation texto="Conteudo Estatico" destino="/estatico" cor="red"/>



    </div>
  );
}
