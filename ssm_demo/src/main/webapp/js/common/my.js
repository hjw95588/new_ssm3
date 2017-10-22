$(function () {
    var t = new Date().getTime();//加个时间戳，防止加载缓存
    $.ajax({
        url:"/platformOrganization/users/tree.do?t="+t,
        type: 'GET',
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            if(data.result == "1"){
                var treeData = JSON.parse(data.message);
           
                //如果当前用户不是超级管理员admin,则左边的树中的技术部门不会显示admin用户
                if($("#userType").val()!="TYPE_PLATFORM_ADMIN"){
                	var k=new Array();
                    var sheguan=treeData[2].userList;
                   for(var x=0;x<sheguan.length;x++){
                	   //去除admin
                	   if(sheguan[x].userType=="TYPE_PLATFORM_ADMIN"){
    						
    						continue;
    					}
    					k.push(sheguan[x])
                   }
                   treeData[2].userList=k;
                }
                
                //解析data
                treeBuild(treeData);
                bindEvent();
                $(".tree").find("span")[0].click();
            }
        }
    });
});
var ddiv=null;
function appendDiv(tar){
    var div=document.createElement("div");
    $(div).addClass("nodeFun");
    div.innerHTML="<p>新建</p><p>编辑</p>";
    $(div).find("p:first-child").bind("click", function () {
        $(tar).siblings("ul").append('<li><span class="ztc-my-sp01" contenteditable="true">请编辑内容</span></li>');
        $(tar).siblings("ul").find("span[contenteditable]").bind("focus", function(){
             this.innerHTML="";
        });
        $(tar).siblings("ul").find("span[contenteditable]").focus().bind("blur", function () {
            var str=this.textContent;
            if(str==""){
                alert("请填写部门名称！");
                location.reload();
            }else{
                this.innerHTML='<i class="fa fa-minus-circle"></i>' + str;
                this.removeAttribute("contenteditable");
                //新增的ajax str为当前名字orgName  pid
                var platformOrganization = {
                    orgParentId : "1",
                    orgName : null,
                    companyId : "1",
                    orgType : "UNIT"
                };
                platformOrganization.orgName = str;
                $.ajax({
                    url:"/platformOrganization/add.do",
                    type: 'POST',
                    contentType: 'application/json',
                    data:JSON.stringify(platformOrganization),  
                    dataType: 'json',
                    success: function (data) {
                        if(data.result == '1'){
                            alert("添加成功！");
                            location.reload();
                        }
                    }
                });
            }
        });
        $(div).remove();
    });
    $(div).find("p:last-child").bind("click", function () {
        $(tar).attr("contenteditable",true);
        $(tar).bind("focus", function(){
             this.innerHTML="";
        });
        $(tar).focus().bind("blur", function () {
            var str=this.textContent==""?nodeName:this.textContent;
            var _id=tar.Id;
            this.innerHTML='<i class="fa fa fa-folder-open"></i>' + str;
            this.removeAttribute("contenteditable");
            //编辑ajax str为orgName pid为tar.Id
            var platformOrganization = {
                id : null,
                orgName : null
            };
            platformOrganization.id = _id;
            platformOrganization.orgName = str;
            $.ajax({
                url:"/platformOrganization/update.do",
                type: 'POST',
                contentType: 'application/json',
                data:JSON.stringify(platformOrganization),  
                dataType: 'json',
                success: function (data) {
                    if(data.result == '1'){
                        alert("修改成功！");
                        location.reload();
                    }
                }
            });
        });
        $(div).remove();
    });
    return div;
}
function appendDiv2(tar){
    var div=document.createElement("div");
    $(div).addClass("nodeFun");
    div.innerHTML="<p>编辑</p><p class='setdiscount-btn00'>删除</p>";
    $(div).find("p:first-child").bind("click", function () {
        $(tar).attr("contenteditable",true);
        var nodeName=tar.textContent;
        $(tar).bind("focus", function(){
             this.innerHTML="";
        });
        $(tar).focus().bind("blur", function () {
            var str=this.textContent==""?nodeName:this.textContent;
            var _id=tar.Id;
            this.innerHTML='<i class="fa fa-minus-circle"></i>' + str;
            this.removeAttribute("contenteditable");
            //编辑ajax  str为orgName pid为tar.Id
            var platformOrganization = {
                id : null,
                orgName : null
            };
            platformOrganization.id = _id;
            platformOrganization.orgName = str;
            $.ajax({
                url:"/platformOrganization/update.do",
                type: 'POST',
                contentType: 'application/json',
                data:JSON.stringify(platformOrganization),  
                dataType: 'json',
                success: function (data) {
                    if(data.result == '1'){
                        alert("修改成功！");
                        location.reload();
                    }
                }
            });
        });
        $(div).remove();
    });
    $(div).find("p:last-child").bind("click", function () {
        var str=tar.textContent;
        var _id=tar.Id;
        // 删除ajax
        var ids = [];
        ids.push(_id);
        $("#departid").val(ids);
         $(".setdiscount-btn00").attr("data-toggle","modal").attr("data-target","#ztcht-jgsc1");
    });
    return div;
    ddiv=div;
}

