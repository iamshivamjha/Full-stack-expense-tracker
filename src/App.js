import React from 'react';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Home } from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Login } from './Screen/Login';
import { Signup } from './Screen/Signup';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Login></Login>}></Route>
        <Route exact path='/login' element={<Home></Home>}></Route>
        <Route exact path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </Router>
    </>
 );
}

export default App;
