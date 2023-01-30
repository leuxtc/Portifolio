const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))        

function filterNames() {
    // Get the input value
    var inputValue = document.getElementById("searchInput").value;

    // Get the names list
    var namesList = document.getElementById("namesList");

    // Get all the names
    var names = namesList.getElementsByTagName("a");

    // Loop through the names
    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        // If the name contains the input value, show it, otherwise hide it
        if (name.innerHTML.toUpperCase().includes(inputValue.toUpperCase())) {
            name.style.display = "";
        } else {
            name.style.display = "none";
        }
    }
}