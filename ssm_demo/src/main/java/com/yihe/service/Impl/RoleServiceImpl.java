package com.yihe.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yihe.bean.Mark;
import com.yihe.bean.PageMark;
import com.yihe.bean.PagePublish;
import com.yihe.bean.PageRole;
import com.yihe.bean.PageUser;
import com.yihe.bean.Publish;
import com.yihe.bean.Role;
import com.yihe.bean.User;
import com.yihe.dao.IMarkDao;
import com.yihe.dao.IPublishDao;
import com.yihe.dao.IRoleDao;
import com.yihe.dao.IUserDao;
import com.yihe.service.IMarkService;
import com.yihe.service.IPublishService;
import com.yihe.service.IRoleService;
import com.yihe.service.IUserService;

@Service("roleService")
public class RoleServiceImpl implements IRoleService {

	
	@Resource
	public IRoleDao roleDao;

	public int insertSelective(Role role) {
		
		return roleDao.insertSelective(role);
	}

	public int deleteByPrimaryKey(List<String> ids) {
		
		return roleDao.deleteByPrimaryKey(ids);
	}

	public int updateByPrimaryKeySelective(Role role) {
		
		return roleDao.updateByPrimaryKeySelective(role);
	}

	public Role selectByPrimaryKey(String id) {
		
		return roleDao.selectByPrimaryKey(id);
	}

	public List<Role> getList(PageRole pl) {
		
		return roleDao.getList(pl);
	}

	public int getListNum(PageRole pl) {
		
		return roleDao.getListNum(pl);
	}

	
	
	

	
	
}
