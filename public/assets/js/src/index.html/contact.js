var contactContainer = document.getElementById("contact-container");

document.getElementById("infos-btn").onclick = function() {
    contactContainer.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == contactContainer) {
        contactContainer.style.display = "none";
    }
}


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
}


document.getElementById('contact-sumbit').addEventListener('click', (e) => {
    e.target.disabled = true;
    e.target.style.cursor = 'not-allowed';
    e.target.textContent = '...';
    postData('https://europe-west1-johnscomputers-be-web.cloudfunctions.net/contactMail', {
        req_name: document.getElementById('contact-i-name').value,
        req_type: document.getElementById('contact-opt').value,
        req_email: document.getElementById('contact-i-email').value,
        req_phone: document.getElementById('contact-i-phone').value,
        req_body: document.getElementById('contact-i-text').value
    })
    .then((res) => {
        if (res.ok) {
            document.getElementById('contact-forms').style.display = 'none';
            document.getElementById('contact-success').style.display = 'block';
        } else {
            alert('error');
        }
    });
})