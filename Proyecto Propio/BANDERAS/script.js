function getRandomElements(dictionary, count) {
    let keys = Object.keys(dictionary);
    let randomElements = {};
    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * keys.length);
        let randomKey = keys[randomIndex];
        randomElements[randomKey] = dictionary[randomKey];
    }
    return randomElements;
}


// let fullFlagDictionaryEspanyol = {
//     "🇦🇨": "Islas del Canal",
//     "🇦🇩": "Andorra",
//     "🇦🇪": "Emiratos Árabes Unidos",
//     "🇦🇫": "Afganistán",
//     "🇦🇬": "Antigua y Barbuda",
//     "🇦🇮": "Anguila",
//     "🇦🇱": "Albania",
//     "🇦🇲": "Armenia",
//     "🇦🇴": "Angola",
//     "🇦🇶": "Antártida",
//     "🇦🇷": "Argentina",
//     "🇦🇸": "Samoa Americana",
//     "🇦🇹": "Austria",
//     "🇦🇺": "Australia",
//     "🇦🇼": "Aruba",
//     "🇦🇽": "Islas Åland",
//     "🇦🇿": "Azerbaiyán",
//     "🇧🇦": "Bosnia y Herzegovina",
//     "🇧🇧": "Barbados",
//     "🇧🇩": "Bangladés",
//     "🇧🇪": "Bélgica",
//     "🇧🇫": "Burkina Faso",
//     "🇧🇬": "Bulgaria",
//     "🇧🇭": "Baréin",
//     "🇧🇮": "Burundi",
//     "🇧🇯": "Benín",
//     "🇧🇱": "San Bartolomé",
//     "🇧🇲": "Bermudas",
//     "🇧🇳": "Brunéi",
//     "🇧🇴": "Bolivia",
//     "🇧🇶": "Caribe Neerlandés",
//     "🇧🇷": "Brasil",
//     "🇧🇸": "Bahamas",
//     "🇧🇹": "Bután",
//     "🇧🇻": "Isla Bouvet",
//     "🇧🇼": "Botsuana",
//     "🇧🇾": "Bielorrusia",
//     "🇧🇿": "Belice",
//     "🇨🇦": "Canadá",
//     "🇨🇨": "Islas Cocos",
//     "🇨🇩": "República Democrática del Congo",
//     "🇨🇫": "República Centroafricana",
//     "🇨🇬": "Congo",
//     "🇨🇭": "Suiza",
//     "🇨🇮": "Costa de Marfil",
//     "🇨🇰": "Islas Cook",
//     "🇨🇱": "Chile",
//     "🇨🇲": "Camerún",
//     "🇨🇳": "China",
//     "🇨🇴": "Colombia",
//     "🇨🇵": "Clipperton",
//     "🇨🇷": "Costa Rica",
//     "🇨🇺": "Cuba",
//     "🇨🇻": "Cabo Verde",
//     "🇨🇼": "Curazao",
//     "🇨🇽": "Isla de Navidad",
//     "🇨🇾": "Chipre",
//     "🇨🇿": "Chequia",
//     "🇩🇪": "Alemania",
//     "🇩🇬": "Diego García",
//     "🇩🇯": "Yibuti",
//     "🇩🇰": "Dinamarca",
//     "🇩🇲": "Dominica",
//     "🇩🇴": "República Dominicana",
//     "🇩🇿": "Argelia",
//     "🇪🇦": "Ceuta y Melilla",
//     "🇪🇨": "Ecuador",
//     "🇪🇪": "Estonia",
//     "🇪🇬": "Egipto",
//     "🇪🇭": "Sáhara Occidental",
//     "🇪🇷": "Eritrea",
//     "🇪🇸": "España",
//     "🇪🇹": "Etiopía",
//     "🇫🇮": "Finlandia",
//     "🇫🇯": "Fiyi",
//     "🇫🇰": "Islas Malvinas",
//     "🇫🇴": "Islas Feroe",
//     "🇫🇷": "Francia",
//     "🇬🇦": "Gabón",
//     "🇬🇧": "Reino Unido",
//     "🇬🇩": "Granada",
//     "🇬🇪": "Georgia",
//     "🇬🇫": "Guayana Francesa",
//     "🇬🇬": "Guernsey",
//     "🇬🇭": "Ghana",
//     "🇬🇮": "Gibraltar",
//     "🇬🇱": "Groenlandia",
//     "🇬🇲": "Gambia",
//     "🇬🇳": "Guinea",
//     "🇬🇵": "Guadalupe",
//     "🇬🇶": "Guinea Ecuatorial",
//     "🇬🇷": "Grecia",
//     "🇬🇸": "Georgia del Sur y las Islas Sandwich del Sur",
//     "🇬🇹": "Guatemala",
//     "🇬🇺": "Guam",
//     "🇬🇼": "Guinea-Bissau",
//     "🇬🇾": "Guyana",
//     "🇭🇰": "Hong Kong",
//     "🇭🇲": "Islas Heard y McDonald",
//     "🇭🇳": "Honduras",
//     "🇭🇷": "Croacia",
//     "🇭🇹": "Haití",
//     "🇭🇺": "Hungría",
//     "🇮🇨": "Islas Canarias",
//     "🇮🇩": "Indonesia",
//     "🇮🇪": "Irlanda",
//     "🇮🇱": "Israel",
//     "🇮🇲": "Isla de Man",
//     "🇮🇳": "India",
//     "🇮🇶": "Irak",
//     "🇮🇷": "Irán",
//     "🇮🇸": "Islandia",
//     "🇮🇹": "Italia",
//     "🇯🇪": "Jersey",
//     "🇯🇲": "Jamaica",
//     "🇯🇴": "Jordania",
//     "🇯🇵": "Japón",
//     "🇰🇪": "Kenia",
//     "🇰🇬": "Kirguistán",
//     "🇰🇭": "Camboya",
//     "🇰🇮": "Kiribati",
//     "🇰🇲": "Comoras",
//     "🇰🇳": "San Cristóbal y Nieves",
//     "🇰🇵": "Corea del Norte",
//     "🇰🇷": "Corea del Sur",
//     "🇰🇼": "Kuwait",
//     "🇰🇾": "Islas Caimán",
//     "🇰🇿": "Kazajistán",
//     "🇱🇦": "Laos",
//     "🇱🇧": "Líbano",
//     "🇱🇨": "Santa Lucía",
//     "🇱🇮": "Liechtenstein",
//     "🇱🇰": "Sri Lanka",
//     "🇱🇷": "Liberia",
//     "🇱🇸": "Lesoto",
//     "🇱🇹": "Lituania",
//     "🇱🇺": "Luxemburgo",
//     "🇱🇻": "Letonia",
//     "🇱🇾": "Libia",
//     "🇲🇦": "Marruecos",
//     "🇲🇨": "Mónaco",
//     "🇲🇩": "Moldavia",
//     "🇲🇪": "Montenegro",
//     "🇲🇫": "San Martín",
//     "🇲🇬": "Madagascar",
//     "🇲🇭": "Islas Marshall",
//     "🇲🇰": "Macedonia del Norte",
//     "🇲🇱": "Mali",
//     "🇲🇲": "Myanmar",
//     "🇲🇳": "Mongolia",
//     "🇲🇴": "Macao",
//     "🇲🇵": "Islas Marianas del Norte",
//     "🇲🇶": "Martinica",
//     "🇲🇷": "Mauritania",
//     "🇲🇸": "Montserrat",
//     "🇲🇹": "Malta",
//     "🇲🇺": "Mauricio",
//     "🇲🇻": "Maldivas",
//     "🇲🇼": "Malaui",
//     "🇲🇽": "México",
//     "🇲🇾": "Malasia",
//     "🇲🇿": "Mozambique",
//     "🇳🇦": "Namibia",
//     "🇳🇨": "Nueva Caledonia",
//     "🇳🇪": "Níger",
//     "🇳🇫": "Isla Norfolk",
//     "🇳🇬": "Nigeria",
//     "🇳🇮": "Nicaragua",
//     "🇳🇱": "Países Bajos",
//     "🇳🇴": "Noruega",
//     "🇳🇵": "Nepal",
//     "🇳🇷": "Niue",
//     "🇳🇿": "Nueva Zelanda",
//     "🇴🇲": "Omán",
//     "🇵🇦": "Panamá",
//     "🇵🇪": "Perú",
//     "🇵🇫": "Polinesia Francesa",
//     "🇵🇬": "Papúa Nueva Guinea",
//     "🇵🇭": "Filipinas",
//     "🇵🇰": "Pakistán",
//     "🇵🇱": "Polonia",
//     "🇵🇲": "San Pedro y Miquelón",
//     "🇵🇳": "Pitcairn",
//     "🇵🇷": "Puerto Rico",
//     "🇵🇸": "Territorios Palestinos",
//     "🇵🇹": "Portugal",
//     "🇵🇼": "Islas Palaos",
//     "🇵🇾": "Paraguay",
//     "🇶🇦": "Catar",
//     "🇷🇪": "Reunión",
//     "🇷🇴": "Rumanía",
//     "🇷🇸": "Serbia",
//     "🇷🇺": "Rusia",
//     "🇷🇼": "Ruanda",
//     "🇸🇦": "Arabia Saudita",
//     "🇸🇧": "Islas Salomón",
//     "🇸🇨": "Seychelles",
//     "🇸🇩": "Sudán",
// };




