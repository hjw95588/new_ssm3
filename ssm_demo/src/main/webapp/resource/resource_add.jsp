<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="utf-8">
	<!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">-->
	<title>权限基本信息添加</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<!-- Basic Styles -->
	<link rel="stylesheet" href="../bootstrap/css/font-awesome.min.css">
	<link rel="stylesheet" href="../css/layout.css">
	<link rel="stylesheet" href="../css/groups.css">
	<link rel="stylesheet" href="../css/number_re.css">
	<script type="text/javascript" src="../js/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="../js/jquery.form.js"></script>
	<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/My97DatePicker/WdatePicker.js"></script>
	<script type="text/javascript" src="../js/resource/resource_add.js"></script>
	    <script type="text/javascript" src="../js/layer/layer.js"></script>
	<style type="text/css">
	#img{
	width:150px;height: 150px;
	}
	#bu{
	width:120px;
	height: 30px;
	}
	#myfile{
	position: absolute;
	height: 30px;
	width:120px;
	top:122px;
	left:0;
	border: 1px solid red;
	 filter:alpha(opacity:0);opacity: 0;
	 cursor: pointer;
	}
	#show{
	width:120px;height:120px;border:1px solid #d8dde6;
	
  /* -moz-border-radius: 50%; */  /* Firefox */
  /*   -webkit-border-radius: 50%;  */  /* Safari 和 Chrome */
 /*  border-radius: 50%; */  /* Opera 10.5+, 以及使用了IE-CSS3的IE浏览器 */
	
	}
	.text-red{
	width: 100px;
	height: 30px;
	position: absolute;
	padding: 6px;
	left:315px;
	}
	</style>
</head>
<body>
<div class="iframe-cot pull-right form-box pt0">
	<form class="right_form" onsubmit="return false;">
		<div class="">
			<div class="crumbs">
				<p>
					<span class="active ml5 mt12"><i class="fa fa-book mr5"></i>基本信息 </span>
				</p>
				<div class="crumbs-line"></div>
				<input value="${resource.id}" id="id" type="hidden">
			</div>
			<ul >
			<li class="frm_li_2">
					<label class="ser-label">权限名称：</label>
					<div class="form-content">
						<input id="resourceName" value="${resource.resourceName}" type="text" style="width: 300px;" class="inp-noborder" />
						<div class="text-red"></div>
					</div>
					
				</li>
				<li class="frm_li_2">
					<label class="ser-label">描述：</label>
					<div class="form-content">
				<input id="des" type="text" value="${resource.des}"  style="width: 220px;height:200px;" class="inp-noborder" />
						<div class="text-red"></div>
					</div>
				</li>
				
				
			</ul>
			
			<ul class="w100">
                <li class="w-per">
                    <label class="ser-label wd180"></label>
                    <div class="form-content clearfix">
                        <button class="btn btn-orange mr10" onclick="saveResource();"><i class="fa fa-save"></i> 保存</button>
                        <button class="btn btn-default" id="callback"><span class="fa fa-reply"></span> 返回</button>
                    </div>
                </li>
            </ul>
		</div>
		
	</form>
	
</div>
<!--main end-->
</body>
</html>