import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* COMPONENTS */
import Header from './components/Header';
import Footer from './components/Footer';

/* STYLES */
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

/* PAGES */
import SomosSuyas from './pages/SomosSuyas';
import NuestrasActividades from './pages/NuestrasActividades';
import Inicio from './pages/Inicio';
import Talleres from './pages/Talleres';
import Escuelas from './pages/Escuela';
import MejorEsDar from './pages/MejorEsDar';
import Contacto from './pages/Contacto';
import Error from './pages/Error';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <div>
      <Router>

        <Header />

        <Routes>

          <Route path='/' element={<Inicio/>} />

          <Route path='/nuestrasactividades' element={<NuestrasActividades/>} />

          <Route path='/atualcance' element={<Talleres/>} />

          <Route path='/nosotros' element={<Nosotros/>} />

          <Route path='/escuela' element={<Escuelas/>} />

          <Route path='/somossuyas' element={<SomosSuyas/>} />

          <Route path='/mejoresdar' element={<MejorEsDar/>} />

          <Route path='/contactos' element={<Contacto/>} />

          <Route path='/error' element={<Error/>} />

        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
