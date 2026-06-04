document.addEventListener("DOMContentLoaded", function() {
    updateNews("football", "click here for football news.");
});

document.getElementById("cricket").addEventListener("click", function () {
    updateNews("cricket", "Latest cricket news and updates!");
});

document.getElementById("basketball").addEventListener("click", function () {
    updateNews("basketball", "Latest basketball news and updates!");
});

function updateNews(sport, news) {
    document.getElementById({sport}-content).innerHTML =news;
}

function showFootballPage() {
    // Hide other sport pages
    document.getElementById("cricket-content").style.display = "none";
    document.getElementById("basketball-content").style.display = "none";

    // Show football page
    document.getElementById("football-page").classList.remove("hidden");

    // Update football news on the page
    document.getElementById("football-news").innerHTML = "Football news specific to India for FIFA: ..."; // Add your specific news here
}