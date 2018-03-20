package com.yihe.bean;

import java.io.Serializable;

/**
 * @author 
 */
public class UserRole implements Serializable {
   
	public UserRole(){
		
	}
	
   public UserRole(String userId,String roleId){
		this.userId=userId;
		this.roleId=roleId;
	}
	
	/**
     * 用户ID
     */
    private String userId;

    /**
     * 角色id
     */
    private String roleId;

    private static final long serialVersionUID = 1L;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

	@Override
	public String toString() {
		return "UserRole [userId=" + userId + ", roleId=" + roleId + "]";
	}
    
    
}