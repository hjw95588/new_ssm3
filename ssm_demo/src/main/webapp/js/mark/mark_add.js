var mark={
		add:"/mark/add.do",
		update:"/mark/update.do"
}

function saveMark(){
	
	var name=$("#name").val();
	var url=$("#url").val();
	var id=$("#id").val();
	if(!name){
		layer.msg("请输入名称",{icon:7});
		return false;
	}
	if(!url){
		layer.msg("请输入url",{icon:7});
		return false;
	}
	
	var data={
			name:name,
			url:url,
			id:id
	}
	var path="";
	if(id){
		path=mark.update;
	}else{path=mark.add}
	
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
					 window.location.href="/mark/mark_manager.jsp";
				});
			    
			}
		}
	})
}