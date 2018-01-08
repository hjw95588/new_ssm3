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
import com.alibaba.fastjson.JSONObject;

import org.apache.commons.lang3.StringUtils;




import com.yihe.bean.PagePublish;
import com.yihe.bean.PageUser;
import com.yihe.bean.Publish;
import com.yihe.bean.User;
import com.yihe.service.IPublishService;
import com.yihe.util.PageBean;
import com.yihe.util.UUid;

@Controller  
@RequestMapping("/front2")
public class FrontController {

	 @Resource  
	 private IPublishService publishService;  
	
	
	@RequestMapping(value = "/pageQuery.do",method=RequestMethod.GET)
	@ResponseBody
	public JSONObject pageQuery(Integer pageSize,Integer pageNum,String typeId){
		PagePublish pa=new PagePublish();
		List<Publish> list=null;
		JSONObject j=new JSONObject();
		try {
			Integer pageSizeNew = pageSize;  
	        Integer pageNumNew = (pageNum-1)*pageSize;
	        pa.setPageNum(pageNumNew);
	        pa.setPageSize(pageSizeNew);
	        pa.setTypeId(typeId);
	        
	        list=publishService.getList(pa); //集合
	        j.put("status", 1)
			
		} catch (Exception e) {
			j.put("status", "0");
			j.put("data", e.getMessage());
			e.printStackTrace();
		}
		
		
		return j;
		
		
		
		
		
	}
	
	
	
	
	
	
	

}
