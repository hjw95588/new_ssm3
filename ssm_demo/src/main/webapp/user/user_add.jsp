<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>  
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en-us">
<head>
	<meta charset="utf-8">
	<!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">-->
	<title>用户基本信息添加</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<!-- Basic Styles -->
	<link rel="stylesheet" href="../bootstrap/css/font-awesome.min.css">
	<link rel="stylesheet" href="../css/layout.css">
	<link rel="stylesheet" href="../css/groups.css">
	<link rel="stylesheet" href="../css/number_re.css">
	
	<link rel="stylesheet" href="css/jquery-labelauty.css">
	
	<script type="text/javascript" src="../js/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="../js/jquery.form.js"></script>
	<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/My97DatePicker/WdatePicker.js"></script>
	<script type="text/javascript" src="../js/user/user_add.js"></script>
	    <script type="text/javascript" src="../js/layer/layer.js"></script>
	    <script src="js/jquery-labelauty.js"></script>

     <script>
	$(function() {
		$(':input[type=checkbox]').labelauty();
	});
     </script>

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
	.w100New{
	    width: 100% !important;
    overflow: hidden;
	}
	.w100New li{
	  margin-right: 12px !important;
	}
	</style>
</head>
<body>
<div class="iframe-cot pull-right form-box pt0">
	<form class="right_form" onsubmit="return false;">
	<input type="hidden" id="id" value="${user.id}">
		<div class="">
			<div class="crumbs">
				<p>
					<span class="active ml5 mt12"><i class="fa fa-book mr5"></i>基本信息 </span>
				</p>
				<div class="crumbs-line"></div>
			</div>
			<ul >
			<li class="frm_li_2">
					<label class="ser-label">用户名：</label>
					<div class="form-content">
						<input id="account" value="${user.account}" type="text" class="inp-noborder" />
						<div class="text-red"></div>
					</div>
					
				</li>
				<li class="frm_li_2">
					<label class="ser-label">姓名：</label>
					<div class="form-content">
						<input id="username" value="${user.username}" type="text" class="inp-noborder" />
						<div class="text-red"></div>
					</div>
				</li>
				<li class="frm_li_2">
					<label class="ser-label">密码：</label>
					<div class="form-content">
						<input id="password"  type="text" class="inp-noborder" />
						<div class="text-red"></div>
					</div>
				</li>
				<li class="frm_li_2">
					<label class="ser-label">性别：</label>
					<div class="form-content">
						<select  id="sex">
                            <option value="0">请选择</option>
                            <option value="男"  <c:if test="${user.sex== '男'}">selected</c:if>  >男</option>
                            <option value="女" <c:if test="${user.sex== '女'}">selected</c:if>  >女</option>
                        </select>
                        <div class="text-red"></div>
					</div>

				</li>
				<li class="frm_li_2">
				
				<c:set var="birthNew">
				   <fmt:formatDate value="${user.birth}" pattern="yyyy-MM-dd" />
				</c:set>
				
					<label class="ser-label">出生日期：</label>
					<div class="form-content">
						<input id="birth" value="${birthNew }"
						 class="date-inp Wdate inputText_sm" placeholder="请选择" onclick="WdatePicker({maxDate:'%y-%M-%d'})" readonly />
					    <div class="text-red"></div>
					</div>
				</li>
				
				<li class="frm_li_2">
					<label class="ser-label">手机号：</label>
					<div class="form-content">
						<input id="mobile" value="${user.mobile }" type="text" class="inp-noborder"  />
						<div class="text-red"></div>
					</div>
				</li>
				
			</ul>
			
		</div>
		
		<div class="w100">
			<div class="crumbs">
				<p>
					<span class="active ml5 mt12"><i class="fa fa-book"></i>所属角色 </span>
				</p>
				<div class="crumbs-line"></div>
			</div>
			 <ul class="w100New" id="roles">
                   <%-- <c:forEach items="${roleList}" var="all" >
                      <li><input type="checkbox"  name="checkBoxRole" id="${all.id }" data-labelauty="${all.roleName}"></li>
                   </c:forEach> --%>
            </ul>
			
			<ul class="w100">
                <li class="w-per">
                    <label class="ser-label wd180"></label>
                    <div class="form-content clearfix">
                        <button class="btn btn-orange mr10" id="save"><i class="fa fa-save"></i> 保存</button>
                        <button class="btn btn-default" id="callback"><span class="fa fa-reply"></span> 返回</button>
                    </div>
                </li>
            </ul>
			
		</div>
		
	</form>
	<div class="img_div" id="img">
	<form id="fileForm" name="fileForm" enctype="multipart/form-data" method="post">
	    <c:if test="${empty user.photo}">
	      <img  src="../images/groups/219901_205.jpg"   id="show"  >
	    </c:if>
	     <c:if test="${not empty user.photo}">
	      <img  src="/uploads/${user.photo}"   id="show"  >
	    </c:if>
		<button id="bu">上传图片</button>
		<input type="file" name="files" id="myfile"  onchange="preview(this)">
		<input type="hidden" id="photo" value="${user.photo }">
		  </form>
	</div>
	<div class="img_div" id="testDiv" style="display:none;"></div>
</div>

<!--main end-->
<script type="text/javascript">
   var myRole=JSON.parse('${myRole}'); //我的角色
   var roleAll=JSON.parse('${roleAll}'); //所有角色
   var msg="";
	   for(var x=0;x<roleAll.length;x++){
		   var xid=roleAll[x].id;
		   var ch="";
		   for(var y=0;y<myRole.length;y++){
			   var yid=myRole[y].id;
			   if(xid==yid){
				   ch="checked";
				   break;
			   }
		   }
		msg=msg+"<li><input type='checkbox' "+ch+" name='checkBoxRole' id='"+roleAll[x].id+"' data-labelauty='"+roleAll[x].roleName+"'></li>";
	   }
   $("#roles").append(msg);
</script>
</body>
</html>