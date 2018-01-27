<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="utf-8">
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">-->
    <title>标签管理</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   <%@include file="/common/common.jsp" %>
</head>
<body>
<!--main begin-->
<div class="iframe-cot pull-right">
    <!--查询条件从这里开始-->
    <div class="right-form">
        <form class="form-inline" >
            <div class="tb_search" id="search">
                <div class="pull-left">
                    <!--更多查询条件-->
                    <span class="search-more">更多条件<i class="fa fa-angle-down ml5"></i></span>
                     <div class="form-group">
                        <label for="status">名称：</label>
                         <input type="text" id="name" >
                    </div>
                    <div class="form-group">
                        <label for="status">url：</label>
                         <input type="text" id="url" >
                    </div>
                    
                </div>
            </div>
        </form>
    </div>
    <!--查询条件到这里结束-->
    <div class="line-e6e"></div>
    <div class="form-top">
        <div class="pull-left">
            <button class="btn btn-default" onclick="addMark()"><i class="fa fa-plus mr5"></i>新增</button>
            <button class="btn btn-default" onclick="updateMark()"><i class="fa fa-pencil mr5"></i>编辑</button>
            <button class="btn btn-default" onclick="deleteMark();" ><i class="fa fa-times mr5"></i>删除</button>
        </div>
        <div class="pull-right">
            <a class="btn btn-orange" onclick="purchaseList()"><i class="fa fa-search mr5"></i>查询</a>
            <a class="btn btn-blue" onclick="clean()"><i class="fa fa-trash-o mr5"></i>清空</a>
        </div>
    </div>
    <div class="table-scroll" >
        <table class="table-form table-bordered table-hover table-ellipsis table-fixed">
            <thead>
            <tr>
                <th width="5%"><input type="checkbox" class="check_view_state" style="display: none;"  id="checkbox-2" onclick="checkAll();" />
                <label for="checkbox-2"></label>
                </th>
                <th width="5%">序号</th>
                <th width="30%">标签名称</th>
                <th width="35%">url</th>
                <th width="30%">更新时间</th>
            </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
    </div>
    
    <!--pages begin-->
    <div class="pages">
        <div class="dataTables-length" >
            每页记录
            <select aria-controls="dynamic-table" id="change"  class="form-page" onchange="change();" >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <span class="ml5" id="count">共100条记录</span>
        </div>
        <div class="dataTables-paginate pull-right">
            <ul class="pagination-user">
                <li id="now">当前：</li>
                <li id="num">1</li>
                <li id="now2">/</li>
                <li id="total"></li>
                <li><a id="first">首页</a></li>
                <li><a id="prev">上一页</a></li>
                <li id="test"></li>
                <li><a id="next">下一页</a></li>
                <li><a id="end">尾页</a></li>
                <li><input type="text"  id="pageNum" class="inp-number"></li>
                <li><button class="btn-fresh" onclick="jumpPage();">跳转</button></li>
            </ul>
        </div>
    </div>
    <style>
    #now,#now2,#num,#total{
    float:left;margin-right: 10px;margin-top:4px;
    font-size: 15px;
    }
    li a{
    cursor:pointer;
    }
    </style>
    
  <style type="text/css">
input[type="checkbox"] + label {
    cursor: pointer;
    font-size: 1em;
}
[id^="checkbox-"] + label {
    background-color: #ffffff;
    border: 1px solid #666666;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
}
[id^="checkbox-"] + label:active {
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}
[id="checkbox-2"]:checked + label {
    background: url("/images/checkmark (1).png");
background-repeat: no-repeat;
background-size:cover;
}

[name="check"] + label {
    background-color: #ffffff;
    border: 1px solid #666666;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;

}
[name="check"] + label:active {
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}
[name="check"]:checked + label {
background: url("/images/checkmark (1).png");
background-repeat: no-repeat;
background-size:cover;
}

.myshow{
 filter:alpha(opacity:0);opacity: 0;
position:absolute;width:20px;height:20px;
   cursor: pointer;
}
#sh{
background:#3276B1;color:white;
}
</style>
<script type="text/javascript" src="/js/mark/mark_manager.js">
</script>
</div>
</body>
</html>