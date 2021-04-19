import './getPersonajes.css';

export default function getPersonajes(){
  const apiURL = 'https://rickandmortyapi.com/api/character'

  
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {results = []} = response
      if(Array.isArray(results)){
        const personajes = results.map(character => ({
          timage: <img alt={character.name} src={character.image}></img>,
          tname: character.name,
          tstatus: character.status,
          tspecies: character.species,
          ttype: character.type,
          tgender: character.gender,
        }))
        return personajes
      }
  })
}