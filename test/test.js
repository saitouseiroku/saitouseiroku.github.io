var PostNo = function(){

	console.log("index");
/*
	var fs = require("fs");
	// “¯Šú
	var text = fs.readFileSync("./test.csv");
	var textByLine = text.split("\n");
	console.log(textByLine);

	// ”ñ“¯Šú
	fs.readFile("./test.txt", function(text){
		var textByLine = text.split("\n")
	});
*/
	var file = "https://saitouseiroku.github.io/test/test.csv";

	var rawFile = new XMLHttpRequest();
	var prefectures = "46";

	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText.split(/\n/);;
				//alert(allText[0]); 

				for (var i=0; i<allText.length; i++)
				{
					if( allText[i].slice(0, 2) == prefectures )
					{
						console.log(allText[i]);
					}
				}

			}
		}
	}
	rawFile.send(null);
}