// let fullFlagList = ['🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲', '🇦🇴', '🇦🇶', '🇦🇷', '🇦🇸', '🇦🇹', '🇦🇺', '🇦🇼', '🇦🇽', '🇦🇿', '🇧🇦', '🇧🇧', '🇧🇩', '🇧🇪', '🇧🇫', '🇧🇬', '🇧🇭', '🇧🇮', '🇧🇯', '🇧🇱', '🇧🇲', '🇧🇳', '🇧🇴', '🇧🇶', '🇧🇷', '🇧🇸', '🇧🇹', '🇧🇻', '🇧🇼', '🇧🇾', '🇧🇿', '🇨🇦', '🇨🇨', '🇨🇩', '🇨🇫', '🇨🇬', '🇨🇭', '🇨🇮', '🇨🇰', '🇨🇱', '🇨🇲', '🇨🇳', '🇨🇴', '🇨🇵', '🇨🇷', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇽', '🇨🇾', '🇨🇿', '🇩🇪', '🇩🇬', '🇩🇯', '🇩🇰', '🇩🇲', '🇩🇴', '🇩🇿', '🇪🇨', '🇪🇪', '🇪🇬', '🇪🇭', '🇪🇷', '🇪🇸', '🇪🇹', '🇫🇮', '🇫🇯', '🇫🇰', '🇫🇲', '🇫🇴', '🇫🇷', '🇬🇦', '🇬🇧', '🇬🇩', '🇬🇪', '🇬🇫', '🇬🇬', '🇬🇭', '🇬🇮', '🇬🇱', '🇬🇲', '🇬🇳', '🇬🇵', '🇬🇶', '🇬🇷', '🇬🇸', '🇬🇹', '🇬🇺', '🇬🇼', '🇬🇾', '🇭🇰', '🇭🇲', '🇭🇳', '🇭🇷', '🇭🇹', '🇭🇺', '🇮🇨', '🇮🇩', '🇮🇪', '🇮🇱', '🇮🇲', '🇮🇳', '🇮🇴', '🇮🇶', '🇮🇷', '🇮🇸', '🇮🇹', '🇯🇪', '🇯🇲', '🇯🇴', '🇯🇵', '🇰🇪', '🇰🇬', '🇰🇭', '🇰🇮', '🇰🇲', '🇰🇳', '🇰🇵', '🇰🇷', '🇰🇼', '🇰🇾', '🇰🇿', '🇱🇦', '🇱🇧', '🇱🇨', '🇱🇮', '🇱🇰', '🇱🇷', '🇱🇸', '🇱🇹', '🇱🇺', '🇱🇻', '🇱🇾', '🇲🇦', '🇲🇨', '🇲🇩', '🇲🇪', '🇲🇫', '🇲🇬', '🇲🇭', '🇲🇰', '🇲🇱', '🇲🇲', '🇲🇳', '🇲🇴', '🇲🇵', '🇲🇶', '🇲🇷', '🇲🇸', '🇲🇹', '🇲🇺', '🇲🇻', '🇲🇼', '🇲🇽', '🇲🇾', '🇲🇿', '🇳🇦', '🇳🇨', '🇳🇪', '🇳🇫', '🇳🇬', '🇳🇮', '🇳🇱', '🇳🇴', '🇳🇵', '🇳🇷', '🇳🇺', '🇳🇿', '🇴🇲', '🇵🇦', '🇵🇪', '🇵🇫', '🇵🇬', '🇵🇭', '🇵🇰', '🇵🇱', '🇵🇲', '🇵🇳', '🇵🇷', '🇵🇸', '🇵🇹', '🇵🇼', '🇵🇾', '🇶🇦', '🇷🇪', '🇷🇴', '🇷🇸', '🇷🇺', '🇷🇼', '🇸🇦', '🇸🇧', '🇸🇨', '🇸🇩', '🇸🇪', '🇸🇬', '🇸🇭', '🇸🇮', '🇸🇯', '🇸🇰', '🇸🇱', '🇸🇲', '🇸🇳', '🇸🇴', '🇸🇷', '🇸🇸', '🇸🇹', '🇸🇻', '🇸🇽', '🇸🇾', '🇸🇿', '🇹🇦', '🇹🇨', '🇹🇩', '🇹🇫', '🇹🇬', '🇹🇭', '🇹🇯', '🇹🇰', '🇹🇱', '🇹🇲', '🇹🇳', '🇹🇴', '🇹🇷', '🇹🇹', '🇹🇻', '🇹🇼', '🇹🇿', '🇺🇦', '🇺🇬', '🇺🇳', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇦', '🇻🇨', '🇻🇪', '🇻🇬', '🇻🇮', '🇻🇳', '🇻🇺', '🇼🇫', '🇼🇸', '🇽🇰', '🇾🇪', '🇾🇹', '🇿🇦', '🇿🇲', '🇿🇼'];


