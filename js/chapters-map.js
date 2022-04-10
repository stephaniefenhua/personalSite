var CHAPTERS_MAP = L.map('leaflet-map').setView([20, -18], 2);
var TOKEN = "pk.eyJ1IjoiaXdhZ2Vudm9vcmQiLCJhIjoiY2tiaTZ3YTMyMGNjMTJycDdnbWQ1dXlobSJ9.tdkGwcupeLoc27TO0SfoRA";
var STYLE_ID = "ckghjx59m0cy019ukflrqp5ov";
L.tileLayer("https://api.mapbox.com/styles/v1/iwagenvoord/" + STYLE_ID + "/tiles/256/{z}/{x}/{y}?access_token=" + TOKEN)
    .addTo(CHAPTERS_MAP);

// TODO: Figure out how to fire invalidateSize() when map div scrolls into view

var map = document.getElementById("chapters-map");
var overlay = map.querySelector('.overlay');

function fadeOutOverlay() {
    overlay.classList.add('invisible');
    // setTimeout(map.removeChild(overlay), 500);
    CHAPTERS_MAP.invalidateSize();
}

CHAPTERS_MAP.on('mouseout', function() {
    // map.appendChild(overlay);
    overlay.classList.remove('invisible');
})