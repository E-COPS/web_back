import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Activity from './Activity';
import Program from './Program';
import Member from './Member';
import Recruitment from './Recruitment';
import Beginner from './Beginner';
import Challenger from './Challenger';
import Webhacking from './Webhacking';
import Reversing from './Revesing';
import Forensic from './Forensic';
import Development from './Development';


// style 전체 적용
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url("Inter-VariableFont_slnt,wght.ttf") format("truetype");
  }

  body {
    background-color: #1A1C1D;
    font-family: 'Inter', sans-serif;
    color: white;
  }
`;


function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        {/* other pages */}
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/program' element={<Program/>}/>
        <Route path='/member' element={<Member/>}/>
        <Route path='/recruitment' element={<Recruitment/>}/>
        <Route path ='/Beginner' element={<Beginner/>}/>
        <Route path ='/Challenger' element={<Challenger/>}/>
        <Route path ='/Webhacking' element={<Webhacking/>}/>
        <Route path ='/Reversing' element={<Reversing/>}/>
        <Route path='/Forensic' element={<Forensic/>}/>
        <Route path='/Development' element={<Development/>}/>
        {/* root page */}
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}
 
export default App;
