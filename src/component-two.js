import { shadowMixin } from './shadow-mixin';
import './component-sub-two';
const { HTMLElement, customElements } = window;

class ComponentTwo extends shadowMixin(HTMLElement) {
  render () {
    this.shadowRoot.innerHTML = `
      <component-sub-two></component-sub-two>
    `;
  }
}

customElements.define('component-two', ComponentTwo);
