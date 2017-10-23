package com.yihe.bean;

import java.util.Date;

public class Publish {

	private String id; //主键
	private String title; //标题
	private String content;//内容文本
	private Date createTime;  //创建时间
	private Date updateTime;  //更新时间
	private String createId;  //创建人id
	private String createName;  //创建人名字
	private String updateId;  //修改人id
	private String updateName;  //修改人名字
	private Integer flag;  //标记
	private String typeId;  //内容类型
	private String typeName;  //
	private String photo;  //照片
	private Integer read;  //阅读次数
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
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
	public String getCreateId() {
		return createId;
	}
	public void setCreateId(String createId) {
		this.createId = createId;
	}
	public String getCreateName() {
		return createName;
	}
	public void setCreateName(String createName) {
		this.createName = createName;
	}
	public String getUpdateId() {
		return updateId;
	}
	public void setUpdateId(String updateId) {
		this.updateId = updateId;
	}
	public String getUpdateName() {
		return updateName;
	}
	public void setUpdateName(String updateName) {
		this.updateName = updateName;
	}
	public Integer getFlag() {
		return flag;
	}
	public void setFlag(Integer flag) {
		this.flag = flag;
	}
	public String getTypeId() {
		return typeId;
	}
	public void setTypeId(String typeId) {
		this.typeId = typeId;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public Integer getRead() {
		return read;
	}
	public void setRead(Integer read) {
		this.read = read;
	}
	@Override
	public String toString() {
		return "Publish [id=" + id + ", title=" + title + ", content="
				+ content + ", createTime=" + createTime + ", updateTime="
				+ updateTime + ", createId=" + createId + ", createName="
				+ createName + ", updateId=" + updateId + ", updateName="
				+ updateName + ", flag=" + flag + ", typeId=" + typeId
				+ ", typeName=" + typeName + ", photo=" + photo + ", read="
				+ read + "]";
	}
	
	
}
