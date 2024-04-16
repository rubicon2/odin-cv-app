import ToggleEditField from './ToggleEditField';
import ToggleEditStudyInfo from './ToggleEditStudyInfo';
import ToggleEditWorkInfo from './ToggleEditWorkInfo';
import Container from './Container';

import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [generalSubmitted, setGeneralSubmitted] = useState(false);

  const [educationActiveIndex, setEducationActiveIndex] = useState(0);
  const [schoolInfo, setSchoolInfo] = useState({});
  const [collegeInfo, setCollegeInfo] = useState({});
  const [uniInfo, setUniInfo] = useState({});
  const [educationSubmitted, setEducationSubmitted] = useState(false);

  const [workSubmitted, setWorkSubmitted] = useState(false);

  return (
    <>
      <h1>CV App</h1>
      <div className="app-container">
        <div className="app-container-col">
          <Container
            className="input-flex-gap"
            onButtonClick={() => setGeneralSubmitted(!generalSubmitted)}
            submitted={generalSubmitted}
          >
            <h2>General</h2>
            <ToggleEditField
              fieldName="First Name"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              edit={!generalSubmitted}
            />
            <ToggleEditField
              fieldName="Surname"
              onChange={(event) => setSurname(event.target.value)}
              value={surname}
              edit={!generalSubmitted}
            />
          </Container>
          <Container
            onButtonClick={() => setEducationSubmitted(!educationSubmitted)}
            submitted={educationSubmitted}
          >
            <h2>Education</h2>
            <ToggleEditStudyInfo
              placeOfStudy="School"
              onChange={(infoObj) => setSchoolInfo(infoObj)}
              isActive={educationActiveIndex === 0}
              onOpen={() => setEducationActiveIndex(0)}
              edit={!educationSubmitted}
            />
            <ToggleEditStudyInfo
              placeOfStudy="College"
              onChange={(infoObj) => setCollegeInfo(infoObj)}
              isActive={educationActiveIndex === 1}
              onOpen={() => setEducationActiveIndex(1)}
              edit={!educationSubmitted}
            />
            <ToggleEditStudyInfo
              placeOfStudy="University"
              onChange={(infoObj) => setUniInfo(infoObj)}
              isActive={educationActiveIndex === 2}
              onOpen={() => setEducationActiveIndex(2)}
              edit={!educationSubmitted}
            />
          </Container>
          <Container
            onButtonClick={() => setWorkSubmitted(!workSubmitted)}
            submitted={workSubmitted}
          >
            <h2>Work Experience</h2>
            <ToggleEditWorkInfo edit={!workSubmitted} />
          </Container>
        </div>
        <div className="app-container-col">
          <div className="cv-preview-area"></div>
        </div>
      </div>
    </>
  );
}

export default App;
