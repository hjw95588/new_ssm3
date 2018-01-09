package com.yihe.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yihe.bean.Mark;
import com.yihe.bean.PageMark;
import com.yihe.bean.PagePublish;
import com.yihe.bean.PageUser;
import com.yihe.bean.Publish;
import com.yihe.bean.User;
import com.yihe.dao.IMarkDao;
import com.yihe.dao.IPublishDao;
import com.yihe.dao.IUserDao;
import com.yihe.service.IMarkService;
import com.yihe.service.IPublishService;
import com.yihe.service.IUserService;

@Service("markService")
public class MarkServiceImpl implements IMarkService {

	
	@Resource
	public IMarkDao markDao;

	public int insertSelective(Mark record) {
		
		return markDao.insertSelective(record);
	}

	public int deleteByPrimaryKey(List<String> ids) {
		
		return markDao.deleteByPrimaryKey(ids);
	}

	public int updateByPrimaryKeySelective(Mark record) {
		
		return markDao.updateByPrimaryKeySelective(record);
	}

	public Mark selectByPrimaryKey(String id) {
		
		return markDao.selectByPrimaryKey(id);
	}

	public List<Mark> getList(PageMark pl) {
		
		return markDao.getList(pl);
	}

	public int getListNum(PageMark pl) {
		
		return markDao.getListNum(pl);
	}

	
	
	

	
	
}
