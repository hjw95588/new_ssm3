var url={
		pageUrl:"/ssm_demo/pub/pageQuery.do",
		deleteUrl:"/ssm_demo/pub/deletePublish.do",
}

$(function(){
	
	var entity={
			typeId:"title_2" /*站长推荐的内容*/,
			pageSize:"7",
			pageNum:"1"
	}
	
	/**
	 * 获取首页的文章推荐
	 */
	 $.ajax({
			dataType : "JSON",
			type : "POST",
			url : url.pageUrl,
			contentType : "application/json; charset=utf-8",
			data : JSON.stringify(entity),
			success : function(msg) {
				var data=msg.list;
				var str="";
				console.log(data.length)
				for(var x=0;x<data.length;x++){
					str+='<div class="blogs">';
					str+='<figure><img src="/ssm_demo/uploads/'+data[x].photo+'"></figure>';
					str+='<ul>';
					str+='<h3>';
					str+='<a href="/">'+data[x].title+'</a>';
					str+='</h3>';
					str+='<p >'+data[x].content.split("</p>")[2]+'...</p>';
					str+='<p class="autor">';
					str+='<span class="lm f_l">';
					str+='<a href="/">个人博客</a>';
					str+='</span>';
					str+='<span class="dtime f_l">'+timeStamp2String(data[x].updateTime)+'</span>';
					str+='<span class="viewnum f_r">浏览（<a href="/">459</a>）</span>';
					str+='<span class="pingl f_r">评论（<a href="/">30</a>）</span>';
					str+='</p>';
					str+='</ul>';
					str+='</div>';
					
				}
				$(".topnews").append(str);
			}
	 });
	
	
	/**
	 * 右边的 点击排行，最新文章，站长推荐
	 */
	
	
	
})