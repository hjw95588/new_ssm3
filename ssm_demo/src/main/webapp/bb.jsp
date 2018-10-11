<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
      int m=1111;
    %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/js/bb.js"></script>
<script type="text/javascript">
var str = "<%=m %>";

$(function(){
	
	debugger;
	var list=[];
	
	var user={
			"name":"11",
			"sex":"femal"
	}
	
	list.push(user);
	
	var wfBizObj = {
			"password":"33",
			"array":JSON.stringify(list)

		};
	
	$.ajax({
		url: "/user/bb.do",
		type : "POST",
		data:wfBizObj,
		success: function (resp) {
			
		},
		error : function() {
			$("#waiting").hide();
			layer.msg('操作失败',{icon:2});
		}
	});
	/* 
	$.ajax({
		url: "/user/aa.do",
		type : "POST",
		data: {"name":"123","age":123,"list":list},
		async:false,
		dataType : "json",
		success: function (resp) {
			
		},
		error : function() {
			$("#waiting").hide();
			layer.msg('操作失败',{icon:2});
		}
	}); */
	
	
})
</script>
</head>
<body>

</body>
</html>