/**
 * 提示框删除按钮
 */
function delbtn(){
	var _id = $("#departid").val();
	 var ids = [];
     ids.push(_id);
	$(".nodeFun").css("display","none");
    $.ajax({
        url:"/platformOrganization/batchDelete.do",
        type: 'POST',
        contentType: 'application/json',
        data:JSON.stringify(ids),  
        dataType: 'json',
        success: function (data) {
            if(data.result == '1'){
              $(tarna).parent().remove();
              $(ddiv).remove();
                alert("删除成功！");
                location.reload();
            }else{
                alert(data.message+"！");
            }
        }
    });
}  


/**
 * 弹出框返回操作
 */
function backs(){
	$(".setdiscount-btn00").removeAttr("data-toggle");
	$(".setdiscount-btn00").removeAttr("data-target");
	$(".nodeFun").css("display","none");
}

$(function(){
	$(".close").click(function(){
		var boxs = document.getElementsByName('check');
		for(var i=0; i<boxs.length; i++){
			if(boxs[i].checked){
				boxs[i].checked = false;
			};
		}
		$("#fullCheck").attr("checked",false);
		$(".setdiscount-btn00").removeAttr("data-toggle");
		$(".setdiscount-btn00").removeAttr("data-target");
		$(".nodeFun").css("display","none");
		/*$(".bUbuttons-02").removeAttr("data-toggle");
		$(".bUbuttons-02").removeAttr("data-target");
		$(".bUbuttons-04").removeAttr("data-toggle");
		$(".bUbuttons-04").removeAttr("data-target");
		$(".bUbuttons-05").removeAttr("data-toggle");
		$(".bUbuttons-05").removeAttr("data-target");*/
	});
});
var tarna="";
function bindEvent(){
    $(".tree").bind("click", function (event) {
        var event=event||window.event;
        var target=event.target||event.srcElement;
        //给图标绑定 展开和关闭效果
        if($(target).is("i.fa")){
            if($(target).is(".fa-folder-open,.fa-folder-open:before")){
                $(target).toggleClass("fa-folder");
                $(target).parent().siblings("ul").fadeToggle();
            }
            else if($(target).is(".fa.fa-minus-circle")){
                $(target).toggleClass("fa-plus-circle");
                $(target).parent().siblings("ul").fadeToggle();
            }
            if($(".nodeFun").length!=0){
                $(".nodeFun").remove();
            }
            return false
        }
        if($(target).is("span")){
            if($(".nodeFun").length!=0){
                $(".nodeFun").remove();
            }
            $($(target).parents("ul")[$(target).parents("ul").length-1]).find("span").removeAttr("style");
            if($(target).parents("ul").length<=2){
                $(target).css({"color":"#fff","background":"#55bd98"});
            }
            if($(target).parents("ul").length==3 || $(target).parents("ul").length==1){
                  $("#add").attr("toggle-btn","true");
            }else{
              $("#add").removeAttr("toggle-btn");
            }
            $("#platformUnitId").val(target.Id);
            $("#platformCompanyId").val(target.companyId);
            $("#platformOrgType").val(target.orgType);
            if(target.orgType){
                getResource(1,10);
            }
            
        }
        if($(target).is("li")&&$(".nodeFun").length!=0&&$(target).is(":not(.nodeFun p)")){
            $(".nodeFun").remove();
        }
    });
    $(".tree").bind("mousedown", function (event) {
        var event=event||window.event;
        var target=event.target||event.srcElement;
        if($(target).is("span")){
            if(3==event.which) {
                this.oncontextmenu = function (event) {
                    return false;
                };
                $(".nodeFun").remove();
                var x=event.clientX-15;
                var y=event.clientY-65;
                if($(target).parents("ul").length==1){
                    var _div=appendDiv(target);
                    tarna=target;
                    $($(target).parents("ul")[$(target).parents("ul").length-1]).find("span").removeAttr("style");
                    $(target).css({"color":"#fff","background":"#36786E"});
                }else if($(target).parents("ul").length==2){
                    var _div=appendDiv2(target);
                    tarna=target;
                    $($(target).parents("ul")[$(target).parents("ul").length-1]).find("span").removeAttr("style");
                    $(target).css({"color":"#fff","background":"#36786E"});
                }else {
                    return false
                }
                $(_div).css({"left":x,"top":y});
                $(".tree").append($(_div));
            }
        }
    });
    $("body").bind("click",function(event){
        var event=event||window.event;
        var target=event.target||event.srcElement;
        if($(target).is(":not(.nodeFun p)")&&$(".nodeFun").length!=0){
            $(".nodeFun").remove();
        }
    });
    $("#add").bind("click",function(event){
        if($("#add")[0].hasAttribute("toggle-btn")){
            event.preventDefault();
        }
    })

}
function treeBuild(data){
    var $ul=$(".tree>ul");var pid;
    for(var i=0;i<data.length;i++){
        if(data[i].platformOrganization.orgParentId=="0"){
            var li=document.createElement("li"),span=document.createElement("span");
            $(span).html('<i class="fa fa-folder-open"></i>' + " " + data[i].platformOrganization.orgName);
            $(li).append($(span));
            pid=data[i].platformOrganization.id;
            li.id=data[i].platformOrganization.id;
            span.Id=data[i].platformOrganization.id;
            span.companyId=data[i].platformOrganization.companyId;
            span.orgType=data[i].platformOrganization.orgType;
            $ul.append($(li));
        }
    }
    for(var j=0;j<data.length;j++){
        if(data[j].platformOrganization.orgParentId==pid){
            if($ul.find("ul").length==0){
                var _ul=document.createElement("ul");
                $ul.children("li#"+pid).append($(_ul));
            }
            var li=document.createElement("li"),span=document.createElement("span");
            $(span).addClass("ztc-my-sp01").html('<i class="fa fa-minus-circle"></i>' + " " + data[j].platformOrganization.orgName);
            span.Id=data[j].platformOrganization.id;
            span.orgType=data[j].platformOrganization.orgType;
            span.companyId=data[j].platformOrganization.companyId;
            $(li).append($(span));
            if(data[j].userList.length!=0){
                var _ul2=document.createElement("ul");
                var str="";
                for(var n=0;n<data[j].userList.length;n++){
                    var obj=data[j].userList[n];
                    var _li=document.createElement("li"),_span=document.createElement("span");
                    _span.innerHTML='<i class="fa fa-leaf"></i>' + '  ' +  obj.name;
                    $(_span).addClass("ztc-my-sp01");
                    $(_li).addClass("ztc-my-li01").append($(_span));
                    _span.Id=obj.id;
                    _span.companyId=obj.companyId;
                    _span.orgType=obj.orgType;
                    $(_ul2).append($(_li));
                }
                $(li).append($(_ul2));
            }
            $ul.children("li#"+pid).children("ul").append($(li));
        }
    }
}