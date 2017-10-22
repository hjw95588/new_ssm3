 function tabLoad(tabContent){
	 var tabHref;
	 $(".tabs-load").each(function(i){
		 $(this).find("li:first").addClass("active").show();
		 tabHref=$(this).find("li:first").find("a").attr("data-href");
		 createEle($(this).find("li:first").find("a"));
	 });
	 
	 //On Click Event  
	 $(".tabs li").click(function() {
		 $(this).parent().find("li").removeClass("active");
		 $(this).addClass("active"); //Add "active" class to selected tab  
		 tabHref=$(this).find("a").attr("data-href");
		 createEle($(this).find("a"));
		 return false;
	 });  
	 
	 function createEle($a){
	 	var href=$a.attr("data-href");
	 	if($a.attr("data-img")=="true" || $a.attr("data-iframe")=="true"){
		 	var eleId=$a.attr("data-id")||"";
		 	var eleClassName=$a.attr("data-class")||"";
		 	var $ele;
	 		if($a.attr("data-img")=="true"){
	 			$ele=$("<img></img>").attr("src",href);
	 		}
	 		else{
	 			$ele=$("<iframe></iframe>").attr("href",href);
	 		}
	 		$ele.attr("id",eleId).addClass(eleClassName);
	 		tabContent.empty().append($ele);
	 	}
	 	else if($a.attr("data-callback")){
	 		var callback=$a.attr("data-callback");
	 		tabContent.empty();
	 		eval(callback)();//字符串转变量
	 	}
	 	else{
	 		tabContent.empty().load(href);
	 	}
	 }
 }	 