var url={
		pageUrl:"/user/pageQuery.do",
		deleteUrl:"/user/deleteUser.do",
		exportUrl:"/user/exportUser.do"
}

var list = {
	pageList : function(pageNum, pageSize) {
		
		$("#checkbox-2").attr('checked',false);
		var account = $("#account").val();
		var username = $("#username").val();
		var startTime = $("#startTime").val();
		var endTime = $("#endTime").val();
		var sex = $("#sex").val();
		var mobile = $("#mobile").val();

		var entity = {
			account : account,
			username : username,
			startTime : startTime,
			endTime : endTime,
			sex : sex,
			mobile : mobile,
			pageNum : pageNum,
			pageSize : pageSize
		}

		      $.ajax({
		    	   async:false,
					dataType : "JSON",
					type : "POST",
					url : url.pageUrl,
					contentType : "application/json; charset=utf-8",
					data : JSON.stringify(entity),
					success : function(msg) {
						if (msg != null) {
							var tbody = $("#tbody");
							var alist = msg.list; // 集合
							var total = msg.totalRecords; // 总记录数
							var totalPageNum=msg.totalPageNum;  //总页数
							var pageNum=msg.pageNum;  //当前页码
							
							var str = "";
							if (total > 0) 
							{
								for (var x = 0; x < alist.length; x++) 
								{

									str += '<tr>';
									str += '<td>';
									str += '<input type="checkbox"  class="check_view_state myshow"  name="check" value='+alist[x].id+'  onclick="isCheckAll();" />';
									str +='<label for="check"></label>'
									str += '</td>';
									str += '<td>';
									str += (x + 1);
									str += '</td>';
									str += '<td >';
									str += alist[x].account;
									str += '</td>';
									str += '<td >';
									str += alist[x].username;
									str += '</td>';
									str += '<td>';
									str += alist[x].sex;
									str += '</td>';
									str += '<td>';
									str += alist[x].mobile;
									str += '</td>';
									str += '<td>';
									str += timeStamp2String(alist[x].birth);
									str += '</td>';
									str += '<td>';
									str += timeDate(alist[x].updateTime);
									str += '</td>';
									str += '</tr>';
								}
								
							} 
							else 
							{
								str += '<tr >';
								str += '<td colspan="8">';
								str += '没有满足条件的数据';
								str += '</td>';
								str += '</tr>';
							}

							tbody.html(str);
							
							//遍历页码
							//console.log(JSON.stringify(msg))
							var begin=0,end=0;
							var sts='';
							if(totalPageNum<5){
								begin=1;
								end=totalPageNum;
							}
							else{
								begin=pageNum-2;
								end=pageNum+2;
								if(begin<1){
									begin=1;
									end=5;
								}
								if(end>totalPageNum){
									end=totalPageNum;
									begin=totalPageNum-4;
								}
							}
							for(var x=begin;x<=end;x++){
								
								if(x==pageNum){
									//'<a id="sh" onclick="pageChange('+x+');">';
									
									sts=sts+'<a id="sh">';
									sts=sts+x;
									sts=sts+'</a>';
								}
								else{
									sts=sts+'<a  onclick="pageChange('+x+');">';
									sts=sts+x;
									sts=sts+'</a>';
								}
							
							}
							console.log(sts)
							$("#test").html(sts)
							
							$("#pageNum").val(msg.pageNum); //当前页码
							$("#num").html(msg.pageNum); //当前页码
							$("#total").html(msg.totalPageNum); //总页数
							$("#count").html("共"+msg.totalRecords+"条记录");
							list.pageOperate(msg);
						}
					}
				})
	},
	/**
	 * 分页菜单事件处理，上一页，下一页，首页，尾页
	 * @param page
	 * @param type  type==1  miList   
	 */
	pageOperate : function(page){
		/**
		 * 首页
         */
		if(page.pageNum==1){
			$('#first').unbind('click');
		}else{
			$("#first").attr("disabled",false);
			$('#first').unbind('click');
			$("#first").click(function(){				
				list.pageList(1, page.pageSize);
			});
			
		}
		/**
		 * 尾页
         */
		if(page.totalPageNum==page.pageNum){
			$('#end').unbind('click');
		}else{
			$("#end").attr("disabled",false);
			$('#end').unbind('click');
			$("#end").click(function(){
				list.pageList(page.totalPageNum, page.pageSize);	
			});
				
		}
		/**
		 * 上一页
		 */
		//如果当前页码大于1，才有点击事件
		if(page.pageNum>1)
		{
			$("#prev").removeAttr("class");
			$('#prev').unbind('click');
			$("#prev").click(function(){				
				list.pageList(page.pageNum-1, page.pageSize);	
			});
			
		}else{
			$('#prev').unbind('click');
			$("#prev").attr("class", "disabled-pages");
		}
		/**
		 * 下一页
		 */
		
		//如果当前页码，小于等于总页数，点击事件有限
		if(page.pageNum<page.totalPageNum){
			$("#next").removeAttr("class");
			$('#next').unbind('click');
			$("#next").click(function(){				
				list.pageList(page.pageNum+1, page.pageSize);
			});
		}else{
			$('#next').unbind('click');
			$("#next").attr("class", "disabled-pages");
		}
	}
}

