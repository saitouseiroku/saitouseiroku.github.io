var PostNo = function(){

	console.log("index");
/*
	var fs = require("fs");
	// 同期
	var text = fs.readFileSync("./test.csv");
	var textByLine = text.split("\n");
	console.log(textByLine);

	// 非同期
	fs.readFile("./test.txt", function(text){
		var textByLine = text.split("\n")
	});
*/

	var param = "鹿児島県奄美市";
	var pref_no = "46";
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
					if( line[i].slice(0, 2) == pref_no )
					{
						//console.log(line[i]);
						isExist = true;

						var column = line[i].split(',');

						if ( param.indexOf(column[7]) != -1 || param.indexOf(column[8]) != -1) {
							// paramにcolumn[7]を含む or paramにcolumn[8]を含む
							console.log(column[2] , column[6] + column[7] + column[8] );
						}

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
