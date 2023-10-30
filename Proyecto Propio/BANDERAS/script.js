function randomFlags(array, count) {
    const shuffled = array.slice(0);
    let i = shuffled.length;
    const min = i - count;
    let temp, index;

    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }

    return shuffled.slice(min);
}

let fullFlagDictionary = {
    "🇦🇨": "Andorra",
    "🇦🇩": "Emiratos Árabes Unidos",
    "🇦🇪": "Afganistán",
    "🇦🇫": "Antigua y Barbuda",
    "🇦🇬": "Anguila",
    "🇦🇮": "Albania",
    "🇦🇱": "Armenia",
    "🇦🇲": "Angola",
    "🇦🇴": "Antártida",
    "🇦🇶": "Argentina",
    "🇦🇷": "Samoa Americana",
    "🇦🇸": "Austria",
    "🇦🇹": "Australia",
    "🇦🇺": "Aruba",
    "🇦🇼": "Islas Åland",
    "🇦🇽": "Azerbaiyán",
    "🇦🇿": "Bosnia y Herzegovina",
    "🇧🇦": "Barbados",
    "🇧🇧": "Bangladés",
    "🇧🇩": "Bélgica",
    "🇧🇪": "Burkina Faso",
    "🇧🇫": "Bulgaria",
    "🇧🇬": "Bahréin",
    "🇧🇭": "Burundi",
    "🇧🇮": "Benín",
    "🇧🇯": "San Bartolomé",
    "🇧🇱": "Bermudas",
    "🇧🇲": "Brunéi",
    "🇧🇳": "Bolivia",
    "🇧🇴": "Caribe Neerlandés",
    "🇧🇶": "Brasil",
    "🇧🇷": "Bahamas",
    "🇧🇸": "Bután",
    "🇧🇹": "Bouvet Island",
    "🇧🇻": "Botswana",
    "🇧🇼": "Bielorrusia",
    "🇧🇾": "Belice",
    "🇧🇿": "Canadá",
    "🇨🇦": "Islas Cocos",
    "🇨🇨": "Congo-Kinshasa",
    "🇨🇩": "República Centroafricana",
    "🇨🇫": "Congo-Brazzaville",
    "🇨🇬": "Suiza",
    "🇨🇭": "Costa de Marfil",
    "🇨🇮": "Islas Cook",
    "🇨🇰": "Chile",
    "🇨🇱": "Camerún",
    "🇨🇲": "China",
    "🇨🇳": "Colombia",
    "🇨🇴": "Clipperton Island",
    "🇨🇵": "Costa Rica",
    "🇨🇷": "Cuba",
    "🇨🇺": "Cabo Verde",
    "🇨🇻": "Curaçao",
    "🇨🇼": "Isla de Navidad",
    "🇨🇽": "Chipre",
    "🇨🇾": "Chequia",
    "🇨🇿": "Alemania",
    "🇩🇪": "Diego García",
    "🇩🇬": "Yibuti",
    "🇩🇯": "Dinamarca",
    "🇩🇰": "Dominica",
    "🇩🇲": "República Dominicana",
    "🇩🇴": "Argelia",
    "🇩🇿": "Ceuta y Melilla",
    "🇪🇦": "Ecuador",
    "🇪🇨": "Estonia",
    "🇪🇪": "Egipto",
    "🇪🇬": "Sáhara Occidental",
    "🇪🇭": "Eritrea",
    "🇪🇷": "España",
    "🇪🇸": "Etiopía",
    "🇪🇹": "Finlandia",
    "🇫🇮": "Fiyi",
    "🇫🇯": "Islas Malvinas",
    "🇫🇰": "Micronesia",
    "🇫🇲": "Islas Feroe",
    "🇫🇴": "Francia",
    "🇫🇷": "Gabón",
    "🇬🇦": "Reino Unido",
    "🇬🇧": "Granada",
    "🇬🇩": "Georgia",
    "🇬🇪": "Guayana Francesa",
    "🇬🇫": "Guernsey",
    "🇬🇬": "Ghana",
    "🇬🇭": "Gibraltar",
    "🇬🇮": "Groenlandia",
    "🇬🇱": "Gambia",
    "🇬🇲": "Guinea",
    "🇬🇳": "Guadalupe",
    "🇬🇵": "Guinea Ecuatorial",
    "🇬🇶": "Grecia",
    "🇬🇷": "Georgia del Sur y las Islas Sandwich del Sur",
    "🇬🇸": "Guatemala",
    "🇬🇹": "Guam",
    "🇬🇺": "Guinea-Bissau",
    "🇬🇼": "Guyana",
    "🇬🇾": "Hong Kong",
    "🇭🇰": "Islas Heard y McDonald",
    "🇭🇲": "Honduras",
    "🇭🇳": "Croacia",
    "🇭🇷": "Haití",
    "🇭🇹": "Hungría",
    "🇭🇺": "Islas Canarias",
    "🇮🇨": "Indonesia",
    "🇮🇩": "Irlanda",
    "🇮🇪": "Israel",
    "🇮🇱": "Isla de Man",
    "🇮🇲": "India",
    "🇮🇳": "Territorio Británico del Océano Índico",
    "🇮🇴": "Irak",
    "🇮🇶": "Irán",
    "🇮🇷": "Islandia",
    "🇮🇸": "Italia",
    "🇮🇹": "Jersey",
    "🇯🇪": "Jamaica",
    "🇯🇲": "Jordania",
    "🇯🇴": "Japón",
    "🇯🇵": "Kenia",
    "🇰🇪": "Kirguistán",
    "🇰🇬": "Camboya",
    "🇰🇭": "Kiribati",
    "🇰🇮": "Comoras",
    "🇰🇲": "San Cristóbal y Nieves",
    "🇰🇳": "Corea del Norte",
    "🇰🇵": "Corea del Sur",
    "🇰🇷": "Kuwait",
    "🇰🇼": "Islas Caimán",
    "🇰🇾": "Kazajistán",
    "🇰🇿": "Laos",
    "🇱🇦": "Líbano",
    "🇱🇧": "Santa Lucía",
    "🇱🇨": "Liechtenstein",
    "🇱🇮": "Sri Lanka",
    "🇱🇰": "Liberia",
    "🇱🇷": "Lesoto",
    "🇱🇸": "Lituania",
    "🇱🇹": "Luxemburgo",
    "🇱🇺": "Letonia",
    "🇱🇻": "Libia",
    "🇱🇾": "Marruecos",
    "🇲🇦": "Mónaco",
    "🇲🇨": "Moldavia",
    "🇲🇩": "Montenegro",
    "🇲🇪": "San Martín",
    "🇲🇫": "Madagascar",
    "🇲🇬": "Islas Marshall",
    "🇲🇭": "Macedonia del Norte",
    "🇲🇰": "Mali",
    "🇲🇱": "Myanmar",
    "🇲🇲": "Mongolia",
    "🇲🇳": "Macao",
    "🇲🇴": "Islas Marianas del Norte",
    "🇲🇵": "Martinica",
    "🇲🇶": "Mauritania",
    "🇲🇷": "Montserrat",
    "🇲🇸": "Malta",
    "🇲🇹": "Mauricio",
    "🇲🇺": "Maldivas",
    "🇲🇻": "Malaui",
    "🇲🇼": "México",
    "🇲🇽": "Malasia",
    "🇲🇾": "Mozambique",
    "🇲🇿": "Namibia",
    "🇳🇦": "Nueva Caledonia",
    "🇳🇨": "Níger",
    "🇳🇪": "Isla Norfolk",
    "🇳🇫": "Nigeria",
    "🇳🇬": "Nicaragua",
    "🇳🇮": "Países Bajos",
    "🇳🇱": "Noruega",
    "🇳🇴": "Nepal",
    "🇳🇵": "Nauru",
    "🇳🇷": "Niue",
    "🇳🇺": "Nueva Zelanda",
    "🇳🇿": "Omán",
    "🇴🇲": "Panamá",
    "🇵🇦": "Perú",
    "🇵🇪": "Polinesia Francesa",
    "🇵🇫": "Papúa Nueva Guinea",
    "🇵🇬": "Filipinas",
    "🇵🇭": "Pakistán",
    "🇵🇰": "Polonia",
    "🇵🇱": "San Pedro y Miquelón",
    "🇵🇲": "Pitcairn",
    "🇵🇳": "Puerto Rico",
    "🇵🇷": "Territorios Palestinos",
    "🇵🇸": "Portugal",
    "🇵🇹": "Islas Palaos",
    "🇵🇼": "Paraguay",
    "🇵🇾": "Catar",
    "🇶🇦": "Reunión",
    "🇷🇪": "Rumanía",
    "🇷🇴": "Serbia",
    "🇷🇸": "Rusia",
    "🇷🇺": "Ruanda",
    "🇷🇼": "Arabia Saudita",
    "🇸🇦": "Islas Salomón",
    "🇸🇧": "Seychelles",
    "🇸🇨": "Sudán"
};

