function openViewer() {

	document.getElementById("msde-viewer-0").style.display = "flex";
	document.getElementById("msde-viewer-container-0").style.margin = window.scrollY + 30 + "px 0 0 -631px";
	createMediaSliderData();
}

function closeViewer() {

	document.getElementById("msde-viewer-0").style.display = "none";
}

function convertToHtml(str) {

	str = str.replace(/</g,"&lt;");
	str = str.replace(/>/g,"&gt;");
	str = str.replace(/\"/g,"&quot;");
	str = str.replace(/\'/g,"&#39;");
	str = str.replace(/\n/g,"<br />");

	return str;
}

function copyEmbedCode() {

	var source = document.getElementById("msde-source-0");

	source.select();
	source.setSelectionRange(0, source.value.length)
	document.execCommand("copy");
}

function copyAuthor() {

	var author = document.getElementById("author-0").value;

	document.getElementById("author-1").value = author;
	document.getElementById("author-2").value = author;
}

function copyProfileImage() {

	var profileImage = document.getElementById("profileImage-0").value;

	document.getElementById("profileImage-1").value = profileImage;
	document.getElementById("profileImage-2").value = profileImage;
}
