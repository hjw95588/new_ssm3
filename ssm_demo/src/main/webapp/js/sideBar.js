/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.1
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);


;(function ($) {
	  $.fly = function (element, options) {
	    // 默认值
	    var defaults = {
	      version: '1.0.0',
	      autoPlay: true,
	      vertex_Rtop: 20, // 默认顶点高度top值
	      speed: 1.2,
	      start: {}, // top, left, width, height
	      end: {},
	      onEnd: $.noop
	    };
	    var self = this,
	      $element = $(element);

	    /**
	     * 初始化组件，new的时候即调用
	     */
	    self.init = function (options) {
	      this.setOptions(options);
	      !!this.settings.autoPlay && this.play();
	    };

	    /**
	     * 设置组件参数
	     */
	    self.setOptions = function (options) {
	      this.settings = $.extend(true, {}, defaults, options);
	      var settings = this.settings,
	        start = settings.start,
	        end = settings.end;

	      $element.css({marginTop: '0px', marginLeft: '0px', position: 'fixed',"z-index":"999"}).appendTo('body');
	      // 运动过程中有改变大小
	      if (end.width != null && end.height != null) {
	        $.extend(true, start, {
	          width: $element.width(),
	          height: $element.height()
	        });
	      }
	      // 运动轨迹最高点top值
	      var vertex_top = Math.min(start.top, end.top) - Math.abs(start.left - end.left) / 3;
	      if (vertex_top < settings.vertex_Rtop) {
	        // 可能出现起点或者终点就是运动曲线顶点的情况
	        vertex_top = Math.min(settings.vertex_Rtop, Math.min(start.top, end.top));
	      }

	      /**
	       * 运动轨迹在页面中的top值可以抽象成函数 y = a * x*x + b;
	       * a = curvature
	       * b = vertex_top
	       */

	      var distance = Math.sqrt(Math.pow(start.top - end.top, 2) + Math.pow(start.left - end.left, 2)),
	        // 元素移动次数
	        steps = Math.ceil(Math.min(Math.max(Math.log(distance) / 0.05 - 75, 30), 100) / settings.speed),
	        ratio = start.top == vertex_top ? 0 : -Math.sqrt((end.top - vertex_top) / (start.top - vertex_top)),
	        vertex_left = (ratio * start.left - end.left) / (ratio - 1),
	        // 特殊情况，出现顶点left==终点left，将曲率设置为0，做直线运动。
	        curvature = end.left == vertex_left ? 0 : (end.top - vertex_top) / Math.pow(end.left - vertex_left, 2);

	      $.extend(true, settings, {
	        count: -1, // 每次重置为-1
	        steps: steps,
	        vertex_left: vertex_left,
	        vertex_top: vertex_top,
	        curvature: curvature
	      });
		    typeof settings.onStart == "function" && settings.onStart.call(this,$element,settings);

	    };

	    /**
	     * 开始运动，可自己调用
	     */
	    self.play = function () {
	      this.move();
	    };

	    /**
	     * 按step运动
	     */
	    self.move = function () {
	      var settings = this.settings,
	        start = settings.start,
	        count = settings.count,
	        steps = settings.steps,
	        end = settings.end;
	      // 计算left top值
	      var left = start.left + (end.left - start.left) * count / steps,
	        top = settings.curvature == 0 ? start.top + (end.top - start.top) * count / steps : settings.curvature * Math.pow(left - settings.vertex_left, 2) + settings.vertex_top;
	      // 运动过程中有改变大小
	      if (end.width != null && end.height != null) {
	        var i = steps / 2,
	          width = end.width - (end.width - start.width) * Math.cos(count < i ? 0 : (count - i) / (steps - i) * Math.PI / 2),
	          height = end.height - (end.height - start.height) * Math.cos(count < i ? 0 : (count - i) / (steps - i) * Math.PI / 2);
	        //$element.css({width: width + "px", height: height + "px", "font-size": Math.min(width, height) + "px"});
	       typeof settings.onMoving =="function" && settings.onMoving.call(this,$element,settings.count,settings.steps);
	      }
	      $element.css({
	        left: left + "px",
	        top: top + "px"
	      });
	      settings.count++;
	      // 定时任务
	      var time = window.requestAnimationFrame($.proxy(this.move, this));
	      if (count == steps) {
	        window.cancelAnimationFrame(time);
	        // fire callback
	        settings.onEnd.apply(this);
	      }
	    };

	    /**
	     * 销毁
	     */
	    self.destory = function(){
	      $element.remove();
	    };

	    self.init(options);
	  };

	  // add the plugin to the jQuery.fn object
	  $.fn.fly = function (options) {
	    return this.each(function () {
	      if (undefined == $(this).data('fly')) {
	        $(this).data('fly', new $.fly(this, options));
	      }
	    });
	  };
	})(jQuery);




$(document).ready(function(){
	$(".iframe_div").css("width",$(document.body).width()-$(".nav-2").width()+"px");
	 setupMenu();
	 $.veilsHtml = {};
	 $.veils = {};
     globalSearch();
     appRelation();
     adjustHeight();
 });

 
$(window).resize(function() {
	var nav_display = $(".nav").css("display");
	if(nav_display=="none"){
	    $(".iframe_div").css("width",$(document.body).width()-$(".nav-2").width()+"px");
	}else{
		$(".iframe_div").css("width",$(document.body).width()-$(".nav").width()+"px");
	}
	$(".iframe_div").css("height",$(document.body).height()+$(".header").height()+"px");
	 adjustHeight();
  });

