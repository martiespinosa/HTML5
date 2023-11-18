// Verificar si el dispositivo es un PC
//if (window.innerWidth < 500 || window.innerHeight < 500) {
    // Redirigir a otra página
    //window.location.href = "html/error.html";
//}


// IMPIDE QUE SE PUEDA IR HACIA ATRAS O ADELANTE USANDO LAS FLECHAS DEL NAVEGADOR
window.history.pushState(null, null, window.location.href);
window.onpopstate = function() {
    window.history.go(1);
};


// Función para des-seleccionar los radio buttons al cargar o recargar la página
function desSeleccionarRadioButtons() {
    var radioButtons = document.getElementsByClassName("radio");
    for (var i = 0; i < 3; i++) {
        radioButtons[i].checked = false;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sec').style.opacity = 1; // Cuando se carga completamente, establece la opacidad a 1
});


function getRandomElements(dictionary, count) {
    let keys = Object.keys(dictionary);
    let randomElements = {};
    while (Object.keys(randomElements).length < count) {
        let randomIndex = Math.floor(Math.random() * keys.length);
        let randomKey = keys[randomIndex];
        if (dictionary[randomKey]) {
            randomElements[randomKey] = dictionary[randomKey];
        }
    }
    return randomElements;
}


function getRandomCountry() {
    let randomCountry;
    let correctOption = opcionCorrecta.value;
    
    do {
        let randomIndex = Math.floor(Math.random() * fullCountriesNames.length);
        randomCountry = fullCountriesNames[randomIndex];
    } while (randomCountry === correctOption || 
             randomCountry === document.getElementById('opcion1').value ||
             randomCountry === document.getElementById('opcion2').value ||
             randomCountry === document.getElementById('opcion3').value);
    
    return randomCountry;
}




// APLICA LA REDUCCION DE TAMAÑO DE LOS PAISES QUE SU NOMBRE ES LARGO DE MANERA PROPORCIONAL
document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos con la clase 'pais'
    var paises = document.querySelectorAll('.pais');

    // Iterar sobre cada elemento y ajustar el tamaño del texto
    paises.forEach(function (pais) {
        ajustarTamanioTexto(pais);
    });

    // Crear un MutationObserver para observar cambios en el contenido de los elementos
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'characterData' || mutation.type === 'childList') {
                // Ajustar el tamaño del texto cuando el contenido cambie
                ajustarTamanioTexto(mutation.target);
            }
        });
    });

    // Configurar el MutationObserver para observar cambios en el contenido y la estructura
    var observerConfig = { characterData: true, subtree: true, childList: true };

    // Agregar el MutationObserver a cada elemento con la clase 'pais'
    paises.forEach(function (pais) {
        observer.observe(pais, observerConfig);
    });
});

// Función para ajustar el tamaño del texto
function ajustarTamanioTexto(elemento) {
    // Definir un tamaño base y un factor de reducción
    var tamanoBase = 3; // Puedes ajustar esto según tus necesidades
    var factorReduccion = 1.1; // Puedes ajustar esto según tus necesidades

    // Obtener la longitud del texto
    var longitudTexto = elemento.textContent.length;

    // Calcular el tamaño de la fuente en función de la longitud del texto
    if (longitudTexto > 15) {
        letrasDeMas = longitudTexto - 15;
        var tamanoFuente = tamanoBase - factorReduccion * letrasDeMas;
    } else {
        tamanoFuente = tamanoBase
    }

    // Aplicar el tamaño de la fuente al elemento
    elemento.style.fontSize = tamanoFuente + 'vw';
}




// AGREGA FUNCIONALIDAD A LA TECLA ENTER
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos de tipo radio
    var radioButtons = document.querySelectorAll('input[type="radio"]');

    // Agrega un evento de escucha para la tecla "Enter" en todo el documento
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            // Encuentra ambos botones
            var button1 = document.getElementById('solve');
            var button2 = document.getElementById('next');

            // Hace clic en el primer botón no deshabilitado
            if (button1 && !button1.disabled) {
                button1.click();
            } else if (button2 && !button2.disabled) {
                button2.click();
            }
        }
    });
});





function score(contadorAciertos) {
    let scoreOutOfTen = contadorAciertos + ' / 10';
    document.getElementById('score').innerHTML = scoreOutOfTen;
}




