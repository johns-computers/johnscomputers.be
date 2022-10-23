var userLang = navigator.language || navigator.userLanguage; 

langs = {
    "de-DE": "de",
    "nl-NL": "nl",
}


if(langs[userLang]) {
    console.log(langs[userLang]); 
    fetch(`./assets/json/langs/${langs[userLang]}.json`)
    .then(response => { return response.json() })
    .then(data => {
        data.elms.forEach(elm => {
            document.querySelector(elm.querySelector).innerHTML = elm.text
        })
    });
}