var PostNo = function(){

	console.log("index");

	var fs = require("fs");
	// ����
	var text = fs.readFileSync("./test.csv");
	var textByLine = text.split("\n");

	console.log(textByLine);

	// �񓯊�
	/*
	fs.readFile("./test.txt", function(text){
		var textByLine = text.split("\n")
	});
	*/
}