let fullFlagDictionary = {
    // "🇦🇨": "Channel Islands",
    "🇦🇩": "Andorra",
    "🇺🇸": "United States of America",
    "🇦🇪": "United Arab Emirates",
    "🇦🇫": "Afghanistan",
    "🇦🇬": "Antigua and Barbuda",
    // "🇦🇮": "Anguilla",
    "🇦🇱": "Albania",
    "🇦🇲": "Armenia",
    "🇦🇴": "Angola",
    // "🇦🇶": "Antarctica",
    "🇦🇷": "Argentina",
    // "🇦🇸": "American Samoa",
    "🇦🇹": "Austria",
    "🇦🇺": "Australia",
    // "🇦🇼": "Aruba",
    // "🇦🇽": "Åland Islands",
    "🇦🇿": "Azerbaijan",
    "🇧🇦": "Bosnia and Herzegovina",
    "🇧🇧": "Barbados",
    "🇧🇩": "Bangladesh",
    "🇧🇪": "Belgium",
    "🇧🇫": "Burkina Faso",
    "🇧🇬": "Bulgaria",
    "🇧🇭": "Bahrain",
    "🇧🇮": "Burundi",
    "🇧🇯": "Benin",
    // "🇧🇱": "Saint Barthélemy",
    // "🇧🇲": "Bermuda",
    "🇧🇳": "Brunei",
    "🇧🇴": "Bolivia",
    // "🇧🇶": "Caribbean Netherlands",
    "🇧🇷": "Brazil",
    "🇧🇸": "Bahamas",
    "🇧🇹": "Bhutan",
    // "🇧🇻": "Bouvet Island",
    "🇧🇼": "Botswana",
    "🇧🇾": "Belarus",
    "🇧🇿": "Belize",
    "🇨🇦": "Canada",
    "🇨🇩": "Democratic Republic of Congo",
    "🇨🇬": "Republic of Congo",
    "🇨🇫": "Central African Republic",
    "🇨🇭": "Switzerland",
    "🇨🇮": "Ivory Coast",
    "🇨🇰": "Cook Islands",
    "🇨🇱": "Chile",
    "🇨🇲": "Cameroon",
    "🇨🇳": "China",
    "🇨🇴": "Colombia",
    "🇨🇷": "Costa Rica",
    "🇨🇺": "Cuba",
    "🇨🇻": "Cape Verde",
    "🇨🇼": "Curaçao",
    // "🇨🇽": "Christmas Island",
    "🇨🇾": "Cyprus",
    "🇨🇿": "Czech Republic",
    "🇩🇪": "Germany",
    "🇩🇯": "Djibouti",
    "🇩🇰": "Denmark",
    "🇩🇲": "Dominica",
    "🇩🇴": "Dominican Republic",
    "🇩🇿": "Algeria",
    "🇪🇨": "Ecuador",
    "🇪🇪": "Estonia",
    "🇪🇬": "Egypt",
    // "🇪🇭": "Western Sahara",
    "🇪🇷": "Eritrea",
    "🇪🇸": "Spain",
    "🇪🇹": "Ethiopia",
    "🇫🇮": "Finland",
    "🇫🇯": "Fiji",
    // "🇫🇰": "Falkland Islands",
    // "🇫🇴": "Faroe Islands",
    "🇫🇷": "France",
    "🇬🇦": "Gabon",
    "🇬🇧": "United Kingdom",
    "🇬🇩": "Grenada",
    "🇬🇪": "Georgia",
    // "🇬🇫": "French Guiana",
    // "🇬🇬": "Guernsey",
    "🇬🇭": "Ghana",
    // "🇬🇮": "Gibraltar",
    // "🇬🇱": "Greenland",
    "🇬🇲": "Gambia",
    "🇬🇳": "Guinea",
    // "🇬🇵": "Guadeloupe",
    "🇬🇶": "Equatorial Guinea",
    "🇬🇷": "Greece",
    "🇬🇹": "Guatemala",
    // "🇬🇺": "Guam",
    "🇬🇼": "Guinea-Bissau",
    "🇬🇾": "Guyana",
    // 🇭🇰": "Hong Kong",
    "🇭🇳": "Honduras",
    "🇭🇷": "Croatia",
    "🇭🇹": "Haiti",
    "🇭🇺": "Hungary",
    // "🇮🇨": "Canary Islands",
    "🇮🇩": "Indonesia",
    "🇮🇪": "Ireland",
    "🇮🇱": "Israel",
    // "🇮🇲": "Isle of Man",
    "🇮🇳": "India",
    "🇮🇶": "Iraq",
    "🇮🇷": "Iran",
    "🇮🇸": "Iceland",
    "🇮🇹": "Italy",
    // "🇯🇪": "Jersey",
    "🇯🇲": "Jamaica",
    "🇯🇴": "Jordan",
    "🇯🇵": "Japan",
    "🇰🇪": "Kenya",
    "🇰🇬": "Kyrgyzstan",
    "🇰🇭": "Cambodia",
    "🇰🇮": "Kiribati",
    "🇰🇲": "Comoros",
    "🇰🇳": "Saint Kitts and Nevis",
    "🇰🇵": "North Korea",
    "🇰🇷": "South Korea",
    "🇰🇼": "Kuwait",
    // "🇰🇾": "Cayman Islands",
    "🇰🇿": "Kazakhstan",
    "🇱🇦": "Laos",
    "🇱🇧": "Lebanon",
    "🇱🇨": "Saint Lucia",
    "🇱🇮": "Liechtenstein",
    "🇱🇰": "Sri Lanka",
    "🇱🇷": "Liberia",
    "🇱🇸": "Lesotho",
    "🇱🇹": "Lithuania",
    "🇱🇺": "Luxembourg",
    "🇱🇻": "Latvia",
    "🇱🇾": "Libya",
    "🇲🇦": "Morocco",
    "🇲🇨": "Monaco",
    "🇲🇩": "Moldova",
    "🇲🇪": "Montenegro",
    "🇲🇬": "Madagascar",
    "🇲🇭": "Marshall Islands",
    "🇲🇰": "North Macedonia",
    "🇲🇱": "Mali",
    "🇲🇲": "Myanmar",
    "🇲🇳": "Mongolia",
    // "🇲🇴": "Macao",
    // "🇲🇵": "Northern Mariana Islands",
    // "🇲🇶": "Martinique",
    "🇲🇷": "Mauritania",
    // "🇲🇸": "Montserrat",
    "🇲🇹": "Malta",
    "🇲🇺": "Mauritius",
    "🇲🇻": "Maldives",
    "🇲🇼": "Malawi",
    "🇲🇽": "Mexico",
    "🇲🇾": "Malaysia",
    "🇲🇿": "Mozambique",
    "🇳🇦": "Namibia",
    // "🇳🇨": "New Caledonia",
    "🇳🇪": "Niger",
    // "🇳🇫": "Norfolk Island",
    "🇳🇬": "Nigeria",
    "🇳🇮": "Nicaragua",
    "🇳🇱": "Netherlands",
    "🇳🇴": "Norway",
    "🇳🇵": "Nepal",
    // "🇳🇷": "Niue",
    "🇳🇿": "New Zealand",
    "🇴🇲": "Oman",
    "🇵🇦": "Panama",
    "🇵🇪": "Peru",
    // "🇵🇫": "French Polynesia",
    "🇵🇬": "Papua New Guinea",
    "🇵🇭": "Philippines",
    "🇵🇰": "Pakistan",
    "🇵🇱": "Poland",
    // "🇵🇳": "Pitcairn Islands",
    // "🇵🇷": "Puerto Rico",
    // "🇵🇸": "Palestinian Territories",
    "🇵🇹": "Portugal",
    "🇵🇼": "Palau",
    "🇵🇾": "Paraguay",
    "🇶🇦": "Qatar",
    // "🇷🇪": "Réunion",
    "🇷🇴": "Romania",
    "🇷🇸": "Serbia",
    "🇷🇺": "Russia",
    "🇧🇾": "Belarus",
    "🇷🇼": "Rwanda",
    "🇸🇦": "Saudi Arabia",
    "🇸🇧": "Solomon Islands",
    "🇸🇨": "Seychelles",
    "🇸🇩": "Sudan"
};

