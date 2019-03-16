package com.hash.demo;

import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {

	//初始化长度的16
	
	//jdk1.7是数组+链表
	//java8是数组+链表+红黑树（阈值为8的时候）
	
	//测试hashMap是线程不安全的
	public static void main(String [] args){
		
		final Map<String,String> ma=new HashMap<String, String>();
		
		//开启2个线程
		new Thread(new Runnable() {
			
			public void run() {
			
				for (int i = 0; i <1000; i++) {
					ma.put(String.valueOf(i), String.valueOf(i));
				}
				
			}
		}).start();
		
		new Thread(new Runnable() {
					
					public void run() {
					
						for (int i = 1000; i <2000; i++) {
							ma.put(String.valueOf(i), String.valueOf(i));
						}
						
					}
				}).start();
		
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		for (int i = 0; i < 2000; i++) {
			//其实这里面输出的时候，会出现为null的情况，所谓的线程安全问题，就随之产生了。出现的原因是扩容
			System.out.println("第"+i+"个元素是:"+ma.get(String.valueOf(i)));
		}
	}
}
