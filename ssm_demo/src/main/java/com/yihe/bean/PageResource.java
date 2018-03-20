package com.yihe.bean;

public class PageResource extends Resource {

	public PageResource(Integer pageSize,Integer pageNum) {
		this.pageSize=pageSize;
		this.pageNum=pageNum;
	}
	
	public PageResource() {
		
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer pageSize;
	private Integer pageNum;

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getPageNum() {
		return pageNum;
	}

	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
	}

	@Override
	public String toString() {
		return "PageResource [pageSize=" + pageSize + ", pageNum=" + pageNum
				+ "]";
	}

	

}
