package ssm_demo;


public class deadMain {

	public static void main(String[] args) {
		
		Thread t1=new Thread(new deadLock(true));
		
		Thread t2=new Thread(new deadLock(false));
		
		t1.start();
		t2.start();
		
	}
}
