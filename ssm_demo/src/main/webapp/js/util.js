function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");

     var r = window.location.search.substr(1).match(reg);
     if(r!=null){
    	 return  unescape(r[2]);
     }
     return null;

}
function GetIdUrl()
{
   
     var r = window.location.search.substr(1);
     var pos1=r.indexOf("id=");
     
     if(pos1>-1){
    	 return r.split("=")[1];
     }
    
}
function GetBaseUrl()
{
     var r = window.location.search.substr(1);
     var pos1=r.indexOf("baseUrl=");
     var url=r.substring(pos1+8);
     var pos2=url.indexOf("?");
     var pos3=url.indexOf("&");
     if(pos2==-1){
    	 if(pos3==-1){
    		 return url;
    	 }else{
    		 return url.substring(0,pos3);
    	 }
     }else{
    	 if(pos3==-1){
    		 return url;
    	 }else if(pos2>pos3){
    		 return url.substring(0,pos3);
    	 }else{
    		 return url;
    	 }
     }    
}

/**
 * 过滤特殊字符
 * @param val
 * @returns {String}
 */
    function findSpecialCharacter(val) {
     if (val == null || val == "") {
      return val;
     }
     var arr = val.split("");
     for (var i = 0; i < arr.length; i++) {
	  if(/^[%_<>&']*$/.test(arr[i])){
		arr[i] = '\\' + arr[i];
	  }else if (/^[&+#]*$/.test(arr[i])) {
       arr[i] = escape(encodeURIComponent(arr[i]));
      }else if(/^[%\\]*$/.test(arr[i])){
       arr[i] = encodeURI(encodeURI('\\' + arr[i]));
      } else{
       arr[i] = encodeURI(encodeURI(arr[i]))
      }
     }
     return arr.join("");
    };

Date.prototype.format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}