package com.thread.shengchan.xiaofei;

public class Person {

	 private String name;
	    private int age;
	  //表示共享资源对象是否为空，如果为 true，表示需要生产，如果为 false，则有数据了，不要生产
	    private boolean isEmpty = true;
	    /**
	     * 生产数据
	     * @param name
	     * @param age
	     */
	    public synchronized void push(String name,int age){
	        try{
	        	
	        	while(!isEmpty){
	        		this.wait();
	        	}
	        	
	        	//生产数据开始
	        	this.name = name;
	        	 this.age = age;
	        	//生产数据结束
	        	 
	        	 isEmpty = false;//设置 isEmpty 为 false,表示已经有数据了
	             this.notifyAll();//生产完毕，唤醒所有消费者
	        }catch(Exception e){
	        	
	        }
	       
	    }
	    /**
	     * 取数据，消费数据
	     * @return
	     */
	    public synchronized void pop(){
	    	try{

	    		 //不能用 if，因为可能有多个线程
	            while(isEmpty){//进入 while 代码块，表示 isEmpty==true,表示为空，等待生产者生产数据，消费者要进入等待池中
	                this.wait();//消费者线程等待
	            }
	            //-------消费开始-------
	            System.out.println(this.name+"---"+this.age);
	            //-------消费结束------
	            isEmpty = true;//设置 isEmpty为true，表示需要生产者生产对象
	            this.notifyAll();//消费完毕，唤醒所有生产者
	        }catch(Exception e){
	        	
	        }
	        
	    }
}
