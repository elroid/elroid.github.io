---
---

window.onload = function() {
  loadScript("https://spreadsheets.google.com/feeds/cells/1tbhEoWuhBg5H5l61VMsqy-qywp4LCzj5ZsoD9dSvftw/1/public/basic?alt=json-in-script&callback=onDataLoaded", getNewData)
};

function getNewData() {
	setInterval(
		function(){ 
			loadScript("https://spreadsheets.google.com/feeds/cells/1tbhEoWuhBg5H5l61VMsqy-qywp4LCzj5ZsoD9dSvftw/1/public/basic?alt=json-in-script&callback=onDataLoaded")
			console.log("Updated data");
		}, 
	30000);
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
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
	    var {{ entry.Name | remove: " " }} = data.feed.entry.find((entry) => entry.title.$t == '{{ entry.CellReference }}').content.$t
	    document.getElementById('entry-{{ entry.Name | remove: " " }}').innerHTML = {{ entry.Name | remove: " " }}
	{% endfor %}

}

function toggleViews() {
	var headerContent = document.getElementById("app-header");
	var mainContent = document.getElementById("app-main");
	
	headerContent.classList.toggle("show");
	headerContent.classList.toggle("hide");
	mainContent.classList.toggle("show");
	mainContent.classList.toggle("hide");
}