let fullCountriesNames = [
    // "Channel Islands",
    "Andorra",
    "United States of America",
    "United Arab Emirates",
    "Afghanistan",
    "Antigua and Barbuda",
    // "Anguilla",
    "Albania",
    "Armenia",
    "Angola",
    // "Antarctica",
    "Argentina",
    // "American Samoa",
    "Austria",
    "Australia",
    // "Aruba",
    // "Åland Islands",
    "Azerbaijan",
    "Bosnia and Herzegovina",
    "Barbados",
    "Bangladesh",
    "Belgium",
    "Burkina Faso",
    "Bulgaria",
    "Bahrain",
    "Burundi",
    "Benin",
    // "Saint Barthélemy",
    // "Bermuda",
    "Brunei",
    "Bolivia",
    // "Caribbean Netherlands",
    "Brazil",
    "Bahamas",
    "Bhutan",
    // "Bouvet Island",
    "Botswana",
    "Belarus",
    "Belize",
    "Canada",
    "Democratic Republic of Congo",
    "Republic of Congo",
    "Central African Republic",
    "Switzerland",
    "Ivory Coast",
    "Cook Islands",
    "Chile",
    "Cameroon",
    "China",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Cape Verde",
    "Curaçao",
    // "Christmas Island",
    "Cyprus",
    "Czech Republic",
    "Germany",
    "Djibouti",
    "Denmark",
    "Dominica",
    "Dominican Republic",
    "Algeria",
    "Ecuador",
    "Estonia",
    "Egypt",
    // "Western Sahara",
    "Eritrea",
    "Spain",
    "Ethiopia",
    "Finland",
    "Fiji",
    // "Falkland Islands",
    // "Faroe Islands",
    "France",
    "Gabon",
    "United Kingdom",
    "Grenada",
    "Georgia",
    // "French Guiana",
    // "Guernsey",
    "Ghana",
    // "Gibraltar",
    // "Greenland",
    "Gambia",
    "Guinea",
    // "Guadeloupe",
    "Equatorial Guinea",
    "Greece",
    "Guatemala",
    // "Guam",
    "Guinea-Bissau",
    "Guyana",
    // "Hong Kong",
    "Honduras",
    "Croatia",
    "Haiti",
    "Hungary",
    // "Canary Islands",
    "Indonesia",
    "Ireland",
    "Israel",
    // "Isle of Man",
    "India",
    "Iraq",
    "Iran",
    "Iceland",
    "Italy",
    // "Jersey",
    "Jamaica",
    "Jordan",
    "Japan",
    "Kenya",
    "Kyrgyzstan",
    "Cambodia",
    "Kiribati",
    "Comoros",
    "Saint Kitts and Nevis",
    "North Korea",
    "South Korea",
    "Kuwait",
    // "Cayman Islands",
    "Kazakhstan",
    "Laos",
    "Lebanon",
    "Saint Lucia",
    "Liechtenstein",
    "Sri Lanka",
    "Liberia",
    "Lesotho",
    "Lithuania",
    "Luxembourg",
    "Latvia",
    "Libya",
    "Morocco",
    "Monaco",
    "Moldova",
    "Montenegro",
    "Madagascar",
    "Marshall Islands",
    "North Macedonia",
    "Mali",
    "Myanmar",
    "Mongolia",
    // "Macao",
    // "Northern Mariana Islands",
    // "Martinique",
    "Mauritania",
    // "Montserrat",
    "Malta",
    "Mauritius",
    "Maldives",
    "Malawi",
    "Mexico",
    "Malaysia",
    "Mozambique",
    "Namibia",
    // "New Caledonia",
    "Niger",
    // "Norfolk Island",
    "Nigeria",
    "Nicaragua",
    "Netherlands",
    "Norway",
    "Nepal",
    // "Niue",
    "New Zealand",
    "Oman",
    "Panama",
    "Peru",
    // "French Polynesia",
    "Papua New Guinea",
    "Philippines",
    "Pakistan",
    "Poland",
    // "Pitcairn Islands",
    // "Puerto Rico",
    // "Palestinian Territories",
    "Portugal",
    "Palau",
    "Paraguay",
    "Qatar",
    // "Réunion",
    "Romania",
    "Serbia",
    "Russia",
    "Belarus",
    "Rwanda",
    "Saudi Arabia",
    "Solomon Islands",
    "Seychelles",
    "Sudan"
];

