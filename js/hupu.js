$(function(){
	autostreamplay();
	guanzhuhupu();
	streamplay();
	streamclose();
	ontoppic();
	mouseontoppic();
	mouseouttoppic();
	mouseonshihuopic();
	mouseoutshihuopic();
	sidetvbutton1();
	sidetvbutton();
	num1over();
	num2over();
	num1out();
	num2out();
	setInterval("shihuoautohie()",7000);
	handle= setInterval("ontoppic()",2000);
	handle2= setInterval("shihuopic()",2000);
	handle3=setInterval("autoyougou()",2000);
	setTimeout('autostreamclose()',3000);
});

function guanzhuhupu(){
	$(".hp-dropDownMenu ").mouseover(function(){
		$(this).find(".hp-set").addClass("hpseton");
		$(this).find("div").show();
	});
	$(".hp-dropDownMenu ").mouseout(function(){
		$(this).find(".hp-set").removeClass("hpseton");
		$(this).find("div").hide();

	})
}
function autostreamplay(){
		$("#HCFull").slideDown	(800);
		$("#playbtn").hide();
		$("#hidebtn").show();
}
function autostreamclose(){
		$("#HCFull").slideUp(800);
		$("#hidebtn").hide();
		$("#playbtn").show();
}

function streamplay(){
	$("#playbtn").click(function(){
	autostreamplay();
	setTimeout('autostreamclose()',3000);
	});

}

function streamclose(){
	$("#hidebtn").click(function(){
		autostreamclose();
	});
}
var	curentIndex=1;
function ontoppic(){
	for (var i = 1; i <= 4; i++) {
		var	ele=document.getElementById("ifocus_btn"+i);
		ele.setAttribute("class","normal");
		var	eltx=document.getElementById("ifocus_tx"+i);
		eltx.style.display="none";
	}
	var	ele=document.getElementById("ifocus_btn"+curentIndex);
	ele.setAttribute("class","current");
	var	eltx=document.getElementById("ifocus_tx"+curentIndex);
	eltx.style.display="block";
	var elp=document.getElementById("ifocus_piclist");
	if (curentIndex==1) {
		elp.style.top="0px"; 
	};
	if (curentIndex==2) {
		elp.style.top="-230px";

	};
	if (curentIndex==3) {elp.style.top="-460px";};
	if (curentIndex==4) {elp.style.top="-690px";};
	curentIndex=(curentIndex++)%4+1;

}
function mouseontoppic(){
		$("#ifocus_btn1").mouseover(function(){
			for (var t = 1; t <= 4; t++) {
					var	ele=document.getElementById("ifocus_btn"+t);
					ele.setAttribute("class","normal");
					var	eltx=document.getElementById("ifocus_tx"+t);
					eltx.style.display="none";
				}
				var	ele=document.getElementById("ifocus_btn1");
				ele.setAttribute("class","current");
				var	eltx=document.getElementById("ifocus_tx1");
				eltx.style.display="block";	
				var elp=document.getElementById("ifocus_piclist");
				elp.style.top="0px";
				curentIndex=1;
				clearInterval(handle);
		});
		$("#ifocus_btn2").mouseover(function(){
			for (var t = 1; t <= 4; t++) {
					var	ele=document.getElementById("ifocus_btn"+t);
					ele.setAttribute("class","normal");
					var	eltx=document.getElementById("ifocus_tx"+t);
					eltx.style.display="none";
				}
				var	ele=document.getElementById("ifocus_btn2");
				ele.setAttribute("class","current");
				var	eltx=document.getElementById("ifocus_tx2");
				eltx.style.display="block";	
				var elp=document.getElementById("ifocus_piclist");
				elp.style.top="-230px";
				curentIndex=2;
				clearInterval(handle);
		});
		$("#ifocus_btn3").mouseover(function(){
			for (var t = 1; t <= 4; t++) {
					var	ele=document.getElementById("ifocus_btn"+t);
					ele.setAttribute("class","normal");
					var	eltx=document.getElementById("ifocus_tx"+t);
					eltx.style.display="none";
				}
				var	ele=document.getElementById("ifocus_btn3");
				ele.setAttribute("class","current");
				var	eltx=document.getElementById("ifocus_tx3");
				eltx.style.display="block";	
				var elp=document.getElementById("ifocus_piclist");
				elp.style.top="-460px";
				curentIndex=3;
				clearInterval(handle);
		});
		$("#ifocus_btn4").mouseover(function(){
			for (var t = 1; t <= 4; t++) {
					var	ele=document.getElementById("ifocus_btn"+t);
					ele.setAttribute("class","normal");
					var	eltx=document.getElementById("ifocus_tx"+t);
					eltx.style.display="none";
				}
				var	ele=document.getElementById("ifocus_btn4");
				ele.setAttribute("class","current");
				var	eltx=document.getElementById("ifocus_tx4");
				eltx.style.display="block";	
				var elp=document.getElementById("ifocus_piclist");
				elp.style.top="-690px";
				curentIndex=4;
				clearInterval(handle);
		});
	
}

