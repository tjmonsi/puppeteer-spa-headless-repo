import { shadowMixin } from './shadow-mixin';
const { HTMLElement, customElements } = window;

class ComponentSubOne extends shadowMixin(HTMLElement) {
  render () {
    this.shadowRoot.innerHTML = `
      <span text-one>Text One</span>
    `;
  }
}

customElements.define('component-sub-one', ComponentSubOne);
