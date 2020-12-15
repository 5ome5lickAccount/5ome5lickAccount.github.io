$(document).ready(function(){
    initValidation();
});

let id = 3;

function loadVisitors() {
    showVisitors();
    renderTable("visitorTable", visitors);
    showList();
}

function submitForm() {
    let tempFirstName = document.getElementById("fName").value;
    let tempLastName = document.getElementById("lName").value;
    let tempAddress = document.getElementById("address").value;
    let tempCity = document.getElementById("city").value;
    let tempState = document.getElementById("state").value;
    let tempZip = document.getElementById("zip").value;
    let tempEmail = document.getElementById("email").value;
    let tempPhone = document.getElementById("phone").value;
    let tempGoogle = document.getElementById("source1").checked;
    let tempFriend = document.getElementById("source2").checked;
    let tempAd = document.getElementById("source3").checked;
    let tempComment = document.getElementById("comments").value;
    let newV = new visitor(id, tempFirstName, tempLastName, tempAddress, tempCity, tempState, tempZip, tempEmail, tempPhone, tempGoogle, tempFriend, tempAd, tempComment);
    id = id + 1;
    modelAddVisitor(newV);
    renderTable("visitorTable", visitors);
    showList();
}

function addVisitor() {
   clearForm();
   showForm();
}

function deleteVisitor(id) {
    modelDeleteVisitor(id);
    renderTable("visitorTable", visitors);
    showList();
}

function cancelForm() {
    clearForm();
    renderTable("visitorTable", visitors);
    showList();
}

function editVisitor(id) {
    window.prompt("Editing visitor " + id);
}

function confirmDelete(id) {
    let answer = confirm("Are you sure you want to delete this guy?");
    if (answer) {
        deleteVisitor(id);
    }
}