$(function(){
	
	list.pageList(1,$("#change").val());
	
	
	
})



/**
 * 变化
 */
function change(){
	list.pageList(1,$("#change").val());
}

/**
 * 遍历页码
 */
function pageChange(pc){
	
	
	list.pageList(pc,$("#change").val());
}

/**
	 * 跳转
	 */
	function jumpPage(){
	
	    var num=$("#num").html();  //当前页码
	    var total=$("#total").html();  //尾页
	
		var pageN = $("#pageNum").val(); //文本框输入的值
		// 是否为正整数  
	    var re = /^\+?[1-9][0-9]*$/;  
	    if(!re.test(pageN)){
	    	//alert('请输入正整数');
	    	/*$("#ztcht-jgsc-custom").find("p").html("请输入正整数");
	    	$("#ztcht-jgsc-custom").modal("show");*/
	    	layer.msg('请输入正整数',{icon:3});
	    	$("#pageNum").val(num);
	    	return; 
	    }else if(parseInt(pageN)>parseInt(total)){
	    	//alert('请输入正确页码');
	    	/*$("#ztcht-jgsc-custom").find("p").html("请输入正确页码");
	    	$("#ztcht-jgsc-custom").modal("show");*/
	    	layer.msg('请输入正确页码',{icon:3});
	    	$("#pageNum").val(num);
	    	return;
	    }   
	    
	    
	    list.pageList(pageN, $("#change").val());
	}	


/**
 * 新增
 */
function addUser(){
	window.location.href="user_add.html";
}

/**
 * 更新用户信息
 */
function updateUser(){
	var ch=$("input[type=checkbox][name=check]:checked").length;
	if(ch==0||ch>1){
		layer.msg('请选择一条记录',{icon:6});
	}else{
		var id=$("input[type=checkbox][name=check]:checked")[0].value;
		
		window.location.href="user_update.html?id="+id;
	}
}

/**
 * 删除用户信息
 */
function deleteUser(){
	var check=$("input[type=checkbox][name=check]:checked").length; //选中的个数
	
	var shu=$("input[type=checkbox][name=check]:checked");
	
	var ids="";
	if(check==0){
		layer.msg('请至少选择一条记录',{icon:6});
		return false;
	}
	else{
		
		for(var x=0;x<check;x++){
			ids+=$(shu[x]).val()+",";
		}
	}
	
	layer.confirm('确认删除吗？',
			{btn:['确定','取消']},
			function()
			{
				ids=ids.substring(0, ids.length-1);
				var data={ids:ids};
				$.ajax({
					type:"POST",
					url:url.deleteUrl,
					data:data,
					success:function(msg){
						if(msg.status>0){
							layer.msg('删除成功',{icon:1})
							list.pageList($("#num").html(), $("#change").val());
						}
					}
				})
			},
			function(){
				list.pageList($("#num").html(), $("#change").val());
			}
			);

	
}

/**
 * 查看用户详情
 */
/*function queryById(){
	
}
*/
/**
 * 导出用户信息
 */
function exportUser(){
	//layer.msg('该功能还没有实现',{icon:6})
	var account = findSpecialCharacter($("#account").val());
	var username = findSpecialCharacter($("#username").val());
	var startTime = $("#startTime").val();
	var endTime = $("#endTime").val();
	var sex = findSpecialCharacter($("#sex").val());
	var mobile = $("#mobile").val();

	var entity = {
		account : account,
		username : username,
		startTime : startTime,
		endTime : endTime,
		sex : sex,
		mobile : mobile
	}
	
	window.location.href=url.exportUrl+"?account="+account+
	"&username="+username+"&startTime="+startTime+
	"&endTime="+endTime+"&sex="+sex+"&mobile="+mobile;
	 
}

/**
 * 导入用户信息
 */
function inportUser(){
	/*alert(1)
	$("#ztcht-jgsc-custom").modal('show');*/
	layer.open({
		title: ['导入文件','color:green'],
	  skin:'layui-layer-molv', /*样式*/
	  closeBtn:2,  /*左上角的关闭按钮的风格*/
	  shade:[0.8,'#000']   /*遮罩*/,
	  type:2,
	  content:"inportUser.html",
	  area:['600px','300px']/*大小*/
	})
}

/**
 * 清除文本框内容
 */
function clean(){
	$("#search").find("input[type=text]").val("");
}

/**
 * 点击搜索
 */
function purchaseList(){
	list.pageList(1,$("#change").val())
}

/**
 * chenckAll
 * 复选框全选反选操作
 * 参数：checkboxs 所有复选框
 */ 
function checkAll(){
	var checkboxs=document.getElementsByName("check");
	if($("#checkbox-2")[0].checked==true){
		 for (var i=0;i<checkboxs.length;i++) {
			 checkboxs[i].checked=true;
		}
	}else if($("#checkbox-2")[0].checked!=true){
		for (var i=0;i<checkboxs.length;i++) {
			 checkboxs[i].checked=false;
		}
	}
}

/**
 * isCheckAll
 * 复选框按钮全部选中总复选框按钮选中
 */ 
function isCheckAll(){
	
	if($("input[type=checkbox][name=check]").not("input:checked").length == 0){
		$("#checkbox-2").attr("checked",true);
	}else{
		$("#checkbox-2").attr("checked",false);
	}
};



