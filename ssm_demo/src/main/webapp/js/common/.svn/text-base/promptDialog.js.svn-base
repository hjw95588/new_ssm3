$(function(){
	
	alertMsg=function(msg,callback){
		if(!msg){
			msg="操作成功";
		}
		$("#ztcht-jgsc-custom p").html(msg);
		if(msg.indexOf("请")>-1){
			$($("#ztcht-jgsc-custom button")[1]).html("取消");
		}else{
			$($("#ztcht-jgsc-custom button")[1]).html("确认");
		}
		$("#ztcht-jgsc-custom").modal("show");
		$('#ztcht-jgsc-custom').last().css('z-index',1050+($('.modal-backdrop').length-1)*10)
		$('.modal-backdrop').last().css('z-index',1049+($('.modal-backdrop').length-1)*10)
		$("#ztcht-jgsc-custom").unbind("click").bind("click",function(){
			$("#ztcht-jgsc-custom").modal("hide");
			if(callback){
				callback();
			}
		});
	};
	//确认删除按钮
	$("body").append('<div class="modal fade"id="ztcht-jgsc"tabindex="-1"role="dialog"aria-labelledby="myModalLabel"aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button"class="close"data-dismiss="modal"aria-hidden="true">×</button><h4 class="modal-title"id="myModalLabel">提示</h4></div><div class="modal-body"><p>确认删除此条信息吗？</p></div><div class="modal-footer"><button type="button"class="btn btn-default" id ="dialog-confirm-ok" data-dismiss="modal">确认</button><button type="button"class="btn btn-primary"data-dismiss="modal"">取消</button><input type="text"id="ids"style="display:none"></div></div></div></div>');
	//确认覆盖
	$("body").append('<div class="modal fade" id="ztcht-fg" style="width:400px;" tabindex="-1"role="dialog"aria-labelledby="myModalLabel"aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button"class="close"data-dismiss="modal"aria-hidden="true">×</button><h4 class="modal-title"id="myModalLabel">提示</h4></div><div class="modal-body" style="text-align: center;font-size: 15px;"><p>排序号重复，是否要更新该记录？</p></div><div class="modal-footer"><button type="button"class="btn btn-default" id ="dialog-confirm-sure" data-dismiss="modal">确认</button><button type="button"class="btn btn-primary"data-dismiss="modal"">取消</button><input type="text"id="ids"style="display:none"></div></div></div></div>');
	//alert提示框
	$("body").append('<div class="modal fade"style="width:400px;margin-top: 35px;"id="ztcht-jgsc-custom"tabindex="-1"role="dialog"aria-=""labelledby="myModalLabel"aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button"class="close"data-dismiss="modal"aria-hidden="true">×</button><h4 class="modal-title"id="myModalLabel">提示</h4></div><div class="modal-body"style="text-align: center;font-size: 16px;"><p>请选择一条记录</p></div><div class="modal-footer"><button type="button"id="bu"class="btn btn-primary" data-dismiss="modal">取消</button></div></div></div></div>');
	
	var delClickFunction=null;
	$(".bUbuttons-05,.del-color").each(function(){
		
		var delBut=$(this);
		delClickFunction=(delBut.attr("onclick"));
		delBut.removeAttr("onclick");
		if(!delClickFunction){
			return;
		}
		if(delBut.attr("class").indexOf("bUbuttons-05")>-1){
			delBut.bind("click",function(){
				if(delBut.parent().next().find("tbody :checked").length < 1){
					alertMsg("请选择一条记录");
					return;
				}else{
					$("#ztcht-jgsc").modal("show");
				}
			});
		}
		
	});
	$("#ztcht-jgsc #dialog-confirm-ok").unbind("click").bind("click",function(){
		if(delClickFunction){
			eval(delClickFunction);
		}
	});
	$("#ztcht-jgsc button").bind("click",function(){
//			delBut.removeAttr("data-toggle","modal");	
		$("#ztcht-jgsc").modal("hide");
	});
	
	
});


