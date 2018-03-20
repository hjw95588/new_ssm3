package com.yihe.service;

import java.util.List;



import com.yihe.bean.Role;
import com.yihe.bean.PageRole;



public interface IRoleService {

	public int insertSelective(Role record);
	
	public   int deleteByPrimaryKey(List<String> ids);


	public  int updateByPrimaryKeySelective(Role record);
	    
	public   Role selectByPrimaryKey(String id);
	    
	public    List<Role> getList(PageRole pl);//查询集合(用于分页)

	public	 int getListNum(PageRole pl);  //查询总记录数
	
}
