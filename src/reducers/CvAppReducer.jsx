export const initialState = {
  editGeneral: true,
  editEducation: true,
  editWork: true,
  firstName: 'Fred',
  lastName: 'Bloggs',
  education: [
    {
      id: 0,
      place: 'Some School',
      subject: '10 GCSEs',
      startDate: '2003-09-01',
      endDate: '2008-07-31',
    },
  ],
  work: [
    {
      id: 0,
      company: 'Some Company',
      role: 'Some role',
      duties: 'Some duties',
      startDate: '2014-10-06',
      endDate: '2023-12-22',
    },
  ],
};

const blankEducationEntry = {
  place: '',
  subject: '',
  startDate: '',
  endDate: '',
};

const blankWorkEntry = {
  company: '',
  role: '',
  duties: '',
  startDate: '',
  endDate: '',
};

function calculateNewId(arr) {
  const biggestId = arr.reduce(
    (biggest, current) => (current.id > biggest ? current.id : biggest),
    -1,
  );
  return biggestId + 1;
}

export function CvAppReducer(state, action) {
  switch (action.type) {
    case 'locked_general': {
      console.log(state);
      return {
        ...state,
        editGeneral: false,
      };
    }
    case 'unlocked_general': {
      return {
        ...state,
        editGeneral: true,
      };
    }
    case 'locked_education': {
      return {
        ...state,
        editEducation: false,
      };
    }
    case 'unlocked_education': {
      return {
        ...state,
        editEducation: true,
      };
    }
    case 'locked_work': {
      return {
        ...state,
        editWork: false,
      };
    }
    case 'unlocked_work': {
      return {
        ...state,
        editWork: true,
      };
    }
    case 'changed_first_name': {
      return {
        ...state,
        firstName: action.firstName,
      };
    }
    case 'changed_last_name': {
      return {
        ...state,
        lastName: action.lastName,
      };
    }
    case 'added_education': {
      return {
        ...state,
        education: [
          ...state.education,
          {
            ...blankEducationEntry,
            index: calculateNewId(state.education),
          },
        ],
      };
    }
    case 'removed_education': {
      return {
        ...state,
        education: state.education.filter(
          (entry) => entry.id !== action.entry.id,
        ),
      };
    }
    case 'changed_education': {
      return {
        ...state,
        education: state.education.map((entry) =>
          entry.id !== action.entry.id ? entry : action.entry,
        ),
      };
    }
    case 'added_work': {
      return {
        ...state,
        work: [
          ...state.work,
          {
            ...blankWorkEntry,
            id: calculateNewId(state.work),
          },
        ],
      };
    }
    case 'removed_work': {
      return {
        ...state,
        work: state.work.filter((entry) => entry.id !== action.entry.id),
      };
    }
    case 'changed_work': {
      return {
        ...state,
        work: state.work.map((entry) =>
          entry.id !== action.entry.id ? entry : action.entry,
        ),
      };
    }
  }
}
