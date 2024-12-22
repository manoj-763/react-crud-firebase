import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup/SignUp';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Protected from './components/Protected';


const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected component={Home} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
