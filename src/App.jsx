import ToggleEditField from './ToggleEditField';
import ToggleEditWorkInfo from './ToggleEditWorkInfo';
import Accordion from './Accordion';
import StudyFieldGroup from './StudyFieldGroup';
import Container from './Container';

import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [generalSubmitted, setGeneralSubmitted] = useState(false);

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
            <Accordion
              accordionItems={[
                {
                  id: 0,
                  label: 'School',
                  content: (
                    <>
                      <StudyFieldGroup
                        placeOfStudy="School"
                        onChange={setSchoolInfo}
                        edit={!educationSubmitted}
                      />
                    </>
                  ),
                },
                {
                  id: 1,
                  label: 'College',
                  content: (
                    <>
                      <StudyFieldGroup
                        placeOfStudy="College"
                        onChange={setCollegeInfo}
                        edit={!educationSubmitted}
                      />
                    </>
                  ),
                },
                {
                  id: 2,
                  label: 'University',
                  content: (
                    <>
                      <StudyFieldGroup
                        placeOfStudy="University"
                        onChange={setUniInfo}
                        edit={!educationSubmitted}
                      />
                    </>
                  ),
                },
              ]}
            ></Accordion>
          </Container>

          <Container
            onButtonClick={() => setWorkSubmitted(!workSubmitted)}
            submitted={workSubmitted}
          >
            <h2>Work Experience</h2>
            <ToggleEditWorkInfo edit={!workSubmitted} />
          </Container>
        </div>
        <div>
          <div className="cv-preview-area"></div>
        </div>
      </div>
    </>
  );
}

export default App;