let fullFlagDictionary = {
    "🇦🇨": "Channel Islands",
    "🇦🇩": "Andorra",
    "🇦🇪": "United Arab Emirates",
    "🇦🇫": "Afghanistan",
    "🇦🇬": "Antigua and Barbuda",
    "🇦🇮": "Anguilla",
    "🇦🇱": "Albania",
    "🇦🇲": "Armenia",
    "🇦🇴": "Angola",
    "🇦🇶": "Antarctica",
    "🇦🇷": "Argentina",
    "🇦🇸": "American Samoa",
    "🇦🇹": "Austria",
    "🇦🇺": "Australia",
    "🇦🇼": "Aruba",
    "🇦🇽": "Åland Islands",
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
    "🇧🇱": "Saint Barthélemy",
    "🇧🇲": "Bermuda",
    "🇧🇳": "Brunei",
    "🇧🇴": "Bolivia",
    "🇧🇶": "Caribbean Netherlands",
    "🇧🇷": "Brazil",
    "🇧🇸": "Bahamas",
    "🇧🇹": "Bhutan",
    "🇧🇻": "Bouvet Island",
    "🇧🇼": "Botswana",
    "🇧🇾": "Belarus",
    "🇧🇿": "Belize",
    "🇨🇦": "Canada",
    "🇨🇨": "Cocos (Keeling) Islands",
    "🇨🇩": "Democratic Republic of the Congo",
    "🇨🇫": "Central African Republic",
    "🇨🇬": "Congo",
    "🇨🇭": "Switzerland",
    "🇨🇮": "Ivory Coast",
    "🇨🇰": "Cook Islands",
    "🇨🇱": "Chile",
    "🇨🇲": "Cameroon",
    "🇨🇳": "China",
    "🇨🇴": "Colombia",
    "🇨🇵": "Clipperton Island",
    "🇨🇷": "Costa Rica",
    "🇨🇺": "Cuba",
    "🇨🇻": "Cape Verde",
    "🇨🇼": "Curaçao",
    "🇨🇽": "Christmas Island",
    "🇨🇾": "Cyprus",
    "🇨🇿": "Czech Republic",
    "🇩🇪": "Germany",
    "🇩🇬": "Diego Garcia",
    "🇩🇯": "Djibouti",
    "🇩🇰": "Denmark",
    "🇩🇲": "Dominica",
    "🇩🇴": "Dominican Republic",
    "🇩🇿": "Algeria",
    "🇪🇦": "Ceuta and Melilla",
    "🇪🇨": "Ecuador",
    "🇪🇪": "Estonia",
    "🇪🇬": "Egypt",
    "🇪🇭": "Western Sahara",
    "🇪🇷": "Eritrea",
    "🇪🇸": "Spain",
    "🇪🇹": "Ethiopia",
    "🇫🇮": "Finland",
    "🇫🇯": "Fiji",
    "🇫🇰": "Falkland Islands",
    "🇫🇴": "Faroe Islands",
    "🇫🇷": "France",
    "🇬🇦": "Gabon",
    "🇬🇧": "United Kingdom",
    "🇬🇩": "Grenada",
    "🇬🇪": "Georgia",
    "🇬🇫": "French Guiana",
    "🇬🇬": "Guernsey",
    "🇬🇭": "Ghana",
    "🇬🇮": "Gibraltar",
    "🇬🇱": "Greenland",
    "🇬🇲": "Gambia",
    "🇬🇳": "Guinea",
    "🇬🇵": "Guadeloupe",
    "🇬🇶": "Equatorial Guinea",
    "🇬🇷": "Greece",
    "🇬🇸": "South Georgia and the South Sandwich Islands",
    "🇬🇹": "Guatemala",
    "🇬🇺": "Guam",
    "🇬🇼": "Guinea-Bissau",
    "🇬🇾": "Guyana",
    "🇭🇰": "Hong Kong",
    "🇭🇲": "Heard Island and McDonald Islands",
    "🇭🇳": "Honduras",
    "🇭🇷": "Croatia",
    "🇭🇹": "Haiti",
    "🇭🇺": "Hungary",
    "🇮🇨": "Canary Islands",
    "🇮🇩": "Indonesia",
    "🇮🇪": "Ireland",
    "🇮🇱": "Israel",
    "🇮🇲": "Isle of Man",
    "🇮🇳": "India",
    "🇮🇴": "British Indian Ocean Territory",
    "🇮🇶": "Iraq",
    "🇮🇷": "Iran",
    "🇮🇸": "Iceland",
    "🇮🇹": "Italy",
    "🇯🇪": "Jersey",
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
    "🇰🇾": "Cayman Islands",
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
    "🇲🇫": "Saint Martin",
    "🇲🇬": "Madagascar",
    "🇲🇭": "Marshall Islands",
    "🇲🇰": "North Macedonia",
    "🇲🇱": "Mali",
    "🇲🇲": "Myanmar",
    "🇲🇳": "Mongolia",
    "🇲🇴": "Macao",
    "🇲🇵": "Northern Mariana Islands",
    "🇲🇶": "Martinique",
    "🇲🇷": "Mauritania",
    "🇲🇸": "Montserrat",
    "🇲🇹": "Malta",
    "🇲🇺": "Mauritius",
    "🇲🇻": "Maldives",
    "🇲🇼": "Malawi",
    "🇲🇽": "Mexico",
    "🇲🇾": "Malaysia",
    "🇲🇿": "Mozambique",
    "🇳🇦": "Namibia",
    "🇳🇨": "New Caledonia",
    "🇳🇪": "Niger",
    "🇳🇫": "Norfolk Island",
    "🇳🇬": "Nigeria",
    "🇳🇮": "Nicaragua",
    "🇳🇱": "Netherlands",
    "🇳🇴": "Norway",
    "🇳🇵": "Nepal",
    "🇳🇷": "Niue",
    "🇳🇿": "New Zealand",
    "🇴🇲": "Oman",
    "🇵🇦": "Panama",
    "🇵🇪": "Peru",
    "🇵🇫": "French Polynesia",
    "🇵🇬": "Papua New Guinea",
    "🇵🇭": "Philippines",
    "🇵🇰": "Pakistan",
    "🇵🇱": "Poland",
    "🇵🇲": "Saint Pierre and Miquelon",
    "🇵🇳": "Pitcairn Islands",
    "🇵🇷": "Puerto Rico",
    "🇵🇸": "Palestinian Territories",
    "🇵🇹": "Portugal",
    "🇵🇼": "Palau",
    "🇵🇾": "Paraguay",
    "🇶🇦": "Qatar",
    "🇷🇪": "Réunion",
    "🇷🇴": "Romania",
    "🇷🇸": "Serbia",
    "🇷🇺": "Russia",
    "🇷🇼": "Rwanda",
    "🇸🇦": "Saudi Arabia",
    "🇸🇧": "Solomon Islands",
    "🇸🇨": "Seychelles",
    "🇸🇩": "Sudan"
};



