import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Overview from './pages/Overview/Overview';
import Market from './pages/Market/Market';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Overview />} />
        <Route path='/overview' element={<Overview />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </HashRouter>
  );
}

export default App