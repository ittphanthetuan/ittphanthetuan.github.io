function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

const myBtn = document.getElementById('myBtn');
const myLink = document.getElementById('myLink');
myBtn.addEventListener('click', function() {
	const request = new XMLHttpRequest();
	request.open('GET', myLink.value, true);
	// request.responseType = 'text';
	request.send();
	request.onreadystatechange = function() {
		console.log('ok');
		console.log(request.responseText)
	};

});