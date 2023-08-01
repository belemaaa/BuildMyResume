import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SplashChange from './components/SplashChange';
import GeneralInformation from './components/GeneralInformation';
import PersonalData from './components/PersonalData';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<SplashChange/>} />
          <Route path='/general_information' element={<GeneralInformation/>} />
          <Route path='/personal_data' element={<PersonalData/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
