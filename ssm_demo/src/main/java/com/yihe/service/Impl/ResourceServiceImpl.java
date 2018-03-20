package com.yihe.service.Impl;

import java.util.List;

import com.yihe.bean.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yihe.bean.PageResource;
import com.yihe.dao.IResourceDao;
import com.yihe.service.IResourceService;

@Service("resourceService")
public class ResourceServiceImpl implements IResourceService {

	
	@Autowired
	public IResourceDao resDao;

	public int insertSelective(Resource res) {
		
		return resDao.insertSelective(res);
	}

	public int deleteByPrimaryKey(List<String> ids) {
		
		return resDao.deleteByPrimaryKey(ids);
	}

	public int updateByPrimaryKeySelective(Resource res) {
		
		return resDao.updateByPrimaryKeySelective(res);
	}

	public Resource selectByPrimaryKey(String id) {
		
		return resDao.selectByPrimaryKey(id);
	}

	public List<Resource> getList(PageResource pl) {
		
		return resDao.getList(pl);
	}

	public int getListNum(PageResource pl) {
		
		return resDao.getListNum(pl);
	}

	
	
	

	
	
}
