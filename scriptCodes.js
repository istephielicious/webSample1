$(document).ready(function () {

/**HOME */
document.getElementById("indexP").innerHTML = 
    "This is a sample webpage to practice manipulating the DOM(Document Object Model). [click me] ";
document.getElementById("indexP").addEventListener("click",function(){alert("Hello there!, to start with, go to About tab")},false);


/**ABOUT */
document.getElementById("numFlr").addEventListener("change", setupFlrPlan(),false);
});

function setupFlrPlan() {
    
}

