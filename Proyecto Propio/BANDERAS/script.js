document.addEventListener('keydown', function (event) {
    if (window.location.href.includes('index.html')) {
        window.location.href = 'flag.html'; 
    }
});


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

        if (selectedRadioButton.id !== "opcionCorrecta") {
            selectedRadioButton.style.backgroundColor = 'red';
            document.getElementById("opcionCorrecta").style.backgroundColor = '#4ec85a';
            document.getElementById("guess1").style.backgroundColor = 'red';
        } else {
            document.getElementById("guess1").style.backgroundColor = '#4ec85a'
        }
    }
});



nextButton.addEventListener("click", function() {
    const flagElement = document.querySelector('.flag');
    if (flagElement) {
        flagElement.innerHTML = '🇨🇮';
    }  
});

