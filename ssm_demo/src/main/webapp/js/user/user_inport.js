$(function(){
	$("#inport").click(function(){
		$("#importArc").modal('show');
	})
	
	 $("#files").change(function(){
	    	var n=$(this).val().indexOf("fakepath");
	        var file=$(this).val();
	    	
	    	if(n>-1)
	    		{
	    		  $("#big1").val(file.substring(12,file.length));
	    		}
	    	else
	    		{
	    		$("#big1").val(file);
	    		}
	    })
	    
	    $("#reset").click(function(){
	    	$("#big1").val("");
	    	$("#files").val("");
	    })
	    
	    $(".close").click(function(){
	    	$("#big1").val("");
	    	$("#files").val("");
	    })
})

function importHisArchiveFile() {
		if ($("input[name='uploadFile']").val()=="" || !$("input[name='uploadFile']").val()) {
			
			showModal("请选择文件");
			//清空进度条
			$("#uploadForm").resetForm();
			$("progress").removeAttr("max").removeAttr("value").hide();
			$("#progress").empty();
			return false;
		}
         var path = $("#files").val();
	    paths = path.substring(path.lastIndexOf("."), path.length);
	    if (paths != ".xls" && paths != ".xlsx") {
	    	showModal("导入文件后缀为.xls或.xlsx结尾，请重新操作");
	     //清空进度条
			$("#uploadForm").resetForm();
			$("progress").removeAttr("max").removeAttr("value").hide();
			$("#progress").empty();
	        return false;
	    } 
	   
	    //开始上传
	    ajaxModal("/user/batchUpload.do", "aa")
		
		
	}
	
	
	/**
	 *文件的ajax的请求
	 */
	function ajaxModal(url,str){
		//打开遮罩层和进度条
		$(".wait-loading").show();
		$("progress").show();
		
		//上传开始
		$("#uploadForm").ajaxSubmit(
				{
			url:url,
			type:'post',
			dataType: 'text',
			uploadProgress : function(event, position, total, percent){
				renderProgress(position, total, percent);
			},
			success:function(data) {
				data = JSON.parse(data);
				if (data.code == "-103") {
					uploadErrorMsg(data); //上传部分成功，提示下载错误信息
				} else if (data.code == '-101')  //模板错误
				{
					showModal(str);
					
					//清空进度条
					$("#uploadForm").resetForm();
					$("progress").removeAttr("max").removeAttr("value").hide();
					$("#progress").empty();
				} else if (data.code == "100") {
					successModal();
				} else {
					showModal("导入失败！");
				}
			},
			contentType: false, //必须false才会自动加上正确的Content-Type
			processData: false,//必须false才会避开jQuery对 formdata 的默认处理
			complete : function() 
			{
				//关闭遮罩层
				$(".wait-loading").hide();
			}
		});
		//上传结束
		
	}
	
	/**
	 * 点击导入时，弹出层的提示语
	 * @param str
	 */
	function showModal(str){
		$("#ztcht-jgsc-custom").find("p").html(str);
		$("#ztcht-jgsc-custom").addClass("myshow");
    	$("#ztcht-jgsc-custom").modal("show");
    	$('#ztcht-jgsc-custom').last().css('z-index',1050+($('.modal-backdrop').length-1)*10);
    	$('.modal-backdrop').last().css('z-index',1049+($('.modal-backdrop').length-1)*10);
	}
	
	/**
	 * 当信息未完全导入时，出现的提示语
	 */
	function uploadErrorMsg(data){
		$("#ztcht-jgsc-upload").find("p").html("信息未能全部导入，详细信息请下载Excel文件");
		$("#up").text("确定");
		$("#ztcht-jgsc-upload").addClass("myshow");
    	$("#ztcht-jgsc-upload").modal("show");
 
    	$('#ztcht-jgsc-custom').last().css('z-index',1050+($('.modal-backdrop').length-1)*10);
    	$('.modal-backdrop').last().css('z-index',1049+($('.modal-backdrop').length-1)*10);
		
		//清空进度条
		$("#uploadForm").resetForm();
		$("progress").removeAttr("max").removeAttr("value").hide();
		$("#progress").empty();
		$("#up").click(function(){
			window.location.href="/user/downloadErrorInfo.do?uuid="+data.data+"&type="+data.status;
		})
		
	}
	
	/**
	 * 导入成功
	 */
	function successModal(){
		//showModal("导入成功");
		$("#ztcht-jgsc-custom").find("p").html("导入成功");
		$("#ztcht-jgsc-custom").addClass("myshow");
		$("#bu").text("确定");
    	$("#ztcht-jgsc-custom").modal("show");
    	$('#ztcht-jgsc-custom').last().css('z-index',1050+($('.modal-backdrop').length-1)*10);
    	$('.modal-backdrop').last().css('z-index',1049+($('.modal-backdrop').length-1)*10);
    	$("#bu").unbind('click').bind('click',function(){
    		$("#bu").text("取消");
    		$("#bu").unbind('click');
    	})
    	
		$(".wait-loading").hide();
		$("#uploadForm").resetForm();
		//清空进度条
		$("progress").removeAttr("max").removeAttr("value").hide();
		$("#progress").empty();
	}
	
	//上传进度回调函数： 
	function renderProgress(position, total, percent) {
		$('progress').attr({value : position, max : total}); //更新数据到进度条  
	    $('#progress').html(bytesToSize(position) + "/" + bytesToSize(total)+". " + percent + "%");
	}

	function bytesToSize(bytes) {  
	    if (bytes === 0) return '0 B';  

	     var k = 1024;  

	     sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];  

	     i = Math.floor(Math.log(bytes) / Math.log(k));  

	     return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];                                                                                                                   //return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];  
	}

	function progressHandlingFunction(e) {  
	    if (e.lengthComputable) {  
	        $('progress').attr({value : e.loaded, max : e.total}); //更新数据到进度条  
	        var percent = e.loaded/e.total*100;  
	        $('#progress').html(e.loaded + "/" + e.total+" bytes. " + percent.toFixed(2) + "%");  
	    }  
	}