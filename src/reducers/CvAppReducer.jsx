export const initialState = {
  editGeneral: true,
  editEducation: true,
  editWork: true,
  firstName: 'Fred',
  lastName: 'Bloggs',
  email: 'fred@bloggs.co.uk',
  tel: '09936 347398',
  education: [
    {
      id: 0,
      place: 'Some School',
      summary: '10 GCSEs',
      startDate: '2003-09-01',
      endDate: '2008-07-31',
      current: false,
    },
    {
      id: 1,
      place: 'Some College',
      summary: '4 A levels',
      startDate: '2008-09-03',
      endDate: '2010-07-23',
      current: true,
    },
  ],
  work: [
    {
      id: 0,
      company: 'Some Company',
      role: 'Chief Biscuit Officer',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa id. Urna cursus eget nunc scelerisque. Nullam non nisi est sit. Gravida rutrum quisque non tellus orci ac auctor. Nunc lobortis mattis aliquam faucibus purus in massa. Molestie ac feugiat sed lectus vestibulum.',
      startDate: '2014-10-06',
      endDate: '2023-12-22',
    },
    {
      id: 1,
      company: 'Another Company',
      role: 'Head of Doughnut Acquisition',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa id. Urna cursus eget nunc scelerisque. Nullam non nisi est sit. Gravida rutrum quisque non tellus orci ac auctor. Nunc lobortis mattis aliquam faucibus purus in massa. Molestie ac feugiat sed lectus vestibulum.',
      startDate: '2024-12-22',
      endDate: '2024-12-22',
    },
  ],
};

const blankEducationEntry = {
  place: '',
  summary: '',
  startDate: '',
  endDate: '',
  current: false,
};

const blankWorkEntry = {
  company: '',
  role: '',
  summary: '',
  startDate: '',
  endDate: '',
  current: false,
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
    case 'changed_email': {
      return {
        ...state,
        email: action.email,
      };
    }
    case 'changed_tel': {
      return {
        ...state,
        tel: action.tel,
      };
    }
    case 'added_education': {
      return {
        ...state,
        education: [
          ...state.education,
          {
            ...blankEducationEntry,
            id: calculateNewId(state.education),
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
