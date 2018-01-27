package com.yihe.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.yihe.bean.PagePublish;
import com.yihe.bean.Publish;
import com.yihe.service.IPublishService;
import com.yihe.util.CommonUtils;


@Controller  
@RequestMapping("/front")
public class FrontController {

	 @Resource  
	 private IPublishService publishService;  
	
	
	@RequestMapping(value = "/pageQuery.do",method=RequestMethod.GET)
	public ModelAndView pageQuery(ModelAndView mv,@PathVariable String username ){
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
