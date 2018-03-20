var role={
		add:"/role/add.do",
		update:"/role/update.do"
}

function saveRole(){
	
	var roleName=$("#roleName").val();
	var des=$("#des").val();
	var id=$("#id").val();
	if(!roleName){
		layer.msg("请输入角色名称",{icon:7});
		return false;
	}
	
	var data={
			roleName:roleName,
			des:des,
			id:id
	}
	var path="";
	if(id){
		path=role.update;
	}else{path=role.add}
	
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
					 window.location.href="/role/role_manager.jsp";
				});
			    
			}
		}
	})
}