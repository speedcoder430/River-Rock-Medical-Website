export const paths = [
  '/',
  '/purpose',
  '/analysis',
  '/values',
  '/strengths',
  '/benefits',
  '/services',
  '/faq',
  '/contact',
];

export const getPrevPath = (path) => {
  const index = paths.indexOf(path);
  if (index <= 0 || index > paths.length - 1) {
    return null;
  }
  return paths[index - 1];
};

export const getNextPath = (path) => {
  const index = paths.indexOf(path);
  if (index < 0 || index >= paths.length - 1) {
    return null;
  }
  return paths[index + 1];
};
