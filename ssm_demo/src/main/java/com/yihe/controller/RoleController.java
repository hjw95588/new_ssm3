package com.yihe.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.yihe.bean.Mark;
import com.yihe.bean.PageMark;
import com.yihe.bean.PageRole;
import com.yihe.bean.Role;
import com.yihe.service.IRoleService;
import com.yihe.service.IUserRoleService;
import com.yihe.util.CommonUtils;
import com.yihe.util.PageBean;
import com.yihe.util.UUid;

@Controller  
@RequestMapping("/role")
public class RoleController {

	
	
	 @Resource  
	 private IRoleService roleService;  
	 
	 @Resource  
	 private IUserRoleService userRoleService;  
	
	 /**
	  * 增加数据
	  * @param data
	  * @return
	  */
	@RequestMapping(value="/add.do",method=RequestMethod.POST)  
	@ResponseBody
	public Map<String,Object> add(@RequestBody String data){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		try {
			if(StringUtils.isEmpty(data)){
				map.put("status", CommonUtils.falseStatus);
				map.put("msg","信息为空");
				
			}
			else{
				Role pub=JSON.parseObject(data, Role.class);
				
				String id=UUid.getUuid();
				pub.setId(id);
				int n=roleService.insertSelective(pub);
				map.put("status", CommonUtils.trueStatus);
				map.put("msg","信息添加成功");
				map.put("id", id);
			}
			
		} catch (Exception e) {
			map.put("status", CommonUtils.falseStatus);
			map.put("msg", e.getMessage());
		}
		
		
		return map;
	}
	
	
	
	
	
	/**
	 * 更新数据
	 * @param data
	 * @return
	 */
	@RequestMapping(value="/update.do",method=RequestMethod.POST)  
	@ResponseBody
	public Map<String,Object> updatePublish(@RequestBody String data){
		
		Map<String,Object> map=new HashMap<String, Object>();
		try {
			if(StringUtils.isEmpty(data)){
				map.put("status", CommonUtils.falseStatus);
				map.put("msg","信息为空");
				
			}
			else{
				Role pub=JSON.parseObject(data, Role.class);
			
				
				int n=roleService.updateByPrimaryKeySelective(pub);
				System.out.println(n);
				
				map.put("status",CommonUtils.trueStatus);
				map.put("msg","信息修改成功");
				map.put("id",pub.getId());
			}
		} catch (Exception e) {
			map.put("status",CommonUtils.falseStatus);
			map.put("msg",e.getMessage());
			
		}
		
		
		return map;
	}
	
	/**
	 * 根据id 查询信息
	 * @param request
	 * @param response
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/query.do",method=RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> query(HttpServletRequest request, HttpServletResponse response,String id){
		
		Map<String, Object> re=new HashMap<String, Object>();
		
		if(!StringUtils.isEmpty(id))
		{
			
		 Role p=roleService.selectByPrimaryKey(id);
			
			re.put("status","1");
			re.put("message", "查询成功");
			re.put("data", p);
			
			return re;
		}
		
		re.put("status","0");
		re.put("message", "查询失败");
		re.put("data", "");
		
		return re;
	}
	
	/**
	 * 分页
	 * @param data
	 * @return
	 */
	
	@RequestMapping(value = "/pageQuery.do",method=RequestMethod.POST)
	@ResponseBody
	public PageBean<Role> pageQuery(@RequestBody String data){
		PageBean<Role> pageBean=new PageBean<Role>();  //返回的结果
		try {
			PageRole pa=JSON.parseObject(data, PageRole.class); //传递的参数
			if(pa!=null){
				Integer pageSize=pa.getPageSize();
				Integer pageNum=pa.getPageNum();
				
		        Integer pageSizeNew = pa.getPageSize();  //每页的页数
		        Integer pageNumNew = (pa.getPageNum()-1)*pageSizeNew;
		        
		        pa.setPageNum(pageNumNew);
		        pa.setPageSize(pageSizeNew);
				
				List<Role> list=roleService.getList(pa); //集合
				
				Integer n=roleService.getListNum(pa);  //记录数
				
				pageBean.setList(list);
				pageBean.setTotalRecords(n);
				pageBean.setPageNum(pageNum);
				pageBean.setPageSize(pageSize);
			}
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return pageBean;
	}
	
	/**
	 * 删除
	 * @param request
	 * @param response
	 * @param ids
	 * @return
	 */
	@RequestMapping(value = "/delete.do",method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> delete(HttpServletRequest request, HttpServletResponse response,String ids){
		List<String> li=new ArrayList<String>();
		
		Map<String, Object> re=new HashMap<String, Object>();
		
		if(!StringUtils.isEmpty(ids))
		{
			String []k=ids.split(",");
			
			for(int x=0;x<k.length;x++){
				li.add(k[x]);
			}
			roleService.deleteByPrimaryKey(li);
			
			//顺带着删除用户_角色中的关系记录
			userRoleService.deleteByRole(li);
			
			re.put("status","1");
			re.put("data", "删除成功");
			
			return re;
		}
		
		re.put("status","0");
		re.put("data", "删除失败");
		
		return re;
	}
	
	
	public String decode(String str){
		String s="";
		try {
			s=URLDecoder.decode(URLDecoder.decode(str, "UTF-8"),"UTF-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return s;
	}
	
	
	/**
	 * 初始化添加页面
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/initAdd.do")
	public ModelAndView initAdd(String id,ModelAndView mv){
	mv.setViewName("/role/role_add.jsp");
	Role role=null;
	try{
		if(StringUtils.isNotEmpty(id)){
			role=roleService.selectByPrimaryKey(id);
	      }
	}catch(Exception e){
		System.out.println(e.getMessage());
	}
      mv.addObject("role", role);
       
		return mv;
	}
	
	

}
