// Verificar si el dispositivo es un PC
//if (window.innerWidth < 500 || window.innerHeight < 500) {
    // Redirigir a otra página
    //window.location.href = 'html/error.html';
//}


// IMPIDE QUE SE PUEDA IR HACIA ATRAS O ADELANTE USANDO LAS FLECHAS DEL NAVEGADOR
window.history.pushState(null, null, window.location.href);
window.onpopstate = function() {
    window.history.go(1);
};


// Función para des-seleccionar los radio buttons al cargar o recargar la página
function desSeleccionarRadioButtons() {
    var radioButtons = document.getElementsByClassName('radio');
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
        // Convertir el diccionario en un array de de los valores del diccionario
        let values = Object.values(fullFlagDictionary);

        let randomIndex = Math.floor(Math.random() * values.length);
        randomCountry = values[randomIndex];
    } while (randomCountry === correctOption || randomCountry === document.getElementById('opcion1').value || randomCountry === document.getElementById('opcion2').value || randomCountry === document.getElementById('opcion3').value);
    
    return randomCountry;
}




// APLICA LA REDUCCION DE TAMAÑO DE LOS PAISES QUE SU NOMBRE ES LARGO DE MANERA PROPORCIONAL
document.addEventListener('DOMContentLoaded', function () {
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
    var tamanoBase = 38; // Puedes ajustar esto según tus necesidades
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
    elemento.style.fontSize = tamanoFuente + 'px';
}




// AGREGA FUNCIONALIDAD A LA TECLA ENTER
document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los elementos de tipo radio
    var radioButtons = document.querySelectorAll("input[type='radio']");

    // Agrega un evento de escucha para la tecla 'Enter' en todo el documento
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
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

    if (contadorAciertos === 10) {
        const confetti = new JSConfetti();
        confetti.addConfetti();
    }
}



