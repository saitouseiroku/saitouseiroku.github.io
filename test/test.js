var PostNo = function(){

	console.log("index");

	var fs = require("fs");
	// 同期
	var text = fs.readFileSync("./test.csv");
	var textByLine = text.split("\n");

	console.log(textByLine);

	// 非同期
	/*
	fs.readFile("./test.txt", function(text){
		var textByLine = text.split("\n")
	});
	*/
}
