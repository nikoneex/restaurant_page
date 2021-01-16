import loadPage from './modules/page';
import loadNav from './modules/nav';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

init()

function init() {
    loadPage();
    loadNav();
    addNavFn();
    loadHome();
}

function addNavFn () {
    var tab = document.querySelectorAll('.nav-tab');
    tab.forEach(btn => {
        btn.addEventListener('click', makeActive)
    })
}

function makeActive () {
    //remove active
    var activeBtn = document.querySelector('.active');
    activeBtn.classList.remove('active');

    var $content = document.querySelector('#content')
    switch (this.textContent) {
        case 'home':
            var homeTab = document.querySelector('.home');
            homeTab.classList.add('active');

            $content.innerHTML = '';
            loadHome();
            break;

        case 'menu':
            var menuTab = document.querySelector('.menu');
            menuTab.classList.add('active');

            $content.innerHTML = '';
            loadMenu();
            break;

        case 'contact':
            var contactTab = document.querySelector('.contact');
            contactTab.classList.add('active');

            $content.innerHTML = '';
            loadContact();
            break;
    }
}