package com.yihe.util;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import freemarker.template.Configuration;
import freemarker.template.Template;

public class FreemarkerUtil {

	public Template getTemplate(String name){
		Template temp=null;
		try{
			//通过Freemarker的Configuration读取相应的Ftl
			Configuration cfg=new Configuration();
			
			//设置去哪里读取相应的ftl模板
			File file=new File("src/templates");
			
			cfg.setDirectoryForTemplateLoading(file);
			
			//在模板文件目录中寻找名称为name的模板文件
			temp=cfg.getTemplate(name);
			
		}catch(IOException e){
			e.printStackTrace();
		}
		return temp;
	}
	
	
	/**
	 * 在控制台输出文件内容
	 * @param name
	 * @param rootMap
	 */
	
	public void print(String name,Map<String,Object> rootMap){
		try {
			Template t=this.getTemplate(name);
			String path=getRootPath();
			t.process(rootMap, new PrintWriter(System.out));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 将替换后的模板文件输出到文件
	 * @param name
	 * @param rootMap
	 * @param outFile
	 */
	public void fprint(String name,Map<String,Object> rootMap,String outFile){
		FileWriter out=null;
		try {
			out=new FileWriter(new File("f:\\freemaker_demo\\ftl\\html\\"+outFile));
			Template tem=this.getTemplate(name);
			tem.process(rootMap, out);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	public String getRootPath() {
        String basePath = System.getProperty("himApp.root");
        System.out.println(basePath);
        return basePath;
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
