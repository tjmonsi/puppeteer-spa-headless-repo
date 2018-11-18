import { shadowMixin } from './shadow-mixin';
import './component-sub-one';
const { HTMLElement, customElements } = window;

class ComponentOne extends shadowMixin(HTMLElement) {
  render () {
    this.shadowRoot.innerHTML = `
      <component-sub-one></component-sub-one>
    `;
  }
}

customElements.define('component-one', ComponentOne);
