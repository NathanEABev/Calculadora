const menuToggle = document.getElementById('menuitem');
const menu = document.getElementById('menu-escondido');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.style.backgroundColor = menu.classList.contains('show') ? 'rgba(0, 0, 0, 0.3)' : 'white';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.backgroundColor = 'white';
});