function mouseouttoppic(){
		$("#ifocus_btn1").mouseout(function(){
		handle= setInterval("ontoppic()",1000);
		});
		$("#ifocus_btn2").mouseout(function(){
		handle= setInterval("ontoppic()",1000);
		});
    	$("#ifocus_btn3").mouseout(function(){
		handle= setInterval("ontoppic()",1000);
		});
		$("#ifocus_btn4").mouseout(function(){
		handle= setInterval("ontoppic()",1000);
		});
}

function shihuoautohie(){
		shihuoautohieone();
		shihuoautohietwo();
		setTimeout("shihuoautohiefour()",3000);
	  	setTimeout("shihuoautohiethree()",3000);
}
function shihuoautohieone(){
	$("#shihuoautohieone").slideDown(1000);
	setTimeout("shihuoautohieonea()",5000);
	
}
function shihuoautohieonea(){
	
	$("#shihuoautohieone").slideUp(1000);
	
}
function shihuoautohietwo(){
	$("#shihuoautohietwo").slideDown(1000);
	setTimeout("shihuoautohietwoa()",6000);
	
}
function shihuoautohietwoa(){
	
	$("#shihuoautohietwo").slideUp(1000);
	
}
function shihuoautohiethree(){
	$("#shihuoautohiethree").slideDown(1000);
	setTimeout("shihuoautohiethreea()",4000);
	
}
function shihuoautohiethreea(){
	
	$("#shihuoautohiethree").slideUp(1000);
	
}
function shihuoautohiefour(){
	$("#shihuoautohiefour").slideDown(2000);
	setTimeout("shihuoautohiefoura()",3000);
	
}
function shihuoautohiefoura(){
	
	$("#shihuoautohiefour").slideUp(1000);
	
}
var currentNum=1;
function shihuopic(){
	for (var i = 1; i <= 4; i++) {
		var	ele=document.getElementById("ifocus_btns3"+i);
		ele.setAttribute("class","normal");
	}
	var	ele=document.getElementById("ifocus_btns3"+currentNum);
	ele.setAttribute("class","current");
	var elp=document.getElementById("ifocus_piclist3");
	if (currentNum==1) {
		elp.style.top="0px"; 
	};
	if (currentNum==2) {
		elp.style.top="-190px";

	};
	if (currentNum==3) {elp.style.top="-380px";};
	if (currentNum==4) {elp.style.top="-570px";};
	currentNum=(currentNum++)%4+1;

}
function mouseonshihuopic(){
		$("#ifocus_btns31").mouseover(function(){
			for (var t = 1; t <= 4; t++) {
					var	ele=document.getElementById("ifocus_btns3"+t);
					ele.setAttribute("class","normal");
				}
				var	ele=document.getElementById("ifocus_btns31");
				ele.setAttribute("class","current");
				var elp=document.getElementById("ifocus_piclist3");
				elp.style.top="0px";
				currentNum=1;
				clearInterval(handle2);
		});
		$("#ifocus_btns32").mouseover(function(){
			for (var t = 1; t <= 4; t++) {
					var	ele=document.getElementById("ifocus_btns3"+t);
					ele.setAttribute("class","normal");
				}
				var	ele=document.getElementById("ifocus_btns32");
				ele.setAttribute("class","current");
				var elp=document.getElementById("ifocus_piclist3");
				elp.style.top="-190px";
				currentNum=2;
				clearInterval(handle2);
		});
		$("#ifocus_btns33").mouseover(function(){
			for (var t = 1; t <= 4; t++) {
					var	ele=document.getElementById("ifocus_btns3"+t);
					ele.setAttribute("class","normal");
				}
				var	ele=document.getElementById("ifocus_btns33");
				ele.setAttribute("class","current");
				var elp=document.getElementById("ifocus_piclist3");
				elp.style.top="-380px";
				currentNum=3;
				clearInterval(handle2);
		});
		$("#ifocus_btns34").mouseover(function(){
			for (var t = 1; t <= 4; t++) {
					var	ele=document.getElementById("ifocus_btns3"+t);
					ele.setAttribute("class","normal");
				}
				var	ele=document.getElementById("ifocus_btns34");
				ele.setAttribute("class","current");
				var elp=document.getElementById("ifocus_piclist3");
				elp.style.top="-570px";
				currentNum=4;
				clearInterval(handle2);
		});

}
function mouseoutshihuopic(){
		$("#ifocus_btns31").mouseout(function(){
		handle2= setInterval("shihuopic()",2000);
		});
		$("#ifocus_btns32").mouseout(function(){
		handle2= setInterval("shihuopic()",2000);
		});
    	$("#ifocus_btns33").mouseout(function(){
		handle2= setInterval("shihuopic()",2000);
		});
		$("#ifocus_btns34").mouseout(function(){
		handle2= setInterval("shihuopic()",2000);
		});
}



