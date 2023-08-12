import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SplashChange from './components/SplashChange';
import GeneralInformation from './components/GeneralInformation';
import PersonalData from './components/PersonalData';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({})
  const [personalData, setPersonalData] = useState({})
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<SplashChange/>} />
          <Route path='/general_information' element={<GeneralInformation setGeneralInfo={setGeneralInfo}/>}/>
          <Route path='/personal_data' element={<PersonalData setPersonalData={setPersonalData}/>} />
          <Route 
            path='/resume' 
            element={
              <Resume 
                generalInfo={generalInfo} 
                personalData={personalData}
              />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
