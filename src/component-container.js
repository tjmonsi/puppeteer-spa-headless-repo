import { shadowMixin } from './shadow-mixin';
const { HTMLElement, customElements } = window;

class ComponentContainer extends shadowMixin(HTMLElement) {
  render () {
    this.shadowRoot.innerHTML = `
      <div container>
      </div>
    `;
  }

  createElement (element = 'component-one') {
    this.shadowRoot.innerHTML = `
      <div contianer>
        <${element}></${element}>
      </div>
    `;
  }
}

customElements.define('component-container', ComponentContainer);
