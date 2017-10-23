package com.yihe.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yihe.bean.PageUser;
import com.yihe.bean.User;
import com.yihe.dao.IUserDao;
import com.yihe.service.IUserService;

@Service("userService")
public class UserServiceImpl implements IUserService {

	@Resource
	public IUserDao userDao;

	public int add(User user) {

		return userDao.add(user);
	}

	public List<User> getList(PageUser pa) {
		return userDao.getList(pa);
	}

	public int getListNum(PageUser pa) {
		return userDao.getListNum(pa);
	}

	public int deleteUser(List<String> ids) {
		
		return userDao.deleteUser(ids);
	}

	public int update(User user) {
		return userDao.update(user);
	}

	public User query(String id) {
		
		return userDao.query(id);
	}

	public List<User> getAll(PageUser pa) {
		
		return userDao.getAll(pa);
	}

	public User searchAccount(User user) {
		// TODO Auto-generated method stub
		return userDao.searchAccount(user);
	}

	public User login(User user) {
		// TODO Auto-generated method stub
		return userDao.login(user);
	}


	public int queryExistAccount(String account) {
		
		return userDao.queryExistAccount(account);
	}
	
}
