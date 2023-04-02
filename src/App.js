import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Sporting',
      cor: '#32CD32'
    },
    {
      id: uuidv4(),
      nome: 'Real Madrid',
      cor: '#EEE8AA'
    },
    {
      id: uuidv4(),
      nome: 'Chelsea ',
      cor: '#4169E1'
    },
    {
      id: uuidv4(),
      nome: 'Bayern de Munique',
      cor: '#FF0000'
    },
    {
      id: uuidv4(),
      nome: 'Paris Saint-Germain',
      cor: '#1a2b4c'
    },
    {
      id: uuidv4(),
      nome: 'Juventus ',
      cor: '#272727'
    },
    {
      id: uuidv4(),
      nome: 'Liverpool',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Rodrigo Ribeiro',
      cargo: 'Atacante',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/726701-1666100589.jpg?lm=1',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Pedro Gonçalves',
      cargo: 'Ponta Esquerda',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/426620-1602774745.jpg?lm=1',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Luís Neto',
      cargo: 'Zagueiro',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/56036-1582726258.jpg?lm=1',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Gonçalo Inácio',
      cargo: 'Zagueiro',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/549006-1571744859.jpg?lm=1',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Benzema',
      cargo: 'Atacante',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/18922-1653042225.jpg?lm=1',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Vinícius Júnior',
      cargo: 'Ponta-esquerda',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/371998-1664869583.jpg?lm=1',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Courtois',
      cargo: 'Goleiro',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/108390-1665067957.jpg?lm=1',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Toni Kroos',
      cargo: 'Meia Central',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/31909-1661426083.jpg?lm=1',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Reece James',
      cargo: 'Lateral Direito',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/472423-1636537984.jpg?lm=1',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Thiago Silva',
      cargo: 'Zagueiro',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/29241-1661856081.jpg?lm=1',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Kanté',
      cargo: 'Volante',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/225083-1598302373.jpg?lm=1',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Lewis Hall',
      cargo: 'Lateral Esquerdo',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/670858-1668079368.jpg?lm=1',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Thomas Müller',
      cargo: 'Atacante',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/58358-1667830486.jpg?lm=1',
      time: times[3].nome
    },
    {
      nome: 'Mané',
      cargo: 'Ponta Esquerda',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/200512-1667830279.jpg?lm=1',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Manuel Neue',
      cargo: 'Goleiro',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/17259-1667830554.jpg?lm=1',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Leon Goretzka',
      cargo: 'Meia Central',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/153084-1667830008.jpg?lm=1',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Neymar',
      cargo: 'Ponta Esquerda',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/68290-1669394812.jpg?lm=1',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Lionel Messi',
      cargo: 'Atacante',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/28003-1671435885.jpg?lm=1',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Kylian Mbappé',
      cargo: 'Atacante',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/342229-1632686046.jpg?lm=1',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Marco Verrati',
      cargo: 'Meia Central',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/102558-1672304218.jpg?lm=1',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Di María',
      cargo: 'Ponta Direita',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/45320-1663576797.jpg?lm=1',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Alex Sandro',
      cargo: 'Lateral Esquerdo',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/79960-1661351746.jpg?lm=1',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Danilo',
      cargo: 'Lateral Direito',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/145707-1663577215.jpg?lm=1',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: 'Daniele Rugani',
      cargo: 'Zagueiro',
      imagem: 'https://img.a.transfermarkt.technology/portrait/header/162959-1595858253.jpg?lm=1',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito (id){
setColaboradores(colaboradores.map(colaborador => {
  if( colaborador.id === id ) colaborador.favorito = !colaborador.favorito;
  return colaborador
}))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minhas Equipes</h1>
          {times.map((time, indice) => 
            <Time 
              aoFavoritar={resolverFavorito} 
              mudarCor={mudarCor} 
              key={indice} 
              time={time} 
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
              aoDeletar={deletarColaborador} 
            />
          )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
