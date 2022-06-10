const CHECK_STATUS = 'categoriesStore/categories/CHECK_STATUS';

const initialState = {
  categories: '',
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        categories: 'Under construction',
      };
    default:
      return state;
  }
};
