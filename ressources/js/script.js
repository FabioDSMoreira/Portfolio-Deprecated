// Smooth scroll pour les ancres

const navLinks = document.querySelectorAll('header a');

navLinks.forEach(link => {
link.addEventListener('click', event => {
        event.preventDefault();

        const href = link.getAttribute('href');
        const anchor = document.querySelector(href);

        window.scrollTo ({
            top: anchor.offsetTop,
            behavior: 'smooth'
        });
    });
});

const asideLinks = document.querySelectorAll('aside a');

asideLinks.forEach(link => {
link.addEventListener('click', event => {
        event.preventDefault();

        const href = link.getAttribute('href');
        const anchor = document.querySelector(href);

        window.scrollTo ({
            top: anchor.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Suppression du # dans l'URL et du index.html

if (window.location.href.endsWith("index.html")) {
    var urlParts = window.location.href.split("#");
    var newUrl = urlParts[0].slice(0, -10);
    window.history.replaceState({}, document.title, newUrl);
}

// Formulaire de contact

(function() {
    emailjs.init('email_id');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var template_params = {
        "reply_to": document.getElementById('email').value,
        "from_name": document.getElementById('name').value,
        "to_name": "Fábio",
        "message": document.getElementById('message').value
    }

    emailjs.send('service_id', 'template_id', template_params)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Votre message a été envoyé avec succès!');
        }, function(error) {
        console.log('FAILED...', error);
        alert('Désolé, une erreur s\'est produite lors de l\'envoi de votre message.');
        });

    document.getElementById('contact-form').reset();
});