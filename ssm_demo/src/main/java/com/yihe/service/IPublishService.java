package com.yihe.service;

import java.util.List;


import com.yihe.bean.PagePublish;
import com.yihe.bean.Publish;


public interface IPublishService {

public int add(Publish pub);
	
	public int deletePublish(List<String> ids);
	
	public int update(Publish pub);
	
	public Publish query(String id);
	
	public List<Publish> getList(PagePublish pa);//查询集合(用于分页)

	public int getListNum(PagePublish pa);  //查询总记录数
	
}
