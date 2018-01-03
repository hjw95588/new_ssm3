package WaitNotifyDemo;

public class Input implements Runnable{

	private Res r;
	
	public Input(Res r) {
		this.r=r;
	}
	
	public void run() {
	   boolean b=true;
		while(true){
			
			synchronized(r){
			if (b) {
				r.setName("mike");
				r.setSex("nan");
				b = false;
			} else {
				r.setName("demo");
				r.setSex("女");
				b = true;
			}
			}
		}
		
	}

}
