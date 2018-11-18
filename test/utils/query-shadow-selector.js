const queryShadowSelectorAll = require('./query-shadow-selector-all');
const queryShadowSelector = async (selectors, element, elements) => {
  const results = await queryShadowSelectorAll(selectors, element, elements);
  return (results.length > 0) ? results[0] : null;
};

module.exports = queryShadowSelector;
