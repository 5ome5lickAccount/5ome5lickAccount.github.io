
//This is how the visitor data is organized
class visitor {
    constructor(id, firstName, lastName, address, city, state, zip, email, phone, googleFind, friendFind, adFind) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.email = email;
        this.phone = phone;
        this.location = {
            google: googleFind,
            friend: friendFind,
            adFind: adFind
        }
    this.action = "<a onclick=\"confirmDelete(" + id + ")\">Delete<a>";
    this.getFullName = function() {return (this.firstName + " " + this.lastName)}
    this.getAddress = function() {return (this.address + ", " + this.city + ", " + this.state)}
    }
}

//List of visitors
let visitors = [
    new visitor(1, "Steve", "Stevenson", "100 Middle St.", "Nowhere", "California", "24601", "steve@steve.com", "555 777 9999", true, false, false),
    new visitor(2, "John", "Johnson", "400 Something Street", "Davis", "California", "24601", "johnyboy1829@steve.com", "555 333 1111", false, true, false)
];
console.log(visitors[0].getFullName());

//Adds a visitor to the list of visitors
function modelAddVisitor(visitorAdd) {
    visitors.push(visitorAdd);
}

//Removes a visitor from the list
function modelDeleteVisitor(id) {
    console.log(id);
    for (i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            visitors.splice(i, 1);
        }
    }
}

//Gets a visitor from the list
function findVisitor(id) {
    return visitors[id];
}

//Finds visitor with a matching id. Otherwise, returns -1
function findVisitorIndex(id) {
    for (i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            return i;
        }
    }
    return -1;
}