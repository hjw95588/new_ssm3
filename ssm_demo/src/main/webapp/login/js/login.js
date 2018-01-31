var verifyCode = "";

$(function() {
	verifyCode = new GVerify("v_container");
})

function myshow() {

	$("#error").hide();
	
	var account = $.trim($("#account").val());  //用户名
	var password = $.trim($("#password").val()); //密码
	var res = verifyCode.validate($("#text2").val()); //验证码
	
	if(!account){
		$("#account").next().html("用户名为空");
		return false;
	}
	if(!password){
		$("#password").next().html("密码为空");
		return false;
	}
	
	if (!res) {
		$("#show2").html("验证码错误");
		return false;
	} 
	
	return true;
}
