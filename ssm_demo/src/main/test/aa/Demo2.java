package aa;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;

public class Demo2 {

	public static void main(String[] args) {
		String a="[['11','22'],['33','44'],['55','66']]";
		JSONArray array=JSON.parseArray(a);
		System.out.println(array.size());
		
		String [][]demo2=new String[array.size()][2];
		for(int x=0;x<array.size();x++){
			JSONArray cc=array.getJSONArray(x);
			for(int y=0;y<2;y++){
				demo2[x][y]=String.valueOf(cc.get(y));
			}
			
		}
		
		
		int[][] arr = new int[3][];
	    arr[0] = new int[] { 1 };
	    arr[1] = new int[] { 1, 2, 3 };
	    arr[2] = new int[] { 3, 4 };
	    for (int[] b : arr) {
	      for (int i : b) {
	        System.out.print(i + " ");
	      }
	      System.out.println();
	    }
	  }
		
	
}
