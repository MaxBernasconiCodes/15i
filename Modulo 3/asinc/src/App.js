import logo from './logo.svg';
import './App.css';
import Padre from './Padre';

function App() {
//   async function fetchMovies() {
//     const response = await fetch('https://api.themoviedb.org/3/movie/660?api_key=f61b06f2524aca9b1ae4bee7fee9f327&language=en-US');
//     const pelicula = await response.json();
//     console.log(pelicula.title);
//   }
//   fetchMovies()

  return (
    <div className="App">
      <Padre />
    </div>
  );
}

export default App;
