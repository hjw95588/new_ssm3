package com.yihe.controller;

import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baidu.ueditor.ActionEnter;

@Controller  
@RequestMapping("/customImageUrl")
public class uEditController {
	 /**
	    * ueditor接口
	    * 包括配置信息获取(配置文件为/webapp/customImageUrl/config.json)
	    * 文件上传
	    * @param 
	    * @return 
	    * @author 
	    * @date 
	    */
	   @RequestMapping("/uploadFile.do")
	   public void uploadFile(HttpServletRequest request, HttpServletResponse response) {
	       OutputStream out = null;
	       try {
	           request.setCharacterEncoding("utf-8");
	           response.setHeader("Content-Type", "text/html");
	           out = response.getOutputStream();
	           String rootPath = request.getServletContext().getRealPath("/");
	           String result = new ActionEnter(request, rootPath).exec();
	          /* String newResult="";
	           if ("config".equals(request.getParameter("action"))) {
	               //如果是获取ue配置变量，则使用环境变量当中的文件服务上传路径
	               newResult=result.replaceAll("\"imageUrlPrefix\":.*?,", "\"imageUrlPrefix\":\""+EnvUtil.getVal("imageUrlPrefix")+"/"+"\",");
	           }
	           System.out.println(newResult);*/
	           System.out.println(result);
	           out.write(result.getBytes());
	       } catch (Exception e) {
	           e.printStackTrace();
	       } finally {
	           IOUtils.closeQuietly(out);
	       }
	   }
	   
	   }
