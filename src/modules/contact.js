const createContact = function() {
    var contact = document.createElement('div');
    contact.classList.add('contact-section');

    //add title
    var title = document.createElement('h2');
    title.textContent = 'Contact Us';
    
    //add address
    var address = document.createElement('div');
    address.classList.add('contact-info');
    address.textContent = '888 Sunset Blvd. Los Angeles, Ca 91326';

    //add phone num
    var phone = document.createElement('div');
    phone.classList.add('contact-info');
    phone.textContent = '(818)777-8888';

    //add email
    var email = document.createElement('div');
    email.classList.add('contact-info');
    email.textContent = 'contact@neeksrice.com';

    contact.append(title, address, phone, email)

    return contact
}

const loadContact = function() {
    var $content = document.querySelector('#content');
    var contact = createContact();
    $content.append(contact)
}

export default loadContact;