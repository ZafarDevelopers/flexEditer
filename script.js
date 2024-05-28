/* script.js */
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    if (tabName === 'result') {
        updateResult();
    }
}

function updateResult() {
    var code = document.getElementById('codeInput').value;
    var iframe = document.getElementById('resultFrame');
    iframe.srcdoc = code;
}

// Set the default tab to open
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});

// Update the result iframe live as code is typed
document.getElementById('codeInput').addEventListener('input', updateResult);
