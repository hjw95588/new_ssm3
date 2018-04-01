
var upload_global = {
    FilesAdded: function (files) {
        $(".file-tables").show();
    },
    UploadComplete: function (files, uploader) {
        $(".del_btn").bind('click', function () {
            if ($(".del_btn").length == 1) {
                $(".file-tables").hide();
            }
        });

    },
    UploadDeleted: function (files) {
        if ($("#uploadTbody").children().length == 0) {
            $(".file-tables").hide();
        }
    }
};
/**
 * 页面初始化。
 */
$(document).ready(function () {
	
	isProvince();
	
	queryOrg();
	
	querySaveYear();
	
	loadAttach();
	
	showRefer();
});

function  changePaper(str){
	var val = $(str).val();
	    if(isNaN(val)){
	        layer.msg('请输入数值',{icon:7});
	        $(str).val("");
	        return;
	    } 

}

//档号变化 处理开始
/**
 * 省局：
档号：全宗号-档案门类代码·年度-存档期限-机构代码-件号
例：0194-WS·2016-D30-BGS-0001

直属单位：
档号：档案门类代码·年度-存档期限-机构代码-件号

WS·2016-D30-BGS-0001
 */

function showRefer(){
	
	var name=$("#fondsNumber").val()+"-WS."+$("#year").val()+"-"+
	$("#saveYear").find("option:selected").attr("na")+"-"+
	$("#orgShortName").val()+"-"+$("#partNo").val();
	
	$("#reference").val(name);
}





//变化的 年度
function  changeYear(str){
	var val = $(str).val();
    showRefer();
    if(val){
    	val=parseInt(val)+11;
        $("#endDate").val(val+"-01-01");
    }
   
   
    
}

//变化的 存档期限
function  changeSaveYear(){
	showRefer();
}




//变化的 件号
function  changePartNo(str){
	var val = $(str).val();
	    if(isNaN(val)){
	        layer.msg('请输入数值',{icon:7});
	        $(str).val("");
	        return;
	    } 
	    
	    showRefer();
}


//档号变化 处理结束

//判断是否是省局
function  isProvince(){
	$("#fondsNumber").val("0194");
	/*jQuery.ajax({
		  type:"get",
		  url:"/archiveManagement/isProvince",
		  success:function(result){
			  if(result){
				  $("#fondsNumber").val("0194");
			  }else{
				  $("#fondsNumber").val("");
			  }
		  }
	  })*/
}

//调用数据字典，存档期限
function querySaveYear(){
	/*$.ajax({
		type:"get",
		url:"/archiveManagement/querySaveYear.do",
		success:function(msg){
			var re=msg;
			if(re.length>0){
				for(var x=0;x<re.length;x++){
					var code=re[x].dcCode;
					var name=re[x].dcName;
					var op="<option value="+code+">"+name+"</option>";
					$("#saveYear").append(op)
				}
			}
		}
	})*/
}


//加载选择的机构
function  queryOrg(){
	/*jQuery.ajax({
		  type:"get",
		  url:"/archiveManagement/org",
		  success:function(result){
			  queryOrgNew(result);
		  }
	  })*/
}

function  queryOrgNew(result){
	  if(result.length>0){
	   		var str="";
	   		for(var x=0;x<result.length;x++){
	   			
	   			var orgName=result[x].displayName;  //机构名称
	   		    var orgShortName=changeStr(result[x].orgShortName);  //简称
	   		    var orgId=result[x].uuid;  //组织id
	   			
	   		    str=str+"<option value="+orgId+"  orgshortname="+orgShortName+" >"+orgName+"</option>";
	   			
	   		}
	   		$("#orgId").append(str);
	   	}
  }

function changeStr(str){
	if(!str){
		return "&nbsp";
	}else
		return str;
	
}

function orgChange(){
	
	var obj=$("#orgId").find("option:selected");
	
	var name=obj.attr("orgshortname");
	
	$("#orgShortName").val(name);
	
	showRefer();
}

//加载附件
function  loadAttach(){
	/*var archiveInfoAttachmentOption = {
            file_ids: "",
            multi_selection: false,
            max_file_size: "20mb",
            prevent_duplicates: true,
            mime_types: "",
            btn_class: "btn btn-default",
            table_class: "table-form table-bordered file-tables"
        };
        $("#attachment").load("/doc/index", archiveInfoAttachmentOption, function () {
            if ($("#uploadTbody").children().length != 0) {
                $(".file-tables").show();
            }
        });*/
}

/**
 * 返回上一页
 * ----------
 * 输出: 上一页面
 */
function back() {
    location.href = "/html/historyArchiveList.html?StartDate=" +
        StartDate + "&EndDate=" + EndDate + "&Unit=" + Unit + "&Theme=" + Theme + "&arcYearName=" + _arcYearName;
}

/**
 * 编辑
 * ===============
 * edit
 *
 * 参数
 * ----------
 *
 * 返回: 无
 */
function save() {
    /*var _fileIdList = getFileInfo();  //获取上传的文档的附件id
    checkHasNotUpload();
    
    var _idListStr = "";
    $.each(_fileIdList, function(){
        _idListStr = _idListStr + this.id + ",";
    });
    
    var attachment="";  //附件id
    if(_idListStr){
    	attachment=_idListStr.substr(0,_idListStr.length-1);
    }
    */
    var flag1=$("#searchForm").valid();

    if(flag1){
    	saveMethod(attachment);
    }
    
    /*$.ajax({
        url: "/archiveManagement/editHisArchiveFileById.do?fileid=" + id,
        contentType:"application/json",
        type:"post",
        data: JSON.stringify(_archive),
        async: false,
        success: function() {
            layer.alert("操作成功", {}, function () {
                back();
            });
        },
        error: function(err) {
            console.log(err);
            layer.msg("操作失败", {icon: 2});
        }
    })*/
}


function saveMethod(attachment){
	var partNo=$("#partNo").val();  //件号
	var fileName=$("#fileName").val();//题名
	var paper=$("#partNo").val(); //页数
	var remark=$("#remark").val();//备注
	var saveYear=$("#partNo").val(); //存储年限
	var responsibility=$("#responsibility").val();//责任者
	var fileNo=$("#fileNo").val(); //文号
	var endDate=$("#endDate").val(); //到期时间
	var filingTime=$("#year").val()+"-01-01"; //归档时间
	var applicaDate=$("#applicaDate").val(); //日期
	var fondsNumber=$("#fondsNumber").val(); //全宗号
	var orgId=$("#orgId").val(); //选择机构id
	var orgName=$("#orgName").val();  //选择机构名称
	var orgShortName=$("#orgShortName").val(); //简称
	var year=$("#year").val();  //年度
	var reference=$("#reference").val(); //档号
	var attachment=attachment;  //附件
	
	var obj={
			partNo:partNo,
			fileName:fileName,
			paper:paper,
			remark:remark,
			saveYear:saveYear,
			responsibility:responsibility,
			fileNo:fileNo,
			endDate:endDate,
			filingTime:filingTime,
			applicaDate:applicaDate,
			fondsNumber:fondsNumber,
			orgId:orgId,
			orgName:orgName,
			orgShortName:orgShortName,
			year:year,
			reference:reference,
			attachment:attachment
	}
	
	jQuery.ajax({
		  type:"POST",
		  url:"/archiveManagement/addArchive9815",
		  contentType:"application/json;charset=utf-8",
		  data:JSON.stringify(obj),
		  success:function(result){
			  if(result.status=="1"){
				  layer.msg('操作成功',{icon:1});
				  readOnly();
			  }
		  }
	  })
	
	
}