import { shadowMixin } from './shadow-mixin';
import './component-sub-one';
const { HTMLElement, customElements } = window;

class ComponentOne extends shadowMixin(HTMLElement) {
  render () {
    this.shadowRoot.innerHTML = `
      <component-sub-one></component-sub-one>
      <a href="/link-two" link-two>Link 2</a>
    `;
    import('firebase');
  }
}

customElements.define('component-one', ComponentOne);
