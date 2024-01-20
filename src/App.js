
import './App.css';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import Homepage from './pages/homepage';
import  Teachers  from './pages/teacherpage'
import  Classes  from './pages/ClassesPage'
import  AddClass  from './pages/AddClass'
import Payments from  './pages/Paymentspage'
import Settings from  './pages/settingspage'
import Landingpage from  './pages/Landingpage'
import Loginpage from  './pages/Login'
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route index element={<Landingpage/>}></Route>
  <Route path='/landingpage' element={<Landingpage/>}/>
  <Route path='/loginpage' element={<Loginpage/>}/>
  <Route path='/home' element={<Homepage/>}/>
  <Route path='/class' element={<AddClass/>}/>
  <Route path='/teachers' element={<Teachers/>}/>
  <Route path='/Myclasses' element={<Classes/>}/>
  <Route path='/AddClass' element={<AddClass/>}/>
  <Route path='/Payments' element={<Payments/>}/>
  <Route path='/Settings' element={<Settings/>}/>

 
</Routes>
</BrowserRouter>



  );
}

export default App;

