export function initTheme() {
    const toggle = document.getElementById('mode-toggle');
    if (!toggle) return;
    
    toggle.addEventListener('click', () => {
      const mode = document.documentElement.getAttribute('data-mode');
      const newMode = mode === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-mode', newMode);
      localStorage.setItem('mode', newMode);
    });
  }