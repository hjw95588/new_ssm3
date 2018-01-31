/////start////
/**
 * 设置未来(全局)的AJAX请求默认选项
 * 主要设置了AJAX请求(非跨域）遇到Session过期的情况
 */
//清空ajax缓存
	$.ajaxSetup({
		cache : false
	});

$.ajaxSetup({
    complete: function(xhr,status) {
        var redirect = xhr.getResponseHeader("redirect");
        var url = xhr.getResponseHeader('url');    
        if(redirect!=null) { 
            var top = getTopWinow();           
            top.location.href = url;               
        }
    }
});

/**
 * 在页面中任何嵌套层次的窗口中获取顶层窗口
 * @return 当前页面的顶层窗口对象
 */
function getTopWinow(){
    var p = window;
    while(p != p.parent){
        p = p.parent;
    }
    return p;
}

function loadTopWindow(){
	//判断当前窗口是否有顶级窗口，如果有就让当前的窗口的地址栏发生变化，    
	//这样就可以让登陆窗口显示在整个窗口了    
	console.log(window.top)
	console.log(window.top.document.URL)
	console.log(document.URL)
	
}

function checkSession(){
	//console.log(window.top)
	
	
	/* var redirect = xhr.getResponseHeader("redirect");
     var url = xhr.getResponseHeader('url');    
     if(redirect!=null) { 
         var top = getTopWinow();           
         top.location.href = url;               
     }*/
}

///////////end////