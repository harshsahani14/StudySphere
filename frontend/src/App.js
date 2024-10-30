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
import OtpPage from './pages/OtpPage';
import ForgotPass from './pages/ForgotPass';
import NewPassword from './pages/NewPassword';


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
        <Route path="/submitotp" element={<OtpPage></OtpPage>}></Route>
        <Route path="/forgotpassword" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/updatePassword/:id" element={<NewPassword></NewPassword>}></Route>
      </Routes>
    </div>
  );
}

export default App;
