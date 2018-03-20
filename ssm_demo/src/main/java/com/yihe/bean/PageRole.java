package com.yihe.bean;

public class PageRole extends Role {

	public PageRole(Integer pageSize,Integer pageNum) {
		this.pageSize=pageSize;
		this.pageNum=pageNum;
	}
	
	public PageRole() {
		
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
		return "PageRole [pageSize=" + pageSize + ", pageNum=" + pageNum + "]";
	}

}
