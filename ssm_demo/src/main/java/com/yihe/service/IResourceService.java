package com.yihe.service;

import java.util.List;

import com.yihe.bean.PageResource;
import com.yihe.bean.Resource;



public interface IResourceService {

	public int insertSelective(Resource record);
	
	public   int deleteByPrimaryKey(List<String> ids);


	public  int updateByPrimaryKeySelective(Resource record);
	    
	public   Resource selectByPrimaryKey(String id);
	    
	public    List<Resource> getList(PageResource pl);//查询集合(用于分页)

	public	 int getListNum(PageResource pl);  //查询总记录数
	
}
