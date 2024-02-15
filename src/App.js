import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview/Overview';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Overview/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App