import {
  BrowserRouter as Router,  
  Switch,
  Route,
  Link} from 'react-router-dom';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import HomeComponent from './pages/Home/HomeComponent';
  import Productos from './pages/Productos/Productos';
 import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Header/>
    <Switch>
      <Route exact path="/">
        <HomeComponent></HomeComponent>
      </Route>
      <Route path="/productos">
        <Productos></Productos>
      </Route>
      <Route path="/nosotros">
        <AboutUs></AboutUs> 
      </Route>
    </Switch>
    <Footer/>
  </>
  );
}

export default App;
