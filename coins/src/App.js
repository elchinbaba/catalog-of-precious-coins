import { Routes, Route } from 'react-router-dom';

import './reset.css';
import './common.css';

import Home from './pages/Homepage/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;