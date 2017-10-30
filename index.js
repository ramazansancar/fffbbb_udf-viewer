

(function(obj) {
	zip.workerScriptsPath = "/bower_components/zip-js/WebContent/";

	function onerror(message) {
		console.log(message);
	}

	var fileInput = document.getElementById("file-input");
	var display = document.getElementById("content-div");
	fileInput.addEventListener('change', function() {
		display.innerText="...";
		zip.createReader(new zip.BlobReader(fileInput.files[0]), function(zipReader) {
			zipReader.getEntries( function(entries) {

				entries.forEach(function(entry) {

					if(entry.filename =='content.xml'){
						entry.getData(new zip.TextWriter(), function(blob){
							var i = blob.indexOf("CDATA["), blob = blob.substr(i+6);
							i = blob.indexOf("]]>");
							display.innerText=blob.substr(0,i);
						});
					}

				});

			},onerror);

		},onerror);

	},false);

})(this);