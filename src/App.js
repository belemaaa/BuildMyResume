import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SplashChange from './components/SplashChange';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<SplashChange/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
