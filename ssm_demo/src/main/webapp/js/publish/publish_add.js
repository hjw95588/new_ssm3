function preview(file){
	if (file.files && file.files[0]){
		
		//图片格式错误
		var a = file.files[0]; 
		if(!/image\/\w+/.test(a.type))
		{ 
			layer.msg("图片类型错误",{icon:3}); 
			$("#myfile").val("");
			$("#myfile").next().val($("#myfile").val())
			
		return false; 
		} 
		
		//$("#myfile").next().val($("#myfile").val())
		
		/*var reader = new FileReader();  
	 	reader.onload = function(evt){  
	 	//上传图片
		IMAGE = evt.target.result;
		$("#photo2").attr("src",IMAGE);
		}
	 	reader.readAsDataURL(file.files[0]);*/
	 	
	 	uploadImage();
	}
}

//上传照片
function uploadImage(){
	
	$("#fileForm").ajaxSubmit({
		url:'/user/upload.do',
		type:'post',
		async:false,
		contentType: false,
		processData: false,
		success:function(data) {
			result = data;
			console.log(JSON.stringify(result))
			if(result.status=="1"){
				$("#photo2").show();
				$("#photo2").attr("src","/uploads/"+result.url);
				$("#photo").val(result.url);
			}
			
		}
	});
}

$(function(){
	
	var publish={
			addUrl:"/pub/add.do"
			
	}
	
	$("#save").click(function(){
		var title=$.trim($("#title").val()); //标题
		var typeId=$("#typeId").val();
		var typeName=$("#typeId option:checked").text();
		
		var content = ue.getContent();//获取内容
		var photo=$("#photo").val();

		var k=true;
				
		if (title == "") {
			layer.msg('标题为空',{icon:3})
            k=false;
			return k;
		} 
		if(photo==""){
			layer.msg('请上传图片',{icon:3})
            k=false;
			return k;
		}
		if(content==""){
			layer.msg('内容为空',{icon:3})
            k=false;
			return k;
		}
		
		
		if(k){
		
		var entity={
				title:title,
				typeId:typeId,
				typeName:typeName,
				content:content,
				photo:photo
		}
		
		$.ajax({
			dataType:"JSON",
			type:"POST",
			url:publish.addUrl,
			contentType:"application/json; charset=utf-8",
			data:JSON.stringify(entity),
			success:function(msg){	
				if(msg.status=="1"){
					layer.msg('添加成功',{icon:1});
						/*layer.msg('添加成功',{icon:1},function(){
							window.location.href="user_manager.html";
						});*/
				}
			}
		})
		}
		else
			{
			   return false;
			}
		
	})
	
		
	//后退
	$("#callback").click(function(){
		history.go(-1);
	})	
		
})

