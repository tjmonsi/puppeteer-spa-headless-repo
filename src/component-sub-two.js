import { shadowMixin } from './shadow-mixin';
const { HTMLElement, customElements } = window;

class ComponentSubTwo extends shadowMixin(HTMLElement) {
  render () {
    this.shadowRoot.innerHTML = `
      <span text-two>Text Two</span>
    `;
  }
}

customElements.define('component-sub-two', ComponentSubTwo);
