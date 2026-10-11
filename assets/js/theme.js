// Apply only a theme the visitor selected during this tab's session.
// Blocked browser storage must never prevent the page from loading.
(() => {
  try {
    const theme = sessionStorage.getItem('weekly-theme');
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch { /* Use the default theme without storage. */ }
})();
