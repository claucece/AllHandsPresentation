var divs = ["monthstimeline", "monthssecondtimeline", "monthsthridtimeline", "monthsfourthtimeline", "coachingobjectives", "literaturebooks", "personal", "personalbooks"];
var visibleDivId = null;

function toggle_visibility(id) {
    if (visibleDivId === id) {
        visibleDivId = null;
    } else {
        visibleDivId = id;
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    var i, id, div;
    for (i = 0; i < divs.length; i++) {
        id = divs[i];
        div = document.getElementById(id);
        if (visibleDivId === id) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}
