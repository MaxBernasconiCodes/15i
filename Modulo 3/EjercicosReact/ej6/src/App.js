import React, {useState} from 'react';
import EmpleadoList from './components/EmpleadoList';
import Navbar from './components/navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from 'react-router-dom'



function App() {
  const [usuarios, setUsuarios] = useState([
    
      {
       "nombre": "Merlin",
       "apellido": "Koelpin",
       "avatar": "https://cdn.fakercloud.com/avatars/akmur_128.jpg",
       "empresa": "Rempel, Schamberger and Klocko",
       "departamento": "Industrial",
       "id": "1"
      },
      {
       "nombre": "Isabel",
       "apellido": "Jaskolski",
       "avatar": "https://cdn.fakercloud.com/avatars/iamglimy_128.jpg",
       "empresa": "Stroman - Watsica",
       "departamento": "Sports",
       "id": "2"
      },
      {
       "nombre": "Flavie",
       "apellido": "Pacocha",
       "avatar": "https://cdn.fakercloud.com/avatars/wake_gs_128.jpg",
       "empresa": "Dach and Sons",
       "departamento": "Sports",
       "id": "3"
      },
      {
       "nombre": "Elvis",
       "apellido": "Schneider",
       "avatar": "https://cdn.fakercloud.com/avatars/derekcramer_128.jpg",
       "empresa": "Smitham - Adams",
       "departamento": "Books",
       "id": "4"
      },
      {
       "nombre": "Ethan",
       "apellido": "Murphy",
       "avatar": "https://cdn.fakercloud.com/avatars/grahamkennery_128.jpg",
       "empresa": "Gorczany, Brekke and Luettgen",
       "departamento": "Shoes",
       "id": "5"
      },
      {
       "nombre": "Berniece",
       "apellido": "Konopelski",
       "avatar": "https://cdn.fakercloud.com/avatars/artem_kostenko_128.jpg",
       "empresa": "Mohr - Heller",
       "departamento": "Beauty",
       "id": "6"
      },
      {
       "nombre": "Zula",
       "apellido": "Rolfson",
       "avatar": "https://cdn.fakercloud.com/avatars/gusoto_128.jpg",
       "empresa": "Treutel, Frami and Weimann",
       "departamento": "Outdoors",
       "id": "7"
      },
      {
       "nombre": "Weldon",
       "apellido": "Cremin",
       "avatar": "https://cdn.fakercloud.com/avatars/antonyzotov_128.jpg",
       "empresa": "Torphy, Cummerata and Nicolas",
       "departamento": "Tools",
       "id": "8"
      },
      {
       "nombre": "Gregory",
       "apellido": "Kohler",
       "avatar": "https://cdn.fakercloud.com/avatars/madewulf_128.jpg",
       "empresa": "Stoltenberg LLC",
       "departamento": "Home",
       "id": "9"
      },
      {
       "nombre": "Hobart",
       "apellido": "Murphy",
       "avatar": "https://cdn.fakercloud.com/avatars/adobi_128.jpg",
       "empresa": "Runolfsdottir, Pagac and Senger",
       "departamento": "Clothing",
       "id": "10"
      },
      {
       "nombre": "Preston",
       "apellido": "Krajcik",
       "avatar": "https://cdn.fakercloud.com/avatars/mymyboy_128.jpg",
       "empresa": "Parisian and Sons",
       "departamento": "Health",
       "id": "11"
      },
      {
       "nombre": "Rahsaan",
       "apellido": "Littel",
       "avatar": "https://cdn.fakercloud.com/avatars/operatino_128.jpg",
       "empresa": "Ebert Group",
       "departamento": "Shoes",
       "id": "12"
      },
      {
       "nombre": "Josefina",
       "apellido": "Hermiston",
       "avatar": "https://cdn.fakercloud.com/avatars/sunlandictwin_128.jpg",
       "empresa": "Hilll Inc",
       "departamento": "Industrial",
       "id": "13"
      },
      {
       "nombre": "Ludie",
       "apellido": "Green",
       "avatar": "https://cdn.fakercloud.com/avatars/hellofeverrrr_128.jpg",
       "empresa": "Adams - Strosin",
       "departamento": "Shoes",
       "id": "14"
      },
      {
       "nombre": "Clotilde",
       "apellido": "Schimmel",
       "avatar": "https://cdn.fakercloud.com/avatars/moscoz_128.jpg",
       "empresa": "Stroman - Runolfsdottir",
       "departamento": "Sports",
       "id": "15"
      },
      {
       "nombre": "Eliseo",
       "apellido": "Rippin",
       "avatar": "https://cdn.fakercloud.com/avatars/mr_shiznit_128.jpg",
       "empresa": "Hickle, Mohr and Altenwerth",
       "departamento": "Sports",
       "id": "16"
      },
      {
       "nombre": "Carolyne",
       "apellido": "Kuhlman",
       "avatar": "https://cdn.fakercloud.com/avatars/nandini_m_128.jpg",
       "empresa": "Kuvalis, Paucek and Jenkins",
       "departamento": "Industrial",
       "id": "17"
      },
      {
       "nombre": "Lola",
       "apellido": "Stamm",
       "avatar": "https://cdn.fakercloud.com/avatars/attacks_128.jpg",
       "empresa": "Spencer Inc",
       "departamento": "Garden",
       "id": "18"
      },
      {
       "nombre": "Wilfred",
       "apellido": "Osinski",
       "avatar": "https://cdn.fakercloud.com/avatars/chris_witko_128.jpg",
       "empresa": "Sipes and Sons",
       "departamento": "Computers",
       "id": "19"
      },
      {
       "nombre": "Marisa",
       "apellido": "Brakus",
       "avatar": "https://cdn.fakercloud.com/avatars/kucingbelang4_128.jpg",
       "empresa": "Weimann LLC",
       "departamento": "Computers",
       "id": "20"
      },
      {
       "nombre": "Assunta",
       "apellido": "Prohaska",
       "avatar": "https://cdn.fakercloud.com/avatars/hafeeskhan_128.jpg",
       "empresa": "Herzog, Sawayn and Schultz",
       "departamento": "Garden",
       "id": "21"
      },
      {
       "nombre": "Celestine",
       "apellido": "Bradtke",
       "avatar": "https://cdn.fakercloud.com/avatars/h1brd_128.jpg",
       "empresa": "Cassin - Predovic",
       "departamento": "Baby",
       "id": "22"
      }
     
  ]);
  return (
   <>
   <Router>
   <Navbar></Navbar>
   <Home></Home>
   <EmpleadoList usuarios={usuarios}></EmpleadoList>
   </Router>
   </>
  );
}

export default App;
