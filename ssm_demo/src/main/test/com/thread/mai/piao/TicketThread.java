package com.thread.mai.piao;

public class TicketThread {

	public static void main(String[] args) {
		//创建 3 个窗口
		MainTicketDemo t1 = new MainTicketDemo("A窗口");
		MainTicketDemo t2 = new MainTicketDemo("B窗口");
		MainTicketDemo t3 = new MainTicketDemo("C窗口");
         
        //启动 3 个窗口进行买票
        t1.start();
        t2.start();
        t3.start();
	}
}
