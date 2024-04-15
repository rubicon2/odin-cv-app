import ToggleEditField from './ToggleEditField'
import ToggleEditStudyInfo from './ToggleEditStudyInfo';
import Container from './Container';
import { useState } from 'react';
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [generalSubmitted, setGeneralSubmitted] = useState(false);

  const [schoolInfo, setSchoolInfo] = useState({});
  const [collegeInfo, setCollegeInfo] = useState({});
  const [uniInfo, setUniInfo] = useState({});
  const [educationSubmitted, setEducationSubmitted] = useState(false);

  // THINK ABOUT HAVING COLLAPSIBLE SECTION FOR EDUCATION INPUT! THAT WOULD BE SWEET!

  return (
    <>
      <h1>CV App</h1>
      <Container className='input-flex-gap' onButtonClick={() => setGeneralSubmitted(!generalSubmitted)} submitted={generalSubmitted}>
        <h2>General</h2>
        <ToggleEditField fieldName='First Name' onChange={(event) => setFirstName(event.target.value)} value={firstName} edit={!generalSubmitted} />
        <ToggleEditField fieldName='Surname' onChange={(event) => setSurname(event.target.value)} value={surname} edit={!generalSubmitted} />
      </Container>
      <Container onButtonClick={() => setEducationSubmitted(!educationSubmitted)} submitted={educationSubmitted}>
        <h2>Education</h2>
        <ToggleEditStudyInfo placeOfStudy='School' onChange={(infoObj) => setSchoolInfo(infoObj)} edit={!educationSubmitted} />
        <ToggleEditStudyInfo placeOfStudy='College' onChange={(infoObj) => setCollegeInfo(infoObj)} edit={!educationSubmitted} />
        <ToggleEditStudyInfo placeOfStudy='University' onChange={(infoObj) => setUniInfo(infoObj)} edit={!educationSubmitted} />
      </Container>
    </>
  )
}

export default App
