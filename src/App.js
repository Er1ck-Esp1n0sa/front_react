import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <h1 className="description">Esta aplicacion sirve para vizualisar los personajes de la serie animada Rick & Morty, su estado y especie</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={ imageRickMorty} alt="Rick & Morty" className='img-home'></img>
        <button onClick={reqApi} className='btn-search'>
          Buscar Personaje
          </button>
          </>
        )}
        <ul>
      <p>Hecho por: Erick Juarez ESpinosa</p>
      <p>Contacto</p>
        <p>zs20006728@estudiantes.uv.mx</p>
        <p>erikc_48@hotmail.com</p>
        <a href="https://github.com/Er1ck-Esp1n0sa" target="_blank" rel="noopener noreferrer">GitHub</a>
      </ul>
      </header>
    </div>
  );
}

export default App;
