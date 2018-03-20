package com.test.demo;

public class TestDemo {

	public static void main(String[] args) {
		StringBuffer sb = new StringBuffer("hello ");
        getString(sb);
        System.out.println("初始的值："+sb);
	}

	private static void getString(StringBuffer s) {
		
		s = new StringBuffer("123");
        s.append("     456");
        System.out.println("传递到方法的值："+s);
	}
}
