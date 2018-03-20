package ssm_demo;

import java.util.Arrays;

public class other {
	public static void main(String [] args){
	
		
		//排序

		int []ar={-4,-12,3,5,7,2,4,6,-1,-4,11};
		
		//selAort(ar); 
		
		maoAort(ar);
		
		show(ar);
		
		
	}
	
	//冒泡排序
	public static void maoAort(int [] ar){
		for(int x=0;x<ar.length-1;x++){
			
			for(int y=0;y<ar.length-x-1;y++)
			{
				if(ar[y]>ar[y+1]){
					int temp=ar[y];
					ar[y]=ar[y+1];
					ar[y+1]=temp;
				}
			}
		}
	}
	
	//选择排序
	public static void selAort(int [] ar){
		for(int x=0;x<ar.length-1;x++)
		{
			for(int y=x+1;y<ar.length;y++)
			{
				//转换
				if(ar[x]>ar[y]){
					int temp=ar[x];
					ar[x]=ar[y];
					ar[y]=temp;
				}
			}
		}
	}
	
	public static void show(int [] ar){
		for (int i = 0; i < ar.length; i++) {
			//最后一个元素
			if(i==ar.length-1) System.out.println(ar[i]);
			else System.out.print(ar[i]+"   ");
		}
	}
}
