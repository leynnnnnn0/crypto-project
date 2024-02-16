import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview/Overview';
import Market from './pages/Market/Market';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Overview />} />
        <Route path='/overview' element={<Overview />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App