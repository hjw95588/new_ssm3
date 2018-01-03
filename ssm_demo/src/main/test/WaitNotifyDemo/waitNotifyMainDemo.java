package WaitNotifyDemo;
/**
 * 线程间通信,其实就是多个线程在操作同一个资源，但是操作的动作不同
 * @author hejianwen
 *
 */

//等待唤醒机制
public class waitNotifyMainDemo {

	public static void main(String[] args) {
		
		
		
		Res res=new Res();
		
       Input in=new Input(res);
		
		Output out=new Output(res);
		
		Thread t1=new Thread(in);
		Thread t2=new Thread(out);
		
		t1.start();
		t2.start();
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
