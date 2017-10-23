package com.yihe.util;

import java.util.List;

/**
 * 分页对象工具类
 * @author Administrator
 *
 * @param <T>
 */
public class PageBean<T> {
	/**
	 * 当前页码
	 */
	private Integer pageNum;
	/**
	 * 显示记录数
	 */
	private Integer pageSize;
	/**
	 * 总页数
	 */
	private Integer totalPageNum;
	/**
	 * 总记录数
	 */
	private Integer totalRecords;
	/**
	 * 数据集合
	 */
	private List<T> list;
	
	public Integer getPageNum() {
		return pageNum;
	}
	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Integer getTotalPageNum() {
		totalPageNum = totalRecords/pageSize == 0 ? 1 : totalRecords%pageSize == 0 ? totalRecords/pageSize : totalRecords/pageSize+1;
		return totalPageNum;
	}
	public void setTotalPageNum(Integer totalPageNum) {
		this.totalPageNum = totalPageNum;
	}
	public Integer getTotalRecords() {
		return totalRecords;
	}
	public void setTotalRecords(Integer totalRecords) {
		this.totalRecords = totalRecords;
	}
	public List<T> getList() {
		return list;
	}
	public void setList(List<T> list) {
		this.list = list;
	}
	
}
