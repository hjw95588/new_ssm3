package com.yihe.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yihe.bean.UserRole;
import com.yihe.dao.IUserRoleDao;
import com.yihe.service.IUserRoleService;

@Service("userRoleService")
public class UserRoleServiceImpl implements IUserRoleService {

	
	@Resource
	public IUserRoleDao urDao;

	public int insertSelective(UserRole record) {
		
		return urDao.insertSelective(record);
	}

	public int deleteByUser(List<String> uIds) {
		
		return urDao.deleteByUser(uIds);
	}

	public int deleteByRole(List<String> rIds) {
		
		return urDao.deleteByRole(rIds);
	}

	public int insertByBatch(List<UserRole> ur) {
		
		return urDao.insertByBatch(ur);
	}

	

	
	
	
	

	
	
}
