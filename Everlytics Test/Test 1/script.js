
const form = document.querySelector('#form');
const pipeline = document.querySelector('#pipeline');
const project = document.querySelector('#project');
const bucket = document.querySelector('#bucket');
const storage = document.querySelector('#storage');
const credentials = document.querySelector('#credentials');
const run_every = document.querySelector('#run_every');
const input = document.querySelector("input")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var min = 5;
    var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";  
    let character=true
    let length=true
    let start=true
    
    for (var i = 0; i < pipeline.value.length; i++) {
        if (iChars.indexOf(pipeline.value.charAt(i)) != -1) {
           
            character=false
        }
    }
    for (var i = 0; i < project.value.length; i++) {
        if (iChars.indexOf(project.value.charAt(i)) != -1) {
           
            character=false
        }
    }

    for (var i = 0; i < bucket.value.length; i++) {
        if (iChars.indexOf(bucket.value.charAt(i)) != -1) {
           
            character=false
        }
    }

    for (var i = 0; i < storage.value.length; i++) {
        if (iChars.indexOf(storage.value.charAt(i)) != -1) {
           
            character=false
        }
    }

    for (var i = 0; i < run_every.value.length; i++) {
        if (iChars.indexOf(run_every.value.charAt(i)) != -1) {
          
            character=false
        }
    }

    for (var i = 0; i < credentials.value.length; i++) {
        if (iChars.indexOf(credentials.value.charAt(i)) != -1) { 
            character=false
        }
    }


    if (pipeline.value.length < min || project.value.length < min || bucket.value.length < min || storage.value.length < min || credentials.value.length < min || run_every.value.length < min) {
        swal("Error!", "Input Field length must be at least 5 characters long!", "error");
        length=false

    }

    else if (pipeline.value.charAt(0) === '_' || pipeline.value.charAt(0) === '-' || pipeline.value.charAt(0) === '+' || project.value.charAt(0) === '_' || project.value.charAt(0) === '-' || project.value.charAt(0) === '+' || run_every.value.charAt(0) === '_' || run_every.value.charAt(0) === '-' || run_every.value.charAt(0) === '+' || credentials.value.charAt(0) === '_' || credentials.value.charAt(0) === '-' || credentials.value.charAt(0) === '+' || storage.value.charAt(0) === '_' || storage.value.charAt(0) === '-' || storage.value.charAt(0) === '+' || bucket.value.charAt(0) === '_' || bucket.value.charAt(0) === '-' || bucket.value.charAt(0) === '+') {
        swal("Error!", "Cannot start from ( - , _ , + )", "error");
        
        start=false
    }

    
    else if(!character && length && start ) {
        swal("Error!", "Cannot Use Special Characters", "error");
        
    }

    else {
        swal("Good job!", "Form submitted. Succesfully", "success")
        .then(() => {
            form.reset();
        })
    }
})

function reset() {
    form.reset();
}