
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing } from './views/Landing/Landing';
import { useEffect, useState } from 'react';
import { LoaderTerminal } from './components/webLoad/LoaderTerminal';
function App() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    const loadMeUp = (x) => {
      if (x === true) {
        setTimeout(() => {
          setloading(false)
        }, 5000)

      }
    }
    if (loading === true) {
      loadMeUp(loading)
    }
    console.log(loading)
  }, [loading])


  return (<>

    {loading ? <>
    <LoaderTerminal/>
    </> : 
    <>
      <div className="App">

        <BrowserRouter>

          <div className='pages'>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='*' element={<h1>404: Page not found</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>}

  </>);
}

export default App;