function sidetvbutton(){
	$("#videotab_btn0").mouseover(function(){
		var	ele=document.getElementById("videotab_btn0");
		ele.setAttribute("class","tvPage_on");
		var	ele=document.getElementById("videotab_btn1");
		ele.setAttribute("class","tvPage_ff");

		$("#videotab_div0").css("display","block");
		$("#videotab_div1").css("display","none");
		
	});
}

function sidetvbutton1(){
	$("#videotab_btn1").mouseover(function(){
		var	ele=document.getElementById("videotab_btn1");
		ele.setAttribute("class","tvPage_on");
		var	ele=document.getElementById("videotab_btn0");
		ele.setAttribute("class","tvPage_ff");

		$("#videotab_div0").css("display","none");
		$("#videotab_div1").css("display","block");
		
	});
}

function autoyougou(){
	var l= $("#pro").css('top');
	
	if (l==0+"px") {
		$("#pro").css('top','-163px');
		$("#num1").removeClass("cur");
		$("#num2").addClass("cur")
	};
	if (l!=0+"px") {
		$("#pro").css('top','0px');
		$("#num2").removeClass("cur");
		$("#num1").addClass("cur")
	};
	
}

function num1over(){
	$("#num1").mouseover(function(){
		$("#pro").css('top','0px');
		$("#num2").removeClass("cur");
		$("#num1").addClass("cur")
		clearInterval(handle3);
	})
}
function num2over(){
	$("#num2").mouseover(function(){
		$("#pro").css('top','-163px');
		$("#num1").removeClass("cur");
		$("#num2").addClass("cur")
		clearInterval(handle3);
	})
}

function num1out(){
	$("#num1").mouseout(function(){

		handle3=setInterval("autoyougou()",2000);
	})
}
function num2out(){
	$("#num2").mouseout(function(){
		handle3=setInterval("autoyougou()",2000);
	})
}
