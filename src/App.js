import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SplashChange from './components/SplashChange';
import DetailsHeader from './components/DetailsHeader';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<SplashChange/>} />
          <Route path='/details_1' element={<DetailsHeader/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