// LAS 193 BANDERAS ASOCIADAS AL NOMBRE DE SU PAIS
let fullFlagDictionary = {
    '🇦🇫': 'Afghanistan',
    '🇦🇱': 'Albania',
    '🇩🇿': 'Algeria',
    '🇦🇩': 'Andorra',
    '🇦🇴': 'Angola',
    '🇦🇬': 'Antigua and Barbuda',
    '🇦🇷': 'Argentina',
    '🇦🇲': 'Armenia',
    '🇦🇺': 'Australia',
    '🇦🇹': 'Austria',
    '🇦🇿': 'Azerbaijan',
    '🇧🇸': 'Bahamas',
    '🇧🇭': 'Bahrain',
    '🇧🇩': 'Bangladesh',
    '🇧🇧': 'Barbados',
    '🇧🇾': 'Belarus',
    '🇧🇪': 'Belgium',
    '🇧🇿': 'Belize',
    '🇧🇯': 'Benin',
    '🇧🇹': 'Bhutan',
    '🇧🇴': 'Bolivia',
    '🇧🇦': 'Bosnia and Herzegovina',
    '🇧🇼': 'Botswana',
    '🇧🇷': 'Brazil',
    '🇧🇳': 'Brunei',
    '🇧🇬': 'Bulgaria',
    '🇧🇫': 'Burkina Faso',
    '🇧🇮': 'Burundi',    
    '🇨🇻': 'Cabo Verde',
    '🇰🇭': 'Cambodia',
    '🇨🇲': 'Cameroon',
    '🇨🇦': 'Canada',
    '🇨🇫': 'Central African Republic',
    '🇹🇩': 'Chad',
    '🇨🇱': 'Chile',
    '🇨🇳': 'China',
    '🇨🇴': 'Colombia',
    '🇰🇲': 'Comoros',
    'dr': 'Congo',
    '🇨🇷': 'Costa Rica',
    '🇭🇷': 'Croatia',
    '🇨🇺': 'Cuba',
    '🇨🇾': 'Cyprus',
    '🇨🇿': 'Czech Republic',
    '🇩🇰': 'Denmark',
    '🇩🇯': 'Djibouti',
    '🇩🇲': 'Dominica',
    '🇩🇴': 'Dominican Republic',
    '🇨🇩': 'DR Congo',
    '🇪🇨': 'Ecuador',
    '🇪🇬': 'Egypt',
    '🇸🇻': 'El Salvador',
    '🇬🇶': 'Equatorial Guinea',
    '🇪🇷': 'Eritrea',
    '🇪🇪': 'Estonia',
    '🇸🇿': 'Eswatini',
    '🇪🇹': 'Ethiopia',
    '🇫🇯': 'Fiji',
    '🇫🇮': 'Finland',
    '🇫🇷': 'France',
    '🇬🇦': 'Gabon',
    '🇬🇲': 'Gambia',
    '🇬🇪': 'Georgia',
    '🇩🇪': 'Germany',
    '🇬🇭': 'Ghana',
    '🇬🇷': 'Greece',
    '🇬🇩': 'Grenada',
    '🇬🇹': 'Guatemala',
    '🇬🇳': 'Guinea',
    '🇬🇼': 'Guinea-Bissau',
    '🇬🇾': 'Guyana',
    '🇭🇹': 'Haiti',
    '🇭🇳': 'Honduras',
    '🇭🇺': 'Hungary',
    '🇮🇸': 'Iceland',
    '🇮🇳': 'India',
    '🇮🇩': 'Indonesia',
    '🇮🇷': 'Iran',
    '🇮🇶': 'Iraq',
    '🇮🇪': 'Ireland',
    '🇮🇱': 'Israel',
    '🇮🇹': 'Italy',
    '🇨🇮': 'Ivory Coast',
    '🇯🇲': 'Jamaica',
    '🇯🇵': 'Japan',
    '🇯🇴': 'Jordan',
    '🇰🇿': 'Kazakhstan',
    '🇰🇪': 'Kenya',
    '🇰🇮': 'Kiribati',
    '🇰🇼': 'Kuwait',
    '🇰🇬': 'Kyrgyzstan',
    '🇱🇦': 'Laos',
    '🇱🇻': 'Latvia',
    '🇱🇧': 'Lebanon',
    '🇱🇸': 'Lesotho',
    '🇱🇷': 'Liberia',
    '🇱🇾': 'Libya',
    '🇱🇮': 'Liechtenstein',
    '🇱🇹': 'Lithuania',
    '🇱🇺': 'Luxembourg',
    '🇲🇬': 'Madagascar',
    '🇲🇼': 'Malawi',
    '🇲🇾': 'Malaysia',
    '🇲🇻': 'Maldives',
    '🇲🇱': 'Mali',
    '🇲🇹': 'Malta',
    '🇲🇭': 'Marshall Islands',
    '🇲🇷': 'Mauritania',
    '🇲🇺': 'Mauritius',
    '🇲🇽': 'Mexico',
    '🇫🇲': 'Micronesia',
    '🇲🇩': 'Moldova',
    '🇲🇨': 'Monaco',
    '🇲🇳': 'Mongolia',
    '🇲🇪': 'Montenegro',
    '🇲🇦': 'Morocco',
    '🇲🇿': 'Mozambique',
    '🇲🇲': 'Myanmar',
    '🇳🇦': 'Namibia',
    '🇳🇷': 'Nauru',
    '🇳🇵': 'Nepal',
    '🇳🇱': 'Netherlands',
    '🇳🇿': 'New Zealand',
    '🇳🇮': 'Nicaragua',
    '🇳🇪': 'Niger',
    '🇳🇬': 'Nigeria',
    '🇰🇵': 'North Korea',
    '🇲🇰': 'North Macedonia',
    '🇳🇴': 'Norway',
    '🇴🇲': 'Oman',
    '🇵🇰': 'Pakistan',
    '🇵🇼': 'Palau',
    '🇵🇦': 'Panama',
    '🇵🇬': 'Papua New Guinea',
    '🇵🇾': 'Paraguay',
    '🇵🇪': 'Peru',
    '🇵🇭': 'Philippines',
    '🇵🇱': 'Poland',
    '🇵🇹': 'Portugal',
    '🇶🇦': 'Qatar',
    '🇷🇴': 'Romania',
    '🇷🇺': 'Russia',
    '🇷🇼': 'Rwanda',
    '🇰🇳': 'Saint Kitts and Nevis',
    '🇱🇨': 'Saint Lucia',    
    '🇼🇸': 'Samoa',
    '🇸🇲': 'San Marino',
    '🇸🇹': 'Sao Tome and Principe',
    '🇸🇦': 'Saudi Arabia',
    '🇸🇳': 'Senegal',
    '🇷🇸': 'Serbia',
    '🇸🇨': 'Seychelles',
    '🇸🇱': 'Sierra Leone',
    '🇸🇬': 'Singapore',
    '🇸🇰': 'Slovakia',
    '🇸🇮': 'Slovenia',
    '🇸🇧': 'Solomon Islands',
    '🇸🇴': 'Somalia',
    '🇿🇦': 'South Africa',
    '🇰🇷': 'South Korea',
    '🇸🇸': 'South Sudan',
    '🇪🇸': 'Spain',
    '🇱🇰': 'Sri Lanka',
    '🇻🇨': 'St. Vincent & Grenadines',
    '🇸🇩': 'Sudan',
    '🇸🇷': 'Suriname',
    '🇸🇪': 'Sweden',
    '🇨🇭': 'Switzerland',
    '🇸🇾': 'Syria',
    '🇹🇯': 'Tajikistan',
    '🇹🇿': 'Tanzania',
    '🇹🇭': 'Thailand',
    '🇹🇱': 'Timor-Leste',
    '🇹🇬': 'Togo',
    '🇹🇴': 'Tonga',
    '🇹🇹': 'Trinidad and Tobago',
    '🇹🇳': 'Tunisia',
    '🇹🇷': 'Turkey',
    '🇹🇲': 'Turkmenistan',
    '🇹🇻': 'Tuvalu',
    '🇺🇬': 'Uganda',
    '🇺🇦': 'Ukraine',
    '🇦🇪': 'United Arab Emirates',
    '🇬🇧': 'United Kingdom',
    '🇺🇸': 'United States',
    '🇺🇾': 'Uruguay',
    '🇺🇿': 'Uzbekistan',
    '🇻🇺': 'Vanuatu',
    '🇻🇦' : 'Vatican City',
    '🇻🇪': 'Venezuela',
    '🇻🇳': 'Vietnam',
    '🇾🇪': 'Yemen',
    '🇿🇲': 'Zambia',
    '🇿🇼': 'Zimbabwe',  
};





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

