package com.hash.demo;

import java.util.HashMap;
import java.util.Map;

public class MainDemo {
 public static void main(String[] args) {
	// Map<String, Object> map=new HashMap<String, Object>();
	 
	 MainDemo map=new MainDemo();
	 
	 map.put2("刘一", "刘一");
	 map.put2("陈二", "aa");
	 map.put2("张三", "张三");
	 map.put2("李四", "李四");
	 map.put2("王五", "王五");
	 
	
}
 
 public  void put2(String key,String value){
	 System.out.println("key---"+key.hashCode()+":"+Math.abs(key.hashCode()%15));
 }
}
