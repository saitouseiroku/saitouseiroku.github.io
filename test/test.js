var PostNo = function(){

	console.log("index");
/*
	var fs = require("fs");
	// “¯Šú
	var text = fs.readFileSync("./test.csv");
	var textByLine = text.split("\n");
	console.log(textByLine);
*/
	var file = "https://saitouseiroku.github.io/test/test.csv";
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				alert(allText); 
			}
		}
	}
	rawFile.send(null);

	// ”ñ“¯Šú
	/*
	fs.readFile("./test.txt", function(text){
		var textByLine = text.split("\n")
	});
	*/
}
