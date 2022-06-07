const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  categories: [],
};

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        categories: ['Under construction'],
      };
    default:
      return state;
  }
}
