const createMenu = function() {
    var menuData = [{
        item: 'thai rice',
        price: '11',
    }, 
    {
        item: 'korean rice',
        price: '11'
    }, 
    {
        item: 'japanese rice',
        price: '11'
    },
    {
        item: 'filipino rice',
        price: '11'
    },
]

    var menu = document.createElement('div');
    menu.classList.add('menu-section')

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