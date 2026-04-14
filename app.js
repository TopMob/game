const themeSelect = document.getElementById('themeSelect');
const savedTheme = localStorage.getItem('selectedTheme') || 'atomic-heart';

document.documentElement.setAttribute('data-theme', savedTheme);
themeSelect.value = savedTheme;

themeSelect.addEventListener('change', (e) => {
    const newTheme = e.target.value;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('selectedTheme', newTheme);
});