let fullFlagList = ['🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲', '🇦🇴', '🇦🇶', '🇦🇷', '🇦🇸', '🇦🇹', '🇦🇺', '🇦🇼', '🇦🇽', '🇦🇿', '🇧🇦', '🇧🇧', '🇧🇩', '🇧🇪', '🇧🇫', '🇧🇬', '🇧🇭', '🇧🇮', '🇧🇯', '🇧🇱', '🇧🇲', '🇧🇳', '🇧🇴', '🇧🇶', '🇧🇷', '🇧🇸', '🇧🇹', '🇧🇻', '🇧🇼', '🇧🇾', '🇧🇿', '🇨🇦', '🇨🇨', '🇨🇩', '🇨🇫', '🇨🇬', '🇨🇭', '🇨🇮', '🇨🇰', '🇨🇱', '🇨🇲', '🇨🇳', '🇨🇴', '🇨🇵', '🇨🇷', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇽', '🇨🇾', '🇨🇿', '🇩🇪', '🇩🇬', '🇩🇯', '🇩🇰', '🇩🇲', '🇩🇴', '🇩🇿', '🇪🇨', '🇪🇪', '🇪🇬', '🇪🇭', '🇪🇷', '🇪🇸', '🇪🇹', '🇫🇮', '🇫🇯', '🇫🇰', '🇫🇲', '🇫🇴', '🇫🇷', '🇬🇦', '🇬🇧', '🇬🇩', '🇬🇪', '🇬🇫', '🇬🇬', '🇬🇭', '🇬🇮', '🇬🇱', '🇬🇲', '🇬🇳', '🇬🇵', '🇬🇶', '🇬🇷', '🇬🇸', '🇬🇹', '🇬🇺', '🇬🇼', '🇬🇾', '🇭🇰', '🇭🇲', '🇭🇳', '🇭🇷', '🇭🇹', '🇭🇺', '🇮🇨', '🇮🇩', '🇮🇪', '🇮🇱', '🇮🇲', '🇮🇳', '🇮🇴', '🇮🇶', '🇮🇷', '🇮🇸', '🇮🇹', '🇯🇪', '🇯🇲', '🇯🇴', '🇯🇵', '🇰🇪', '🇰🇬', '🇰🇭', '🇰🇮', '🇰🇲', '🇰🇳', '🇰🇵', '🇰🇷', '🇰🇼', '🇰🇾', '🇰🇿', '🇱🇦', '🇱🇧', '🇱🇨', '🇱🇮', '🇱🇰', '🇱🇷', '🇱🇸', '🇱🇹', '🇱🇺', '🇱🇻', '🇱🇾', '🇲🇦', '🇲🇨', '🇲🇩', '🇲🇪', '🇲🇫', '🇲🇬', '🇲🇭', '🇲🇰', '🇲🇱', '🇲🇲', '🇲🇳', '🇲🇴', '🇲🇵', '🇲🇶', '🇲🇷', '🇲🇸', '🇲🇹', '🇲🇺', '🇲🇻', '🇲🇼', '🇲🇽', '🇲🇾', '🇲🇿', '🇳🇦', '🇳🇨', '🇳🇪', '🇳🇫', '🇳🇬', '🇳🇮', '🇳🇱', '🇳🇴', '🇳🇵', '🇳🇷', '🇳🇺', '🇳🇿', '🇴🇲', '🇵🇦', '🇵🇪', '🇵🇫', '🇵🇬', '🇵🇭', '🇵🇰', '🇵🇱', '🇵🇲', '🇵🇳', '🇵🇷', '🇵🇸', '🇵🇹', '🇵🇼', '🇵🇾', '🇶🇦', '🇷🇪', '🇷🇴', '🇷🇸', '🇷🇺', '🇷🇼', '🇸🇦', '🇸🇧', '🇸🇨', '🇸🇩', '🇸🇪', '🇸🇬', '🇸🇭', '🇸🇮', '🇸🇯', '🇸🇰', '🇸🇱', '🇸🇲', '🇸🇳', '🇸🇴', '🇸🇷', '🇸🇸', '🇸🇹', '🇸🇻', '🇸🇽', '🇸🇾', '🇸🇿', '🇹🇦', '🇹🇨', '🇹🇩', '🇹🇫', '🇹🇬', '🇹🇭', '🇹🇯', '🇹🇰', '🇹🇱', '🇹🇲', '🇹🇳', '🇹🇴', '🇹🇷', '🇹🇹', '🇹🇻', '🇹🇼', '🇹🇿', '🇺🇦', '🇺🇬', '🇺🇳', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇦', '🇻🇨', '🇻🇪', '🇻🇬', '🇻🇮', '🇻🇳', '🇻🇺', '🇼🇫', '🇼🇸', '🇽🇰', '🇾🇪', '🇾🇹', '🇿🇦', '🇿🇲', '🇿🇼'];
let flagList = randomFlags(fullFlagList, 10);

