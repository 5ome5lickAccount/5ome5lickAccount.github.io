//Puts the visitors in table form in containerId
function renderTable(containerId, visitors) {
    let temp = "<tr><th>Name</th><th>Address</th><th>Phone</th><th>Email</th><th class=\"hidden\">Id</th><th>Actions</th></tr>";
    for (i = 0; i < visitors.length; i++) {
        if (i % 2 == 0) {
            temp = temp + "<tr class=\"pattern\">"
        } else {
            temp = temp + "<tr>";
        }
        temp = temp + "<td>" + visitors[i].getFullName() + "</td>";
        temp = temp + "<td>" + visitors[i].getAddress() + "</td>";
        temp = temp + "<td>" + visitors[i].phone + "</td>";
        temp = temp + "<td>" + visitors[i].email + "</td>";
        temp = temp + "<td class=\"hidden\">" + visitors[i].id + "</td>";
        temp = temp + "<td>";
        temp = temp + "<a onclick=\"editVisitor(" + visitors[i].id + ")\">Edit</a>";
        temp = temp + visitors[i].action;
        temp = temp + "</tr>";
    }
    document.getElementById(containerId).innerHTML = temp;
}

//Hides other sections, shows secret visitor section
function showVisitors()  {
    document.getElementById("home").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("links").style.display = "none";
    document.getElementById("vPage").style.display = "block";
}

//Hides form, shows list
function showList() {
    document.getElementById("vForm").style.display = "none";
    document.getElementById("visitorTable").style.display = "block";
    console.log("Showing list");
}

//Hides list, shows form
function showForm() {
    document.getElementById("vForm").style.display = "block";
    document.getElementById("visitorTable").style.display = "none";
    console.log("Showing table");
}

//Clears the form values
function clearForm() {
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("source1").checked = false;
    document.getElementById("source2").checked = false;
    document.getElementById("source3").checked = false;
    document.getElementById("comments").value = "";
}