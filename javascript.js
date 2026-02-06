const form = document.getElementById('contactform');
const errorDiv = document.getElementById('errormessages');

form.addEventListener('submit', function(event) {
    errorDiv.innerHTML = ''; // Clear previous error messages
    let errors = [];

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    const subject = form.elements['subject'].value.trim();
    const terms = form.elements['terms'].checked;

    //namn validering
    if (!/^[A-Za-zÅÄÖåäö\s]+$/.test(name)) {
        errors.push("Namnet får endast innehålla bokstäver och mellanslag.");
    }

    //email validering
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Ange en giltig e-postadress.");
    }

    //meddelande validering
    if (message.length > 500) {
        errors.push("Meddelandet får inte vara längre än 500 tecken.");
    }

    //ämne validering
    if (subject === "") {
        errors.push("Välj ett ämne.");
    }

    //villkor validering
    if (!terms) {
        errors.push("Du måste godkänna villkoren.");
    }

