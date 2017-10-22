   /**
     * chenckAll
     * 复选框全选反选操作
     * 参数：checkboxs 所有复选框
     */ 
	function chenckAll(){
		var checkboxs=document.getElementsByName("check");
		if($("#fullCheck")[0].checked==true){
			 for (var i=0;i<checkboxs.length;i++) {
				 checkboxs[i].checked=true;
			}
		}else if($("#fullCheck")[0].checked!=true){
			for (var i=0;i<checkboxs.length;i++) {
				 checkboxs[i].checked=false;
			}
		}
	}
	
    /**
     * isCheckAll
     * 复选框按钮全部选中总复选框按钮选中
     */ 
	function isCheckAll(){
		if($("input[type=checkbox][name=check]").not("input:checked").length == 0){
			$("#fullCheck").prop("checked",true);
		}else{
			$("#fullCheck").prop("checked",false);
		}
	};