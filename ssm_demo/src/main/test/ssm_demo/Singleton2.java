package ssm_demo;

/**
 * 
 * @author Administrator
 *
 */
public class Singleton2 {

	private Singleton2(){};
	
	private static Singleton2 sin=new Singleton2();
	
	public static Singleton2 getInstance(){
		return sin;
	}
}
