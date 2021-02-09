const createMenu = function() {
    var menuData = [{
        item: 'thai fried rice',
        price: '12',
    }, 
    {
        item: 'korean fried rice',
        price: '11'
    }, 
    {
        item: 'chinese fried rice',
        price: '12'
    }, 
    {
        item: 'japanese fried rice',
        price: '11'
    },
    {
        item: 'filipino fried rice',
        price: '12'
    },
]

    var menu = document.createElement('div');
    menu.classList.add('menu-section');

    var title = document.createElement('h2');
    title.textContent = 'Lunch + Dinner';
    menu.append(title);

    menuData.forEach(item => {
        var $item = document.createElement('div');
        $item.classList.add('menu-item');
        
        var $itemTitle = document.createElement('div')
        $itemTitle.textContent = item.item;

        var $price = document.createElement('h3');
        $price.classList.add('menu-price');
        $price.textContent = item.price;

        menu.append($item);
        $item.append($itemTitle, $price);
    });

    return menu
}

const loadMenu = function() {
    var $content = document.querySelector('#content');
    var menu = createMenu() 

    $content.append(menu)
}

export default loadMenu