<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en-us">
<head>
    <meta charset="utf-8">
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">-->
    <title>后台管理</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Basic Styles -->
    <link rel="stylesheet" href="../bootstrap/css/font-awesome.min.css"><!--字体图标样式-->
    <link rel="stylesheet" href="../css/layout.css"><!--公共样式-->
    <link rel="stylesheet" href="../css/groups.css"><!--组件样式-->
    <link rel="stylesheet" href="../css/appmenu.css"><!--应用菜单样式-->
    <link rel="stylesheet" href="../css/business.css"><!--应用菜单样式-->
    <script type="text/javascript" src="../js/jquery-2.0.2.min.js"></script><!--jquery版本-->
    <script type="text/javascript" src="../js/iam-util.js"></script><!--判断是否超时-->
    <script type="text/javascript" src="../js/sideBar.js"></script><!--左侧APP快捷入口-->
    <script src="../js/left-menu.js"></script><!--应用菜单-->
    <script src="../js/resize.js"></script><!--页面自适应-->
    <script src="../js/search-more.js"></script><!--更多查询条件-->
    <script src="../js/My97DatePicker/WdatePicker.js" type="text/javascript"></script><!--时间控件-->
    <script src="../js/common/bootstrap.min.js" type="text/javascript"></script>
	<style>
		body{overflow:hidden}
	</style>
</head>
<body onload="loadTopWindow();">
<!--heaer begin-->
<header class="header dropdown">
    <img src="../images/public/logo.png">
    <div class="pull-right">
        <!--样式内容为layout.css 509行至559行-->
        <ul class="header-search">
            <li>
                <i class="search-i fa fa-search"></i>
                <input class="" type="text"/>
            </li>
            <li>
                <a href="#" class="icon-list"><i class="fa fa-th"></i></a>
            </li>
            <!-- <li>
                <a href="#" class="icon-ask"><i class="fa fa-question-circle"></i></a>
            </li>
            <li>
                <a href="#" class="icon-set"><i class="fa fa-cog"></i><i class="fa fa-caret-down"></i></a>
            </li> -->
        </ul>
        <!--必须引用<a></a> 和data-toggle="dropdown"属性和class="dropdown-menu"才能调用-->
        <a class="qh-user cursor" id="dropdownMenu1" data-toggle="dropdown">
            <i class="fa fa-user"></i> <span> ${user.username } </span>
            <i class="fa fa-chevron-down"></i>
        </a>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">

            <li class="dropdown-li" role="presentation"><a role="menuitem" tabindex="-1" href="/logout.action"><i class="fa fa-sign-out mr5"></i>退出</a></li>
        </ul>
    </div>
</header>
<!--header end-->
<div class="warp">
        <!--sideBar begin-->
    <div id="sideBar">
        <div class="sideBar"> <a class="sideBar-memu"><i class="fa fa-navicon"></i></a>
            <ul class="sideBar-list">
                <li>
                    <a href="#"><i class="fa fa-home"></i>
                        <span class="tooltips"><i class="arrow_left_ico"></i><span class="tooltips-con">主页</span></span>
                    </a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-file-text-o"></i>
                        <span class="tooltips"><i class="arrow_left_ico"></i><span class="tooltips-con">发文流程</span></span>
                    </a>
                </li>
               
            </ul>
        </div>
        <div class="sideBar-open"> <a class="sideBar-memu-open"><i class="fa fa-navicon"></i></a>
            <ul class="sideBar-list">
                <li><a href="#"><i class="fa fa-home"></i><span class="padding-left">主页</span></a></li>
                <li><a href="#"><i class="fa fa-file-text-o"></i><span class="padding-left">发文流程</span></a></li>
               
            </ul>
        </div>
    </div>
    <!--sideBar end-->
    <!--right begin-->
    <div class="right-warp">
        <div class="main">
            <div class="crumbs">
                <p>
                    <i class="fa fa-home ml10"></i> 精确业务  > <span class="active ml5 noBorBot">样式按钮</span>
                </p>
            </div>
            
            <!--应用菜单begin-->
            <div class="left-menu"></div>
            <!--应用菜单end-->
            
            <!--子页面begin-->
            <div class="right-cot">
                <iframe src="../radio/radio.html" id="smIframe" name="smIframe" style="width:100%;height:100%" frameborder="0" scrolling="scrolling" ></iframe>
            </div>
            <!--子页面end-->
            
        </div>
        <!--main end-->
    </div>
</div>
<script>
    var _menuNode=[
        {name:"精确业务 ",src:"",pageId:"",children:[
                                                 
            {name:"样式按钮",src:"../radio/radio.html",pageId:""},
            {name:"消息发布",src:"/publish/publish_manager.jsp",pageId:""}
        ]},
        {name:"用户基本信息 ",src:"",pageId:"",children:[
        {name:"用户管理",src:"/user/user_manager.jsp",pageId:""}
        
        ]},
        {name:"角色基本信息 ",src:"",pageId:"",children:[
           {name:"角色管理",src:"/role/role_manager.jsp",pageId:""}
          ]},
        {name:"标签基本信息 ",src:"",pageId:"",children:[
         {name:"标签管理",src:"/mark/mark_manager.jsp",pageId:""}
          ]},
          {name:"测试页面 ",src:"",pageId:"",children:[
           {name:"测试页面",src:"/document/archiveAdd9815.html",pageId:""}
            ]}
    ]
    
    $(function() {
        $(".left-menu").append(buildMenu(_menuNode, 0,15,235));
        initMenu();
    })

</script>
</body>
</html>