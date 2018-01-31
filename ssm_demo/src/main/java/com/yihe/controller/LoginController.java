package com.yihe.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
	 
	 /*@RequestMapping(value="/login",method=RequestMethod.POST)
		public String login(HttpServletRequest request,@RequestBody U user){
		System.out.println(request.getParameter("account"));	
		
		System.out.println(request.getParameter("password"));	
		 
		 System.out.println(user);
		 
			return "/login/login.html";
	 }
	*/
	/*@RequestMapping(value="/query.do",method=RequestMethod.POST)
	 @ResponseBody
	public Map<String,Object> login(HttpServletRequest request,@RequestBody User user){
		 Map<String, Object> map=new HashMap<String, Object>();
		 
		//根据用户名查询salt值
		 if(user!=null){
			 User aUser=userService.querylogin(user);
			 if(aUser==null){
				 map.put("status", "0");
				 map.put("message", "无此用户");
				 return map;
			 }
			 else
			 {
				 String salt=aUser.getSalt();  //查询的盐值
				 
				 String pas=user.getPassword();  //传输过来的密码
				 
				 String keypwd=PasswordMD5.md5ForPassword(pas,salt);  //密码和盐值，进行md5加密
				 
				 
				 user.setPassword(keypwd);
				User last=userService.querylogin(user); 
				if(last==null){
					 map.put("status", "0");
					 map.put("message", "用户名或密码错误");
					 return map;
				}
				else{
					map.put("status", "1");
					 map.put("message", "验证成功");
				}
			 }
		 }
		 
		 map.put("status", "0");
		 map.put("message", "请求错误");
		 
		 return map;
	 }
	 
	*/
}
