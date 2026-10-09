function showMessage() {
    let name = prompt("What is your name?");

    if (name != null && name != "") {
        alert("Hello " + name + "! Welcome to my portfolio.");
    }
}