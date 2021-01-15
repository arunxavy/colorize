deepai.setApiKey('5aafe814-cbc7-4258-a94a-3a99ee40f40a');
async function colorize() {
document.getElementById("msg").style.display = 'block';
	var resp = await deepai.callStandardApi("colorizer", {
		image: document.getElementById("url").value,
	});
	document.getElementById("msg").style.display = 'none';
	console.log(resp);
	await deepai.renderResultIntoElement(resp, document.getElementById('resp'));

}