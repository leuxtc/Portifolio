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

var s = 0;
var m = 0;
var h = 0;
var time = 1000;
var cron;

$(window).on("load", function(){
    cron = setInterval(() => { timer(); }, time);
});

function timer(){ 
    s++;

    if (s == 60) {
        s = 0;
        m++; 

        if (m == 60) { 
            m = 0;
            h++;
        }
    }
    
    var format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);

    document.getElementById('elapsed').innerHTML = format + ' elapsed';

    return format
}