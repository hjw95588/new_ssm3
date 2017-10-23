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

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;

import org.apache.commons.lang3.StringUtils;



import com.yihe.bean.PagePublish;
import com.yihe.bean.PageUser;
import com.yihe.bean.Publish;
import com.yihe.bean.User;
import com.yihe.service.IPublishService;
import com.yihe.util.PageBean;
import com.yihe.util.UUid;

@Controller  
@RequestMapping("/pub")
public class PublishController {

	 @Resource  
	 private IPublishService publishService;  
	
	 /**
	  * 增加消息数据
	  * @param data
	  * @return
	  */
	@RequestMapping(value="/add.do",method=RequestMethod.POST)  
	@ResponseBody
	public Map<String,Object> add(@RequestBody String data){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		if(StringUtils.isEmpty(data)){
			map.put("status", "0");
			map.put("msg","信息为空");
			
		}
		else{
			Publish pub=JSON.parseObject(data, Publish.class);
			pub.setCreateTime(new Date());
			pub.setId(UUid.getUuid());
			pub.setUpdateTime(new Date());
			
			int n=publishService.add(pub);
			System.out.println(n);
			
			map.put("status", "1");
			map.put("msg","信息添加成功");
		}
		
		return map;
	}
	
	
	
	
	
	/**
	 * 更新数据
	 * @param data
	 * @return
	 */
	@RequestMapping(value="/updatePublish.do",method=RequestMethod.POST)  
	@ResponseBody
	public Map<String,Object> updatePublish(@RequestBody String data){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		if(StringUtils.isEmpty(data)){
			map.put("status", "0");
			map.put("msg","信息为空");
			
		}
		else{
			Publish pub=JSON.parseObject(data, Publish.class);
		
			pub.setUpdateTime(new Date());
			
			int n=publishService.update(pub);
			System.out.println(n);
			
			map.put("status", "1");
			map.put("msg","信息修改成功");
		}
		
		return map;
	}
	
	/**
	 * 根据id 查询发布信息
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
			
		 Publish p=publishService.query(id);
			
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
	public PageBean<Publish> pageQuery(@RequestBody String data){
      
		PagePublish pa=JSON.parseObject(data, PagePublish.class); //传递的参数
		PageBean<Publish> pageBean=new PageBean<Publish>();  //返回的结果
		
		if(pa!=null){
			
	        Integer pageSize = pa.getPageSize();  //每页的页数
	        Integer pageNum = (pa.getPageNum()-1)*pageSize;
	        
	        pa.setPageNum(pageNum);
	        pa.setPageSize(pageSize);
			
			List<Publish> list=publishService.getList(pa); //集合
			
			Integer n=publishService.getListNum(pa);  //记录数
			
			pageBean.setList(list);
			pageBean.setTotalRecords(n);
			pageBean.setPageNum(pageNum/pageSize+1);
			pageBean.setPageSize(pageSize);
			
	       			
		}
		
		
		return pageBean;
	}
	
	/**
	 * 逻辑删除
	 * @param request
	 * @param response
	 * @param ids
	 * @return
	 */
	@RequestMapping(value = "/deletePublish.do",method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> deletePublish(HttpServletRequest request, HttpServletResponse response,String ids){
		List<String> li=new ArrayList<String>();
		
		Map<String, Object> re=new HashMap<String, Object>();
		
		if(!StringUtils.isEmpty(ids))
		{
			String []k=ids.split(",");
			
			for(int x=0;x<k.length;x++){
				li.add(k[x]);
			}
			publishService.deletePublish(li);
			
			re.put("status","1");
			re.put("data", "删除成功");
			
			return re;
		}
		
		re.put("status","0");
		re.put("data", "删除失败");
		
		return re;
	}
	
	@RequestMapping(value = "/webName")
	@ResponseBody
	public String webName(HttpServletRequest request, HttpServletResponse response){
       String webName=request.getContextPath();
       
		return webName+"/uploads";
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
	
	
	
	
	

}