let dictionary10 = getRandomElements(fullFlagDictionary, 10);
let flag10 = Object.keys(dictionary10);
let countries10 = Object.values(dictionary10);

document.addEventListener('keydown', function (event) {
    if (window.location.href.includes('index.html')) {
        window.location.href = 'flag.html'; 
    }
});

// PONER BANDERA Y PAIS EN UNA POSICION RANDOM DE 1 A 3 CUANDO SE CARGA LA PAGINA FLAG.HTML
let opcionCorrectaNum = Math.floor(Math.random() * 3) + 1;
let opcionCorrecta = document.getElementById('opcion'+opcionCorrectaNum);
let flag = document.getElementsByClassName('flag')[0];
document.addEventListener('DOMContentLoaded', function() {
    flag.innerHTML = flag10[0];
    opcionCorrecta.innerHTML = countries10[0]
});




var flag_no = 0;

var aciertos = 0;
var fallos = 0;






// let countryList = ["Puerto Rico", "Costa de Marfil", "Suecia", "Sudáfrica", "China", "Argentina", "India", "Polonia", "Reino Unido", "Albania"]
// let options = ["Costa Rica", "Puerto Rico", "Cuba", "Costa Rica", "Costa de Marfil", "Cuba", "Costa Rica", "Suecia", "Cuba", "Costa Rica", "Sudáfrica", "Cuba", "Costa Rica", "China", "Cuba", "Costa Rica", "Argentina", "Cuba", "Costa Rica", "India", "Cuba", "Costa Rica", "Polonia", "Cuba", "Costa Rica", "Reino Unido", "Cuba", "Costa Rica", "Albania", "Cuba"]

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

    // AQUI ESTO SE TIENE QUE CAMBIAR
    document.getElementById("opcion1").innerHTML = ""
    document.getElementById("opcion2").innerHTML = countries10[flag_no]
    document.getElementById("opcion3").innerHTML = ""

    solveButton.disabled = false;
    solveButton.style.display = 'block';
    nextButton.disabled = true;
    nextButton.style.display = 'none';

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
});


