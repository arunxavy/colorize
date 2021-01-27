deepai.setApiKey(atob('NWFhZmU4MTQtY2JjNy00MjU4LWE5NGEtM2E5OWVlNDBmNDBh'));
async function colorize() {

	var resp = await deepai.callStandardApi("colorizer", {
		image: document.getElementById("url").value,
	});
	download(resp.output_url);
	document.getElementById("output_img").src = resp.output_url;

}

function loadImage() {

	var image = document.createElement("img");
	var imageParent = document.getElementById("ipGrid");
	if(imageParent.childNodes[0]){
	imageParent.removeChild(imageParent.childNodes[0]);
	}
	image.id = "input_img";
	image.className = "class";
	image.src = document.getElementById("url").value;
	imageParent.appendChild(image);

	var opImg = document.createElement("img");
	var opParent = document.getElementById("opGrid");
	if(opParent.childNodes[0]){
	opParent.removeChild(opParent.childNodes[0]);
	}
	opImg.id = "output_img";
	opImg.className = "class";
	opImg.src = null;
	opImg.alt = 'Image loading';
	opParent.appendChild(opImg);
	colorize();
}

function download(url) {

	toDataURL(url, function(dataUrl) {
		var arr = url.split("/");
		var btnParent = document.getElementById("buttons");
		
		var alreadyCreatedDwBtn = document.getElementById('dwBtn');
		if(alreadyCreatedDwBtn){
		alreadyCreatedDwBtn.parentNode.removeChild(alreadyCreatedDwBtn);
		}
		var anchor = document.createElement('a');
		anchor.href = dataUrl;
		anchor.id='dwBtn';
		anchor.download = arr[arr.length - 1];
		anchor.target = '_blank';
		var linkText = document.createTextNode("Download");
		anchor.appendChild(linkText);
		btnParent.appendChild(anchor);
	})

	console.log(url);
}

function toDataURL(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		var reader = new FileReader();
		reader.onloadend = function() {
			callback(reader.result);
		}
		reader.readAsDataURL(xhr.response);
	};
	xhr.open('GET', url);
	xhr.responseType = 'blob';
	xhr.send();
}
