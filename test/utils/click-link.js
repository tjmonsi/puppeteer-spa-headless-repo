module.exports = async (link, page) => Promise.all([
  page.mainFrame().waitForNavigation(), // The navigation promise resolves after navigation has finished
  link.click() // Clicking the link will indirectly cause a navigation
]);
