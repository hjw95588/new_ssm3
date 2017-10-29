package ssm_demo;

/**
 * 死锁demo练习
 * 
 * @author Administrator
 *
 */
public class deadLock implements Runnable {

	private boolean flag;

	public deadLock(boolean flag) {
		this.flag = flag;
	}

	public void run() {

		if (flag) {
			synchronized (lock.obj1) {
                   System.out.println("if  obj1");
				synchronized (lock.obj2) {
					 System.out.println("if  obj2");
				}
			}
		} else {
			synchronized (lock.obj2) {
				 System.out.println("else  obj2");
				synchronized (lock.obj1) {
					System.out.println("else  obj1");
				}
			}
		}

	}

}
