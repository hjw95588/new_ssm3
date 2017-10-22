/**
 * Created by joyC on 2016/4/13.
 */
//页面自适应
$(function(){
	  $(".left-menu").height(($(window).height()-86)+"px");
	  $("#smIframe").height(($(window).height()-89) + "px");
	
	  if($(".left-menu").length!=0){
		  $(".main>.right-cot").width(($(window).width()-56-212)+"px" );
		  relize(212);
	  }else {
		  $(".main>.right-cot").width(($(window).width()-56)+"px" )
		  relize();
	  }
  })
  function relize(l){
	  var _l = l==undefined?0:l;
	  $(window).resize(function () {
		  var _p=$(".sideBar-open:hidden").length!=0?0:105;
		  var w=$(window).width();
		  var h=$(window).height();
		  var s= w - 55 - _p;
		  $(".right-warp").width(s + "px");
		  if($(window).width()== (w+17)){
			  s +=17;
			  $(".right-warp").width(s  + "px");
		  }
		  var m=s;
		  var c= m - 1 - _l;
		  var i2= c - 1 ;
		  var i= c - 1 -  22;
		  $(".main").width(m + "px");
		  $(".right-cot").width( c + "px");
		  $("#smIframe").width( i + "px");
		  $("iframe#smIframe").length!=0&& $("iframe#smIframe").width( i2 + "px");
		  $(".right-cot").height( (h-86) + "px");
		  $("#smIframe").height((h-89) + "px");
	  })
  }