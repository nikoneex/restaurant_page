const createNav = function () {
    var nav = document.createElement('div');
    nav.classList.add('navbar');

    //add home tab
    var home = document.createElement('div');
    home.classList.add('nav-tab', 'home');
    home.textContent = 'home';

    //add menu tab
    var menu = document.createElement('div');
    menu.classList.add('nav-tab', 'menu');
    menu.textContent = 'menu';

    //add contact tab
    var contact = document.createElement('div');
    contact.classList.add('nav-tab', 'contact');
    contact.textContent = 'contact';

    nav.append(home, menu, contact)

    return nav
}

const loadNav = function () {
    var $content = document.querySelector('#content');
    var nav = createNav();
    document.body.append(nav)
}

export default loadNav