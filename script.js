let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let einData = JSON.parse(this.responseText);
		document.getElementById("name").innerHTML = einData.name;
		document.getElementById("bDay").innerHTML = einData.birthday
	}
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function showBio() {
	let newRequest = new XMLHttpRequest();
	newRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let einData = JSON.parse(this.responseText);
			for (let i=0; i < einData.bio.length; i++) {
				var node = document.createElement("p");                 	// Create a <p> node
				var textnode = document.createTextNode(einData.bio[i]);		// Create a text node
				node.appendChild(textnode);                              	// Append the text to <p>
				document.getElementById("biography").appendChild(node);     // Append <p> to <div> with id="biography"
			}
		}
	};
	newRequest.open("GET", "einstein.json", true);
	newRequest.send();
}