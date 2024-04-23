
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing } from './views/Landing/Landing';
import { Project } from './views/Project';
import { ProjectList } from './views/ProjectList/ProjectList';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/projects' element={<ProjectList />} />
            <Route path='/projects/i/:id' element={<Project />} />
            <Route path='*' element={<h1>404: Page not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
