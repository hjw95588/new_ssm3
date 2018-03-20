package com.thread.mai.piao;

/**
 * 模拟卖票
 * @author hejianwen
 *
 */
public class MainTicketDemo extends Thread{

	 //定义一共有 50 张票，注意声明为 static,表示几个窗口共享
    private static int num = 50;
     
    //调用父类构造方法，给线程命名
    public MainTicketDemo(String string) {
        super(string);
    }
    @Override
    public  void run() {
        //票分 50 次卖完
    	//synchronizedDemo();
    	//Demo();
    	
    	for(int x=0;x<50;x++){
    		
    	}
    }
    
    public void Demo(){
    	for(int i = 0 ; i < 50 ;i ++){
    		
            if(num > 0){
                try {
                    sleep(10);//模拟卖票需要一定的时间
                } catch (InterruptedException e) {
                    // 由于父类的 run()方法没有抛出任何异常，根据继承的原则，子类抛出的异常不能大于父类， 故我们这里也不能抛出异常
                    e.printStackTrace();
                }
                System.out.println(this.currentThread().getName()+"卖出一张票，剩余"+(--num)+"张");
            }
        }
    }
     
    
    public void synchronizedDemo(){
    	for(int i = 0 ; i < 50 ;i ++){
    		//这里我们使用当前对象的字节码对象作为同步锁
    		//同步代码块
    		synchronized(this.getClass()){
    		
            if(num > 0){
                try {
                    sleep(10);//模拟卖票需要一定的时间
                } catch (InterruptedException e) {
                    // 由于父类的 run()方法没有抛出任何异常，根据继承的原则，子类抛出的异常不能大于父类， 故我们这里也不能抛出异常
                    e.printStackTrace();
                }
                System.out.println(this.currentThread().getName()+"卖出一张票，剩余"+(--num)+"张");
            }
    		}
        }
    }
     
}
