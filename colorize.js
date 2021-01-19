deepai.setApiKey(atob('NWFhZmU4MTQtY2JjNy00MjU4LWE5NGEtM2E5OWVlNDBmNDBh'));
async function colorize() {
document.getElementById("msg").style.display = 'block';
	var resp = await deepai.callStandardApi("colorizer", {
		image: document.getElementById("url").value,
	});
	document.getElementById("msg").style.display = 'none';
	console.log(resp);
	await deepai.renderResultIntoElement(resp, document.getElementById('resp'));

}
