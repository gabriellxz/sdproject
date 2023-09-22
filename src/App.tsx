import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <main className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
