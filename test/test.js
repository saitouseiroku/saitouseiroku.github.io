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

	var param = "Ž­Ž™“‡Œ§‰‚”üŽs";
	var prefectures = "46";
	var isExist = false;

	var file = "https://saitouseiroku.github.io/test/test.csv";
	var rawFile = new XMLHttpRequest();

	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var line = rawFile.responseText.split(/\n/);;
				//alert(line[0]); 

				for (var i=0; i<line.length; i++)
				{
					if( line[i].slice(0, 2) == prefectures )
					{
						//console.log(line[i]);
						isExist = true;

						var column = line.split(",");
						console.log(column[2] , column[6] + column[7] + column[8] );

					}else{

						if( isExist )
						{
							break;
						}
					}
				}
			}
		}
	}
	rawFile.send(null);
}
