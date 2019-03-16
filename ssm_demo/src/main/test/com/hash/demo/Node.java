package com.hash.demo;

public class Node {
	public Node next;
	private Object data;
	
	public Node(Object data){
		this.data=data;
	}
	
 public static void main(String[] args) {
	Node d=new Node(0);
	d.next=new Node(1);
	d.next.next=new Node(2);
}
}
