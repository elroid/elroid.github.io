---
---

window.onload = function() {
  loadScript("https://spreadsheets.google.com/feeds/cells/1t_KW6vAutrpn-xr2lMkbNUljrfRRwg_QUKA1trptLxM/1/public/basic?alt=json-in-script&callback=onDataLoaded", getNewData)
};

function getNewData() {
	setInterval(
		function(){ 
			loadScript("https://spreadsheets.google.com/feeds/cells/1t_KW6vAutrpn-xr2lMkbNUljrfRRwg_QUKA1trptLxM/1/public/basic?alt=json-in-script&callback=onDataLoaded")
			console.log("Updated data");
		}, 
	30000);
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    let head = document.head;
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}


var onDataLoaded = (data) => {
	 
	{% for entry in site.data.data %}
	console.log("Looking at "+entry.name);
	    var {{ entry.Name | remove: " " }} = data.feed.entry.find((entry) => entry.title.$t == '{{ entry.CellReference }}').content.$t
	    document.getElementById('entry-{{ entry.Name | remove: " " }}').innerHTML = {{ entry.Name | remove: " " }}
	{% endfor %}

}

function toggleViews() {
	let headerContent = document.getElementById("app-header");
	let mainContent = document.getElementById("app-main");
	
	headerContent.classList.toggle("show");
	headerContent.classList.toggle("hide");
	mainContent.classList.toggle("show");
	mainContent.classList.toggle("hide");
}