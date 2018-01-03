<%@ page language="java" pageEncoding="UTF-8"%>
<%
String reportlet = request.getParameter("reportlet");
if (reportlet==null||reportlet.trim().length()==0){
	reportlet = "%5B7ecf%5D%5B8425%5D%5B9884%5D%5B7b97%5D%5B8868%5D2.cpt";
}
String action = request.getParameter("action");
String org_id = request.getParameter("org_id");
String date_id = request.getParameter("date_id");
String org_name = request.getParameter("org_name");
String report_type = request.getParameter("report_type");
String __bypagesize__ = request.getParameter("_bypagesize_");
String midway_url = request.getParameter("midway_url");
if (__bypagesize__==null||__bypagesize__.trim().length()==0){
	__bypagesize__ = "true";
}
%>
<html>
<head>
<title>预算填报</title>
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<link rel="stylesheet" href="static/bootstrap/css/font-awesome.min.css">
<link rel="stylesheet" href="static/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="static/css/layout.css">
<link rel="stylesheet" href="static/css/groups.css">
<script type="text/javascript" src="static/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript"
	src="static/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" id="external-script"></script>
<script type="text/javascript">
    //cjkEncode方法的实现代码，放在网页head中或者用户自己的js文件中
    function cjkEncode(text) {                                                                          
      if (text == null) {       
        return "";       
      }       
      var newText = "";       
      for (var i = 0; i < text.length; i++) {       
        var code = text.charCodeAt (i);        
        if (code >= 128 || code == 91 || code == 93) {  //91 is "[", 93 is "]".       
          newText += "[" + code.toString(16) + "]";       
        } else {       
          newText += text.charAt(i);       
        }       
      }       
      return newText;       
    }   

	/*
	 * 取url参数
	 */
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //
		var r = window.location.search.substr(1).match(reg);  //
		if (r != null) return unescape(decodeURI(r[2])); return null; //
	}

	

	function load(){
			//alert($("#org_id").val()+"----"+$("#date_id").val());
		var url = "/qhiadsReport/ReportServer?reportlet=<%=reportlet%>&op=write&__bypagesize__=false";
	    document.proxyForm.action = url; //通过form的name获取表单，并将报表访问路径赋给表单的action
	    document.proxyForm.submit(); //触发表单提交事件
		
	}

	function exportFile(){
		var obj = document.getElementById('export_type');
		var export_type = obj.options[obj.options.selectedIndex].value;
		var cp = document.getElementById('proxyFrame').contentWindow.contentPane;
		if (export_type=='PDF'){
			cp.exportReportToPDF();
		}else if (export_type=='EXCEL'){
			cp.exportReportToExcel('simple');
		}else if (export_type=='WORD'){
			cp.exportReportToWord();
		}else if (export_type=='PIC'){
			cp.exportReportToImage('jpg');
		}
	}
	function initHeight() {
		var str_midway_url = "midway_url";
		//从URL中获取midway_url
		var midway_reg = new RegExp(str_midway_url + "=([^&]*)(&|$)");
		var midway_res = window.location.search.match(midway_reg);
		//从Cookie中获取midway_url
		var cookies = document.cookie;
		var offset = cookies.indexOf(str_midway_url);
		//若URL中存在，则获得并存入Cookie
		//若Cookie中存在，则获取
		var midway_url = '';
		if (midway_res) {
			midway_url = unescape(midway_res[1]);
			document.cookie = str_midway_url + "=" + midway_url +"?action="+"<%=action%>";
		} else if (offset != -1) {
			offset += str_midway_url.length + 1;
			var end = cookies.indexOf(";", offset);
			end = (end != -1) ? end : cookies.length;
			midway_url = cookies.substring(offset, end)+"?action="+"<%=action%>";
		}

		
		//将目标地址的js引入页面中，实现功能
		if (midway_url) {
			document.getElementById('external-script').src=midway_url;
		};
	}
    $(function(){
		load();
		initHeight();
		//$("#proxyFrame").load(function(){   
			//autoHeight();   
		//}); 
		var  report_url = "/qhiadsReport/ReportServer?reportlet=<%=reportlet%>&op=write&__bypagesize__=false";
		$("li[class^='tree']").click(function(){
			$("li[class^='tree']").removeClass("active");
			$(this).addClass("active");
			var reportType=$(this).find("a").attr("report_type");
			document.proxyForm.action = report_url.replace(".cpt",reportType+".cpt"); 
			document.proxyForm.submit();
		});
	}); 
	
	/** 
 * midway 页面高度自适应代码 
 * 在父页面iframe的src地址后加上midway_url作为线索
 * 一可实现功能，二亦是实现动态加载js，实现此功能的通用
 * midway_url 为需要嵌入目标页面实现功能的js地址
 */
  </script>
</head>
<body style="margin: 0px">
	<div class="pull-left w100">
		<ul class="tabs clearfix">
			<li class="tree1 active"><a href="javascript:void(0)"
				report_type="">年初预算</a></li>
			<li class="tree2"><a href="javascript:void(0)" report_type="_tz">调整预算</a></li>
			<li class="tree3"><a href="javascript:void(0)" report_type="_zx">执行情况</a></li>
		</ul>
		<div class="tab-contentmian">
			&nbsp;
			<button class="btn btn-default"
				onclick="document.getElementById('proxyFrame').contentWindow.contentPane.printPreview()">
				<i class="fa fa-eye mr5"></i>预览
			</button>
			&nbsp;
			<button class="btn btn-default"
				onclick="document.getElementById('proxyFrame').contentWindow.contentPane.pdfPrint()">
				<i class="fa fa-print mr5"></i>打印
			</button>
			&nbsp;
			<button class="btn btn-default" onclick="exportFile()">
				<i class="fa fa-arrow-right mr5"></i>导出
			</button>
			<select style="margin-top: 5px;" id="export_type">
				<option value="PDF">PDF</option>
				<option value="EXCEL">EXCEL</option>
				<option value="WORD">WORD</option>
			</select> <br />
			<form style="display: none;" id="proxyForm" name="proxyForm"
				method="post" target="proxyFrame">
				<input type="hidden" id="date_id" name="year" value="<%=date_id%>" />
				<input type="hidden" id="org_id" name="org" value="<%=org_id%>" /> <input
					type="hidden" id="org_name" name="org_name" value="<%=org_name%>" />
			</form>
			<iframe style="position: absolute; padding-bottom: 80px;"
				id="proxyFrame" name="proxyFrame" width="100%" height="100%"
				frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
		</div>


	</div>

</body>
</html>
