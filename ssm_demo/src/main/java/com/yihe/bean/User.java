package com.yihe.bean;

import java.util.Date;

public class User {

	private String id; //主键
	private String account; //用户名
	private String username;//姓名
	private String salt;  //盐值
	private String password; //密码
	private String sex; //性别
	private String mobile;  //手机
	private Date birth; //出生日期
	private String photo; //照片
	private String userType;  //用户类型
	
	private String orgid;  //组织id
	private Date createTime;  //创建时间
	private Date updateTime;  //更新时间
	private Integer flag;  //标记
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getSalt() {
		return salt;
	}
	public void setSalt(String salt) {
		this.salt = salt;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getOrgid() {
		return orgid;
	}
	public void setOrgid(String orgid) {
		this.orgid = orgid;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public Date getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", account=" + account + ", username="
				+ username + ", salt=" + salt + ", password=" + password
				+ ", sex=" + sex + ", mobile=" + mobile + ", birth=" + birth
				+ ", photo=" + photo + ", userType=" + userType + ", orgid="
				+ orgid + ", createTime=" + createTime + ", updateTime="
				+ updateTime + ", flag=" + flag + "]";
	}
	public Integer getFlag() {
		return flag;
	}
	public void setFlag(Integer flag) {
		this.flag = flag;
	}
	
	
	
}
