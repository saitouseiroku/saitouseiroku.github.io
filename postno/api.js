var PostNo = function(obj){

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

	try{
		if( !obj )
		{
			return;
		}

		if( !obj.adr )
		{
			return;
		}

	}catch(e)
	{
		return;
	}

	var data ={
		"北海道":{"no":"01"},
		"青森県":{"no":"02"},
		"岩手県":{"no":"03"},
		"宮城県":{"no":"04"},
		"秋田県":{"no":"05"},
		"山形県":{"no":"06"},
		"福島県":{"no":"07"},
		"茨城県":{"no":"08"},
		"栃木県":{"no":"09"},
		"群馬県":{"no":"10"},
		"埼玉県":{"no":"11"},
		"千葉県":{"no":"12"},
		"東京都":{"no":"13"},
		"神奈川":{"no":"14"},
		"新潟県":{"no":"15"},
		"富山県":{"no":"16"},
		"石川県":{"no":"17"},
		"福井県":{"no":"18"},
		"山梨県":{"no":"19"},
		"長野県":{"no":"20"},
		"岐阜県":{"no":"21"},
		"静岡県":{"no":"22"},
		"愛知県":{"no":"23"},
		"三重県":{"no":"24"},
		"滋賀県":{"no":"25"},
		"京都府":{"no":"26"},
		"大阪府":{"no":"27"},
		"兵庫県":{"no":"28"},
		"奈良県":{"no":"29"},
		"和歌山":{"no":"30"},
		"鳥取県":{"no":"31"},
		"島根県":{"no":"32"},
		"岡山県":{"no":"33"},
		"広島県":{"no":"34"},
		"山口県":{"no":"35"},
		"徳島県":{"no":"36"},
		"香川県":{"no":"37"},
		"愛媛県":{"no":"38"},
		"高知県":{"no":"39"},
		"福岡県":{"no":"40"},
		"佐賀県":{"no":"41"},
		"長崎県":{"no":"42"},
		"熊本県":{"no":"43"},
		"大分県":{"no":"44"},
		"宮崎県":{"no":"45"},
		"鹿児島":{"no":"46"},
		"沖縄県":{"no":"47"}
	};

	try{
		var pref_nm = obj.adr.slice(0, 3);
		var pref_no = data[pref_nm]["no"];

	}catch(e)
	{
		return;
	}

	console.log(pref_nm);
	console.log(pref_no);

	var isExist = false;
	var res = [];

	// この↓ファイルはShift_JIS
	var file = "https://saitouseiroku.github.io/postno/KEN_ALL.CSV";

	var rawFile = new XMLHttpRequest();

	rawFile.overrideMimeType("text/plain; charset=shift_jis");
console.log("1");
	rawFile.open("GET", file, true);
console.log("2");
	rawFile.onreadystatechange = function ()
	{
console.log("3");
		if(rawFile.readyState === 4)
		{
console.log("4");
			if(rawFile.status === 200 || rawFile.status == 0)
			{
console.log("5");
				var line = rawFile.responseText.split(/\n/);

				for( var i=0; i<line.length; i++ )
				{
					if( line[i].slice(0, 2) == pref_no )
					{
						isExist = true;

						var column = line[i].split(',');

						var c6 = column[6].replace('"', '').replace('"', '');
						var c7 = column[7].replace('"', '').replace('"', '');
						var c8 = column[8].replace('"', '').replace('"', '');

						var p;
						if( ( p = c8.indexOf('（') ) != -1 )
						{
							c8 = c8.slice(0, p);
						}

						c6 = c6.trim();
						c7 = c7.trim();
						c8 = c8.trim();

						var c8_r = c8;
						c8_r = c8_r.replace("五十九", "59");
						c8_r = c8_r.replace("五十八", "58");
						c8_r = c8_r.replace("五十七", "57");
						c8_r = c8_r.replace("五十六", "56");
						c8_r = c8_r.replace("五十五", "55");
						c8_r = c8_r.replace("五十四", "54");
						c8_r = c8_r.replace("五十三", "53");
						c8_r = c8_r.replace("五十二", "52");
						c8_r = c8_r.replace("五十一", "51");
						c8_r = c8_r.replace("五十"  , "50");
						c8_r = c8_r.replace("四十九", "49");
						c8_r = c8_r.replace("四十八", "48");
						c8_r = c8_r.replace("四十七", "47");
						c8_r = c8_r.replace("四十六", "46");
						c8_r = c8_r.replace("四十五", "45");
						c8_r = c8_r.replace("四十四", "44");
						c8_r = c8_r.replace("四十三", "43");
						c8_r = c8_r.replace("四十二", "42");
						c8_r = c8_r.replace("四十一", "41");
						c8_r = c8_r.replace("四十"  , "40");
						c8_r = c8_r.replace("三十九", "39");
						c8_r = c8_r.replace("三十八", "38");
						c8_r = c8_r.replace("三十七", "37");
						c8_r = c8_r.replace("三十六", "36");
						c8_r = c8_r.replace("三十五", "35");
						c8_r = c8_r.replace("三十四", "34");
						c8_r = c8_r.replace("三十三", "33");
						c8_r = c8_r.replace("三十二", "32");
						c8_r = c8_r.replace("三十一", "31");
						c8_r = c8_r.replace("三十"  , "30");
						c8_r = c8_r.replace("二十九", "29");
						c8_r = c8_r.replace("二十八", "28");
						c8_r = c8_r.replace("二十七", "27");
						c8_r = c8_r.replace("二十六", "26");
						c8_r = c8_r.replace("二十五", "25");
						c8_r = c8_r.replace("二十四", "24");
						c8_r = c8_r.replace("二十三", "23");
						c8_r = c8_r.replace("二十二", "22");
						c8_r = c8_r.replace("二十一", "21");
						c8_r = c8_r.replace("二十"  , "20");
						c8_r = c8_r.replace("十九"  , "19");
						c8_r = c8_r.replace("十八"  , "18");
						c8_r = c8_r.replace("十七"  , "17");
						c8_r = c8_r.replace("十六"  , "16");
						c8_r = c8_r.replace("十五"  , "15");
						c8_r = c8_r.replace("十四"  , "14");
						c8_r = c8_r.replace("十三"  , "13");
						c8_r = c8_r.replace("十二"  , "12");
						c8_r = c8_r.replace("十一"  , "11");
						c8_r = c8_r.replace("十"    , "10");
						c8_r = c8_r.replace("九"    , "9");
						c8_r = c8_r.replace("八"    , "8");
						c8_r = c8_r.replace("七"    , "7");
						c8_r = c8_r.replace("六"    , "6");
						c8_r = c8_r.replace("五"    , "5");
						c8_r = c8_r.replace("四"    , "4");
						c8_r = c8_r.replace("三"    , "3");
						c8_r = c8_r.replace("二"    , "2");
						c8_r = c8_r.replace("一"    , "1");

						if ( obj.adr.indexOf(c7+c8) != -1 || obj.adr.indexOf(c7+c8_r) != -1 ){

console.log("7");

							// obj.adrにcolumn[7]を含む or obj.adrにcolumn[8]を含む

							var r2 = column[2].replace('"', '').replace('"', '');
							var r6 = column[6].replace('"', '').replace('"', '');
							var r7 = column[7].replace('"', '').replace('"', '');
							var r8 = column[8].replace('"', '').replace('"', '');

							console.log(r2, r6 + r7 + r8);

							var data = {no:r2, adr:r6 + r7 + r8};
							res.push(data);
						}

					}else{

						if( isExist )
						{
console.log("8");
							break;
						}
					}
				}
			}
		}
	}
console.log("9");
	rawFile.send(null);
	res = JSON.stringify(res);
	return res;
}
