function openViewer(type) {

	document.getElementById("msde-viewer-0").style.display = "flex";
	document.getElementById("msde-viewer-container-0").style.margin = window.scrollY + 30 + "px 0 0 -631px";

	createMediaSliderData(type);
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

function getInputValue(id) {

	var src = document.getElementById(id);

	if (src != null && src != "undefined")
	{
		return src.value;
	}
	else
	{
		return "";
	}
}

function createMediaSliderData(type) {

	var contentId = new Array();
	var title = new Array();
	var summary = new Array();
	var url = new Array();
	var thumbnailImage = new Array();
	var updateDate = new Array();
	var author = new Array();
	var profileImage = new Array();
	var article = new Array();
	var sale = new Array();

	var _json = "";
	var length = 0;
	var embedCode = "";

	var date = new Date();
	var yyyy = date.getFullYear().toString();
	var mm = (date.getMonth() + 1).toString();
	var dd = (date.getDate() + 1).toString();
	var yyyymmdd = yyyy + "." + (mm[1] ? mm : "0" + mm[0]) + "." + (dd[1] ? dd : "0" + dd[0]);

	while (document.getElementById("title-" + length) != null)
	{
		contentId[length] = getInputValue("contentId-" + length);

		if (contentId[length] == "")
		{
			contentId[length] = length.toString();
		}

		title[length] = getInputValue("title-" + length);
		summary[length] = getInputValue("summary-" + length);
		url[length] = getInputValue("url-" + length);
		thumbnailImage[length] = getInputValue("thumbnailImage-" + length);
		updateDate[length] = getInputValue("updateDate-" + length);
		author[length] = getInputValue("author-" + length);
		profileImage[length] = getInputValue("profileImage-" + length);

		article[length] = new Object();
		article[length].title = new Array();
		article[length].url = new Array();
		article[length].thumbnailImage = new Array();

		for (var i = 0; i < 3; i++)
		{
			article[length].title[i] = getInputValue("article-" + length + "-title-" + i);
			article[length].url[i] = getInputValue("article-" + length + "-url-" + i);
			article[length].thumbnailImage[i] = getInputValue("article-" + length + "-thumbnailImage-" + i);
		}

		sale[length] = new Object();
		sale[length].listPrice = getInputValue("listPrice-" + length);
		sale[length].salePrice = getInputValue("salePrice-" + length);

		length++;
	}

	_json = '{"data": [';

	for (var i = 0; i < length; i++)
	{
		_json = _json + 

			'{' +
				'"type":"' + type + '", ' +
				'"contentId":"' + convertToHtml(contentId[i]) + '", ' +
				'"title":"' + convertToHtml(title[i]) + '", ' +
				'"summary":"' + convertToHtml(summary[i]) + '", ' +
				'"url":"' + convertToHtml(url[i]) + '", ' +
				'"thumbnailImage":"' + convertToHtml(thumbnailImage[i]) + '", ' +
				'"updateDate":"", ' +
				'"author":"' + convertToHtml(author[i]) + '", ' +
				'"profileImage":"' + convertToHtml(profileImage[i]) + '", ' +
				'"article": [' +
					'{' +
						'"type":"", ' +
						'"contentId":"' + i + '-0", ' +
						'"title":"' + convertToHtml(article[i].title[0]) + '", ' +
						'"summary":"", ' +
						'"url":"' + convertToHtml(article[i].url[0]) + '", ' +
						'"thumbnailImage":"' + convertToHtml(article[i].thumbnailImage[0]) + '", ' +
						'"updateDate":"' + convertToHtml(yyyymmdd) + '", ' +
						'"author":"", ' +
						'"profileImage":""' +
					'}, ' +
					'{' +
						'"type":"", ' +
						'"contentId":"' + i + '-1", ' +
						'"title":"' + convertToHtml(article[i].title[1]) + '", ' +
						'"summary":"", ' +
						'"url":"' + convertToHtml(article[i].url[1]) + '", ' +
						'"thumbnailImage":"' + convertToHtml(article[i].thumbnailImage[1]) + '", ' +
						'"updateDate":"' + convertToHtml(yyyymmdd) + '", ' +
						'"author":"", ' +
						'"profileImage":""' +
					'}, ' +
					'{' +
						'"type":"", ' +
						'"contentId":"' + i + '-2", ' +
						'"title":"' + convertToHtml(article[i].title[2]) + '", ' +
						'"summary":"", ' +
						'"url":"' + convertToHtml(article[i].url[2]) + '", ' +
						'"thumbnailImage":"' + convertToHtml(article[i].thumbnailImage[2]) + '", ' +
						'"updateDate":"' + convertToHtml(yyyymmdd) + '", ' +
						'"author":"", ' +
						'"profileImage":""' +
					'}' +
				'], ' +
				'"sale": {' +
					'"listPrice":"' + convertToHtml(sale[i].listPrice) + '", ' +
					'"salePrice":"' + convertToHtml(sale[i].salePrice) + '"' +
				'}' +
			'}';

		if (i < length - 1)
		{
			_json = _json + ', ';
		}
	}

	_json = _json + ']}';

	mediaSlider.reset();
	mediaSlider.init(_json);

	embedCode = "		<script>" + document.getElementById("msde-script-0").innerHTML + "<\/script>";
	embedCode += "\n		<div id=\"ms-container-0\"><\/div>";
	embedCode += "\n		<script>";
	embedCode += "\n			var _json = \'" + _json + "\';";
	embedCode += "\n			mediaSlider.init(_json);";
	embedCode += "\n		<\/script>";

	document.getElementById("msde-source-0").value = embedCode;
}
