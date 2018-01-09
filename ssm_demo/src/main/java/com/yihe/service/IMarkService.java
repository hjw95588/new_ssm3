package com.yihe.service;

import java.util.List;



import com.yihe.bean.Mark;
import com.yihe.bean.PageMark;
import com.yihe.bean.PagePublish;
import com.yihe.bean.Publish;


public interface IMarkService {

	public int insertSelective(Mark record);
	
	
    
	public   int deleteByPrimaryKey(List<String> ids);


	public  int updateByPrimaryKeySelective(Mark record);
	    
	public   Mark selectByPrimaryKey(String id);
	    
	public    List<Mark> getList(PageMark pl);//查询集合(用于分页)

	public	 int getListNum(PageMark pl);  //查询总记录数
	
}
