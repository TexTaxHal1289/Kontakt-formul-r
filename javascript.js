const form = document.getElementById('contactform');
const Errordiv = document.getElementById('error-message');

form.addEventListener('submit', function(event) {});

    Errordiv.innerHTML = ''; // Clear previous error messages
    let errors = [];
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = document.getElementById('subject').value;
    const terms = document.getElementById('terms').checked;

    //namn validation
    if (!/^[A-Za-zÅÄÖåäö\s]{2,50}$/.test(name)) {
        errors.push('Namn måste vara mellan 2 och 50 tecken och endast innehålla bokstäver och mellanslag.');
    }

    //email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Ange en giltig e-postadress.');
    }

    //message validation
    if (message.length < 10 || message.length > 500) {
        errors.push('Meddelandet måste vara mellan 10 och 500 tecken.');
    }

    //subject validation
    if (subject.trim() === '') {
        errors.push('Välj ett ämne.');
    }

    //terms validation
    if (!terms) {
        errors.push('Du måste godkänna villkoren.');
    }

    if (errors.length > 0) {
        Errordiv.innerHTML = '<ul>' + errors.map(error => '<li>' + error + '</li>').join('') + '</ul>';
        event.preventDefault(); 
    }