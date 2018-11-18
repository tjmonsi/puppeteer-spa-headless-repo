export const shadowMixin = base => {
  return class extends base {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  };
};