// let Dictionaty3PaisesPorBandera = {  
//     "🇦🇩": {
//         "pais": "Andorra",
//         "similar1": "Romania",
//         "similar2": "Moldova"
//     },
//     "🇺🇸": {
//         "pais": "United States of America",
//         "similar1": "Liberia",
//         "similar2": "Chile"
//     },
//     "🇦🇪": {
//         "pais": "United Arab Emirates",
//         "similar1": "Kuwait",
//         "similar2": "Qatar"
//     },
//     "🇦🇫": {
//         "pais": "Afghanistan",
//         "similar1": "Chad",
//         "similar2": "Maldives"
//     },
//     "🇦🇬": {
//         "pais": "Antigua and Barbuda",
//         "similar1": "Barbados",
//         "similar2": "Saint Kitts and Nevis"
//     },
//     "🇦🇱": {
//         "pais": "Albania",
//         "similar1": "Austria",
//         "similar2": "Lithuania"
//     },
//     "🇦🇲": {
//         "pais": "Armenia",
//         "similar1": "Bulgaria",
//         "similar2": "Moldova"
//     },
//     "🇦🇴": {
//         "pais": "Angola",
//         "similar1": "Saint Kitts and Nevis",
//         "similar2": "Liechtenstein"
//     },
//     "🇦🇷": {
//         "pais": "Argentina",
//         "similar1": "Chile",
//         "similar2": "Uruguay"
//     },
//     "🇦🇹": {
//         "pais": "Austria",
//         "similar1": "Australia",
//         "similar2": "Armenia"
//     },
//     "🇦🇺": {
//         "pais": "Australia",
//         "similar1": "Austria",
//         "similar2": "Aruba"
//     },
//     "🇦🇿": {
//         "pais": "Azerbaijan",
//         "similar1": "Albania",
//         "similar2": "Armenia"
//     },
//     "🇧🇦": {
//         "pais": "Bosnia and Herzegovina",
//         "similar1": "Botswana",
//         "similar2": "Belarus"
//     },
//     "🇧🇧": {
//         "pais": "Barbados",
//         "similar1": "Aruba",
//         "similar2": "Antigua and Barbuda"
//     },
//     "🇧🇩": {
//         "pais": "Bangladesh",
//         "similar1": "Bhutan",
//         "similar2": "Barbados"
//     },
//     "🇧🇪": {
//         "pais": "Belgium",
//         "similar1": "Belize",
//         "similar2": "Benin"
//     },
//     "🇧🇫": {
//         "pais": "Burkina Faso",
//         "similar1": "Burundi",
//         "similar2": "Benin"
//     },
//     "🇧🇬": {
//         "pais": "Bulgaria",
//         "similar1": "Bolivia",
//         "similar2": "Barbados"
//     },
//     "🇧🇭": {
//         "pais": "Bahrain",
//         "similar1": "Bangladesh",
//         "similar2": "Barbados"
//     },
//     "🇧🇮": {
//         "pais": "Burundi",
//         "similar1": "Benin",
//         "similar2": "Belize"
//     },
//     "🇧🇯": {
//         "pais": "Benin",
//         "similar1": "Burkina Faso",
//         "similar2": "Belize"
//     },
//     "🇧🇳": {
//         "pais": "Brunei",
//         "similar1": "Bahrain",
//         "similar2": "Bangladesh"
//     },
//     "🇧🇴": {
//         "pais": "Bolivia",
//         "similar1": "Bulgaria",
//         "similar2": "Barbados"
//     },
//     "🇧🇷": {
//         "pais": "Brazil",
//         "similar1": "Bahrain",
//         "similar2": "Bangladesh"
//     },
//     "🇧🇸": {
//         "pais": "Bahamas",
//         "similar1": "Bahrain",
//         "similar2": "Bangladesh"
//     },
//     "🇧🇹": {
//         "pais": "Bhutan",
//         "similar1": "Bangladesh",
//         "similar2": "Barbados"
//     },
//     "🇧🇼": {
//         "pais": "Botswana",
//         "similar1": "Bouvet Island",
//         "similar2": "Bolivia"
//     },
//     "🇧🇾": {
//         "pais": "Belarus",
//         "similar1": "Belize",
//         "similar2": "Benin"
//     },
//     "🇧🇿": {
//         "pais": "Belize",
//         "similar1": "Belarus",
//         "similar2": "Benin"
//     },
//     "🇨🇦": {
//         "pais": "Canada",
//         "similar1": "Cape Verde",
//         "similar2": "Curaçao"
//     },
//     "🇨🇨": {
//         "pais": "Cocos (Keeling) Islands",
//         "similar1": "Christmas Island",
//         "similar2": "Cyprus"
//     },
//     "🇨🇩": {
//         "pais": "Democratic Republic of Congo",
//         "similar1": "Republic of Congo",
//         "similar2": "Cook Islands"
//     },
//     "🇨🇫": {
//         "pais": "Central African Republic",
//         "similar1": "Republic of Congo",
//         "similar2": "Democratic Republic of Congo"
//     },
//     "🇨🇬": {
//         "pais": "Republic of Congo",
//         "similar1": "Camboya",
//         "similar2": "Democratic Republic of Congo"
//     },
//     "🇨🇭": {
//         "pais": "Switzerland",
//         "similar1": "Sweden",
//         "similar2": "Seychelles"
//     },
//     "🇨🇮": {
//         "pais": "Ivory Coast",
//         "similar1": "Iceland",
//         "similar2": "Costa Rica"
//     },
//     "🇨🇰": {
//         "pais": "Cook Islands",
//         "similar1": "Republic of Congo",
//         "similar2": "Democratic Republic of Congo"
//     },
//     "🇨🇱": {
//         "pais": "Chile",
//         "similar1": "China",
//         "similar2": "Colombia"
//     },
//     "🇨🇲": {
//         "pais": "Cameroon",
//         "similar1": "Republic of Congo",
//         "similar2": "Democratic Republic of Congo"
//     },
//     "🇨🇳": {
//         "pais": "China",
//         "similar1": "Chile",
//         "similar2": "Colombia"
//     },
//     "🇨🇴": {
//         "pais": "Colombia",
//         "similar1": "Comoros",
//         "similar2": "Republic of Congo"
//     },
//     "🇨🇵": {
//         "pais": "Clipperton Island",
//         "similar1": "Republic of Congo",
//         "similar2": "Democratic Republic of Congo"
//     },
//     "🇨🇷": {
//         "pais": "Costa Rica",
//         "similar1": "Ivory Coast",
//         "similar2": "Croatia"
//     },
//     "🇨🇺": {
//         "pais": "Cuba",
//         "similar1": "Curacao",
//         "similar2": "Cyprus"
//     },
//     "🇨🇻": {
//         "pais": "Cape Verde",
//         "similar1": "Caribbean Netherlands",
//         "similar2": "Cook Islands"
//     },
//     "🇨🇼": {
//         "pais": "Curacao",
//         "similar1": "Cuba",
//         "similar2": "Cyprus"
//     },
//     "🇨🇾": {
//         "pais": "Cyprus",
//         "similar1": "Christmas Island",
//         "similar2": "Czech Republic"
//     },
//     "🇨🇿": {
//         "pais": "Czech Republic",
//         "similar1": "Cyprus",
//         "similar2": "Christmas Island"
//     },
//     "🇩🇪": {
//         "pais": "Germany",
//         "similar1": "Denmark",
//         "similar2": "Djibouti"
//     },
//     "🇩🇯": {
//         "pais": "Djibouti",
//         "similar1": "Denmark",
//         "similar2": "Dominica"
//     },
//     "🇩🇰": {
//         "pais": "Denmark",
//         "similar1": "Djibouti",
//         "similar2": "Dominica"
//     },
//     "🇩🇲": {
//         "pais": "Dominica",
//         "similar1": "Denmark",
//         "similar2": "Djibouti"
//     },
//     "🇩🇴": {
//         "pais": "Dominican Republic",
//         "similar1": "Denmark",
//         "similar2": "Djibouti"
//     },
//     "🇩🇿": {
//         "pais": "Algeria",
//         "similar1": "Andorra",
//         "similar2": "Angola"
//     },
//     "🇪🇦": {
//         "pais": "Ceuta and Melilla",
//         "similar1": "Ecuador",
//         "similar2": "Estonia"
//     },
//     "🇪🇨": {
//         "pais": "Ecuador",
//         "similar1": "Egypt",
//         "similar2": "Eritrea"
//     },
//     "🇪🇪": {
//         "pais": "Estonia",
//         "similar1": "Ecuador",
//         "similar2": "Egypt"
//     },
//     "🇪🇬": {
//         "pais": "Egypt",
//         "similar1": "Ecuador",
//         "similar2": "Estonia"
//     },
//     "🇪🇷": {
//         "pais": "Eritrea",
//         "similar1": "Ecuador",
//         "similar2": "Estonia"
//     },
//     "🇪🇸": {
//         "pais": "Spain",
//         "similar1": "Estonia",
//         "similar2": "Ecuador"
//     },
//     "🇪🇹": {
//         "pais": "Ethiopia",
//         "similar1": "Ecuador",
//         "similar2": "Estonia"
//     },
//     "🇫🇮": {
//         "pais": "Finland",
//         "similar1": "Fiji",
//         "similar2": "Falkland Islands"
//     },
//     "🇫🇯": {
//         "pais": "Fiji",
//         "similar1": "Finland",
//         "similar2": "Falkland Islands"
//     },
//     "🇫🇷": {
//         "pais": "France",
//         "similar1": "Finland",
//         "similar2": "Fiji"
//     },
//     "🇬🇦": {
//         "pais": "Gabon",
//         "similar1": "Gambia",
//         "similar2": "Ghana"
//     },
//     "🇬🇧": {
//         "pais": "United Kingdom",
//         "similar1": "Gabon",
//         "similar2": "Gambia"
//     },
//     "🇬🇧": {
//         "pais": "United Kingdom",
//         "similar1": "Guernsey",
//         "similar2": "Gambia"
//     },
//     "🇬🇪": {
//         "pais": "Georgia",
//         "similar1": "Grenada",
//         "similar2": "Germany"
//     },
//     "🇬🇭": {
//         "pais": "Ghana",
//         "similar1": "Guinea",
//         "similar2": "Grenada"
//     },
//     "🇬🇲": {
//         "pais": "Gambia",
//         "similar1": "Guinea",
//         "similar2": "Ghana"
//     },
//     "🇬🇳": {
//         "pais": "Guinea",
//         "similar1": "Gambia",
//         "similar2": "Ghana"
//     },
//     "🇬🇶": {
//         "pais": "Equatorial Guinea",
//         "similar1": "Grenada",
//         "similar2": "Guatemala"
//     },
//     "🇬🇷": {
//         "pais": "Greece",
//         "similar1": "Guadeloupe",
//         "similar2": "Greenland"
//     },
//     "🇬🇹": {
//         "pais": "Guatemala",
//         "similar1": "Gambia",
//         "similar2": "Grenada"
//     },
//     "🇬🇼": {
//         "pais": "Guinea-Bissau",
//         "similar1": "Grenada",
//         "similar2": "Guadeloupe"
//     },
//     "🇭🇲": {
//         "pais": "Heard Island and McDonald Islands",
//         "similar1": "Honduras",
//         "similar2": "Haiti"
//     },
//     "🇭🇳": {
//         "pais": "Honduras",
//         "similar1": "Hungary",
//         "similar2": "Haiti"
//     },
//     "🇭🇷": {
//         "pais": "Croatia",
//         "similar1": "Honduras",
//         "similar2": "Hungary"
//     },
//     "🇮🇩": {
//         "pais": "Indonesia",
//         "similar1": "India",
//         "similar2": "Ireland"
//     },
//     "🇮🇪": {
//         "pais": "Ireland",
//         "similar1": "Ivory Coast",
//         "similar2": "Iceland"
//     },
//     "🇮🇱": {
//         "pais": "Israel",
//         "similar1": "Iceland",
//         "similar2": "Italy"
//     },
//     "🇮🇳": {
//         "pais": "India",
//         "similar1": "Indonesia",
//         "similar2": "Ireland"
//     },
//     "🇮🇴": {
//         "pais": "British Indian Ocean Territory",
//         "similar1": "Ivory Coast",
//         "similar2": "Ireland"
//     },
//     "🇮🇶": {
//         "pais": "Iraq",
//         "similar1": "Iran",
//         "similar2": "Iceland"
//     },
//     "🇮🇷": {
//         "pais": "Iran",
//         "similar1": "Iraq",
//         "similar2": "Iceland"
//     },
//     "🇮🇸": {
//         "pais": "Iceland",
//         "similar1": "Ivory Coast",
//         "similar2": "Ireland"
//     },
//     "🇭🇹": {
//         "pais": "Haiti",
//         "similar1": "Honduras",
//         "similar2": "Hungary"
//     },
//     "🇭🇺": {
//         "pais": "Hungary",
//         "similar1": "Honduras",
//         "similar2": "Haiti"
//     },
//     "🇮🇩": {
//         "pais": "Indonesia",
//         "similar1": "India",
//         "similar2": "Iraq"
//     },
//     "🇮🇪": {
//         "pais": "Ireland",
//         "similar1": "Iceland",
//         "similar2": "Italy"
//     },
//     "🇮🇱": {
//         "pais": "Israel",
//         "similar1": "Italy",
//         "similar2": "Iceland"
//     },
//     "🇮🇳": {
//         "pais": "India",
//         "similar1": "Indonesia",
//         "similar2": "Iraq"
//     },
//     "🇮🇴": {
//         "pais": "British Indian Ocean Territory",
//         "similar1": "British Indian Ocean Territory",
//         "similar2": "Iraq"
//     },
//     "🇮🇶": {
//         "pais": "Iraq",
//         "similar1": "Iran",
//         "similar2": "Iceland"
//     },
//     "🇯🇲": {
//         "pais": "Jamaica",
//         "similar1": "Japan",
//         "similar2": "Jersey"
//     },
//     "🇯🇴": {
//         "pais": "Jordan",
//         "similar1": "Japan",
//         "similar2": "Jamaica"
//     },
//     "🇯🇵": {
//         "pais": "Japan",
//         "similar1": "Jersey",
//         "similar2": "Jamaica"
//     },
//     "🇰🇪": {
//         "pais": "Kenya",
//         "similar1": "Kuwait",
//         "similar2": "Kazakhstan"
//     },
//     "🇰🇬": {
//         "pais": "Kyrgyzstan",
//         "similar1": "Kuwait",
//         "similar2": "Kenya"
//     },
//     "🇰🇭": {
//         "pais": "Cambodia",
//         "similar1": "Cameroon",
//         "similar2": "Canada"
//     },
//     "🇰🇮": {
//         "pais": "Kiribati",
//         "similar1": "Kuwait",
//         "similar2": "Kyrgyzstan"
//     },
//     "🇰🇲": {
//         "pais": "Comoros",
//         "similar1": "Cameroon",
//         "similar2": "Cambodia"
//     },
//     "🇰🇳": {
//         "pais": "Saint Kitts and Nevis",
//         "similar1": "Saint Lucia",
//         "similar2": "Saint Vincent and the Grenadines"
//     },
//     "🇱🇦": {
//         "pais": "Laos",
//         "similar1": "Latvia",
//         "similar2": "Liberia"
//     },
//     "🇱🇧": {
//         "pais": "Lebanon",
//         "similar1": "Liberia",
//         "similar2": "Laos"
//     },
//     "🇱🇨": {
//         "pais": "Saint Lucia",
//         "similar1": "Saint Kitts and Nevis",
//         "similar2": "Saint Vincent and the Grenadines"
//     },
//     "🇱🇮": {
//         "pais": "Liechtenstein",
//         "similar1": "Lithuania",
//         "similar2": "Liberia"
//     },
//     "🇱🇰": {
//         "pais": "Sri Lanka",
//         "similar1": "Slovakia",
//         "similar2": "Slovenia"
//     },
//     "🇱🇷": {
//         "pais": "Liberia",
//         "similar1": "Liechtenstein",
//         "similar2": "Lithuania"
//     },
//     "🇱🇸": {
//         "pais": "Lesotho",
//         "similar1": "Liberia",
//         "similar2": "Liechtenstein"
//     },
//     "🇱🇹": {
//         "pais": "Lithuania",
//         "similar1": "Liechtenstein",
//         "similar2": "Liberia"
//     },
//     "🇱🇺": {
//         "pais": "Luxembourg",
//         "similar1": "Liechtenstein",
//         "similar2": "Lithuania"
//     },
//     "🇱🇻": {
//         "pais": "Latvia",
//         "similar1": "Laos",
//         "similar2": "Lebanon"
//     },
//     "🇲🇦": {
//         "pais": "Morocco",
//         "similar1": "Monaco",
//         "similar2": "Mozambique"
//     },
//     "🇲🇨": {
//         "pais": "Monaco",
//         "similar1": "Morocco",
//         "similar2": "Moldova"
//     },
//     "🇲🇩": {
//         "pais": "Moldova",
//         "similar1": "Monaco",
//         "similar2": "Madagascar"
//     },
//     "🇲🇪": {
//         "pais": "Montenegro",
//         "similar1": "Mozambique",
//         "similar2": "Madagascar"
//     },
//     "🇲🇬": {
//         "pais": "Madagascar",
//         "similar1": "Moldova",
//         "similar2": "Mongolia"
//     },
//     "🇲🇭": {
//         "pais": "Marshall Islands",
//         "similar1": "Mauritius",
//         "similar2": "Maldives"
//     },
//     "🇲🇰": {
//         "pais": "North Macedonia",
//         "similar1": "Mali",
//         "similar2": "Malawi"
//     },
//     "🇲🇱": {
//         "pais": "Mali",
//         "similar1": "Malawi",
//         "similar2": "Mozambique"
//     },
//     "🇲🇲": {
//         "pais": "Myanmar",
//         "similar1": "Mongolia",
//         "similar2": "Moldova"
//     },
//     "🇲🇳": {
//         "pais": "Mongolia",
//         "similar1": "Montenegro",
//         "similar2": "Madagascar"
//     },
//     "🇲🇷": {
//         "pais": "Mauritania",
//         "similar1": "Madagascar",
//         "similar2": "Moldova"
//     },
//     "🇲🇹": {
//         "pais": "Malta",
//         "similar1": "Maldives",
//         "similar2": "Mauritius"
//     },
//     "🇲🇺": {
//         "pais": "Mauritius",
//         "similar1": "Maldives",
//         "similar2": "Mali"
//     },
//     "🇲🇻": {
//         "pais": "Maldives",
//         "similar1": "Malta",
//         "similar2": "Mauritius"
//     },
//     "🇲🇼": {
//         "pais": "Malawi",
//         "similar1": "Mali",
//         "similar2": "Moldova"
//     },
//     "🇲🇽": {
//         "pais": "Mexico",
//         "similar1": "Monaco",
//         "similar2": "Moldova"
//     },
//     "🇲🇾": {
//         "pais": "Malaysia",
//         "similar1": "Maldives",
//         "similar2": "Mali"
//     },
//     "🇲🇿": {
//         "pais": "Mozambique",
//         "similar1": "Macao",
//         "similar2": "Malawi"
//     },
//     "🇳🇦": {
//         "pais": "Namibia",
//         "similar1": "Nauru",
//         "similar2": "Nepal"
//     },
//     "🇳🇪": {
//         "pais": "Niger",
//         "similar1": "Nigeria",
//         "similar2": "Norfolk Island"
//     },
//     "🇳🇬": {
//         "pais": "Nigeria",
//         "similar1": "Nicaragua",
//         "similar2": "Niger"
//     },
//     "🇳🇮": {
//         "pais": "Nicaragua",
//         "similar1": "New Caledonia",
//         "similar2": "Niger"
//     },
//     "🇳🇱": {
//         "pais": "Netherlands",
//         "similar1": "Norfolk Island",
//         "similar2": "Nigeria"
//     },
//     "🇳🇴": {
//         "pais": "Norway",
//         "similar1": "Nauru",
//         "similar2": "Namibia"
//     },
//     "🇳🇵": {
//         "pais": "Nepal",
//         "similar1": "Nauru",
//         "similar2": "Namibia"
//     },
//     "🇳🇷": {
//         "pais": "Nauru",
//         "similar1": "Norway",
//         "similar2": "Nepal"
//     },
//     "🇳🇿": {
//         "pais": "New Zealand",
//         "similar1": "Nicaragua",
//         "similar2": "Nigeria"
//     },
//     "🇴🇲": {
//         "pais": "Oman",
//         "similar1": "Romania",
//         "similar2": "Comoros"
//     },
//     "🇵🇦": {
//         "pais": "Panama",
//         "similar1": "Pakistan",
//         "similar2": "Palau"
//     },
//     "🇵🇪": {
//         "pais": "Peru",
//         "similar1": "Poland",
//         "similar2": "Philippines"
//     },
//     "🇵🇬": {
//         "pais": "Papua New Guinea",
//         "similar1": "Philippines",
//         "similar2": "Pakistan"
//     },
//     "🇵🇭": {
//         "pais": "Philippines",
//         "similar1": "Palestine",
//         "similar2": "Palau"
//     },
//     "🇵🇱": {
//         "pais": "Poland",
//         "similar1": "Portugal",
//         "similar2": "Palestine"
//     },
//     "🇵🇲": {
//         "pais": "Saint Pierre and Miquelon",
//         "similar1": "Saint Kitts and Nevis",
//         "similar2": "Saint Lucia"
//     },
//     "🇵🇹": {
//         "pais": "Portugal",
//         "similar1": "Poland",
//         "similar2": "Palestine"
//     },
//     "🇵🇼": {
//         "pais": "Palau",
//         "similar1": "Papua New Guinea",
//         "similar2": "Philippines"
//     },
//     "🇵🇾": {
//         "pais": "Paraguay",
//         "similar1": "Panama",
//         "similar2": "Pakistan"
//     },
//     "🇶🇦": {
//         "pais": "Qatar",
//         "similar1": "Réunion",
//         "similar2": "Romania"
//     },
//     "🇷🇴": {
//         "pais": "Romania",
//         "similar1": "Qatar",
//         "similar2": "Réunion"
//     },
//     "🇷🇺": {
//         "pais": "Russia",
//         "similar1": "Rwanda",
//         "similar2": "Romania"
//     },
//     "🇧🇾": {
//         "pais": "Belarus",
//         "similar1": "Rwanda",
//         "similar2": "Russia"
//     },
//     "🇷🇼": {
//         "pais": "Rwanda",
//         "similar1": "Russia",
//         "similar2": "Romania"
//     },
//     "🇸🇦": {
//         "pais": "Saudi Arabia",
//         "similar1": "Senegal",
//         "similar2": "Serbia"
//     },
//     "🇸🇧": {
//         "pais": "Solomon Islands",
//         "similar1": "Seychelles",
//         "similar2": "Sudan"
//     },
//     "🇸🇨": {
//         "pais": "Seychelles",
//         "similar1": "Solomon Islands",
//         "similar2": "Sudan"
//     },
//     "🇸🇩": {
//         "pais": "Sudan",
//         "similar1": "Solomon Islands",
//         "similar2": "Seychelles"
//     },
//     "🇸🇪": {
//         "pais": "Sweden",
//         "similar1": "Switzerland",
//         "similar2": "Seychelles"
//     },
//     "🇸🇬": {
//         "pais": "Singapore",
//         "similar1": "Saint Kitts and Nevis",
//         "similar2": "Saint Lucia"
//     },
//     "🇸🇭": {
//         "pais": "Saint Helena",
//         "similar1": "Saint Kitts and Nevis",
//         "similar2": "Saint Lucia"
//     },
//     "🇸🇮": {
//         "pais": "Slovenia",
//         "similar1": "Slovakia",
//         "similar2": "San Marino"
//     },
//     "🇸🇯": {
//         "pais": "Svalbard and Jan Mayen",
//         "similar1": "Slovakia",
//         "similar2": "Slovenia"
//     },
//     "🇸🇰": {
//         "pais": "Slovakia",
//         "similar1": "Slovenia",
//         "similar2": "San Marino"
//     },
//     "🇸🇱": {
//         "pais": "Sierra Leone",
//         "similar1": "Seychelles",
//         "similar2": "Solomon Islands"
//     },
//     "🇸🇲": {
//         "pais": "San Marino",
//         "similar1": "Slovakia",
//         "similar2": "Slovenia"
//     },
//     "🇸🇳": {
//         "pais": "Senegal",
//         "similar1": "Saudi Arabia",
//         "similar2": "Serbia"
//     },
//     "🇸🇴": {
//         "pais": "Somalia",
//         "similar1": "Seychelles",
//         "similar2": "Solomon Islands"
//     },
//     "🇸🇷": {
//         "pais": "Suriname",
//         "similar1": "Seychelles",
//         "similar2": "Solomon Islands"
//     },
//     "🇸🇸": {
//         "pais": "South Sudan",
//         "similar1": "Seychelles",
//         "similar2": "Solomon Islands"
//     },
//     "🇸🇹": {
//         "pais": "São Tomé and Príncipe",
//         "similar1": "Seychelles",
//         "similar2": "Solomon Islands"
//     },
//     "🇹🇯": {
//         "pais": "Tajikistan",
//         "similar1": "Tanzania",
//         "similar2": "Thailand"
//     },
//     "🇹🇱": {
//         "pais": "Timor-Leste",
//         "similar1": "Togo",
//         "similar2": "Tonga"
//     },
//     "🇹🇲": {
//         "pais": "Turkmenistan",
//         "similar1": "Tajikistan",
//         "similar2": "Thailand"
//     },
//     "🇹🇳": {
//         "pais": "Tunisia",
//         "similar1": "Turkey",
//         "similar2": "Turkmenistan"
//     },
//     "🇹🇴": {
//         "pais": "Tonga",
//         "similar1": "Togo",
//         "similar2": "Timor-Leste"
//     },
//     "🇹🇷": {
//         "pais": "Turkey",
//         "similar1": "Tunisia",
//         "similar2": "Turkmenistan"
//     },
//     "🇹🇹": {
//         "pais": "Trinidad and Tobago",
//         "similar1": "Tunisia",
//         "similar2": "Turkey"
//     },
//     "🇹🇻": {
//         "pais": "Tuvalu",
//         "similar1": "Tunisia",
//         "similar2": "Turkey"
//     },
//     "🇹🇼": {
//         "pais": "Taiwan",
//         "similar1": "Thailand",
//         "similar2": "Tajikistan"
//     },
//     "🇹🇿": {
//         "pais": "Tanzania",
//         "similar1": "Tajikistan",
//         "similar2": "Thailand"
//     },
//     "🇺🇦": {
//         "pais": "Ukraine",
//         "similar1": "United Arab Emirates",
//         "similar2": "United Kingdom"
//     },
//     "🇺🇬": {
//         "pais": "Uganda",
//         "similar1": "Uruguay",
//         "similar2": "Uzbekistan"
//     },
//     "🇺🇲": {
//         "pais": "United States Minor Outlying Islands",
//         "similar1": "United States of America",
//         "similar2": "Uruguay"
//     },
//     "🇺🇳": {
//         "pais": "United Nations",
//         "similar1": "United States of America",
//         "similar2": "United Arab Emirates"
//     },
//     "🇺🇸": {
//         "pais": "United States of America",
//         "similar1": "United Arab Emirates",
//         "similar2": "Uruguay"
//     },
//     "🇺🇾": {
//         "pais": "Uruguay",
//         "similar1": "Uganda",
//         "similar2": "Uzbekistan"
//     },
//     "🇺🇿": {
//         "pais": "Uzbekistan",
//         "similar1": "Uganda",
//         "similar2": "Uruguay"
//     },
//     "🇻🇦": {
//         "pais": "Vatican City",
//         "similar1": "Venezuela",
//         "similar2": "Vanuatu"
//     },
//     "🇻🇨": {
//         "pais": "Saint Vincent and the Grenadines",
//         "similar1": "Vatican City",
//         "similar2": "Venezuela"
//     },
//     "🇻🇪": {
//         "pais": "Venezuela",
//         "similar1": "Vatican City",
//         "similar2": "Vietnam"
//     },
// };





