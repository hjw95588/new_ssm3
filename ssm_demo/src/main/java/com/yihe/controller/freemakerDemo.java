package com.yihe.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.comparator.DirectoryFileComparator;
import org.apache.poi.util.IOUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import freemarker.template.Configuration;
import freemarker.template.Template;


@Controller  
@RequestMapping("/hejianwen")
public class freemakerDemo {

	@Autowired
    private FreeMarkerConfigurer freeMarkerConfigurer;
	 
	@RequestMapping(value="/queryAll.do",method=RequestMethod.GET)  
	@ResponseBody
	public Map<String,Object> queryExitAccount( String account,HttpServletRequest request){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		String path=request.getServletContext().getRealPath("/");  //获取根路径；
		
		String b=request.getServletContext().getRealPath("/");
		
		System.out.println(path);
		
		System.out.println(request.getRequestURI());
		
		System.out.println(request.getContextPath());
		System.out.println(request.getServletPath());
		
		
		return map;
	}
	
	
	@RequestMapping(value="/test.do",method=RequestMethod.GET)  
	@ResponseBody
	public Map<String,Object> test( String account,HttpServletRequest request){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		
		System.out.println(System.getProperty("ssm.root"));
		System.out.println(System.getProperties());
		
		Configuration config = freeMarkerConfigurer.getConfiguration();
		System.out.println(config);
		
		
		return map;
	}
	
	@PostConstruct
	public void initDemo(){
		System.out.println("你好22222");
		 try {
		        
		        Map<String, Object> ma=new HashMap<String, Object>();
		        
		        ma.put("name", "雷军");
				String rootPath=path();
				 String catalogPath=rootPath + "/static/html/"; //原始路径
		         File file=new File(catalogPath);
		         if(!file.exists() && !file.isDirectory()){
		             file.mkdir();
		         }
		         String filePath = catalogPath + uuid() + ".html"; //新的文件路径
		         String templateName="index.ftl"; //模板名称
		         
				 processTemplate(templateName, ma, filePath);
				} catch (Exception e) {
					
					e.printStackTrace();
				}
	}
	
	//获取系统环境变量
		public String path(){
			String path=System.getProperty("ssm.root");
			
			return path;
		}
		
		//uuid
		public String uuid(){
			return UUID.randomUUID().toString().replaceAll("-", "");
		}
		
		//模板操作
		public void processTemplate(String templateName,Map<String, Object> root,String filePath) throws Exception{
			
			//Configuration config=new Configuration();
			Configuration config = freeMarkerConfigurer.getConfiguration();
		        //获得模板
		        Template template=config.getTemplate(templateName);
		        //输出对象 具体输出文件的路径
		        File file=new File(filePath);
		        Writer out = new OutputStreamWriter(new FileOutputStream(file),"UTF-8");
		        
		        //生成文件（这里是我们是生成html）
		        template.process(root, out);

		        IOUtils.closeQuietly(out);
		}
		
		
}
