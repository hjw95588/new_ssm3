package com.yihe.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yihe.bean.PagePublish;
import com.yihe.bean.PageUser;
import com.yihe.bean.Publish;
import com.yihe.bean.User;
import com.yihe.dao.IMarkDao;
import com.yihe.dao.IPublishDao;
import com.yihe.dao.IUserDao;
import com.yihe.service.IPublishService;
import com.yihe.service.IUserService;

@Service("publishService")
public class PublishServiceImpl implements IPublishService {

	@Resource
	public IPublishDao publishDao;
	
	@Resource
	public IMarkDao markDao;

	public int add(Publish pub) {

		return publishDao.add(pub);
	}

	public List<Publish> getList(PagePublish pa) {
		return publishDao.getList(pa);
	}

	public int getListNum(PagePublish pa) {
		return publishDao.getListNum(pa);
	}

	public int deletePublish(List<String> ids) {
		
		return publishDao.deletePublish(ids);
	}

	public int update(Publish pub) {
		return publishDao.update(pub);
	}

	public Publish query(String id) {
		
		
		Publish p= publishDao.query(id);
		
		return p;
	}

	
	

	
	
}
