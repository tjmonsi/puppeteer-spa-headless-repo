const queryShadowSelectorAll = async (selectors, element, elements = []) => {
  const selector = selectors[0];
  const newSelectors = selectors.slice(1);
  const newElements = await element.$$(selector);

  if (newElements.length) {
    for (let el of newElements) {
      const shadow = await el.getProperty('shadowRoot') || el;
      const root = await shadow.asElement() || el;
      if (newSelectors.length > 0 && root) {
        elements = await queryShadowSelectorAll(newSelectors, root, elements);
      } else if (el) {
        elements = [...elements, el];
      }
    }
  }
  return elements;
};

module.exports = queryShadowSelectorAll;
