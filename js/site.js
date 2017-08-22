var game = new GameController(false);
game.start();
window.onresize = function () {
    game.displayWidth = document.documentElement.clientWidth;
    game.displayHeight = document.documentElement.clientHeight;
    console.log("document width = " + game.displayWidth + "; document height = " + game.displayHeight + ";");
    game.desck.rerender();
};




// Интегрировать в проект
var variants = [1,2,3,4,5];
var general_arr = [];
var capasity_arr = [];
var numeric_arr = [];
var lastCapasityArr = [];



for(var i = 0; i < variants.length; i++){
	
	for(var j=0; j < (variants.length - i); j++){
		if(lastCapasityArr.length === 0){
			var str = variants[j].toString();
			numeric_arr.push(str);
		}
		else{
			var lastArr = deleteFirstArrayElement(lastCapasityArr, j);
			for(var k = 0; k < lastArr.length; k++){
				for(var m = 0; m < lastArr[k].length; m++){
					var str = variants[j].toString() + lastArr[k][m];
					numeric_arr.push(str);
				}
			}
		}
		capasity_arr.push(numeric_arr);
		numeric_arr = [];
	}
	lastCapasityArr = capasity_arr;
	general_arr.push(capasity_arr);
	capasity_arr = [];
}


//console.log(capasity_arr);

for(var i = 0; i < general_arr.length; i++){
	for(var j = 0; j < general_arr[i].length; j++){
		for(var k = 0; k < general_arr[i][j].length; k++){
			console.log(general_arr[i][j][k])
		}
	}
}


function deleteFirstArrayElement(arr, j){
	var new_arr = [];
	for(var i = j + 1; i < arr.length; i++){
		new_arr.push(arr[i]);
	}
	return new_arr;
};