let dictionary10 = getRandomElements(fullFlagDictionary, 10);
let flag10 = Object.keys(dictionary10);
let countries10 = Object.values(dictionary10);

document.addEventListener('keydown', function (event) {
    if (event.key === ' ') { // ' ' representa la tecla de espacio
        if (window.location.href.includes('index.html')) {
            window.location.href = 'html/flags.html'; 
        } else if (window.location.href.includes('score.html')) {
            window.location.href = 'flags.html'; 
        }
    }
});

if (window.location.href.includes('flags.html')) {
    // PONE BANDERA Y PAIS EN UNA POSICION RANDOM DE 1 A 3 CUANDO SE CARGA LA PAGINA FLAGS.HTML
    var opcionCorrectaNum = Math.floor(Math.random() * 3) + 1;
    var opcionCorrecta = document.getElementById('opcion' + opcionCorrectaNum);
    var flag = document.getElementsByClassName('flag')[0];
    document.addEventListener('DOMContentLoaded', function() {
        flag.innerHTML = flag10[0];
        opcionCorrecta.innerHTML = countries10[0];
        console.log(countries10);
    });
    // PONE LOS PAISES INCORRECTOS EN LOS 2 LABELS RESTANTES
    do {
        var random1 = getRandomCountry();
        var random2 = getRandomCountry();
    } while (random1 == countries10[0] || random2 == countries10[0] || random2 == random1);

    if (opcionCorrectaNum === 1) {
        document.getElementById('opcion2').innerHTML = random1;
        document.getElementById('opcion3').innerHTML = random2;
    } else if (opcionCorrectaNum === 2) {
        document.getElementById('opcion1').innerHTML = random1;
        document.getElementById('opcion3').innerHTML = random2;
    } else {
        document.getElementById('opcion1').innerHTML = random1;
        document.getElementById('opcion2').innerHTML = random2;
    }

    // ASIGNA EL RADIO BUTTON CORRECTO
    var radioButtonCorrecto = document.getElementById('radio' + opcionCorrectaNum);
}


