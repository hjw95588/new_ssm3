package WaitNotifyDemo;

public class Output implements Runnable{

	private Res r;
	public Output(Res r) {
		this.r=r;
	}
	public void run() {
	
		while(true){
			
			synchronized (r) {
				System.out.println(r.getName()+"    "+r.getSex());
			}
			
		}
	}

}
