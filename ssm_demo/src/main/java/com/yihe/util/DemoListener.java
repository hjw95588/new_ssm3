package com.yihe.util;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Application Lifecycle Listener implementation class DemoListener
 *
 */
public class DemoListener implements ServletContextListener {

    public void contextDestroyed(ServletContextEvent seEvent)  
    { 
        
    }

	
    public void contextInitialized(ServletContextEvent seEvent)  
    { 
    	 Map<String, Integer> map = new LinkedHashMap();
    	
    	ServletContext  application=seEvent.getServletContext();
    	
    	application.setAttribute("map",map);
    }
	
}
