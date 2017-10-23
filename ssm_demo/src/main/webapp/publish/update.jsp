<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>公告更新</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
<%@ include file="/common/common.jsp"%>
<script type="text/javascript" charset="utf-8" src="ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="ueditor.all.js"> </script>
<script type="text/javascript" src="../js/publish/publish_update.js"></script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="lang/zh-cn/zh-cn.js"></script>
<style type="text/css">
.my{
    width: 100%;
    padding: 12px;
    border: 1px solid #e6e9f0;
    border-top: 1px solid #008FC6;
    border-bottom: 0px;
    background: #fff;
}
#bu{
	width:120px;
	height: 30px;
	}
	#myfile{
	position: absolute;
	height: 30px;
	width:170px;
	left:310px;
	/* top:122px;
	left:0; */
	border: 1px solid red;
	filter:alpha(opacity:0);opacity: 0; 
	 cursor: pointer;
	}
	#photo2{
	position: absolute;
    left: 438px;
    /* top: 10px; */
    margin-top: 3px;
	}
</style>
</head>
<body>
	<div class="ztcht-number  w10 p15 my" >
		<div class="ztcht-auditing-cont w10">
			<h1 class="hcol1 w10">
				<i ><img src="title.png" width="40" height="40"></i>公告添加
			</h1>
			
			<input type="hidden" id="id" />
			<div class="ad-edit-title hcol1 fl w10">标题
				 <input type="text" id="title" placeholder="请输入标题"/>
			</div>
			<div class="form-group">
                        <label for="monType" style="color: #369d9a;font-size: 20px;" >类型:</label>
                        <select  id="typeId" style="margin-left:5px;">
                            <option value="title_1">点击排行</option>
                            <option value="title_2" >最新文章</option>
                            <option value="title_3">站长推荐</option>
                        </select>
             </div>
             <div >
           <form id="fileForm" onsubmit="return false;" name="fileForm" enctype="multipart/form-data"
				method="post">
				<button id="bu">选择图片</button>
				<input type="file" name="files" id="myfile" onchange="preview(this)">
				<input type="text" style="width: 46px;">
				<img  style="display: none;" id="photo2" width="40" height="40">
				 <input type="hidden" id="photo">
			</form>  
             </div>
			
			<div>
			 <a href="javaScript:cancel();" class="btn-save fr"><i class="fa fa-share-square-o mr5"></i>返回</a>
				 <a class="bUbuttons-03 fr mr5" id="save"><i class="fa fa-save mr5"></i>提交</a>
			</div>
			 <div class="noticeBodyBox fl">
				<script id="editor" class="sdnakj w10" type="text/plain"></script>
			</div>
		</div>
	</div>
</body>
</html>

<script type="text/javascript">
    var ue=UE.getEditor("editor", {
        toolbars:[
            ['fullscreen','|', 'undo', 'redo', '|',
                'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                 'indent', '|',
                'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 
                'link', 'unlink','|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                'simpleupload', 'template','|',
                'horizontal','spechars','|',
                'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', '|',
                'preview', 'searchreplace', 'help']
        ],
        elementPathEnabled : false,//不显示元素路径
        wordCount:false, //不显示字数统计,
        initialFrameWidth :200,//设置编辑器宽度
        initialFrameHeight:250,//设置编辑器高度
        serverUrl: "/ssm_demo/customImageUrl/uploadFile.do",//请求配置config.json文件 
        imageUrl : "/ssm_demo/user/upload.do" //文件上传地址
    });
</script>