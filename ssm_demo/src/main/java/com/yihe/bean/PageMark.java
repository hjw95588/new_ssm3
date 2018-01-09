package com.yihe.bean;


/**
 * @author 
 */
public class PageMark extends Mark {
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
	return "PageLabel [pageSize=" + pageSize + ", pageNum=" + pageNum + "]";
}
   
   

}