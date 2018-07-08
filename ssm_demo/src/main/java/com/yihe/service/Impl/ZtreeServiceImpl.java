package com.yihe.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.yihe.bean.Mark;
import com.yihe.bean.PageMark;
import com.yihe.bean.PagePublish;
import com.yihe.bean.PageRole;
import com.yihe.bean.PageUser;
import com.yihe.bean.Publish;
import com.yihe.bean.Role;
import com.yihe.bean.User;
import com.yihe.bean.Ztree;
import com.yihe.dao.IMarkDao;
import com.yihe.dao.IPublishDao;
import com.yihe.dao.IRoleDao;
import com.yihe.dao.IUserDao;
import com.yihe.dao.IZtreeDao;
import com.yihe.service.IMarkService;
import com.yihe.service.IPublishService;
import com.yihe.service.IRoleService;
import com.yihe.service.IUserService;
import com.yihe.service.IZtreeService;

@Service("zTreeService")
public class ZtreeServiceImpl implements IZtreeService {

	
	@Resource
	public IZtreeDao dao;

	public List<JSONObject> getList() {
		
		return dao.getList();
	}

	
	
	

	
	
}
