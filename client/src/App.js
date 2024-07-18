import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import AddSchool from './components/AddSchool';
import ShowSchool from './components/ShowSchool';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<AddSchool />} />
        <Route exact path="/view/:id" element={<ShowSchool/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
