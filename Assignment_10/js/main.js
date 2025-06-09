var sitename = document.getElementById("name");
var sitelink = document.getElementById("link");
var sites = [];

loadSites(); // 1. Load on start

function loadSites() {
    var storedSites = localStorage.getItem("sites");
    if (storedSites) {
        sites = JSON.parse(storedSites);
        displaySites();
    }
}

function saveSites() {
    localStorage.setItem("sites", JSON.stringify(sites));
}

function submit() {
    var site = {
        name: sitename.value.trim(),
        link: sitelink.value.trim()
    };

    if (site.name && site.link) {
        sites.push(site);
        saveSites();
        sitename.value = "";
        sitelink.value = "";
        displaySites();
    }
}

function displaySites() {
    var siteList = document.getElementById("print");
    var tempSites = "";

    for (let i = 0; i < sites.length; i++) {
        var site = sites[i];
        tempSites += `
            <div class="border-bottom row text-center">
                <p class="col-3 my-2">${i + 1}</p>
                <p class="col-3 my-2">${site.name}</p>
                <div class="col-3">
                    <a href="${site.link}" target="_blank" class="btn btn-visit mt-4 text-white">
                        <i class="fa-solid fa-eye pe-2"></i> Visit
                    </a>
                </div>
                <div class="col-3">
                    <button onclick="deleteSite(${i})" class="btn btn-delete mt-4 text-white">
                        <i class="fa-solid fa-trash-can"></i> Delete
                    </button>
                </div>
            </div>
        `;
    }

    siteList.innerHTML = tempSites;
}

function deleteSite(index) {
    sites.splice(index, 1);
    saveSites();
    displaySites();
}

function deleteSite(i) {
    sites.splice(i, 1);
    saveSites();
    displaySites();
}

function isValidName(name) {
    if (name.length < 3) {
        document.getElementById("name").style = "box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.2); border-color: red;";
        return false;
    }
    else if (name.length >= 3) {
        document.getElementById("name").style = "box-shadow: 0 0 0 0.25rem rgba(21, 157, 21, 0.2); border-color: lightgreen;";
        return true;
    }
}

function isValidURL(url) {
    var pattern = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-._~:?#[\]@!$&'()*+,;=]*)?$/;
    if (pattern.test(url)){
        document.getElementById("link").style = "box-shadow: 0 0 0 0.25rem rgba(21, 157, 21, 0.2); border-color: lightgreen;";
        return true;    
    }
    else {
        document.getElementById("link").style = "box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.2); border-color: red;";
        return false;
    }
}

function validate() {
    var name = sitename.value.trim();
    var url = sitelink.value.trim();

    if (!isValidName(name)) {
        alert("Site name must be more than 3 characters.");
        return;
    }

    if (!isValidURL(url)) {
        alert("Please enter a valid URL.");
        return;
    }

    submit();
    document.getElementById("name").style = "box-shadow: 0 0 0 0.25rem #fec26055; border-color: #d99c39;";
    document.getElementById("link").style = "box-shadow: 0 0 0 0.25rem #fec26055; border-color: #d99c39;";

}
