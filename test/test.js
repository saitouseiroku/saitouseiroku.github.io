var PostNo = function(){

	console.log("index");
/*
	var fs = require("fs");
	// 同期
	var text = fs.readFileSync("./KEN_ALL.CSV");
	var textByLine = text.split("\n");
	console.log(textByLine);

	// 非同期
	fs.readFile("./test.txt", function(text){
		var textByLine = text.split("\n")
	});
*/

	//var param = "鹿児島県奄美市名瀬幸町25-8";
	//var param = "埼玉県比企郡小川町小川1619";
	var param = "北海道札幌市中央区北1条西2丁目";

	var data ={
		"北海道":{"no":"01"},
		"青森県":{"no":"02"},
		"埼玉県":{"no":"11"},
		"鹿児島":{"no":"46"},
		"沖縄県":{"no":"47"}
	};

	var pref_nm = param.slice(0, 3);
	var pref_no = data[pref_nm]["no"];

	console.log(pref_nm);
	console.log(pref_no);

	var isExist = false;

	// この↓ファイルはShift_JIS
	var file = "https://saitouseiroku.github.io/test/KEN_ALL.CSV";

	var rawFile = new XMLHttpRequest();

	rawFile.overrideMimeType("text/plain; charset=shift_jis");
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

						var c7 = column[7].replace('"', '').replace('"', '');
						var c8 = column[8].replace('"', '').replace('"', '');
						var p;
						if( ( p = c8.indexOf('（') ) != -1 )
						{
							c8 = c8.slice(0, p);
						}

						c7 = c7.trim();
						c8 = c8.trim();

						var c8_r = c8;
						c8_r = c8_r.replace("二十九", "29");
						c8_r = c8_r.replace("二十八", "28");
						c8_r = c8_r.replace("二十七", "27");
						c8_r = c8_r.replace("二十六", "26");
						c8_r = c8_r.replace("二十五", "25");
						c8_r = c8_r.replace("二十四", "24");
						c8_r = c8_r.replace("二十三", "23");
						c8_r = c8_r.replace("二十二", "22");
						c8_r = c8_r.replace("二十一", "21");
						c8_r = c8_r.replace("二十", "20");
						c8_r = c8_r.replace("十九", "19");
						c8_r = c8_r.replace("十八", "18");
						c8_r = c8_r.replace("十七", "17");
						c8_r = c8_r.replace("十六", "16");
						c8_r = c8_r.replace("十五", "15");
						c8_r = c8_r.replace("十四", "14");
						c8_r = c8_r.replace("十三", "13");
						c8_r = c8_r.replace("十二", "12");
						c8_r = c8_r.replace("十一", "11");
						c8_r = c8_r.replace("十", "10");
						c8_r = c8_r.replace("九", "9");
						c8_r = c8_r.replace("八", "8");
						c8_r = c8_r.replace("七", "7");
						c8_r = c8_r.replace("六", "6");
						c8_r = c8_r.replace("五", "5");
						c8_r = c8_r.replace("四", "4");
						c8_r = c8_r.replace("三", "3");
						c8_r = c8_r.replace("二", "2");
						c8_r = c8_r.replace("一", "1");

						//console.log(param);
						//console.log(c7+c8, c7+c8_r);

						if ( param.indexOf(c7+c8) != -1 || param.indexOf(c7+c8_r) != -1 ){
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
