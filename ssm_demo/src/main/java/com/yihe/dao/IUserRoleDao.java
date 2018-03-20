package com.yihe.dao;


import java.util.List;

import com.yihe.bean.UserRole;

public interface IUserRoleDao {

    int insertSelective(UserRole record);

    
    //删除用户角色信息，通过用户id/角色id
    int deleteByUser(List<String> uIds);
    
    int deleteByRole(List<String> rIds);
    
    //批量插入
    int insertByBatch(List<UserRole> ur);
   
}