var flag_no = 0;

var contadorAciertos = 0;

let currentIndex = 0;

const radioButtons = document.querySelectorAll('input[name="pais"]');
const solveButton = document.getElementById('solve');
const nextButton = document.getElementById('next');

if (window.location.href.includes('flags.html')) {
    solveButton.addEventListener('click', function() {
        let isChecked = false;
        let selectedRadioButton = null;

        radioButtons.forEach(function(radioButton) {
            if (radioButton.checked) {
                isChecked = true;
                selectedRadioButton = radioButton;
            }
        });

        if (isChecked) {
            solveButton.disabled = true;
            solveButton.style.display = 'none';
            nextButton.disabled = false;
            nextButton.style.display = 'block';
                    
            if (selectedRadioButton.id !== "radio" + opcionCorrectaNum) {
                selectedRadioButton.style.backgroundColor = 'rgba(255, 0, 0, .8';
                document.getElementById("radio" + opcionCorrectaNum).style.backgroundColor = '#4ec85a';
                document.getElementsByClassName("progress_number")[flag_no].style.backgroundColor = 'rgba(255, 0, 0, .8';
            } else {
                document.getElementById("radio" + opcionCorrectaNum).style.backgroundColor = '#4ec85a';
                document.getElementsByClassName("progress_number")[flag_no].style.backgroundColor = '#4ec85a'
                contadorAciertos++;
                // Después de incrementar contadorAciertos en script.js
                localStorage.setItem('contadorAciertos', contadorAciertos);
                console.log('contadorAciertos guardado en el almacenamiento local:', contadorAciertos);
            }

            [...radioButtons].forEach(function(radioButton) {
                radioButton.disabled = true;
            });
            
            if (flag_no == 9) {
                nextButton.innerHTML = "Finish"            
            }
        }
    });


    nextButton.addEventListener("click", function() {
        if (flag_no == 9) {
            window.location.href = "score.html";
        } else {

            flag_no++;

            // BORRA LOS LABEL ANTERIORES
            document.getElementById('opcion1').innerHTML = "";
            document.getElementById('opcion2').innerHTML = "";
            document.getElementById('opcion3').innerHTML = "";

            // PONE EL PAIS CORRECTO EN UN LABEL RANDOM DE 1 A 3
            opcionCorrectaNum = Math.floor(Math.random() * 3) + 1;
            opcionCorrecta = document.getElementById('opcion' + opcionCorrectaNum);
            opcionCorrecta.innerHTML = countries10[flag_no];
            console.log(countries10[flag_no]);

            // PONE LOS PAISES INCORRECTOS EN LOS 2 LABELS RESTANTES
            do {
                random1 = getRandomCountry();
                random2 = getRandomCountry();
            } while (random1 == countries10[flag_no] || random2 == countries10[flag_no] || random2 == random1);

            if (opcionCorrectaNum === 1) {
                document.getElementById('opcion2').innerHTML = random1;
                document.getElementById('opcion3').innerHTML = random2;
            } else if (opcionCorrectaNum === 2) {
                document.getElementById('opcion1').innerHTML = random1;
                document.getElementById('opcion3').innerHTML = random2;
            } else if (opcionCorrectaNum === 3) {
                document.getElementById('opcion1').innerHTML = random1;
                document.getElementById('opcion2').innerHTML = random2;
            }

            // REASIGNA EL RADIO BUTTON CORRECTO
            radioButtonCorrecto = document.getElementById('radio' + opcionCorrectaNum);

            solveButton.disabled = false;
            solveButton.style.display = 'block';
            nextButton.disabled = true;
            nextButton.style.display = 'none';

            // PONE BANDERA
            const flagElement = document.querySelector('.flag');
            if (flagElement) {
                currentIndex = (currentIndex + 1) % flag10.length;
                flagElement.innerHTML = flag10[currentIndex];
            }

            const radioButtons = document.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(function(radioButton) {
                radioButton.style.backgroundColor = '';

                // Agregar evento change para restablecer el fondo cuando se selecciona un botón de radio
                radioButton.addEventListener('change', function() {
                    if (radioButton.checked) {
                        radioButton.style.backgroundColor = ''; // Esto restablece el fondo al valor predeterminado
                    }
                });
            });

            [...radioButtons].forEach(function(radioButton) {
                radioButton.disabled = false;
                radioButton.checked = false;
            }); 
        }
    });
}



