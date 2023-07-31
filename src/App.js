import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SplashChange from './components/SplashChange';
import DetailsHeader from './components/DetailsHeader';
import Details2 from './components/Details2';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<SplashChange/>} />
          <Route path='/details_1' element={<DetailsHeader/>} />
          <Route path='/details_2' element={<Details2/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