document.addEventListener('keydown', function (event) {
    if (window.location.href.includes('index.html')) {
        window.location.href = 'flag.html'; 
    }
});

let flag = document.getElementsByClassName('flag')[0];
document.addEventListener('DOMContentLoaded', function() {
    flag.innerHTML = flagList[0];
});




var flag_no = 0;

var aciertos = 0;
var fallos = 0;






let countryList = ["Puerto Rico", "Costa de Marfil", "Suecia", "Sudáfrica", "China", "Argentina", "India", "Polonia", "Reino Unido", "Albania"]
let options = ["Costa Rica", "Puerto Rico", "Cuba", "Costa Rica", "Costa de Marfil", "Cuba", "Costa Rica", "Suecia", "Cuba", "Costa Rica", "Sudáfrica", "Cuba", "Costa Rica", "China", "Cuba", "Costa Rica", "Argentina", "Cuba", "Costa Rica", "India", "Cuba", "Costa Rica", "Polonia", "Cuba", "Costa Rica", "Reino Unido", "Cuba", "Costa Rica", "Albania", "Cuba"]

let currentIndex = 0;

const radioButtons = document.querySelectorAll('input[name="pais"]');
const solveButton = document.getElementById('solve');
const nextButton = document.getElementById('next');

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
                
        if (selectedRadioButton.id !== "radio2") {
            selectedRadioButton.style.backgroundColor = 'red';
            document.getElementById("radio2").style.backgroundColor = '#4ec85a';
            document.getElementsByClassName("progress_number")[flag_no].style.backgroundColor = 'red';
            fallos++;
        } else {
            document.getElementById("radio2").style.backgroundColor = '#4ec85a';
            document.getElementsByClassName("progress_number")[flag_no].style.backgroundColor = '#4ec85a'
            aciertos++;
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
        window.location.href = "end.html";              
    }

    flag_no++;

    document.getElementById("opcion1").innerHTML = options[flag_no*3]
    document.getElementById("opcion2").innerHTML = options[flag_no*3 + 1]
    document.getElementById("opcion3").innerHTML = options[flag_no*3 + 2]

    solveButton.disabled = false;
    solveButton.style.display = 'block';
    nextButton.disabled = true;
    nextButton.style.display = 'none';

    const flagElement = document.querySelector('.flag');
    if (flagElement) {
        currentIndex = (currentIndex + 1) % flagList.length;
        flagElement.innerHTML = flagList[currentIndex];
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
});


