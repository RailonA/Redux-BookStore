// define all the Redux actions
export const creatAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeAction = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});
