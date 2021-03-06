$.ajaxSetup({
	cache: false,
    complete: function(xhr,status) {
		var redirect = xhr.getResponseHeader('redirect');
		var url = xhr.getResponseHeader('url');      
		if(redirect!=null) { 
			var top = getTopWinow();           
			top.location.href=url;               
		}
    },
    beforeSend: function(e,xhr){
		paramsDES(xhr,xhr.url,xhr.data||'');
	}
});

function getTopWinow(){
    var p = window;
    while(p != p.parent){
        p = p.parent;
    }
    return p;
}
/**
 * 参数加密
 * @param url ajax的url
 * @param data ajax 的data数据
 */
function paramsDES(xhr,url,data){
	var b64=new Base64();
//	console.log(url);
//	console.log("before:"+data);
	var params={};
	if(data&&! (data instanceof Object) &&data.indexOf('{')==0&&data.lastIndexOf('}')==(data.length-1)){
			xhr.data="des("+b64.encode(data)+")";
//		console.log("encode:"+xhr.data);
//		console.log("decode:"+b64.decode(xhr.data||''));
	}
	 // else if(xhr.contentType && xhr.contentType.indexOf('application/x-www-form-urlencoded')>-1){
	 // 	var hashes = data.split('&');
	 // 	for(var i = 0; i < hashes.length; i++){
	 // 		hash = hashes[i].split('=');
	 // 		var key=hash[0];
	 // 		var value=hash[1];
	 // 		if(key==null){
	 // 			key='';
	 // 		}
	 // 		if(value==null){
	 // 			value='';
	 // 		}
	 // 		key="des("+(b64.encode(key))+")";
	 // 		value="des("+(b64.encode(value))+")";
	 // 		params[key] = value;
	 // 	}
	 // 	var param="";
	 // 	for(var key in params){
	 // 		param=param+key+"="+params[key]+"&";
	 // 	}
	 // 	xhr.data=param.substring(0, param.length-1);
	 // }
	if(url.indexOf('?')>-1 && url.indexOf('.html?')<0 &&url.indexOf('.jsp?')<0 && url.indexOf('.js?')<0 && url.indexOf("upload")<0){
		var hashes = url.slice(url.indexOf('?') + 1).split('&');
		var newUrl=url.slice(0,url.indexOf('?')+1);
		for(var i = 0; i < hashes.length; i++){
			hash = hashes[i].split('=');
			var key=hash[0];
			var value=hash[1];
			key="des("+encodeURIComponent(b64.encode(key))+")";
			value="des("+encodeURIComponent(b64.encode(value))+")";
			newUrl=newUrl+key+"="+value+"&";
		}
		xhr.url=newUrl.substring(0, newUrl.length-1);
	}
}

/**
*
*  Base64 encode / decode
*
*  @author haitao.tu
*  @date   2010-04-26
*  @email  tuhaitao@foxmail.com
*
*/
 
function Base64() {
 
	// private property
	_keyStr = "ABCDEFGIHJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz012345678+/=9";
 
	// public method for encoding
	this.encode = function (input) {
		if(!input&&input.length==0){
			return "";
		}
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
		input = _utf8_encode(input);
		while (i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
			output = output +
			_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
			_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
		}
		return output;
	}
 
	// public method for decoding
	this.decode = function (input) {
		if(!input&&input.length==0){
			return "";
		}
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (i < input.length) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = _utf8_decode(output);
		return output;
	}
 
	// private method for UTF-8 encoding
	_utf8_encode = function (string) {
		var reg = new RegExp("/\r\n/g","g");
		string = string.replace(reg,"\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}
		return utftext;
	}
 
	// private method for UTF-8 decoding
	_utf8_decode = function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while ( i < utftext.length ) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}

