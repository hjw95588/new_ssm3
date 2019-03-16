<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
    <title>历年档案编辑</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <link rel="stylesheet" href="../../bootstrap/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../css/layout.css">
    <link rel="stylesheet" href="../../css/groups.css">
    <link rel="stylesheet" href="../../css/number_re.css">
    <link rel="stylesheet" href="../../css/layer/layer.css">

    <script type="text/javascript" src="../../js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="../../bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../../js/util.js"></script>
    <script type="text/javascript" src="../../js/archiveAdd9815.js"></script>
    <script type="text/javascript" src="../../js/jquery.validate.js"></script>
    <script type="text/javascript" src="../../js/validateHisArchive.js"></script>
    
    
    <script type="text/javascript" src="../../js/layer/layer.js"></script>
    <script type="text/javascript" src="../../js/layer/layer-common.js"></script>
    
    <script type="text/javascript" src="../../js/My97DatePicker/WdatePicker.js"></script>
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
<body onload="loadDemo();">

<div class="form-top">
		<div class="mb10 mt10">
		  
		  
			<button class="btn btn-default" onclick="save()">
				<i class="fa fa-save mr5"></i>保存
			</button>
			
		  
		  
		  
			<button class="btn btn-default" id="exportBtn" onclick="fexport()">
				<i class="fa fa-sign-out"></i> 导出
			</button>
		 

		</div>
	</div>


<form class="form-inline" id="proxyForm" name="proxyForm" method="post" target="proxyFrame">

<input id="checkDate" name="checkDate" type="hidden" value="2019">

<input id = "pid" name="pid" type="hidden" value="abus17e5af7d3fb911e992e4e86a64063dad">
			
			<!-- 用于显示默认的组织机构 -->
			<input id = "userId" name="userId" type="hidden"  value="gway000078863c1657ep9zsnubxqiugalmghrop1">
			<input id = "loginOrgId" name="loginOrgId" type="hidden"  value="fe8eab1f-59d4-41fa-96e7-ee5934fab9aa">
			<input id = "loginOrgName" name="loginOrgName" type="hidden" value="%e9%9d%92%e6%b5%b7%e7%9c%81%e8%a5%bf%e5%ae%81%e7%b2%ae%e9%a3%9f%e5%82%a8%e5%a4%87%e5%ba%93">
			
			<!-- 用于备注检查类型 -->
			<input id = "ispro" name="ispro" type="hidden" value="y">
</form>


<iframe id="proxyFrame" name="proxyFrame" width="100%" height="78%" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" ></iframe>

  </body>
  <script type="text/javascript">
  function loadDemo(){
	  var url="http://127.0.0.1:8075/WebReport/ReportServer?reportlet=qhgrain/kcqcjc/measuredraft.cpt&op=write";
	    document.proxyForm.action = url; 
	    document.proxyForm.submit(); 
  }
  function save(){
	  window.frames[0].postMessage('save','http://127.0.0.1:8075');
  }
  function fexport(){
	  window.frames[0].postMessage('fexport','http://127.0.0.1:8075');
  }
  </script>
</html>