const radioButtons = document.querySelectorAll("input[name='pais']");
const solveButton = document.getElementById('solve');
const nextButton = document.getElementById('next');

if (window.location.href.includes('flags.html')) {
    // PONE EN NARANJA EL PROGRES NUMBER DE LA BANDERA NUMERO 1
    document.getElementsByClassName('progress_number')[flag_no].style.border = '.3vw solid rgba(255, 165, 0, 0.6)';
    document.getElementsByClassName('progress_number')[flag_no].style.color = 'rgba(255, 165, 0, 0.6)';


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
                   
            // COLOREA EL PROGRESS NUMBER DE LA BARRA DE ABAJO SEGUN SI ACIERTA O FALLA
            if (selectedRadioButton.id !== 'radio' + opcionCorrectaNum) {
                selectedRadioButton.style.backgroundColor = 'rgba(255, 0, 0, .8';
                document.getElementById('radio' + opcionCorrectaNum).style.backgroundColor = '#4ec85a';
                document.getElementsByClassName('progress_number')[flag_no].style.backgroundColor = 'rgba(255, 0, 0, .8';
                document.getElementsByClassName('progress_number')[flag_no].style.border = '.3vw solid white';
                document.getElementsByClassName('progress_number')[flag_no].style.color = 'white';                
            } else {
                document.getElementById('radio' + opcionCorrectaNum).style.backgroundColor = '#4ec85a';
                document.getElementsByClassName('progress_number')[flag_no].style.backgroundColor = '#4ec85a'
                document.getElementsByClassName('progress_number')[flag_no].style.border = '.3vw solid white';
                document.getElementsByClassName('progress_number')[flag_no].style.color = 'white';               
                contadorAciertos++;
                // Después de incrementar contadorAciertos en script.js
                localStorage.setItem('contadorAciertos', contadorAciertos);
            }

            [...radioButtons].forEach(function(radioButton) {
                radioButton.disabled = true;
            });
            
            if (flag_no == 9) {
                nextButton.innerHTML = 'Finish'            
            }
        }
    });


    nextButton.addEventListener('click', function() {
        if (flag_no == 9) {
            window.location.href = 'score.html';
        } else {
            // PONE EN NARANJA EL PROGRES NUMBER DE LA BANDERA ACTUAL
            document.getElementsByClassName('progress_number')[flag_no + 1].style.border = '.3vw solid rgba(255, 165, 0, 0.6)';
            document.getElementsByClassName('progress_number')[flag_no + 1].style.color = 'rgba(255, 165, 0, 0.6)';

            flag_no++;

            // BORRA LOS LABEL ANTERIORES
            document.getElementById('opcion1').innerHTML = '';
            document.getElementById('opcion2').innerHTML = '';
            document.getElementById('opcion3').innerHTML = '';

            // PONE EL PAIS CORRECTO EN UN LABEL RANDOM DE 1 A 3
            opcionCorrectaNum = Math.floor(Math.random() * 3) + 1;
            opcionCorrecta = document.getElementById('opcion' + opcionCorrectaNum);
            opcionCorrecta.innerHTML = countries10[flag_no];

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

            const radioButtons = document.querySelectorAll("input[type='radio']");
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



