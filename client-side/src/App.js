import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import { Landing } from './views/Landing';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Landing/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
