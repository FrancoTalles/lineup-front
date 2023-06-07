import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';


function App() {
  return (
    <>
      <ToastContainer theme='dark' />
      <Header />
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App