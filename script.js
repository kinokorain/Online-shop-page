
window.addEventListener("DOMContentLoaded", (event) => {
    //for the input to be focused when clicking the search button
    console.log(document.getElementById('searchButton'))
    document.getElementById('searchButton').addEventListener('click', function () {
        document.getElementById('searchbarInNav').focus();
    });
});

window.addEventListener("DOMContentLoaded", (event) => {
    //for the login pop-up
    document.getElementById('OpenModule').addEventListener("click", () => {
        document.getElementById('log-in-module').classList.add("open");
    });

    document.getElementById('CloseModule').addEventListener("click", () => {
        document.getElementById('log-in-module').classList.remove("open");
    });
});