const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  categories: [],
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
