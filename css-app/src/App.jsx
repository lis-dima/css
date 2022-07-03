import { Routes, Route } from 'react-router-dom';
import FlexBox from './pages/FlexBox/FlexBox.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      asd
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flex-box" element={<FlexBox />} />
      </Routes>
    </div>
  );
}

export default App;
