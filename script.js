/* script.js */

// Function to enable or disable buttons based on the input value
function updateButtonStates() {
    const inputIsEmpty = document.querySelector("#codeInput").value.trim().length === 0;
    document.querySelector("#copyCodeButton").disabled = inputIsEmpty;
    document.querySelector("#resBtn").disabled = inputIsEmpty;
}

// Initial setup: disable buttons if the textarea is empty
document.addEventListener("DOMContentLoaded", function() {
    updateButtonStates();
    // Set the default tab to open
    document.querySelector(".tab-button").click();
});

// Add event listener to update button states based on input
document.getElementById("codeInput").addEventListener("input", updateButtonStates);

// Function to open tabs
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

// Function to update the result iframe
function updateResult() {
    var code = document.getElementById('codeInput').value;
    var iframe = document.getElementById('resultFrame');
    iframe.srcdoc = code;
}

// Update the result iframe live as code is typed
document.getElementById('codeInput').addEventListener('input', updateResult);

// Function to copy code to clipboard
function copyCode() {
    const code = document.getElementById('codeInput').value;
    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// Initialize button states on load
updateButtonStates();
