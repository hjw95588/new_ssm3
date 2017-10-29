package sort;

/**
 * 选择排序
 * 
 * 固定一个角标位置，和剩下的进行排序
 * @author Administrator
 *
 */
public class selectSort {

	public static void main(String[] args) {
		int s[]={3,5,6,11,2,-2,1};
		
		for(int x=0;x<s.length-1;x++){
			
			for(int y=x+1;y<s.length;y++){
				if(s[x]>s[y]){
					int tmp=s[x];
					s[x]=s[y];
					s[y]=tmp;
				}
			}
		}
		
		for(int ss:s){
			System.out.println(ss);
		}
	}
}
