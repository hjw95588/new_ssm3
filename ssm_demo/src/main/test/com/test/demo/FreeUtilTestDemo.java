package com.test.demo;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.junit.Before;
import org.junit.Test;

import com.yihe.util.FreemarkerUtil;

public class FreeUtilTestDemo {

	FreemarkerUtil freemarkerUtil=null;
	Map<String,Object> rootMap=null;
	
	@Before
	public void setUp(){
		freemarkerUtil=new FreemarkerUtil();
		System.out.println(11);
		rootMap=new HashMap<String, Object>();
	}
	
	/*@Test
	public void aa(){
		rootMap.put("name", "111111");
		
		freemarkerUtil.print("index.ftl", rootMap);
		//freemarkerUtil.fprint("index.ftl", rootMap, "index.html");
	}*/
	
	
	
}
