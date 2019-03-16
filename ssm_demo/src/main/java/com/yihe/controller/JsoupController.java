package com.yihe.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yihe.bean.User;
import com.yihe.service.IUserService;

/**
 * 登录
 * @author hejianwen
 *
 */
@Controller  
@RequestMapping("/jsoup")
public class JsoupController {

	 @Resource  
	 private IUserService userService;  
	 
	
	 
	//系统首页
	 @RequestMapping("/demo.do")
	 @ResponseBody
	 public String success(Model model){
		 
		return null;
	 }
	 
	 
}
