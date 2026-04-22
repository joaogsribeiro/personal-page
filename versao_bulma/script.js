document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a tag <html> (root) e o botão pelo ID
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Adiciona o evento de clique ao botão
    themeToggleBtn.addEventListener('click', () => {
        // Verifica qual é o tema atual
        const currentTheme = htmlElement.getAttribute('data-theme');
        
        // Alterna entre 'light' e 'dark' e atualiza o texto do botão
        if (currentTheme === 'light') {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = 'Tema Claro';
            
            // Opcional: inverte as classes do botão para contrastar com o fundo
            themeToggleBtn.classList.replace('is-light', 'is-dark');
            themeToggleBtn.classList.replace('is-outlined', 'is-black');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggleBtn.textContent = 'Tema Escuro';
            
            // Retorna as classes originais do botão
            themeToggleBtn.classList.replace('is-dark', 'is-light');
            themeToggleBtn.classList.replace('is-black', 'is-outlined');
        }
    });
});