
var verifyCode ="";

$(function(){
	verifyCode = new GVerify("v_container");
})

function myshow(){
	var account=$.trim($("#account").val());
	var password=$.trim($("#password").val());
	if(account==""){
		
		$("#account").next().html("用户名为空");
		return false;
	}else{
		$("#account").next().html("");
	}
	if(password==""){
		$("#password").next().html("密码为空");
		return false;
	}else
		{
		$("#password").next().html("");
		}
	
	 var res = verifyCode.validate($("#text2").val());
	 
	 if(!res){
		  $("#show2").html("验证码错误");
		return false;
	}
	else
	{
		$("#show2").html("");
	}
	
	 $("#myform").attr("action","/ssm3/login/login.do");
	 $("#myform").submit();
	 return true;
}

/*$(function(){
	
	var verifyCode = new GVerify("v_container");
	$("#submit").click(function(){
		var account=$.trim($("#account").val());
		var password=$.trim($("#password").val());
		if(account==""){
			
			$("#account").next().html("用户名为空");
			return false;
		}else{
			$("#account").next().html("");
		}
		if(password==""){
			$("#password").next().html("密码为空");
			return false;
		}else
			{
			$("#password").next().html("");
			}
		
		 var res = verifyCode.validate($("#text2").val());
		 
		 if(!res){
			  $("#show2").html("验证码错误");
			return false;
		}
		else
		{
			$("#show2").html("");
		}
		 
		 $("#myform").attr("action","/ssm3/login/login.do");
		 $("#myform").submit();
		 return true;

	
	})
	
	
})*/

/*
 * $(function(){
 * 
 * var entity={ account:"a1", password:"111111" }
 * 
 * $.ajax({ async:false, dataType : "JSON", type : "POST", url :
 * "/ssm3/user/text.do", contentType : "application/json; charset=utf-8", data :
 * JSON.stringify(entity), success:function(msg){
 *  } });
 *  })
 */
 /*var entity = {
			account : account,
			password : password
		}

		$.ajax({
			dataType : "JSON",
			type : "POST",
			url : "/ssm3/user/text.do",
			contentType : "application/json; charset=utf-8",
			data : JSON.stringify(entity),
			success : function(msg) {
              if(msg.status=="1"){
            	  window.location.href="/ssm3/index/index.html";
              }
              else{
            	  layer.msg(msg.message,{icon:1})
              }
			}
		});*/

 
 
 
 
 
 
 
 
 
 
 