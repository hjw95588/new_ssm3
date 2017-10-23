package com.yihe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yihe.bean.PagePublish;
import com.yihe.bean.Publish;

public interface IPublishDao {

	public int add(Publish pub);
	
	public int deletePublish(List<String> ids);
	
	public int update(Publish pub);
	
	public Publish query(String id);
	
	public List<Publish> getList(PagePublish pa);//查询集合(用于分页)

	public int getListNum(PagePublish pa);  //查询总记录数
	
	/*public List<User> getList(@Param("roleName")String roleName,
			@Param("roleType")String roleType,
            @Param("pageNum")Integer pageNum, 
            @Param("pageSize")Integer pageSize);*/
	
}
