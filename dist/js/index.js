const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgerMenuIcon  = document.getElementById('hamburger-menu i');
const drowpdownMenu = document.getElementById('dropdown-menu');

hamburgerMenu.onclick = function() {
    drowpdownMenu.classList.toggle('open');
}