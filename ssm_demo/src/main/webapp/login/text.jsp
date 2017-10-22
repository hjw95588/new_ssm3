<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>jquery常见练习</title>
<style type="text/css">
*{
padding: 0;
margin: 0;
font-family: "微软雅黑";
}
#show{
width: 200px;
height: 60px;
border: 1px solid green;
display: block;
line-height: 60px;
text-align: center;
margin-left: 300px;
text-decoration: none;
background: blue;
color: white;
border-radius:30px;
position: absolute;
left:300px;
top: 20px;
}
</style>
</head>
<body>
<div id="aa" style="margin-left: 40px;">
  <ul>
  <li>河南省</li>
  <li>北京市</li>
  <li>湖南省</li>
  <li>天津市</li>
</ul>
</div>

<a id="show" href="javascript:void(0);">点击</a>

<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
$(function(){
	$("#show").click(function(){
		var len=$("#aa ul li").length;
		var obj=$("#aa ul li");
		
		//如果你想要直接操作 DOM 对象而不是 jQuery 对象，这个函数非常有用。
		console.log(obj.get(0))
		
		console.log(obj.eq(0)[0])
		
		//数组
		console.log(obj.get())
		
		//append  例子
		
		        //内部插入
		//$("#aa ul").append("<li>上海市11111111</li>");
		//$("ul li").appendTo("#show"); //使用这个方法是颠倒了常规的$(A).append(B)的操作，即不是把B追加到A中，而是把A追加到B中。

		
		
	})
})
</script>

</body>
</html>