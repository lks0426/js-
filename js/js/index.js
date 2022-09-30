window.onload=function runoob(){
  document.getElementById("text4").innerHTML= "菜鸟教程 -- 学的不仅是技术，更是梦想！！！";
  console.log(123);
}
function caljia(){
	clearColor();
	var text1 = document.getElementById("text1").value;
	var text2 = document.getElementById("text2").value;
	var res = checkInputParam(text1,text2);
	if(res == 0){
	    var text1Num = parseInt(text1);
	    var text2Num = parseInt(text2);
	    var res = text1Num + text2Num;
	    document.getElementById("text3").value = res;
	}
	return 0;
}
function caljian(){
	clearColor();
	var text1 = document.getElementById("text1").value;
	var text2 = document.getElementById("text2").value;
	var res = checkInputParam(text1,text2);
	if(res == 0){
	    var text1Num = parseInt(text1);
	    var text2Num = parseInt(text2);
	    var res = text1Num - text2Num;
	    document.getElementById("text3").value = res;
	}
	return 0;
}
function calcheng(){
	clearColor();
	var text1 = document.getElementById("text1").value;
	var text2 = document.getElementById("text2").value;
	var res = checkInputParam();
	if(res == 0){
	    var text1Num = parseInt(text1);
	    var text2Num = parseInt(text2);
	    var res = text1Num * text2Num;
	    document.getElementById("text3").value = res;
	}
	return 0;
}
function calchu(){
	clearColor();
	var text1 = document.getElementById("text1").value;
	var text2 = document.getElementById("text2").value;
	var res = checkInputParam(text1,text2);
	if(res == 0){
	    var text1Num = parseInt(text1);
	    var text2Num = parseInt(text2);
	    var res = text1Num / text2Num;
	    document.getElementById("text3").value = res;
	}
	return 0;
	return 0;
}

function calc(text1,text2){
	document.getElementById("text3").value = '';
	return 0;
}

function checkInputParam(text1,text2){
	if((text1 == null || text1=='') && (text2 == null || text2=='') ){
		document.getElementById("text1").setAttribute('style','border-color:#FF0000');
		document.getElementById("text2").setAttribute('style','border-color:#FF0000');
		document.getElementById("text3").value = '';
		alert("请输入数字");
		return 1
	}else{
	     if(text1 == null || text1 ==''){
	        alert("请输入第一个数字");
			document.getElementById("text1").setAttribute('style','border-color:#FF0000');
			document.getElementById("text3").value = '';
			return 1
	     }else if(text2 == null || text2 ==''){
	        alert("请输入第二个数字");
			document.getElementById("text2").setAttribute('style','border-color:#FF0000');
			document.getElementById("text3").value = '';
			return 1
	    }
	}
	return 0
}

function clearColor(){
	document.getElementById("text1").setAttribute('style','border-color:black;');
	document.getElementById("text2").setAttribute('style','border-color:black;');
}


