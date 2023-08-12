import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SplashChange from './components/SplashChange';
import GeneralInformation from './components/GeneralInformation';
import PersonalData from './components/PersonalData';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {
  const [gi_details, setGIDetails] = useState({})
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<SplashChange/>} />
          <Route path='/general_information' element={<GeneralInformation setGIDetails={setGIDetails}/>}/>
          <Route path='/personal_data' element={<PersonalData/>} />
          <Route path='/resume' element={<Resume gi_details={gi_details}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
