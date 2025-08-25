import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; 
import Createpage from './pages/createpage';
import './App.css'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-new" element={<Createpage />} />
      </Routes>
    </Router>
  );
}

