---
---



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

function toggleViews() {
	let headerContent = document.getElementById("app-header");
	let mainContent = document.getElementById("app-main");

	headerContent.classList.toggle("show");
	headerContent.classList.toggle("hide");
	mainContent.classList.toggle("show");
	mainContent.classList.toggle("hide");
}