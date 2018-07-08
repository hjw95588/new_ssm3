package com.yihe.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.yihe.bean.Ztree;
import com.yihe.service.IZtreeService;



@Controller  
@RequestMapping("/ztree")
public class ZtreeController {

	
	
	 @Resource  
	 private IZtreeService zTreeService;  
	 
	 
	@RequestMapping(value = "/query.do",method=RequestMethod.GET)
	@ResponseBody
	public List<JSONObject> query(){

		List<JSONObject> js=new ArrayList<JSONObject>();
		try{
			 js=zTreeService.getList();
			 for (int i = 0; i < js.size(); i++) {
				JSONObject obj=js.get(i);
				if("1".equals(obj.getString("open"))){
					obj.put("open", true);
				}else{
					obj.put("open", false);
				}
				
				if("1".equals(obj.getString("checked"))){
					obj.put("checked", true);
				}else{
					obj.put("checked", false);
				}
				
				
			}
		}catch(Exception e){
			System.out.println(e.getMessage());
		}
		
		
		return js;
	}
	
	

}
