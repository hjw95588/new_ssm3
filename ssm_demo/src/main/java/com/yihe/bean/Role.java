package com.yihe.bean;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 
 */
public class Role implements Serializable {
    private String id;

    /**
     * 角色名称
     */
    private String roleName;

    /**
     * 角色描述
     */
    private String des;
    
    private Date updateTime;
    
    

    public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	private static final long serialVersionUID = 1L;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

	public String getDes() {
		return des;
	}

	public void setDes(String des) {
		this.des = des;
	}

	@Override
	public String toString() {
		
		return "Role [id=" + id + ", roleName=" + roleName + ", des=" + des
				+ ", updateTime=" + updateTime + "]";
	}

    
	
  
}