// CONTROLADOR DEL TAB
// Obtén todos los elementos con el atributo tabindex
const elementosEnfocables = document.querySelectorAll('[tabindex]');

// Convierte la lista de nodos en un array para facilitar el manejo
const elementosArray = Array.from(elementosEnfocables);




// Agrega un controlador de eventos para el evento focus a cada radio button
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('focus', function() {
        // Selecciona el radio button actual cuando tiene el foco
        this.checked = true;
    });
});

// Agrega un controlador de eventos para prevenir el comportamiento predeterminado del tabulado
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        // Obtén el elemento que actualmente tiene el foco
        const elementoConFoco = document.activeElement;

        // Obtén el índice del elemento actual en el array de elementos enfocables
        const indice = elementosArray.indexOf(elementoConFoco);

        // Encuentra el próximo elemento enfocable en el array
        let siguienteElemento;
        if (event.shiftKey) {
            // Si se presiona Shift + Tab, mueve al elemento anterior
            siguienteElemento = elementosArray[indice - 1];
        } else {
            // Si solo se presiona Tab, mueve al siguiente elemento
            siguienteElemento = elementosArray[indice + 1];
        }

        // Si no hay siguiente elemento, vuelve al primer elemento enfocable
        if (!siguienteElemento) {
            siguienteElemento = elementosArray[event.shiftKey ? elementosArray.length - 1 : 0];
        }

        // Establece el foco en el siguiente elemento
        siguienteElemento.focus();

        // Previene el comportamiento predeterminado del tabulado
        event.preventDefault();
    }
});



