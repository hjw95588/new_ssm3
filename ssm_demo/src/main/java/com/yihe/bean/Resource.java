package com.yihe.bean;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 
 */
public class Resource implements Serializable {
    private String id;

    /**
     * 权限编码
     */
    private String code;

    /**
     * 权限名称
     */
    private String resourceName;

    /**
     * 资源类型，菜单/节点
     */
    private String resourceType;

    /**
     * 父类id
     */
    private String parentId;

    /**
     * 父类权限编码
     */
    private String parentCode;

    /**
     * 权限描述
     */
    private String des;

    /**
     * 更新时间
     */
    private Date updateTime;

    private static final long serialVersionUID = 1L;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public String getResourceType() {
        return resourceType;
    }

    public void setResourceType(String resourceType) {
        this.resourceType = resourceType;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getParentCode() {
        return parentCode;
    }

    public void setParentCode(String parentCode) {
        this.parentCode = parentCode;
    }

   
    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

	public String getDes() {
		return des;
	}

	public void setDes(String des) {
		this.des = des;
	}

	@Override
	public String toString() {
		return "Resource [id=" + id + ", code=" + code + ", resourceName="
				+ resourceName + ", resourceType=" + resourceType
				+ ", parentId=" + parentId + ", parentCode=" + parentCode
				+ ", des=" + des + ", updateTime=" + updateTime + "]";
	}

    
}