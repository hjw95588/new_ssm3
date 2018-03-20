package com.thread.shengchan.xiaofei;

public class Consumer implements Runnable {

	//共享资源对象
    Person p = null;
    public Consumer(Person p) {
        this.p = p;
    }
     
    public void run() {
        for(int i = 0 ; i < 50 ; i++){
            //消费对象
            p.pop();
        }
    }
}
