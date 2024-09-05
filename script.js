document.querySelector('.menu-hamburger').addEventListener('click', function() {
    document.querySelector('.slide-menu').classList.toggle('show');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.slide-menu').classList.remove('show');
});

document.getElementById('more-info-btn').addEventListener('click', function() {
    document.querySelector('.slide-menu').classList.add('show');
});
