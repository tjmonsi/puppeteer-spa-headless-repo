const fragments = {
  '/': () => import('./component-one.js'),
  '/link-two': () => import('./component-two.js')
};
export { fragments };
