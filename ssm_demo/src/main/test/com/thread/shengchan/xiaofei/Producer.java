package com.thread.shengchan.xiaofei;

public class Producer implements Runnable {

	//共享资源对象
    Person p = null;
    public Producer(Person p){
        this.p = p;
    }
    public void run() {
        //生产对象
        for(int i = 0 ; i < 50 ; i++){
            //如果是偶数，那么生产对象 Tom--11;如果是奇数，则生产对象 Marry--21
            if(i%2==0){
                p.push("偶数数据",22222222);
            }else{
                p.push("奇数demo", 111111);
            }
        }
    }

}
