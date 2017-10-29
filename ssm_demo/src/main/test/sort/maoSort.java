package sort;

/**
 * 冒泡排序
 * 相邻的2个元素进行比较，如果符合条件换位
 * 
 * 第一圈：最值出现在最后位置
 * @author Administrator
 *
 */
public class maoSort {

	public static void main(String[] args) {
		int a[]={1,3,5,7,2,4,6};
		
		for(int x=0;x<a.length-1;x++){
			
			
			for(int y=0;y<a.length-x-1;y++){
				
				if(a[y]>a[y+1]){
					int t=a[y];
					a[y]=a[y+1];
					a[y+1]=t;
				}
			}
		}
		
		
	}
}
