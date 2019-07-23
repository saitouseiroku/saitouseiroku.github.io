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

	//var param = "鹿児島県奄美市名瀬";
	var param = "鹿児島県奄美市名瀬幸町25-8";
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

				for( var i=0; i<line.length; i++ )
				{
					if( line[i].slice(0, 2) == pref_no )
					{
						//console.log(line[i]);
						isExist = true;

						var column = line[i].split(',');

						var c7 = column[7].replace('"', '').replace('"', '') ;
						var c8 = column[8].replace('"', '').replace('"', '') ;
						c7 = c7.trim();
						c8 = c8.trim();

						/*
						if ( ( c7 != "" && param.indexOf(c7) != -1 ) || ( c8 != "" && param.indexOf(c8) != -1 ) ){
							// paramにcolumn[7]を含む or paramにcolumn[8]を含む
							console.log(column[2] , column[6] + column[7] + column[8] );
						}
						*/

						if ( param.indexOf(c7+c8) != -1 ){
							// paramにcolumn[7]を含む or paramにcolumn[8]を含む
							console.log(column[2] , column[6] + column[7] + column[8] );
						}

						/*
						var isC7 = false;
						var isC8 = false;

						for( var j=0; j<param.length; j++ )
						{
							if( c7.indexOf(param[j]) != -1 )
							{
								console.log(c7);
								console.log(param[j]);
								isC7 = true;
								break;
							}
						}

						if( isC7 )
						{
							for( var j=0; j<param.length; j++ )
							{
								if( c8.indexOf(param[j]) != -1 )
								{
									console.log(c8);
									console.log(param[j]);
									isC8 = true;
									break;
								}
							}
						}

						if( isC7 && isC8 )
						{
							//console.log(column[2] , column[6] + column[7] + column[8] );
						}
						*/

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
