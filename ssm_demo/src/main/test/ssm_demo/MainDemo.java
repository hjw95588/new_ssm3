package ssm_demo;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;

import com.alibaba.fastjson.JSON;

/**
 * java  demo练习
 * @author Administrator
 *
 */
/**
 * @author Administrator
 *
 */
/**
 * @author Administrator
 *
 */
public class MainDemo {

	public static void  main(String args[]){
		
		set();
		
		String s=null;
		if(StringUtils.isEmpty(s)){
			show(s);
		}
		
		
		
	}
	
	public static void show(Object b){
		System.out.println(b);
		
	}
	
	public static void set(){
		
		Set<String> s=new HashSet<String>();
		
		for(int x=0;x<10;x++){
			s.add(x+"rr");
		}
		
	}
	
}