function adjustHeight() {
    var h = $(window).height();
	var h_header =$(".header").height();
	var h_search = $(".search").height();
    $(".right-warp").css("height", h - h_header);
	$("#sideBar").css("height", h - h_header);
	$(".main").css("height", h - h_header -h_search);
	
}
//修改部分
function setupMenu(){
	var animationtime = 500;
	$(".sideBar-memu").click(function(){
		var w = $(window).width();
		var min_nav_w = w - 160;
		var min_nav_cot_w =$(".left-menu").length!=0? min_nav_w-212:min_nav_w;
		$(".sideBar").hide()
		$(".main").animate({
			width:min_nav_w
		},animationtime);
		$(".right-warp>.main>.right-cot").animate({
			width:min_nav_cot_w
		},animationtime);
		/*if($("#smIframe").length!=0){
			$(".right-warp>.main>.right-cot>#smIframe").animate({
				width:min_nav_cot_w
			},animationtime);
		}*/
		$(".sideBar-open").width(55).css({
			"display":"block"
		}).animate({
			width:160 //标记
		},animationtime);
		$(".right-warp,.veil-ut").animate({
			width:min_nav_w,
			left:160  //标记
		},animationtime);
	})
	$(".sideBar-memu-open").click(function(){
		var w = $(window).width();
		var max_nav_w = w - 55;
		var max_nav_cot_w=$(".left-menu").length!=0?max_nav_w-212:max_nav_w;
		$(".sideBar-open").animate({
			width:55
		},animationtime,function(){
			$(".sideBar").css("position","absolute").width(55).show();
			$(".sideBar-open").hide();
		});
		$(".main").animate({
			width:max_nav_w
		},animationtime);
		$(".right-warp>.main>.right-cot").animate({
			width:max_nav_cot_w
		},animationtime);
		/*if($("#smIframe").length!=0){
			$(".right-warp>.main>.right-cot>#smIframe").animate({
				width:max_nav_cot_w
			},animationtime);
		}*/
		$(".right-warp,.veil-ut").animate({
			width:max_nav_w,
			left:55
		},animationtime);
		/*$(".search-veil").animate({

		 },animationtime); */
	});
}

    /**
     * 
     * @desc
     * 创建一个拉幕  
     * 
     * @param options
     */
    function fveil(options){
    	if(!$.veilsHtml){
    		$.veilsHtml = {};
    	}
    	if(!$.veils){
    		$.veils = {};
    	}
    	 
    	 
    	function getOptions(osetting){
    		var Defaluts = {
    				positions:{
    					left:null,
    					top:null,
    					width:600,
    					height:null
    				},
    				remote:{
    					url:null,
    					data:null,
    					type:"get",
    					dataType:"html"
    				},
    				local:{
    					target:null//为jquery选择器
    				},
    				callback:null
    		};
    		return $.extend(true,{},Defaluts,osetting);
    	}
    	function FVeil(ops){
    		this.options = getOptions(ops);
    		initVeil.call(this,this,this.options);
    		bindEvent.call(this,this);
    	}
    	function initVeil(o,ops){    		
    		if(!$.veils[ops.id]){
    			o.veil = veilbg(o,ops).get(0);
    			$.veils[ops.id] = o;
    		}
    		placeVeil(o.veil,ops);
    	}
    	function veilbg(o,options){
    		var str = "<div class='veil-outer-container veil-ut animated'>"
    				 +"  <div class='veil-act'></div>"
    				 +"	 <div class='veil-inner-container'>"
    				 +"     <div class='veil-header'>"
    				 +"     </div>"
    				 +"     <div class='veil-body'>"
    				 +"			<div class='veil-content'>"
    				 +"         </div>"
    				 +"     </div>"
    				 +"     <div class='veil-footer'>"
    				 +"     </div>"
    				 +"	 </div>"
    				 +"</div>";
    		var $c=  $(str).addClass(options.sClass).attr("id",options.id);
    		$(document.body).append($c);
    		$c.data("veil",o);
    		return $c;
    	}
    	
    	var instance;
    	if(!isHasVeil(options.id)){
    		instance = new FVeil(options||{});
    		$(instance.veil).data("veil",instance);
    	}else{
    		instance = $(".veil-ut").data("veil");
    		$(".veil-ut").show();
    		placeVeil.call(instance,instance.veil,$.extend({},instance.options,options));
    	}
    	/**
    	 * 检查是否要创建帷幕
    	 */
    	function isHasVeil(id){
    		return $("#"+id).length;
    	}
    	instance.hideVeil = function(){
    		if(!this.veil){
    			return ;
    		}
    		var $c = $(this.veil);
    		$c.animate({
    			left:$c.offset().left+$c.outerWidth(),
    			width:0,
    		},500,function(){
    			$c.find(".veil-body").empty();
    			$c.hide();
    		});
    	}
    	function bindEvent(o){
    		var $c = $(o.veil);
    		$(".veil-act",$c).on("click",function(){
    			o.hideVeil();
    		});
    	}
    	function resize($o,ops){
    		var left,top,width,height;
    		if(ops.positions.left !== undefined && ops.positions.left !== null){
    			if($.isFunction(ops.positions.left)){
    				left = ops.positions.left();
    			}else{
    				left = parseInt(ops.positions.left,10);
    			}
    		}else{
    			$o.addClass("auto-hcenter");
    		}
    		if(ops.positions.top !== undefined && ops.positions.top !== null){
    			if($.isFunction(ops.positions.top)){
    				top = ops.positions.top();
    			}else{
    				top = parseInt(ops.positions.top,10);
    			}
    		}else{
    			$o.addClass("auto-vcenter");
    		}
    		var  winw = $(window).width();
    		if(ops.positions.width){
    			if($.isFunction(ops.positions.width)){
    				width = ops.positions.width();
    			}else{
    				width = parseInt(ops.positions.width,10);
    			}
    		}else{
    			width = 600;
    		}
    		
    		if(ops.positions.height){
    			if($.isFunction(ops.positions.height)){
    				height = ops.positions.height();
    			}else{
    				height = ops.positions.height ;
    			}
    		}else{
    			height = $(window).height();
    		}
    		$o.height(height).width(width);
    		return {
    			left:left,
    			height:height,
    			width:width,
    			top:top
    		};
    	}
    	/**
    	 * 定位位置
    	 */
    	function placeVeil(o,ops){
    		var left,top,width,height;
    		var $o = $(o);
    		var positions = resize($o,ops);
    		left = positions.left;
    		top = positions.top;
    		width = positions.width;
    		height = positions.height;
    		
    		var $hd = $o.find(".veil-header");
    		var $ft = $o.find(".veil-footer");
    		var $bd = $o.find(".veil-body");
    		var $content = $bd.find(".veil-content");
    		var h = height - $hd.outerHeight() - $ft.outerHeight();
    		/*$bd.height(h);*/
    		if(ops.remote.url){
    			//$bd.attr("data-container","data-container").pageloader("goUrl",ops.remote);
    		}else if(ops.local.target){
    			var str = $.veilsHtml[ops.id];
    			if(!str){
    				str = $(ops.local.target).html();
    				$(ops.local.target).remove();
    				$.veilsHtml[ops.id]  = str;
    			}
    			$content.html(str)
    			
    		}else if(ops.local.content){
    			var contentStr = ops.local.content;
    			if($.isFunction(ops.local.content)){
    				contentStr = ops.local.content;
    			}
    			$content.html(contentStr);
    		}else{
    			
    		}
    		if($content.outerHeight()>h){
    			generateSlimScroll($bd,h);
    		}
    		$(window).on("resize",function(){
    			resize($o,ops);
    		});
    		 doAnimation($o,ops,positions);
    	}
    	function ListenerAnimation($o,type,callback) {
    		var bindings = type.toLowerCase()+" webkit"+type+" o"+type+" MS"+type;
    		$o.bind(bindings, function() {
            $o.unbind(bindings);
            if(typeof callback == "function") {
              callback();
            }
          });
        }
    	function doAnimation($o,ops,positions){
    		var width,top,left;
    		left = positions.left;
    		top = positions.top;
    		width = positions.width;
    		if($.isFunction(ops.css3Animation)){
    			$o.css({
        			left:left,
        			top:top
        		});
    			ListenerAnimation($o,"AnimationStart",ops.beforeAnimation);
    			ListenerAnimation($o,"TransitionStart",ops.beforeAnimation)
    			ListenerAnimation($o,"AnimationEnd",ops.callback);
    			ListenerAnimation($o,"TransitionEnd",ops.callback)
    			ops.css3Animation($o,positions);
    			
    		}else if($.isFunction(ops.jqueryAnimation)){
    			$.isFunction(ops.beforeAnimation)&&ops.beforeAnimation($o,positions);
    			ops.jqueryAnimation($o,positions,ops.callback);
    		}else{
    			$o.offset({
        			left:width,
        			top:top
        		}).animate({
        			left:left+"px"
        		},"500",function(){
        			ops.callback &&ops.callback(); 
        		});
    		}
    		
    	}
    }

        var generateSlimScroll = function(e,height) {
        	var $e = $(e[0] || e);
        	var t = height || $e.attr('data-height');
        	t = !t ? $e.height() : t;
        	var n = {
        		height : t/*,
        		alwaysVisible:true*/
        	};
        	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        			.test(navigator.userAgent)) {
        		n.wheelStep = 1;
        		n.touchScrollStep = 100
        	}
        	$e.slimScroll(n);
        };
    //全文搜索
    function globalSearch(){
    	if(!$.veils["search-veil"]){
    		initData();
    	}
        function initData(){
        	var data = [
			            {
	            	type:"数字政务云",
	        	    sClass:"fa fa-cloud",
	        	    items:[
	        	         {
	        	        	 text:"党建工作",
	        	        	 sClass:"fa fa-home",
	        	        	 bgClass:"figure-green",
	        	        	 number:"3"
	        	         },
	        	         {
	        	        	 text:"发展党员",
	        	        	 sClass:"fa fa-briefcase",
	        	        	 number:"3"
	        	         },
	        	         {
	        	        	 text:"换届选举",
	        	        	 sClass:"fa fa-check-square",
	        	        	 bgClass:"figure-orange",
	        	        	 number:"5"
	        	         },
	        	         {
	        	        	 text:"组织活动",
	        	        	 bgClass:"figure-green",
	        	        	 sClass:"fa fa-smile-o"
	        	         },
	        	         {
	        	        	 text:"收文",
	        	        	 sClass:"fa fa-file-o",
	        	        	 bgClass:"figure-blue",
	        	        	 number:"3"
	        	         },
	        	         {
	        	        	 text:"发文流程",
	        	        	 sClass:"fa fa-file-o",
	        	        	 bgClass:"figure-orange",
    	        	         url:"../oa/nigao-pub.html"
	        	         },
	        	         {
	        	        	 text:"政府采购",
	        	        	 sClass:"fa fa-share-square",
	        	        	 bgClass:"figure-orange"
	        	         },
	        	         {
	        	        	 text:"办公用品采购",
	        	        	 sClass:"fa fa-shopping-cart"
	        	         },
	        	         {
	        	        	 text:"报销",
	        	        	 bgClass:"figure-green",
	        	        	 sClass:"fa fa-bold",
	        	        	 number:"1"
	        	         },
	        	         {
	        	        	 text:"节假日排班",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-calendar"
	        	         },
	        	         {
	        	        	 text:"大事记",
	        	        	 sClass:"fa fa-book"
	        	         },
	        	         {
	        	        	 text:"视频会议",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-film"
	        	         },
	        	         {
	        	        	 text:"督查督办",
	        	        	 sClass:"fa fa-bullseye"
	        	         },
	        	         {
	        	        	 text:"会议通知",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-caret-square-o-down",
	        	        	 number:"2"
	        	         },
	        	         {
	        	        	 text:"会议纪要",
	        	        	 bgClass:"figure-green",
	        	        	 sClass:"fa  fa-certificate"
	        	         },
	        	         {
	        	        	 text:"考勤管理",
	        	        	 sClass:"fa fa-compass"
	        	         },
	        	         {
	        	        	 text:"人员信息管理",
	        	        	 bgClass:"figure-green",
	        	        	 sClass:"glyphicon glyphicon-user"
	        	         },
	        	         {
	        	        	 text:"组织机构管理",
	        	        	 sClass:"glyphicon glyphicon-indent-right"
	        	         },
	        	         {
	        	        	 text:"工作信息分开",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"glyphicon glyphicon-move"
	        	         },
	        	         {
	        	        	 text:"三公经费公开",
	        	        	 sClass:"fa fa-pagelines"
	        	         },
	        	         {
	        	        	 text:"行政档案管理",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"glyphicon glyphicon-hdd",
	        	        	 number:"4"
	        	         },
	        	         {
	        	        	 text:"人事档案管理",
	        	        	 sClass:"glyphicon glyphicon-tasks"
	        	         }	 	 	 	 	
        	         ]
	            },
	            {
	            	type:"精确业务云",
	        	    sClass:"fa fa-cloud",
	        	    items:[
	        	         {
	        	        	 text:"资格企业信息管理",
	        	        	 sClass:"fa fa-road", 
	        	        	 bgClass:"figure-orange"
	        	         },
	        	         {
	        	        	 text:"行政执法人员资质管理",
	        	        	 sClass:"fa  fa-mortar-board",
	        	        	 number:"1"
	        	         },
	        	         {
	        	        	 text:"粮食收购资格管理",
	        	        	 sClass:"fa fa-industry",
	        	        	 bgClass:"figure-green"
	        	         },
	        	         {
	        	        	 text:"诉求收集反馈",
	        	        	 sClass:"fa fa-map"
	        	         },
	        	         {
	        	        	 text:"涉粮企业基础信息管理",
	        	        	 sClass:"fa fa-life-buoy",
	        	        	 bgClass:"figure-orange"
	        	         },
	        	         {
	        	        	 text:"平价粮油日常监督检查",
	        	        	 sClass:"fa fa-map-signs",
	        	        	 number:"2"
	        	         },
	        	         {
	        	        	 text:"信用体系建设",
	        	        	 sClass:"fa fa-flag"
	        	         },
	        	         {
	        	        	 text:"信用度公布",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-map-o"
	        	         },
	        	         {
	        	        	 text:"检测业务流程管理",
	        	        	 bgClass:"figure-green",
	        	        	 sClass:"fa fa-qrcode",
	        	        	 number:"3"
	        	         },
	        	         {
	        	        	 text:"检测收费管理",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-cny"
	        	         },
	        	         {
	        	        	 text:"检测标准及方法管理",
	        	        	 sClass:"fa fa-file-text"
	        	         },
	        	         {
	        	        	 text:"实验室物资管理",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-object-ungroup"
	        	         },
	        	         {
	        	        	 text:"质量控制管理",
	        	        	 sClass:"fa fa-puzzle-piece",
	        	        	 number:"2"
	        	         },
	        	         {
	        	        	 text:"样品检验",
	        	        	 bgClass:"figure-blue",
	        	        	 sClass:"fa fa-calendar-check-o"
	        	         },
	        	         {
	        	        	 text:"粮食质量安全监督检查",
	        	        	 sClass:"fa fa-cc-amex",
	        	        	 number:"2"
	        	         },
	        	         {
	        	        	 text:"粮食质量检验查询统计",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-search"
	        	         },
	        	         {
	        	        	 text:"粮库管理",
	        	        	 sClass:"fa fa-get-pocket"
	        	         },
	        	         {
	        	        	 text:"仓储设施管理",
	        	        	 sClass:"fa fa-odnoklassniki"
	        	         },
	        	         {
	        	        	 text:"市场粮情分析",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-bar-chart-o",
	        	        	 url:"../gofs/resultList.html"
	        	         }
        	         ]
	            },
	            {
	            	type:"智能粮库云",
	        	    sClass:"fa fa-cloud",
	        	    items:[
	        	         {
	        	        	 text:"计划任务的制定与下发",
	        	        	 sClass:"fa fa-hand-paper-o"
	        	         },
	        	         {
	        	        	 text:"合同管理",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-sticky-note",
	        	        	 number:"12"
	        	         },
	        	         {
	        	        	 text:"客户管理",
	        	        	 sClass:"fa fa-group",
	        	        	 number:"1"
	        	         },
	        	         {
	        	        	 text:"设备管理",
	        	        	 bgClass:"figure-blue",
	        	        	 sClass:"fa fa-life-saver"
	        	         },
	        	         {
	        	        	 text:"台账管理",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-line-chart"
	        	         },
	        	         {
	        	        	 text:"出入库管理",
	        	        	 sClass:"fa fa-database",
	        	        	 url:"../iow/management.html"
	        	         },
	        	         {
	        	        	 text:"车辆自动过磅计量",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-calculator"
	        	         },
	        	         {
	        	        	 text:"出入库监控",
	        	        	 sClass:"fa fa-camera",
	        	             bgClass:"figure-green",
	        	             number:"1"
	        	         },
	        	         {
	        	        	 text:"财务结算",
	        	        	 sClass:"fa fa-cc-visa",
	        	        	 bgClass:"figure-orange"
	        	         },
	        	         {
	        	        	 text:"智能通风",
	        	        	 sClass:"fa fa-google-wallet"
	        	         },
	        	         {
	        	        	 text:"智能仓储",
	        	        	 sClass:"fa fa-strikethrough",
	        	        	 bgClass:"figure-blue"
	        	         },
	        	         {
	        	        	 text:"仓内视频监控",
	        	        	 sClass:"glyphicon glyphicon-eye-open",
	        	        	 bgClass:"figure-green"
	        	         },
	        	         {
	        	        	 text:"库区安全",
	        	        	 sClass:"fa fa-get-pocket",
	        	        	 url:"../swms/videocollect.html"
	        	         } 	
        	         ]
	            },
	            {
	            	type:"智能辅助决策云",
	        	    sClass:"fa fa-cloud",
	        	    items:[
//	        	         {
//	        	        	 text:"应急指挥",
//	        	        	 sClass:"fa fa-shirtsinbulk",
//	        	        	 url:"../emerg/emerg.html"
//	        	         },
	        	         {
	        	        	 text:"预案管理",
	        	        	 sClass:"fa fa-archive",
	        	        	 url:"../emerg/emergencyDuty.html",
	        	        	 bgClass:"figure-green"
	        	         },
	        	         {
	        	        	 text:"决策支撑",
	        	        	 sClass:"fa fa-flag",
	        	        	 url:"../emerg/decisionsupport.html"
	        	         },
	        	         {
	        	        	 text:"现场支持",
	        	        	 sClass:"fa fa-bullhorn",
	        	        	 url:"../emerg/fieldSupport.html",
	        	        	 bgClass:"figure-orange"
	        	         },
	        	         {
	        	        	 text:"资源调度",
	        	        	 sClass:"fa fa-truck",
	        	        	 url:"../emerg/resourceScheduling.html"
	        	         },
	        	         {
	        	        	 text:"应急宣传",
	        	        	 sClass:"fa fa-list-alt",
	        	        	 url:"../emerg/emergencypropaganda.html",
	        	        	 bgClass:"figure-green"
	        	         },
	        	         {
	        	        	 text:"上传下达",
	        	        	 sClass:"fa fa-unsorted",
	        	        	 url:"../emerg/report.html"
	        	         },
	        	         {
	        	        	 text:"整体评估",
	        	        	 sClass:"fa fa-signal",
	        	        	 url:"../emerg/overallEvaluation.html",
	        	        	 bgClass:"figure-green"
	        	         },
	        	         {
	        	        	 text:"决策联动",
	        	        	 sClass:"fa fa-link",
	        	        	 url:"#"
	        	         },
	        	         {
	        	        	 text:"培训演练",
	        	        	 sClass:"fa fa-shield",
	        	        	 bgClass:"figure-orange"
	        	         },
	        	         {
	        	        	 text:"屏幕设置",
	        	        	 sClass:"fa fa-qrcode",
	        	        	 url:"../emerg/eremg-setup.html",
	        	        	 bgClass:"figure-green"
	        	         }
        	         ]
	            },
	            {
	            	type:"电子商务云",
	        	    sClass:"fa fa-cloud",
	        	    items:[
	        	         
        	         ]
	            },
	            {
	            	type:"门户云",
	        	    sClass:"fa fa-cloud",
	        	    items:[
	        	         {
	        	        	 text:"政务公开",
	        	        	 sClass:"fa fa-opencart",
	        	        	 bgClass:"figure-green",
	        	        	 number:"3"
	        	         },
	        	         {
	        	        	 text:"调查问卷",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-paper-plane-o",
	        	        	 number:"7"
	        	         },
	        	         {
	        	        	 text:"通知公告",
	        	        	 sClass:"fa fa-phone-square",
	        	        	 number:"9"
	        	         },
	        	         {
	        	        	 text:"粮情快报",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-newspaper-o"
	        	         },
	        	         {
	        	        	 text:"政策法规宣传",
	        	        	 sClass:"fa fa-pencil-square-o",
	        	        	 bgClass:"figure-green"
	        	         },
	        	         {
	        	        	 text:"网民互动",
	        	        	 sClass:"fa fa-thumbs-o-up",
	        	        	 number:"2"
	        	         },
	        	         {
	        	        	 text:"舆情监控",
	        	        	 bgClass:"figure-orange",
	        	        	 sClass:"fa fa-commenting"
	        	         },
	        	         {
	        	        	 text:"友情链接",
	        	        	 sClass:"fa fa-link"
	        	         },
	        	         {
	        	        	 text:"粮情网刊",
	        	        	 bgClass:"figure-green",
	        	        	 sClass:"fa fa-file-text-o"
	        	         } 	
        	         ]
	            }
			];	
        	//全文搜索
        	var $c = $('<div style="padding:10px 15px;"></div>');
        	var $wraper = $('<div id="search-content" style="display: none;"></div>');
        	$.each(data,function(i,idata){
        		var $oneType = $('<section class="s-section"></section>');
        		var $title = $('<ul class="tab-title clearfix" ><li class="active"> <a href="#tab-1" data-toggle="tab"><i class=""></i> <span></span></a></li></ul>');
        		$title.find("span").text(idata.type).end().find("i").addClass(idata.sClass);
        		var $content = $('<ul class="tab-ul clearfix"></ul>');
        		$.each(idata.items,function(ii,item){
        			if(!item.number){
						if(!item.url){
							var $item = $(' <li class="sli"> <a><span class="figure" ><i class="icon-block"></i></span> <p class="padding-top"></p></a><div class="add-collect collect"><i class="fa fa-star-o"></i><span class="state">加入收藏</span></div><div class="show-collect" style="display:none;"><i class="fa fa-star"></i></div></li>');
						}else{
							var $item = $(' <li class="sli"> <a><span class="figure" ><i class="icon-block"></i></span> <p class="padding-top"></p></a><div class="cancel-collect collect"> <i class="fa fa-star"></i><span class="state">取消收藏</span></div><div class="show-collect"><i class="fa fa-star"></i></div></li>');
						}
					}else{
						if(!item.url){
							var $item = $(' <li class="sli"> <a><span class="figure"><i class="icon-block"></i><label class="number"></label></span> <p class="padding-top"></p></a><div class="add-collect collect"> <i class="fa fa-star-o"></i> <span class="state">加入收藏</span></div><div class="show-collect" style="display:none;"><i class="fa fa-star"></i></div> </li>');
						}else{
							var $item = $(' <li class="sli"> <a><span class="figure" ><i class="icon-block"></i><label class="number"></label></span> <p class="padding-top"></p></a><div class="cancel-collect collect"> <i class="fa fa-star"></i><span class="state"> 取消收藏</span></div><div class="show-collect"><i class="fa fa-star"></i></div> </li>');
						}
					}
        			
        			$item.find("i.icon-block").addClass(item.sClass).end().find(".number").text(item.number);
        			$item.find("p").text(item.text);
        			$item.find("span.figure").addClass(item.bgClass||'figure-blue');
        			if(item.url!=null){
        				$item.find("a").attr("href",item.url);
        			}
        			//$item.find("i").addClass(item.sClass).end().find("p").text(item.text).end().find(".number").text(item.number);
            		$content.append($item);
        		});
        		$oneType.append($title);
        		$oneType.append($content);
        		$c.append($oneType)
        	});
        	
        	var $loading = $('<div class="mylodaing"><div class="wrapper"><div class="preloader_3"></div></div></div>');
        	var $tip = $('<div class="alert alert-warning fade in empty-s-search" style="display: none;"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-info"></i>未找到符合条件的信息</div></div>')
        	$wraper.append($c).append($loading).append($tip);
        	$(document.body).append($wraper);
        }
    	function dofilter(text){
    		var $tip = $(".search-veil .empty-s-search");
    		var $load = $(".search-veil .mylodaing");
    		$tip.add(".s-section").add(".sli").hide();
    		$tip.hide();
    		
    			$load.show().fadeOut(1000,function(){
	           		 $(".s-section").addClass("tag");
	           		var $p = $(".sli p:contains('"+text+"')");
	           		var $section = $p.closest(".s-section").removeClass("tag");
	           		if($(".s-section:not(.tag)").length == 0 ){
	           			$tip.fadeIn();
	           		}
	           		var $sli = $p.closest(".sli");
	           		$section.add($sli).fadeIn();
	           		var $_hide_p = $(".sli p:not(:contains('"+text+"'))");
	           		$_hide_p.closest(".sli").hide();
	           		$_hide_p.closest(".tag").hide();
	           		
	       		});
    	}
    	
    	
    	$(".inp-search").on("blur",function(){
    		var len = $(".search-veil:visible").length;
    		var text = $.trim(this.value)
    		if(text&&len==0){
    			fveil({
    				id:"search-veil",
        			sClass:"search-veil",
        			positions:{
    					left:function(){
    						return	$(".sideBar").is(":visible")?$(".sideBar").outerWidth() : $(".sideBar-open").outerWidth();
    					},
    					top:116,
    					width:function(){
    						return	$(".sideBar").is(":visible")? $(window).width()-$(".sideBar").outerWidth() : $(window).width()-$(".sideBar-open").outerWidth();
    					},
    					height:function(){
    						return $(window).height()-116;
    					}
    				},
    				local:{
    					target:"#search-content"//为jquery选择器
    				},
    				callback:function(){
    					dofilter(text)
    				}
        		});
    		}else if(!text&&len>0){
    			$.veils['search-veil'].hideVeil();
    			
    		}else{
    			dofilter(text)
    		}
    	});
    }
  
    //九宫格
    function appRelation(){
    	
    	function initHtml(){
    		if(!$.veils["app-veil"]){
    			var data = [
    			            {
    	            	type:"数字政务云",
    	        	    sClass:"fa fa-cloud",
    	        	    items:[
    	        	         {
    	        	        	 text:"党建工作",
    	        	        	 sClass:"fa fa-home",
    	        	        	 bgClass:"figure-green",
    	        	        	 number:"3"
    	        	         },
    	        	         {
    	        	        	 text:"发展党员",
    	        	        	 sClass:"fa fa-briefcase",
    	        	        	 number:"3"
    	        	         },
    	        	         {
    	        	        	 text:"换届选举",
    	        	        	 sClass:"fa fa-check-square",
    	        	        	 bgClass:"figure-orange",
    	        	        	 number:"5"
    	        	         },
    	        	         {
    	        	        	 text:"组织活动",
    	        	        	 bgClass:"figure-green",
    	        	        	 sClass:"fa fa-smile-o"
    	        	         },
    	        	         {
    	        	        	 text:"收文",
    	        	        	 sClass:"fa fa-file-o",
    	        	        	 bgClass:"figure-blue",
    	        	        	 number:"3"
    	        	         },
    	        	         {
    	        	        	 text:"发文流程",
    	        	        	 sClass:"fa fa-file-o",
    	        	        	 bgClass:"figure-orange",
        	        	         url:"../oa/nigao-pub.html"
    	        	         },
    	        	         {
    	        	        	 text:"政府采购",
    	        	        	 sClass:"fa fa-share-square",
    	        	        	 bgClass:"figure-orange"
    	        	         },
    	        	         {
    	        	        	 text:"办公用品采购",
    	        	        	 sClass:"fa fa-shopping-cart"
    	        	         },
    	        	         {
    	        	        	 text:"报销",
    	        	        	 bgClass:"figure-green",
    	        	        	 sClass:"fa fa-bold",
    	        	        	 number:"1"
    	        	         },
    	        	         {
    	        	        	 text:"节假日排班",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-calendar"
    	        	         },
    	        	         {
    	        	        	 text:"大事记",
    	        	        	 sClass:"fa fa-book"
    	        	         },
    	        	         {
    	        	        	 text:"视频会议",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-film"
    	        	         },
    	        	         {
    	        	        	 text:"督查督办",
    	        	        	 sClass:"fa fa-bullseye"
    	        	         },
    	        	         {
    	        	        	 text:"会议通知",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-caret-square-o-down",
    	        	        	 number:"2"
    	        	         },
    	        	         {
    	        	        	 text:"会议纪要",
    	        	        	 bgClass:"figure-green",
    	        	        	 sClass:"fa  fa-certificate"
    	        	         },
    	        	         {
    	        	        	 text:"考勤管理",
    	        	        	 sClass:"fa fa-compass"
    	        	         },
    	        	         {
    	        	        	 text:"人员信息管理",
    	        	        	 bgClass:"figure-green",
    	        	        	 sClass:"glyphicon glyphicon-user"
    	        	         },
    	        	         {
    	        	        	 text:"组织机构管理",
    	        	        	 sClass:"glyphicon glyphicon-indent-right"
    	        	         },
    	        	         {
    	        	        	 text:"工作信息分开",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"glyphicon glyphicon-move"
    	        	         },
    	        	         {
    	        	        	 text:"三公经费公开",
    	        	        	 sClass:"fa fa-pagelines"
    	        	         },
    	        	         {
    	        	        	 text:"行政档案管理",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"glyphicon glyphicon-hdd",
    	        	        	 number:"4"
    	        	         },
    	        	         {
    	        	        	 text:"人事档案管理",
    	        	        	 sClass:"glyphicon glyphicon-tasks"
    	        	         }	 	 	 	 	
	        	         ]
    	            },
    	            {
    	            	type:"精确业务云",
    	        	    sClass:"fa fa-cloud",
    	        	    items:[
    	        	         {
    	        	        	 text:"资格企业信息管理",
    	        	        	 sClass:"fa fa-road", 
    	        	        	 bgClass:"figure-orange"
    	        	         },
    	        	         {
    	        	        	 text:"行政执法人员资质管理",
    	        	        	 sClass:"fa  fa-mortar-board",
    	        	        	 number:"1"
    	        	         },
    	        	         {
    	        	        	 text:"粮食收购资格管理",
    	        	        	 sClass:"fa fa-industry",
    	        	        	 bgClass:"figure-green"
    	        	         },
    	        	         {
    	        	        	 text:"诉求收集反馈",
    	        	        	 sClass:"fa fa-map"
    	        	         },
    	        	         {
    	        	        	 text:"涉粮企业基础信息管理",
    	        	        	 sClass:"fa fa-life-buoy",
    	        	        	 bgClass:"figure-orange"
    	        	         },
    	        	         {
    	        	        	 text:"平价粮油日常监督检查",
    	        	        	 sClass:"fa fa-map-signs",
    	        	        	 number:"2"
    	        	         },
    	        	         {
    	        	        	 text:"信用体系建设",
    	        	        	 sClass:"fa fa-flag"
    	        	         },
    	        	         {
    	        	        	 text:"信用度公布",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-map-o"
    	        	         },
    	        	         {
    	        	        	 text:"检测业务流程管理",
    	        	        	 bgClass:"figure-green",
    	        	        	 sClass:"fa fa-qrcode",
    	        	        	 number:"3"
    	        	         },
    	        	         {
    	        	        	 text:"检测收费管理",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-cny"
    	        	         },
    	        	         {
    	        	        	 text:"检测标准及方法管理",
    	        	        	 sClass:"fa fa-file-text"
    	        	         },
    	        	         {
    	        	        	 text:"实验室物资管理",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-object-ungroup"
    	        	         },
    	        	         {
    	        	        	 text:"质量控制管理",
    	        	        	 sClass:"fa fa-puzzle-piece",
    	        	        	 number:"2"
    	        	         },
    	        	         {
    	        	        	 text:"样品检验",
    	        	        	 bgClass:"figure-blue",
    	        	        	 sClass:"fa fa-calendar-check-o"
    	        	         },
    	        	         {
    	        	        	 text:"粮食质量安全监督检查",
    	        	        	 sClass:"fa fa-cc-amex",
    	        	        	 number:"2"
    	        	         },
    	        	         {
    	        	        	 text:"粮食质量检验查询统计",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-search"
    	        	         },
    	        	         {
    	        	        	 text:"粮库管理",
    	        	        	 sClass:"fa fa-get-pocket"
    	        	         },
    	        	         {
    	        	        	 text:"仓储设施管理",
    	        	        	 sClass:"fa fa-odnoklassniki"
    	        	         },
    	        	         {
    	        	        	 text:"市场粮情分析",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-bar-chart-o",
    	        	        	 url:"../gofs/resultList.html"
    	        	         }
	        	         ]
    	            },
    	            {
    	            	type:"智能粮库云",
    	        	    sClass:"fa fa-cloud",
    	        	    items:[
    	        	         {
    	        	        	 text:"计划任务的制定与下发",
    	        	        	 sClass:"fa fa-hand-paper-o"
    	        	         },
    	        	         {
    	        	        	 text:"合同管理",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-sticky-note",
    	        	        	 number:"12"
    	        	         },
    	        	         {
    	        	        	 text:"客户管理",
    	        	        	 sClass:"fa fa-group",
    	        	        	 number:"1"
    	        	         },
    	        	         {
    	        	        	 text:"设备管理",
    	        	        	 bgClass:"figure-blue",
    	        	        	 sClass:"fa fa-life-saver"
    	        	         },
    	        	         {
    	        	        	 text:"台账管理",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-line-chart"
    	        	         },
    	        	         {
    	        	        	 text:"出入库管理",
    	        	        	 sClass:"fa fa-database",
    	        	        	 url:"../iow/management.html"
    	        	         },
    	        	         {
    	        	        	 text:"车辆自动过磅计量",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-calculator"
    	        	         },
    	        	         {
    	        	        	 text:"出入库监控",
    	        	        	 sClass:"fa fa-camera",
    	        	             bgClass:"figure-green",
    	        	             number:"1"
    	        	         },
    	        	         {
    	        	        	 text:"财务结算",
    	        	        	 sClass:"fa fa-cc-visa",
    	        	        	 bgClass:"figure-orange"
    	        	         },
    	        	         {
    	        	        	 text:"智能通风",
    	        	        	 sClass:"fa fa-google-wallet"
    	        	         },
    	        	         {
    	        	        	 text:"智能仓储",
    	        	        	 sClass:"fa fa-strikethrough",
    	        	        	 bgClass:"figure-blue"
    	        	         },
    	        	         {
    	        	        	 text:"仓内视频监控",
    	        	        	 sClass:"glyphicon glyphicon-eye-open",
    	        	        	 bgClass:"figure-green"
    	        	         },
    	        	         {
    	        	        	 text:"库区安全",
    	        	        	 sClass:"fa fa-get-pocket",
    	        	        	 url:"../swms/videocollect.html"
    	        	         } 	
	        	         ]
    	            },
    	            {
    	            	type:"智能辅助决策云",
    	        	    sClass:"fa fa-cloud",
    	        	    items:[
//    		        	         {
//    		        	        	 text:"应急指挥",
//    		        	        	 sClass:"fa fa-shirtsinbulk",
//    		        	        	 url:"../emerg/emerg.html"
//    		        	         },
    		        	         {
    		        	        	 text:"预案管理",
    		        	        	 sClass:"fa fa-archive",
    		        	        	 url:"../emerg/emergencyDuty.html",
    		        	        	 bgClass:"figure-green"
    		        	         },
    		        	         {
    		        	        	 text:"决策支撑",
    		        	        	 sClass:"fa fa-flag",
    		        	        	 url:"../emerg/decisionsupport.html"
    		        	         },
    		        	         {
    		        	        	 text:"现场支持",
    		        	        	 sClass:"fa fa-bullhorn",
    		        	        	 url:"../emerg/fieldSupport.html",
    		        	        	 bgClass:"figure-orange"
    		        	         },
    		        	         {
    		        	        	 text:"资源调度",
    		        	        	 sClass:"fa fa-truck",
    		        	        	 url:"../emerg/resourceScheduling.html"
    		        	         },
    		        	         {
    		        	        	 text:"应急宣传",
    		        	        	 sClass:"fa fa-list-alt",
    		        	        	 url:"../emerg/emergencypropaganda.html",
    		        	        	 bgClass:"figure-green"
    		        	         },
    		        	         {
    		        	        	 text:"上传下达",
    		        	        	 sClass:"fa fa-unsorted",
    		        	        	 url:"../emerg/report.html"
    		        	         },
    		        	         {
    		        	        	 text:"整体评估",
    		        	        	 sClass:"fa fa-signal",
    		        	        	 url:"../emerg/overallEvaluation.html",
    		        	        	 bgClass:"figure-green"
    		        	         },
    		        	         {
    		        	        	 text:"决策联动",
    		        	        	 sClass:"fa fa-link",
    		        	        	 url:"#"
    		        	         },
    		        	         {
    		        	        	 text:"培训演练",
    		        	        	 sClass:"fa fa-shield",
    		        	        	 bgClass:"figure-orange"
    		        	         },
    		        	         {
    		        	        	 text:"屏幕设置",
    		        	        	 sClass:"fa fa-qrcode",
    		        	        	 url:"../emerg/eremg-setup.html",
    		        	        	 bgClass:"figure-green"
    		        	         }
    	        	         ]
    	            },
    	            {
    	            	type:"电子商务云",
    	        	    sClass:"fa fa-cloud",
    	        	    items:[
    	        	         
	        	         ]
    	            },
    	            {
    	            	type:"门户云",
    	        	    sClass:"fa fa-cloud",
    	        	    items:[
    	        	         {
    	        	        	 text:"政务公开",
    	        	        	 sClass:"fa fa-opencart",
    	        	        	 bgClass:"figure-green",
    	        	        	 number:"3"
    	        	         },
    	        	         {
    	        	        	 text:"调查问卷",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-paper-plane-o",
    	        	        	 number:"7"
    	        	         },
    	        	         {
    	        	        	 text:"通知公告",
    	        	        	 sClass:"fa fa-phone-square",
    	        	        	 number:"9"
    	        	         },
    	        	         {
    	        	        	 text:"粮情快报",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-newspaper-o"
    	        	         },
    	        	         {
    	        	        	 text:"政策法规宣传",
    	        	        	 sClass:"fa fa-pencil-square-o",
    	        	        	 bgClass:"figure-green"
    	        	         },
    	        	         {
    	        	        	 text:"网民互动",
    	        	        	 sClass:"fa fa-thumbs-o-up",
    	        	        	 number:"2"
    	        	         },
    	        	         {
    	        	        	 text:"舆情监控",
    	        	        	 bgClass:"figure-orange",
    	        	        	 sClass:"fa fa-commenting"
    	        	         },
    	        	         {
    	        	        	 text:"友情链接",
    	        	        	 sClass:"fa fa-link"
    	        	         },
    	        	         {
    	        	        	 text:"粮情网刊",
    	        	        	 bgClass:"figure-green",
    	        	        	 sClass:"fa fa-file-text-o"
    	        	         } 	
	        	         ]
    	            }
    				 ];	
    			var $wraper = $("<div id='app-relation' style='display:none;'><div class='app-relation-veil '></div></div>").find("div").css({
    			    'padding': '10px 15px',
    			    'width': '100%',
    		    	'overflow-y': 'hidden'
    			}).end();
    			var $container = $wraper.find("div");
    			var $ul = $('<ul class="tab-title clearfix" ></ul>');
    			var $tabContent = $('<div  class="tab-content"></div>');
    			$.each(data,function(i,idata){
    				i++;
    				var $li = $('<li class=""><a href="#app-tab-'+i+'" data-toggle="tab"><i class=""></i><span></span></a></li>');
    				$li.find("i").addClass(idata.sClass).end().find("span").text(idata.type);
    				$ul.append($li);
    				var $tab = $('<div id="app-tab-'+i+'" class="tab-pane fade"> <ul class="tab-ul"></ul></div>');
    				var $tab_ul = $tab.find("ul");
    				if(i==1){
    					$tab.addClass("in active");
    					$li.addClass("active");
    				}
    				$.each(idata.items,function(j,item){
    					if(!item.number){
    						if(!item.url){
    							var $li = $(' <li class="block-li"> <a><span class="figure" ><i class="icon-block"></i></span> <p class="padding-top"></p></a><div class="add-collect collect"><i class="fa fa-star-o"></i><span class="state"> 加入收藏</span></div><div class="show-collect" style="display:none;"><i class="fa fa-star"></i></div></li>');
    						}else{
    							var $li = $(' <li class="block-li"> <a><span class="figure" ><i class="icon-block"></i></span> <p class="padding-top"></p></a><div class="cancel-collect collect"> <i class="fa fa-star"></i><span class="state"> 取消收藏</span></div><div class="show-collect"><i class="fa fa-star"></i></div></li>');
    						}
    					}else{
    						if(!item.url){
    							var $li = $(' <li class="block-li"> <a><span class="figure"><i class="icon-block"></i><label class="number"></label></span> <p class="padding-top"></p></a><div class="add-collect collect"> <i class="fa fa-star-o"></i> <span class="state">加入收藏</span></div><div class="show-collect" style="display:none;"><i class="fa fa-star"></i></div> </li>');
    						}else{
    							var $li = $(' <li class="block-li"> <a><span class="figure" ><i class="icon-block"></i><label class="number"></label></span> <p class="padding-top"></p></a><div class="cancel-collect collect"> <i class="fa fa-star"></i><span class="state"> 取消收藏</span></div><div class="show-collect"><i class="fa fa-star"></i></div> </li>');
    						}
    					}
    					$li.find("i.icon-block").addClass(item.sClass).end().find(".number").text(item.number);
    					$li.find("p").text(item.text);
    					$li.find("span.figure").addClass(item.bgClass||'figure-blue');
            			if(item.url!=null){
            				$li.find("a").attr("href",item.url);
            			}else{
            				$li.find("a").attr("href","javascript:void(0)");
            			}
    					$tab_ul.append($li);
    				});
    				$tabContent.append($tab);
    			});
    			$container.append($ul).append($tabContent);
    			$(document.body).append($wraper);
    		}
    	}
    	initHtml();
    	$("img[class='mt5']").unbind("clik").bind("click",function(event){
    		event.stopPropagation();
    		if($(".app-veil.zoomIn").length==0){
    			fveil({
        			id:"app-veil",
        			css3Animation:function($o){
        				$o.removeClass("zoomOut").addClass("zoomIn animated");
        			},
        			sClass:"app-veil",
        			positions:{
    					left:function(){
    						return	$(".sideBar").is(":visible")?$(".sideBar").outerWidth() : $(".sideBar-open").outerWidth();
    					},
    					top:61,
    					width:function(){
    						return	$(".sideBar").is(":visible")? $(window).width()-$(".sideBar").outerWidth() : $(window).width()-$(".sideBar-open").outerWidth();
    					},
    					height:function(){
    						return $(window).height()-116;
    					}
    				},
    				local:{
    					target:"#app-relation"//为jquery选择器
    				}
        		});
    		}else{
    			var $veil  = $("#app-veil");
    			$veil.removeClass("zoomIn").addClass("zoomOut");
    			setTimeout(function(){
    				$veil.hide().removeClass("zoomIn zoomOut");
    			},500);
    			
    		}
    		
    	});
    	//九宫格添加收藏
    	$(document).on("click",".add-collect",function(){
			var $li = $(this).closest(".block-li"); 
			var offset = $li.offset();
			var w = $li.width();
			var h = $li.height();
			var $menuBar = $(".sideBar");
			var $openBar = $(".sideBar-open");
			var $bar = $menuBar.is(":visible")? $menuBar : $openBar;
			var $last_li = $bar.find("li:visible:last");
			var last_li_offset =$last_li.offset();
			var $fig = $li.find("span.figure");
			
			$fig.clone().addClass("flying").fly({
				speed: 1.2,
				vertex_Rtop:200,
				onMoving : function($el,count,steps){
					var scale = 1- count*1.0/steps;
					if(scale<0.5){
						scale  = 0.5;
					}
					$el[0].style.transform = "scale3d("+scale+","+scale+","+scale+")";
				 },
				 start: {
					   left: event.pageX, 
		                top: event.pageY, 
				    	 width:80,
				    	 height:80
				 }, // top, left, width, height
			     end: {
			    	 top : last_li_offset.top+$last_li.height(),
			    	 left : last_li_offset.left,
			    	 width:0,
			    	 height:0
			     },
				 onEnd: function(){ //结束回调 
		                this.destory(); //移除dom
		                $("li.houbu").fadeIn();
		                $(".show-collect", $li).show();
		                $li.find(".fa-star-o")
		                .toggleClass("fa-star")
		                .toggleClass("fa-star-o")
		                .end()
		                .find(".state").text("取消收藏");
		            } 
			});
		});
    	//九宫格取消收藏
    	$(document).on("click",".cancel-collect",function(){
			var $li = $(this).closest(".block-li"); 
			var offset = $li.offset();
			var w = $li.width();
			var h = $li.height();
			var $menuBar = $(".sideBar");
			var $openBar = $(".sideBar-open");
			var $bar = $menuBar.is(":visible")? $menuBar : $openBar;
			var $last_li = $bar.find("li:visible:last");
			var last_li_offset =$last_li.offset();
			var $fig = $li.find("span.figure");
			
			$fig.clone().addClass("flying").fly({
				speed: 1.2,
				vertex_Rtop:200,
				onMoving : function($el,count,steps){
					var scale = count*1.0/steps;
					if(scale<0.4){
						scale  = 0.4;
					}
					if(scale>1){
						scale = 1;
					}
					$el[0].style.transform = "scale3d("+scale+","+scale+","+scale+")";
				 },
				 start: {
					  
				    	 top : last_li_offset.top+$last_li.height(),
				    	 left : last_li_offset.left,
				    	 width:0,
				    	 height:0
				 }, // top, left, width, height
			     end: {
			    	
			    	 left: event.pageX, 
		                top: event.pageY, 
				    	 width:80,
				    	 height:80
			    	 
			     },
				 onEnd: function(){ //结束回调 
		                this.destory(); //移除dom 
		                $("li.houbu").fadeOut();
		                $(".show-collect", $li).hide();
		                $li.find(".fa-star")
		                .toggleClass("fa-star-o")
		                .toggleClass("fa-star")
		                .end()
		                .find(".state").text("加入收藏");
		            } 
			});
		});
    };
 

$(document).ready(function(){
// 内容区左侧菜单收起展开
	var $this;
    $("a.open-list-a").toggle(
        function(){
            $this=$(this);
            $(".nav-list").find("a").removeClass("active").removeClass("active2");
            $this.addClass("active2");
            $this.next("ul.nav-sub-list").slideDown();
        }, function(){
            $this=$(this);
            $(".nav-list").find("a").removeClass("active").removeClass("active2");
            $this.removeClass("active2");
            $this.addClass("active");
            $this.next("ul.nav-sub-list").slideUp();
     });

    $(".nav-sub-list > li > a").click(function(){
        $(".nav-sub-list").find("a").removeClass("active-a");
        $(this).addClass("active-a");
    });
    
    
    //左侧菜单active切换
    $(".nav-list>li>a").on("click",function(){
    	var $this=$(this);
    	if(!$this.hasClass("active")){
    		$this.addClass("active");
    		$(".nav-list>li>a").not($this).removeClass("active").removeClass("active2");
    	}
    })
    //End
    
});



   