document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        
        if (currentTheme === 'light') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            themeToggleBtn.textContent = 'Tema Claro';
            // A troca de classes foi removida. O botão continua btn-outline-light.
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            themeToggleBtn.textContent = 'Tema Escuro';
            // A troca de classes foi removida.
        }
    });
});