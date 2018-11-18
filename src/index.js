import './component-container';
import '@littleq/core-lite';
const core = document.querySelector('core-lite');

const changeContainer = (path = '/') => {
  if (path === '/') {
    import('./component-one.js');
  } else if (path === '/link-two') {
    import('./component-two.js');
  }
};

core.addEventListener('path-change', ({ detail: path }) => changeContainer(path));
