const createAbout = function() {
    var about = document.createElement('div');
    about.classList.add('about-section');

    var desc = document.createElement('p');
    desc.textContent = "At Neeks Rice you'll find the best fried rice in LA! Spicy jalapeno bacon ipsum dolor amet ea commodo nisi picanha qui. Chuck sausage tenderloin spare ribs, turducken porchetta proident frankfurter rump tri-tip tail. Hamburger ipsum boudin, et lorem ut jerky fatback adipisicing tongue short ribs prosciutto voluptate excepteur porchetta. Ea commodo incididunt voluptate do officia fatback ball tip lorem deserunt excepteur burgdoggen."

    about.append(desc)

    return about
}

const loadHome = function() {
    var $content = document.querySelector('#content');

    var home = document.querySelector('.home');
    home.classList.add('active')

    var name = document.createElement('h1');
    name.textContent = 'Neeks Rice'
    $content.append(name)

    var about = createAbout();
    $content.append(about)
}

export default loadHome;