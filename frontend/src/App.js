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
import ErrorPage from "./pages/ErrorPage"
import DashBoardPage from "./pages/DashBoardPage"
import MyProfile from './components/core/DashBoard/MyProfile';
import EnrolledCourses from './components/core/DashBoard/EnrolledCourses';
import WishList from './components/core/DashBoard/WishList';
import PurchaseHistory from './components/core/DashBoard/PurchaseHistory';
import Courses from './components/core/DashBoard/Courses';
import Settings from './components/core/DashBoard/Settings';
import { useSelector } from 'react-redux';
import AddCourseIndex from './components/core/DashBoard/AddCourse/AddCourseIndex';
import InstructorDashBoard from './components/core/DashBoard/InstructorDashBoard';


function App() {

  const {user} = useSelector(state=> state.profile)
  const {token} = useSelector(state=> state.auth)
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        
        <Route path="/catalog" element={<CatalogPage></CatalogPage>}></Route>
        <Route path="/aboutus" element={<AboutusPage></AboutusPage>}></Route>
        <Route path="/contactus" element={<ContactusPage></ContactusPage>}></Route>
        <Route path="/submitotp" element={<OtpPage></OtpPage>}></Route>
        <Route path="/forgotpassword" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/updatePassword/:id" element={<NewPassword></NewPassword>}></Route>

        {
          token!=null ? (<Route path="/dashBoard" element={<DashBoardPage></DashBoardPage>}>

        
            <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
            {
              user!==null && user.role === "student" ? (
              
              <>
              <Route path="enrolledCourses" element={<EnrolledCourses></EnrolledCourses>}></Route>
              <Route path="wishlist" element={<WishList></WishList>}></Route>
              </>
              ) : (<>
                  <Route path="addCourse" element={<AddCourseIndex></AddCourseIndex>}></Route>
                  <Route path="course" element={<WishList></WishList>}></Route>
                  <Route path="instructorDashboard" element={<InstructorDashBoard></InstructorDashBoard>}></Route>
              </>)
            }
            <Route path="purchaseHistory" element={<PurchaseHistory/>}></Route>
            <Route path="courses" element={<Courses></Courses>}></Route>
            <Route path="settings" element={<Settings></Settings>}></Route>
        </Route>) : (
          <>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          </>
        )
        }
        
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
