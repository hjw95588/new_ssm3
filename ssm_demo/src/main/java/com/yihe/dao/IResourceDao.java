package com.yihe.dao;

import java.util.List;

import com.yihe.bean.PageResource;
import com.yihe.bean.Resource;

public interface IResourceDao {
    
    int insertSelective(Resource record);

     int deleteByPrimaryKey(List<String> ids);

    int updateByPrimaryKeySelective(Resource record);
    
    Resource selectByPrimaryKey(String id);

    public    List<Resource> getList(PageResource pl);//查询集合(用于分页)

	public	 int getListNum(PageResource pl);  //查询总记录数
   

}