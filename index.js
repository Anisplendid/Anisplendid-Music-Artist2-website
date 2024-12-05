document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButtons = document.querySelectorAll('[data-bs-theme-value]');
    const html = document.documentElement;

    // Set initial theme from saved preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Add click event listeners to buttons
    themeToggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const theme = button.getAttribute('data-bs-theme-value');
        setTheme(theme);
      });
    });

    function setTheme(theme) {
      // Update the theme attribute on <html> and save to localStorage
      html.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);

      // Update active button state
      themeToggleButtons.forEach(button => {
        const isActive = button.getAttribute('data-bs-theme-value') === theme;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive);
      });

      // Update the button's label
      const themeText = document.getElementById('bd-theme-text');
      themeText.textContent = `Toggle theme (${theme})`;
    }
  });




