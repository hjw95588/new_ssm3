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

import com.yihe.bean.User;
import com.yihe.service.IUserService;

/**
 * 登录
 * @author hejianwen
 *
 */
@Controller  
@RequestMapping("/login")
public class LoginController {

	 @Resource  
	 private IUserService userService;  
	 
	 @RequestMapping("/login.do")
		public String login(HttpServletRequest request)
	 {
			String error=(String) request.getAttribute("shiroLoginFailure");
			if(error!=null){
				if(UnknownAccountException.class.getName().equals(error)){
					request.setAttribute("error", "账号不存在");
				}
				else if(IncorrectCredentialsException.class.getName().equals(error)){
					request.setAttribute("error", "账号或者密码错误");
				}else
				{
					request.setAttribute("error", "其他异常");
				}
			}
			
			return "/login/login.jsp";
	}
	 
	//系统首页
	 @RequestMapping("/success.do")
	 public String success(Model model){
		 
		//从shiro的session中取User对象
		 User user=null;
		 try {
			 Subject subject=SecurityUtils.getSubject();
			 user=(User) subject.getPrincipal();
		} catch (Exception e) {
		}
		 
		 if(user==null){
			 user=new User();
			 user.setUsername("何建文超级管理员");
		 }
		
		 
		 model.addAttribute("user", user);
		 
		 return "/index/index.jsp";
	 }
	 
	 
}
