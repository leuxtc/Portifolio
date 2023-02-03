const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))        

var namesList = document.getElementById("namesList");

var names = namesList.getElementsByTagName("a");

var studies = document.getElementById("studies");

studies.innerHTML += ' - ' + names.length;

function filterNames() {
    var inputValue = document.getElementById("searchInput").value;

    var namesList = document.getElementById("namesList");

    var names = namesList.getElementsByTagName("a");

    var studies = document.getElementById("studies");

    for (var i = 0; i < names.length; i++) {
        var name = names[i];        
        
        if (name.innerHTML.toUpperCase().includes(inputValue.toUpperCase())) {
            name.style.display = "";
        } else {
            name.style.display = "none";
        }
    }
    
}

varvar

for (var i = 0; i < 99999; i++) {
    var count = [i]
    var elapsed = document.getElementById("elapsed");
    elapsed.innerHTML = "Elapsed: " + count;
}