<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>开始使用layui</title>
  <link rel="stylesheet" href="layui/css/layui.css">
  <script src="layui/layui.js"></script>
</head>
<body>
<form class="layui-form" action="">
  
  <div class="layui-form-item">
    <label class="layui-form-label">复选框</label>
    <div class="layui-input-block">
      <input type="checkbox" name="like[write]" title="写作">
      <input type="checkbox" name="like[read]" title="阅读" checked>
      <input type="checkbox" name="like[dai]" title="发呆">
    </div>
  </div>
 
 
</form>
 
<script>
//Demo (我把它注释掉了。select、checkbox、radio等将无法显示)
layui.use('layer', function(){
	var layer = layui.layer;
	layer.open({
		type:2,
		  title: '在线调试'
		  ,content: 'laySelect.jsp',
		  area:['500px','200px']
		}); 
}); 

</script>
</body>
</html>