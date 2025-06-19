import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './files/Home';
import About from './files/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
