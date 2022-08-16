
const form = document.querySelector('#form');
const input = document.querySelector("input")
var minLength = 5;

for (let index = 0; index < form.elements.length; index++) {

    function showError(input, message) {
        const targetDiv = input.parentElement;
        targetDiv.className = 'form-control error';

        const small = input.nextElementSibling;
        small.innerText = message;
    }

    function showSuccess(input) {
        const targetDiv = input.parentElement;
        targetDiv.className = 'form-control success';
    }

    const element = form.elements[index].type;
    var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars

    if (element === 'text') {
        form.elements[index].addEventListener('keyup', function () {
            if (form.elements[index].value.length < minLength) {
                showError(form.elements[index], 'Length must be at least 5 characters long.');

            }
            else if (form.elements[index].value.charAt(0) === '_' || form.elements[index].value.charAt(0) === '-' || form.elements[index].value.charAt(0) === '+') {
                showError(form.elements[index], 'Cannot start from ( - , _ , + ).');

            }
            else if (pattern.test(form.elements[index].value)) {
                showError(form.elements[index], 'Special characters are not allowed.');

            }
            else {
                showSuccess(form.elements[index]);
            }
        }
        );
    }

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let successRate = 0;
    for (let index = 0; index < form.elements.length; index++) {
        const targetDiv = form.elements[index].parentElement;

        const element = form.elements[index].type;
        if (element === 'text') {
            console.log(targetDiv.className)
            if (targetDiv.className == "form-control success") {
                successRate = successRate + 1;

            }
        }

    }
    if (successRate === 6) {
        swal("Good job!", "Form submitted. Succesfully", "success")
            .then(() => {
                form.reset();
            })
    } else {
        swal("Error!", "Please fill all feilds correctly", "error");
    }
})

function reset() {
    form.reset();

}