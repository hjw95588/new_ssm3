package com.yihe.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import org.apache.commons.lang3.StringUtils;






import com.yihe.bean.PagePublish;
import com.yihe.bean.PageUser;
import com.yihe.bean.Publish;
import com.yihe.bean.User;
import com.yihe.service.IPublishService;
import com.yihe.util.CommonUtils;
import com.yihe.util.PageBean;
import com.yihe.util.UUid;

@Controller  
@RequestMapping("/front")
public class FrontController {

	 @Resource  
	 private IPublishService publishService;  
	
	
	@RequestMapping(value = "/pageQuery.do",method=RequestMethod.GET)
	public ModelAndView pageQuery(ModelAndView mv){
		PagePublish pa=new PagePublish();
		List<Publish> listTitle1=null;
		List<Publish> listTitle2=null;
		List<Publish> listTitle3=null;
		try {
			Integer pageSize=6;
			Integer pageNum=1;
			Integer pageSizeNew = pageSize;  
	        Integer pageNumNew = (pageNum-1)*pageSize;
	        pa.setPageNum(pageNumNew);
	        pa.setPageSize(pageSizeNew);
	        pa.setTypeId("title_1");
	        listTitle1=publishService.getList(pa); //点击排行
	        
	        pa.setTypeId("title_2");
	        listTitle2=publishService.getList(pa); //最新文章
	        
	        pa.setTypeId("title_3");
	        listTitle3=publishService.getList(pa); //站长推荐
	        mv.addObject("status", CommonUtils.trueStatus);
	        mv.addObject("list1", listTitle1);
	        mv.addObject("list2", listTitle2);
	        mv.addObject("list3", listTitle3);
			
		} catch (Exception e) {
			mv.addObject("status", CommonUtils.falseStatus);
			mv.addObject("data", e.getMessage());
		}
		
		mv.setViewName("/front/front.jsp");
		return mv;
		
		
		
		
		
	}
	
	
	
	
	
	
	

}
