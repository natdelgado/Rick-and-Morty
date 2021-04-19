import React, {useEffect, useState} from 'react';
import './App.css';
import getPersonajes from './services/getPersonajes';
import Personaje from './component/Personaje';
import 'antd/dist/antd.css';
import { Table } from 'antd';



export default function App() {
  const [personajes, setPersonajes] = useState([])
    
  useEffect(function () {
      getPersonajes().then(personajes => setPersonajes(personajes))
  }, [])

  const columns = [
    {
      title: 'Image',
      dataIndex: 'timage',
      key: 'image',
    },
    {
      title: 'Name',
      dataIndex: 'tname',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'tstatus',
      key: 'status',
    },
    {
      title: 'Species',
      dataIndex: 'tspecies',
      key: 'species',
    },
    {
      title: 'Type',
      dataIndex: 'ttype',
      key: 'type',
    },
    {
      title: 'Gender',
      dataIndex: 'tgender',
      key: 'gender',
    },
  ];
  
  
  return (
    <div className="App">

      <div className="titulos">
        <h1>Rick and Morty</h1>
        <h4>Characters</h4>
      </div>

      
      
      <section className="App-component">
        { 
          personajes.map(singlePersonaje => 
            <Personaje 
              key={singlePersonaje.id}
              image={singlePersonaje.image} 
              name={singlePersonaje.name} 
              status={singlePersonaje.status} 
              species={singlePersonaje.species} 
              type={singlePersonaje.type} 
              gender={singlePersonaje.gender}>
            </Personaje>
          )
          
        }    
        <Table className="ant-table-content"
          columns={columns} 
          dataSource={personajes}
          title={() => 'Character comparision table'}
          pagination={{ pageSize: 50}}
          scroll={{ y: 400 }} 
          >
        </Table>
   
      </section>
    </div>
  );
};


//In the table, display the following columns: image, name, status, species, type, and gender.

// 'https://rickandmortyapi.com/api/character'

//PARA PREGUNTAR
//Se supone que la página tiene una base da datos de 600 personajes, pero en la api me aparecen 20,¿estaré usando la api correcta?
//No sé como arreglar el Personajes.js, yo creo que se puede sacar, pero si lo saco se rompe todo, hay algo que hace que continúe engando con el app (creo que es el tag <Personaje>)
//No agregué más cosas aparte de las que se pide (salvo css) porque no sé si eso le puede llegar a gustar a un cliente 