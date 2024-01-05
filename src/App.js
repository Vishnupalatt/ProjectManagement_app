import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PFHome from './pages/PFHome';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      {/* <h4>Project Fair</h4> */}
      <Routes>
        <Route path='/' element={<PFHome />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
