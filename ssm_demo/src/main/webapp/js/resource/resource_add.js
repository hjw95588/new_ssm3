var resource={
		add:"/resource/add.do",
		update:"/resource/update.do"
}

function saveResource(){
	
	var resourceName=$("#resourceName").val();
	var des=$("#des").val();
	var id=$("#id").val();
	if(!resourceName){
		layer.msg("请输入权限名称",{icon:7});
		return false;
	}
	
	var data={
			resourceName:resourceName,
			des:des,
			id:id
	}
	var path="";
	if(id){
		path=resource.update;
	}else{path=resource.add}
	
	$.ajax({
		dataType:"JSON",
		type:"POST",
		url:path,
		contentType:"application/json; charset=utf-8",
		data:JSON.stringify(data),
		success:function(msg){	
			if(msg.status=="1"){
				$("#id").val(msg.id);
				layer.msg('操作成功',{icon:1},function(){
					 window.location.href="/resource/resource_manager.jsp";
				});
			    
			}
		}
	})
}