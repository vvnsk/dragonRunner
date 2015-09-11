var totalh=$(window).height();
var totalw=$(window).width();
var fullScreen=false;
var count=0;

$("#sky").css("width",totalw);
$("#sky").css("height",3*(totalh/4));
$("#med_clouds").css("height",totalh/8);
$("#med_clouds").css("left",-totalw);
$("#small_clouds").css("height",totalh/8);
$("#small_clouds").css("left",-totalw);
$("#ground").css("width",totalw);
$("#ground").css("height",totalh/4);

window.onresize = function(event) {
	event.preventDefault;
	totalh=$(window).height();
	totalw=$(window).width();
	
	$("#sky").css("width",totalw);
	$("#sky").css("height",3*(totalh/4));
	$("#med_clouds").css("height",totalh/8);
	$("#med_clouds").css("left",-totalw);
	$("#small_clouds").css("height",totalh/8);
	$("#small_clouds").css("left",-totalw);
	$("#ground").css("width",totalw);
	$("#ground").css("height",totalh/4);
}


TweenMax.to($("#med_clouds"), 10, {css:{left:totalw}, repeat:-1}); 
TweenMax.to($("#small_clouds"), 15, {css:{left:totalw}, repeat:-1}); 
TweenMax.to($("#man"), 12, {css:{left:totalw}, repeat:-1}); 
//TweenMax.to($("#man"), 1, {bottom:"100px", repeat:-1, yoyo:true,delay:1});
TweenMax.to($("#dragon"), 12, {css:{left:totalw}, repeat:-1}); 

function jump(){
			count++;
		  if(count==1){
			   TweenMax.to($("#man"), 0.25, {bottom:"100px", repeat:1, yoyo:true,onComplete:completeHandler});
		   }
		  function completeHandler() {
	    		count=0;
		   }
	};
	
$("#jump").click(function() {
        jump();
    });

$(document).keydown(function(e) {
     var key = e.which;
      //console.log(key);
      if(key==38){
		  jump();
	}
});
function toggleFullscreen(){
	if(fullScreen){ console.log("NoFull");exitFullscreen();fullScreen=false;}
	else{console.log("Full");launchFullscreen(document.documentElement);fullScreen=true;}
	};

		// Find the right method, call on correct element
function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
// Whack fullscreen
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}