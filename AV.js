const myText = document.getElementById("ageInput");
const mySubmit = document.getElementById("submitBtn");
const myResult = document.getElementById("resultTxt");

let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);
    if (age < 5) {
        myResult.textContent = "I don't speak feetus";
    }
    else if (age == 69) {
        myResult.textContent = "Nice ;)";
    }
    else if (age >= 70) {
        myResult.textContent = "Marilyn Monroe am I right?";
    }
    else if (age >= 18) {
        myResult.textContent = "How's your back pain unc?";
    }
    else if (age <= 13) {
        myResult.textContent = "Goo goo ga ga go somewhere else";
    }
    else if (age > 13) {
        myResult.textContent = "Teachers and their grading am I right?";
    }
    else {
        myResult.textContent = "Your age is a number moron";
    }
};