var container = document.getElementById("ratings"); // get container for the buttons
var buttons = container.getElementsByClassName("ratings-element"); //using the container get all of its buttons

for (var i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener('click', function() { //add event listener when user clicks on btns
        var current = document.getElementsByClassName("active");
        var chosenNum = current.textContent;

        if (current.length > 0) { //gets rid of clicked divs 
            current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";
        document.getElementById("chosenNumber").innerHTML = chosenNum;
    });
}

function submitRating() {
    document.getElementById("hidden-container").style.display = "block";
    document.getElementById("container").style.display = "none";
}
