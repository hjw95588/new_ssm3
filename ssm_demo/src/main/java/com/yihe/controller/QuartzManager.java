package com.yihe.controller;

import static org.quartz.JobBuilder.newJob;
import static org.quartz.SimpleScheduleBuilder.simpleSchedule;
import static org.quartz.TriggerBuilder.newTrigger;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;

import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.Trigger;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import com.alibaba.fastjson.JSON;
import com.yihe.service.IMarkService;
import com.yihe.service.IPublishService;

@Controller
@RequestMapping("/QuartzManager")
public class QuartzManager {
	
	@Autowired
	private FreeMarkerConfigurer freeMarkerConfigurer;

	@Resource
	private IPublishService publishService;
	
	@Resource
	private IMarkService markService;
	
	
	//@RequestMapping("/index.do")
	@PostConstruct
	public void QuartzInit(){
	System.out.println(111);
		// 创建scheduler
				try {
					Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
					// 定义一个Trigger
					Trigger trigger = newTrigger().withIdentity("trigger1", "group1") // 定义name/group
							.startNow()// 一旦加入scheduler，立即生效
							.withSchedule(simpleSchedule() // 使用SimpleTrigger
									 
									 .withIntervalInMinutes(1)//每隔一分钟执行一次
									 
									.repeatForever()) // 一直执行，奔腾到老不停歇
							.build();
					
					// 定义一个JobDetail
					JobDetail job = newJob(QuartzJob.class) // 定义Job类为HelloQuartz类，这是真正的执行逻辑所在
							.withIdentity("job1", "group1") // 定义name/group
							.usingJobData("name","adad") // 定义属性
							.build();

					// 加入这个调度
					scheduler.scheduleJob(job, trigger);

					scheduler.getContext().put("freeMarkerConfigurer", freeMarkerConfigurer);
					scheduler.getContext().put("publishService", publishService);
					scheduler.getContext().put("markService", markService);
					
					// 启动之
					scheduler.start();

					// 运行一段时间后关闭
					//Thread.sleep(5000);
					//scheduler.shutdown(true);

				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	}

}
