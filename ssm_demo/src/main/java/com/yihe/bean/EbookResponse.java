package com.yihe.bean;

import java.io.Serializable;

public class EbookResponse <T> implements Serializable {
	//数据
	private T data;
	//返回响应码0/1  
	private String status;
	// 200  400  404  
	private String responseCode;
	//异常
	private Exception exception;
	//字典     2 2   01 
	private String code;
	//携带的
	private String msg;
	public EbookResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public EbookResponse(T data, String status, String code, String msg) {
		super();
		this.data = data;
		this.status = status;
		this.code = code;
		this.msg = msg;
		this.responseCode = "200";
	}


	public EbookResponse(T data, String status, String responseCode,
			Exception exception, String code, String msg) {
		super();
		this.data = data;
		this.status = status;
		this.responseCode = responseCode;
		this.exception = exception;
		this.code = code;
		this.msg = msg;
	}


	public T getData() {
		return data;
	}


	public void setData(T data) {
		this.data = data;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getResponseCode() {
		return responseCode;
	}


	public void setResponseCode(String responseCode) {
		this.responseCode = responseCode;
	}


	public Exception getException() {
		return exception;
	}


	public void setException(Exception exception) {
		this.exception = exception;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getMsg() {
		return msg;
	}


	public void setMsg(String msg) {
		this.msg = msg;
	}


	@Override
	public String toString() {
		return "EbookResponse [data=" + data + ", status=" + status
				+ ", responseCode=" + responseCode + ", exception=" + exception
				+ ", code=" + code + ", msg=" + msg + "]";
	}
	
	
	
	
}
