package com.yihe.util;

import java.io.IOException;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class DemoFilter implements Filter {

	FilterConfig FilterConfig;
	public void destroy() {
		System.out.println("销毁了");
		
	}

	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		
		ServletContext ac=FilterConfig.getServletContext();
		 Map<String, Integer> map =(Map<String, Integer>) ac.getAttribute("map");
		 
		
		 
		 String ip=request.getRemoteAddr();  //访问的地址
		
		 if(map.containsKey(ip)){
			 String re=map.get(ip)+"";
			 int n=Integer.parseInt(re);
			 map.put(ip, n+1);
		 }else{
			 map.put(ip, 1);
		 }
		
		 ac.setAttribute("map", map);
		
		chain.doFilter(request, response);
	}

	public void init(FilterConfig filterConfig) throws ServletException {
		this.FilterConfig=filterConfig;
		
	}

	//一些基本的测试方法
	public void paramMethod(FilterConfig f){
		System.out.println(f.getFilterName());
		System.out.println(f.getInitParameterNames());
		
	}
}
