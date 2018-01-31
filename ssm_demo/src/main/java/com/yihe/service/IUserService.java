package com.yihe.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yihe.bean.PageUser;
import com.yihe.bean.User;

public interface IUserService {

	public int add(User user);
	
	public int update(User user);
	
	public User query(String id);
	
public List<User> getList(PageUser pa);//查询集合

public List<User> getAll(PageUser pa);//查询集合(用于导出数据)

	public int getListNum(PageUser pa);  //查询总记录数
	
	public int deleteUser(List<String> ids); // 逻辑删除
	
	public User searchAccount(String account); 
	
	public User login(User user); //验证登录
	
	public int queryExistAccount(@Param("account")String account); //查询是否存在相同的注册账号
	
}
