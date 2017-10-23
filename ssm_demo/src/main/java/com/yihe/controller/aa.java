package com.yihe.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller  
@RequestMapping("/hejianwen")
public class aa {

	
	 
	@RequestMapping(value="/queryAll.do",method=RequestMethod.GET)  
	@ResponseBody
	public Map<String,Object> queryExitAccount( String account){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		System.out.println(333333);
		if(com.mysql.jdbc.StringUtils.isNullOrEmpty(account)){
			map.put("status1", "700");
			map.put("message1", "账号7111111111");
		}
		else
		{
			map.put("status", "200");
			map.put("message", "7777777");
		}
		
		return map;
	}
}
