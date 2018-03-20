package com.yihe.dao;
import com.yihe.bean.PageRole;
import com.yihe.bean.Role;

import java.util.List;

public interface IRoleDao {

	public int insertSelective(Role role);
	
	public   int deleteByPrimaryKey(List<String> ids);


	public  int updateByPrimaryKeySelective(Role record);
	    
	public   Role selectByPrimaryKey(String id);
	    
	public    List<Role> getList(PageRole pl);//查询集合(用于分页)

	public	 int getListNum(PageRole pl);  //查询总记录数
    


}