package com.yihe.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.yihe.bean.PageResource;
import com.yihe.bean.Resource;
import com.yihe.service.IResourceService;
import com.yihe.util.CommonUtils;
import com.yihe.util.PageBean;
import com.yihe.util.UUid;

@Controller  
@RequestMapping("/resource")
public class ResourceController {

	
	
	 @Autowired
	 private IResourceService resourceService;  
	
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
				Resource pub=JSON.parseObject(data, Resource.class);
				
				String id=UUid.getUuid();
				pub.setId(id);
				int n=resourceService.insertSelective(pub);
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
				Resource pub=JSON.parseObject(data, Resource.class);
			
				
				int n=resourceService.updateByPrimaryKeySelective(pub);
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
			
			Resource p=resourceService.selectByPrimaryKey(id);
			
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
	public PageBean<Resource> pageQuery(@RequestBody String data){
		PageBean<Resource> pageBean=new PageBean<Resource>();  //返回的结果
		try {
			PageResource pa=JSON.parseObject(data, PageResource.class); //传递的参数
			if(pa!=null){
				Integer pageSize=pa.getPageSize();
				Integer pageNum=pa.getPageNum();
				
		        Integer pageSizeNew = pa.getPageSize();  //每页的页数
		        Integer pageNumNew = (pa.getPageNum()-1)*pageSizeNew;
		        
		        pa.setPageNum(pageNumNew);
		        pa.setPageSize(pageSizeNew);
				
				List<Resource> list=resourceService.getList(pa); //集合
				
				Integer n=resourceService.getListNum(pa);  //记录数
				
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
			resourceService.deleteByPrimaryKey(li);
			
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
	mv.setViewName("/resource/resource_add.jsp");
	Resource res=null;
	try{
		if(StringUtils.isNotEmpty(id)){
			res=resourceService.selectByPrimaryKey(id);
	      }
	}catch(Exception e){
		System.out.println(e.getMessage());
	}
      mv.addObject("resource", res);
       
		return mv;
	}
	
	

}
