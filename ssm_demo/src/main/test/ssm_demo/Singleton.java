package ssm_demo;

/**
 * 单例设计模式
 * 
 * 1懒汉式
 * Java单例模式是一种常见且较为简单的设计模式。单例模式，顾名思义一个类仅能有一个实例，并且向整个系统提供这一个实例。 
单例模式的特点：

单例类仅能有一个实例。
单例类必须为自己创建实例。
单例类必须向外界提供获取实例的方法。 
 * @author Administrator
 *懒汉式单例类.在第一次调用的时候实例化   
 */
public class Singleton {

	// 懒汉式单例类.在第一次调用的时候实例化自己

	private Singleton() {

	}

	private static Singleton single = null;

	public static Singleton getInstances() {

		if (single == null) {
			single = new Singleton();
		}
		return single;
	}

	// 1在getInstance方法上加同步
	
	//线程安全的，但是效率比较低，99%的情况是不需要进行同步的
	public static synchronized Singleton getInstances2() {

		if (single == null) {
			single = new Singleton();
		}
		return single;
	}

	//2 双重检查锁定
	public static Singleton getInstances3() {
		if (single == null) {
			synchronized (Singleton.class) {
				if (single == null) {
					single = new Singleton();
				}
			}

		}
		
		return single;

	}
}
