<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
<body>
<form action="/login/login.do" method="post" id="myform" onsubmit="return show();">
   <input type="text" name="username" id="username"><br>
   <input type="text" name="password" id="password"><br>
   <input type="submit" value="确定">
</form>

<script type="text/javascript">
 function show(){
	 
	
	 var username= $.trim($("#username").val());
	 
	 var password= $.trim($("#password").val());
	 
	 debugger;
	 if(username && password) {

		 return true;
	 } 
	 
	 return false;
 }
</script>
</body>
</html>