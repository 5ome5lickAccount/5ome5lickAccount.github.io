//The page currently open
let status = "home";

//When any of the buttons are clicked, it runs the "changePage" function
document.getElementById("hButton").addEventListener("click", function() {
    console.log("Home button clicked.")
    changePage("home");
})
document.getElementById("cButton").addEventListener("click", function() {
    console.log("Contact button clicked.")
    changePage("contact");
})
document.getElementById("lButton").addEventListener("click", function() {
    console.log("Links selected")
    changePage("links");
})

//This one was just added, so I didn't really change the changePage function I made
document.getElementById("vButton").addEventListener("click", function() {
    loadVisitors();
});

//This begins the new visitor process
document.getElementById("addV").addEventListener("click", function() {
    console.log("Adding listener");
    addVisitor();
})

//Cancels the visitor form
document.getElementById("cancel").addEventListener("click", function() {
    console.log("Canceling form");
    cancelForm();
})


//Changes the content of the page just by modifying the display property of the page elements
function changePage(destination) {
    if (status == destination) {
        console.log("Same spot. No change needed");
    }
    else {
        status = destination;
        if (status == "contact") {
            document.getElementById("home").style.display = "none";
            document.getElementById("contact").style.display = "block";
            document.getElementById("links").style.display = "none";
        }
        else if (status == "links") {
            document.getElementById("home").style.display = "none";
            document.getElementById("contact").style.display = "none";
            document.getElementById("links").style.display = "block";
        }
        else {
            document.getElementById("home").style.display = "block";
            document.getElementById("contact").style.display = "none";
            document.getElementById("links").style.display = "none";
        }
        document.getElementById("vPage").style.display = "none";
    }
}