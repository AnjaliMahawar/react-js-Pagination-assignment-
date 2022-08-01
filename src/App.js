import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Error404 from './pages/Error404';
import Get_student from './Get_student';
import Edit from './pages/Edit';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
           <Route path='/' element={<Login/>} /> 
           <Route path='/Login' element={<Login/>} />
           <Route path='/Register' element={<Register/>} />
           <Route path="/get_student/:stu_id/:id" element={<Get_student/>} />
           <Route path="/get_students" element={ <Get_student /> } />
           
           <Route path='*' element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
