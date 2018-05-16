$(document).ready(function(){

//open nav
	$('#open').click(function() {
    	//document.getElementById("mySidenav").style.width = "250px";
    	//document.getElementById("main").style.marginLeft = "250px";
    	$(this).css("margin-left" , "250px");
    	$("nav").css("width" , "250px");
    	//document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    	$('body').css("background-color" , "rgba(0,0,0,0.4)");
    	//$(this).hide();
	});

//close nav
	$('#close').click(function() {
    	//document.getElementById("mySidenav").style.width = "0";
    	//document.getElementById("main").style.marginLeft= "0";
    	//document.body.style.backgroundColor = "white";
    	$('nav').css("width", "0");
    	$("#open").css("margin-left", "0");
    	$("body").css('background-color', 'white');
	});

});
