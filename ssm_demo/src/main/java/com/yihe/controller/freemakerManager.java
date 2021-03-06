package com.yihe.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Max;

import org.apache.commons.io.comparator.DirectoryFileComparator;
import org.apache.poi.ss.formula.functions.T;
import org.apache.poi.util.IOUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.proxy.InterfaceMaker;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import com.yihe.bean.PageMark;
import com.yihe.bean.PagePublish;
import com.yihe.bean.Publish;
import com.yihe.service.IMarkService;
import com.yihe.service.IPublishService;

import freemarker.template.Configuration;
import freemarker.template.Template;

@Controller
@RequestMapping("/hejianwen")
public class freemakerManager {

	@Autowired
	private FreeMarkerConfigurer freeMarkerConfigurer;

	@Resource
	private IPublishService publishService;
	
	@Resource
	private IMarkService markService;

	// 首页 点击排行 最新文章 站长推荐等列表
	public List<Publish> listMap(List<Publish> list, String typeId) {
		PagePublish pa = new PagePublish();
		Integer pageSize = 8;
		Integer pageNum = 1;
		Integer pageSizeNew = pageSize;
		Integer pageNumNew = (pageNum - 1) * pageSize;
		pa.setPageNum(pageNumNew);
		pa.setPageSize(pageSizeNew);
		pa.setTypeId(typeId);
		list = publishService.getList(pa);
		return list;
	}

	public void queryPublishList(Map<String, Object> ma){
		List<Publish> listTitle1 = null; // 点击排行
		List<Publish> listTitle2 = null;// 最新文章
		List<Publish> listTitle3 = null;// 站长推荐
		
		ma.put("list1", listMap(listTitle1, "title_1"));
		ma.put("list2", listMap(listTitle2, "title_2"));
		ma.put("list3", listMap(listTitle3, "title_3"));
	}
	
	@PostConstruct
	public void initDemo() {
		System.out.println("开始进行操作11111111111-----------");
		Map<String, Object> ma = new HashMap<String, Object>();
		try {

			//首页相关
			queryPublishList(ma); //右侧栏目
			queryMark(ma);  //标签云
			
			String rootPath = path();
			String catalogPath = rootPath + "/static/html/"; // 原始路径
			File file = new File(catalogPath);
			if (!file.exists() && !file.isDirectory()) {
				file.mkdir();
			}
			delFolder(catalogPath); // 清空文件
			String filePath = catalogPath + "front" + ".html"; // 新的文件路径
			String templateName = "front.ftl"; // 模板名称

			processTemplate(templateName, ma, filePath);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	private void queryMark(Map<String, Object> ma) {
		
		PageMark pa=new PageMark();
		Integer pageSize =Integer.MAX_VALUE ;
		Integer pageNum = 1;
		Integer pageSizeNew = pageSize;
		Integer pageNumNew = (pageNum - 1) * pageSize;
		pa.setPageNum(pageNumNew);
		pa.setPageSize(pageSizeNew);
		ma.put("markList", markService.getList(pa));
	}

	// 获取系统环境变量
	public String path() {
		String path = System.getProperty("ssm.root");

		return path;
	}

	// uuid
	public String uuid() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}

	// 模板操作
	public void processTemplate(String templateName, Map<String, Object> root,
			String filePath) throws Exception {

		// Configuration config=new Configuration();
		Configuration config = freeMarkerConfigurer.getConfiguration();
		// 获得模板
		Template template = config.getTemplate(templateName);
		// 输出对象 具体输出文件的路径
		File file = new File(filePath);
		Writer out = new OutputStreamWriter(new FileOutputStream(file), "UTF-8");

		// 生成文件（这里是我们是生成html）
		template.process(root, out);

		IOUtils.closeQuietly(out);
	}

	// 清空html文件夹下的文件
	public void delFolder(String folderPath) {
		try {
			delAllFile(folderPath); // 删除完里面所有内容
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 删除指定文件夹下所有文件
	// param path 文件夹完整绝对路径
	public boolean delAllFile(String path) {
		boolean flag = false;
		File file = new File(path);
		if (!file.exists()) {
			return flag;
		}
		if (!file.isDirectory()) {
			return flag;
		}
		String[] tempList = file.list();
		File temp = null;
		for (int i = 0; i < tempList.length; i++) {
			if (path.endsWith(File.separator)) {
				temp = new File(path + tempList[i]);
			} else {
				temp = new File(path + File.separator + tempList[i]);
			}
			if (temp.isFile()) {
				temp.delete();
			}
			if (temp.isDirectory()) {
				delAllFile(path + "/" + tempList[i]);// 先删除文件夹里面的文件
				delFolder(path + "/" + tempList[i]);// 再删除空文件夹
				flag = true;
			}
		}
		return flag;
	}

}
