var container = document.getElementById("ratings"); // get container for the buttons
var buttons = container.getElementsByClassName("ratings-element"); //using the container get all of its buttons
var current;
var chosenNum;
for (var i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener('click', function() { //add event listener when user clicks on btns
        current = document.getElementsByClassName("active");
        if (current.length > 0) { //gets rid of clicked divs 
            current[0].className = current[0].className.replace("active", "ratings-element");
        }
        this.className = "active";
    });
}

function submitRating() {
    if (current == undefined) {
        alert("Choose one of the options above"); //TODO: customize alert box
    } else {
        document.getElementById("hidden-container").style.display = "flex";
        document.getElementById("container").style.display = "none";
        var chosenNumber = document.querySelector(".active");
        document.querySelector(".info").innerHTML = "You selected " + chosenNumber.textContent + " out of 5";
    }
}
