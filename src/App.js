/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Header from "./Components/Header/header";
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Body from './Components/Body/body';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Header/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/create" element={<Body/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
