<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
*{
margin: 0px;
padding:0px;
font-family: "微软雅黑";
}
#bu{
        width: 200px;
    height: 100px;
    border-radius: 24px;
    line-height: 100px;
    text-align: center;
    outline: none;
    cursor: pointer;
    color: lightseagreen;
    font-size: x-large;
}
</style>
</head>
<body>
<h1 align="center">显示结果</h1>
<table align="center" width="60%" border="1">
	<tr>
		<th>IP</th>
		<th>次数</th>
	</tr>
<c:forEach items="${applicationScope.map }" var="entry">
	<tr>
		<td>${entry.key }</td>
		<td>${entry.value }</td>
	</tr>
</c:forEach>
</table>
  </body>
</html>