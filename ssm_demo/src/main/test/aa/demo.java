package aa;

public class demo {

	private String name;
	private int age;
	
	
	public demo(){
		System.out.println("无参数的构造函数:"+this.age);
	}
	
	public demo(String name,int age){
	
		this.name=name;
		this.age=age;
		System.out.println("有参数的构造函数:"+name+"    "+age);
	}
	
	//构造代码块
	{
		System.out.println("这是构造代码块！！！！！！");
	}
	
	//静态代码块
	static{
		System.out.println("静态代码块：   ");
	}
	
	@Override
	public String toString() {
		return "demo [name=" + name + ", age=" + age + "]";
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	
}
