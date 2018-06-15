
const initState = () => {

  const webpackRequireContext = require.context('../data/posts', false, /.md$/);
  const posts = {};
  let exp;
  let keyName;
  webpackRequireContext.keys().forEach((fileName) => {
    exp = fileName.match(/([\w-]*)\.md$/);
    if (exp) {
      keyName = exp[1];
      posts[keyName] = webpackRequireContext(fileName);
    } else {
      throw 'ERR';
    }
  });

  return {
    posts: posts,
    dummyVar: 0,
  };
};

export const appReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'DUMMY':
      return Object.assign({}, state, { dummyVar: state.dummyVar + 1 });
    default:
      return state;
  }
};
