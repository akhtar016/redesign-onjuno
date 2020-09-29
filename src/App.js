import React from 'react';
import FirstSection from './Components/FirstSection/FirstSection';
import FourthSection from './Components/FourthSection/FourthSection';
import Navbar from './Components/Navbar/Navbar';
import SecondSection from './Components/SecondSection/SecondSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';

function App() {
  return (
    <div className="container">
       <Navbar />
       <FirstSection />
       <SecondSection />
       <ThirdSection />
       <FourthSection />
       
    </div>
  );
}

export default App;
