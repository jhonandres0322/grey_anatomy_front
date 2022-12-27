import './App.css';
import CrearPersonajePage from './pages/CrearPersonajePage';
import ListarPersonajesPage from './pages/ListarPersonajesPage';
import HomePage from './pages/HomePage';
import NavBar from './shared/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="personaje/crear" element={<CrearPersonajePage />} />
          <Route path="personaje/listar" element={<ListarPersonajesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
