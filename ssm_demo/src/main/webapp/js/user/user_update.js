function preview(file){
	if (file.files && file.files[0]){
		
		//图片格式错误
		var a = file.files[0]; 
		if(!/image\/\w+/.test(a.type))
		{ 
		layer.msg("上传图片类型错误",{icon:3}); 
			/*$("#ztcht-jgsc-custom").find("p").html("上传图片类型错误");
			$("#ztcht-jgsc-custom").modal("show");	*/
		return false; 
		} 
		
		/*var reader = new FileReader();  
	 	reader.onload = function(evt){  
	 	//上传图片
		IMAGE = evt.target.result;
		$("#photo").attr("src",IMAGE);
		}
	 	reader.readAsDataURL(file.files[0]);*/
	 	
	 	uploadImage();
	}
}

//上传照片
function uploadImage(){
	
	$("#fileForm").ajaxSubmit({
		url:'/ssm_demo/user/upload.do',
		type:'post',
		async:false,
		contentType: false,
		processData: false,
		success:function(data) {
			result = data;
			console.log(JSON.stringify(result))
			if(result.status=="1"){
				$("#show").attr("src","/ssm_demo/uploads/"+result.url);
				$("#photo").val(result.url);
			}
			
		}
	});
}

$(function(){
	
	var user={
			updateUrl:"/ssm_demo/user/updateUser.do",
			queryUrl:"/ssm_demo/user/query.do",
	}
	
	var id=GetIdUrl();

	//根据id获取用户信息
	$.ajax({
		async:false,
		dataType:"JSON",
		type:"GET",
		url:user.queryUrl+"?id="+id,
		success:function(msg){	
			if(msg.status=="1"&&msg.data!=null){
               console.log(JSON.stringify(msg.data))
               var user=msg.data;
               
               $("#id").val(user.id);  //主键
               $("#account").val(user.account);  //用户名
               $("#username").val(user.username);  //姓名
               $("#sex").val(user.sex);  //性别
               $("#mobile").val(user.mobile);  //手机号码
               $("#birth").val(timeStamp2String(user.birth));  //出生日期
               
               if(user.photo!=""){
               $("#show")[0].src="/ssm_demo/uploads/"+user.photo;  //照片
               $("#photo").val(user.photo)
               }
               
			}else
				{
				layer.msg('用户信息不存在',{icon:6})
				}
		}
	})
	
	$("#save").click(function(){
		var account=$.trim($("#account").val()); //用户名
		var username=$.trim($("#username").val()); //姓名
		var password=$.trim($("#password").val()); //密码
		var sex=$.trim($("#sex").val()); //性别
		var birth=$.trim($("#birth").val()); //出生日期
		var mobile=$.trim($("#mobile").val()); //手机号码
		var photo=$("#photo").val();  //照片
		var usertype="TYPE_READER";  //用户类型

		var k=true;
				
		if (account == "") {
			$("#account").next().html("用户名为空");
            k=false;
		} else {
			$("#account").next().html("");
		}

		if (username == "") {
			$("#username").next().html("姓名为空");
           k=false;
		}
		else{
			$("#username").next().html("");
		}
		if (password == "") {
			$("#password").next().html("密码为空");
			k=false;
		}
		else{
			$("#password").next().html("");
		}
		if (sex == "0") {
			$("#sex").next().html("请选择性别");
			k=false;
		}
		else{
			$("#sex").next().html("");
		}
		if (mobile == "") {
			$("#mobile").next().html("手机号为空");
			k=false;
		}
		else if(!/^1[3|4|5|7|8]\d{9}$/.test(mobile)){
			$("#mobile").next().html("请输入正确的手机号码");
			k=false;
		}else {
			$("#mobile").next().html("");
		}
		if (birth == "") {
			$("#birth").next().html("出生日期为空");
			k=false;
		}
		else{
			$("#birth").next().html("");
		}
		
		
		if(k){
		
		var entity={
				account:account,
				username:username,
				password:password,
				sex:sex,
				birth:birth,
				mobile:mobile,
				photo:photo,
				usertype:usertype,
				id:id
		}
		
		$.ajax({
			dataType:"JSON",
			type:"POST",
			url:user.updateUrl,
			contentType:"application/json; charset=utf-8",
			data:JSON.stringify(entity),
			success:function(msg){	
				if(msg.status=="1"){
					layer.msg('更新成功',{icon:1},function(){
						window.location.href="user_manager.html";
					});
					
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

