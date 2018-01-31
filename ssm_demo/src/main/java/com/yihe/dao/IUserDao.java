package com.yihe.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yihe.bean.PageUser;
import com.yihe.bean.User;

public interface IUserDao {

	public int add(User user);
	
	public int update(User user);
	
	public User query(String id);
	
	public List<User> getList(PageUser pa);//查询集合(用于分页)
	
	public List<User> getAll(PageUser pa);//查询集合(用于导出数据)
	
	public int getListNum(PageUser pa);  //查询总记录数
	
	/*public List<User> getList(@Param("roleName")String roleName,
			@Param("roleType")String roleType,
            @Param("pageNum")Integer pageNum, 
            @Param("pageSize")Integer pageSize);*/
	
	public int deleteUser(List<String> ids);
	
	//记住 如果mapper存在 account != null and account !='' 判断，那么传递参数需采用以下用法
	public User searchAccount(@Param("account") String account); 
	
	public User login(User user); //验证登录
	
	public int queryExistAccount(@Param("account")String account); //查询是否存在相同的注册账号
}
