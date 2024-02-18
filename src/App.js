import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Overview from './pages/Overview/Overview';
import Market from './pages/Market/Market';
import Charts from './pages/Charts/Charts';
import Wallet from './pages/Wallet/Wallet';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/market" element={<Market />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </HashRouter>
  );
}

export default App