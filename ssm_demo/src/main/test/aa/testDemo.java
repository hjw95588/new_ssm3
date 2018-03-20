package aa;

/**
 * 静态代码块   构造代码块  构造函数的执行顺序
 * @author hejianwen
 *
 */
public class testDemo {

	public static void main(String[] args) {
		
		{
			System.out.println("1111111");
		}
		
		new demo();
	}
	
}
