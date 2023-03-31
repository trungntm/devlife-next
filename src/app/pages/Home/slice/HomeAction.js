const test = (state, action) => {
  state.text = 'Trung';
};

const testSuccess = (state, action) => {
  console.log(action.payload);
  state.text = 'ok';
};

export const HomeActions = {
  test,
  testSuccess,
};
