import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NavBar from './components/NavBar';
import CatalogPage from './pages/CatalogPage';
import AboutusPage from './pages/AboutusPage';
import ContactusPage from './pages/ContactusPage';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/catalog" element={<CatalogPage></CatalogPage>}></Route>
        <Route path="/aboutus" element={<AboutusPage></AboutusPage>}></Route>
        <Route path="/contactus" element={<ContactusPage></ContactusPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
