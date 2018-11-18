import './component-container';
import '@littleq/core-lite';
import { fragments } from './fragments.js';
import { updateState } from './state.js';
const core = document.querySelector('core-lite');
core.addEventListener('current-route-change', routeChanged);

function routeChanged ({ detail: route }) {
  lazyLoad(fragments[route]);
  updateState('route', route);
}

async function lazyLoad (fragment) {
  try {
    if (fragment && typeof fragment === 'function') {
      await fragment();
    } else {
      await Promise.reject(new Error('No fragment found'));
    }
  } catch (error) {
    console.error(error);
  }
}
