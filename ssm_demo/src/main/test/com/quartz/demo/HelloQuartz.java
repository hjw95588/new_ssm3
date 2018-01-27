package com.quartz.demo;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.quartz.Job;
import org.quartz.JobDetail;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class HelloQuartz implements Job {
	 
    public void execute(JobExecutionContext context) throws JobExecutionException {
        JobDetail detail = context.getJobDetail();
        String name = detail.getJobDataMap().getString("name");
        String da=new SimpleDateFormat("YYYY-MM-dd HH:mm:ss").format(new Date());
        System.out.println("你好------" + name + " at " + da);
        
       
    }
}
