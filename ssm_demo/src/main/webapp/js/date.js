/**
* 时间格式化 year month day
*/
function timeStamp2String(time){
	var datetime = new Date();
	datetime.setTime(time);
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
	var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
	return year + "-" + month + "-" + date;
}

/*
 * 包含时分秒
 */
function timeDate(timestamp){
	var date = new Date(timestamp);
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date
			.getMonth() + 1)
			+ '-';
	D = (date.getDate()<10?'0'+date.getDate():date.getDate())+"   ";
	h = (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':';
	m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
	s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
	return Y + M + D + h + m + s;
}