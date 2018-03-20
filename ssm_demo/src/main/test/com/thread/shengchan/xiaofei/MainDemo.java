package com.thread.shengchan.xiaofei;

import org.junit.Test;

public class MainDemo {

	public static void main(String[] args){
		Person p=new Person();
		
		Producer pd=new Producer(p);
		Consumer cs=new Consumer(p);
		
		Thread t1=new Thread(pd);
		Thread t2=new Thread(cs);
		
		t1.start();
		t2.start();
	}
	
	
	 
}
