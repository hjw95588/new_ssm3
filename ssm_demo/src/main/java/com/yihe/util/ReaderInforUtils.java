package com.yihe.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 读者信息管理 常量类
 * @author hejianwen
 *
 */
public class ReaderInforUtils {
	
	
	public static String male="男";
	public static String female="女";
	
	public static String Code="100";  //状态码
	public static String titleCode="101";  //标题头错误的状态码
	public static String errorCode="103";  //添加到错误信息栏的区分状态码
	public static String userNullCode="105";  //没有用户的状态码
	
	
	
	
	//校验邮件
	public static boolean valEmail(String email)
	{
		String check = "^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
        Pattern regex = Pattern.compile(check);
        Matcher matcher = regex.matcher(email);
        
		return matcher.matches();
	}
	
	//固定电话校验 区号+座机号码+分机号码
		public static boolean valFixPhone(String phone)
		{
			//0571-8888880-111
			String reg="(?:(\\(\\+?86\\))(0[0-9]{2,3}\\-?)?([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?)|" +  
	                "(?:(86-?)?(0[0-9]{2,3}\\-?)?([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?)";
			return Pattern.matches(reg, phone);
		}
	
	//校验手机号码
		public static boolean valTelPhone(String mobile)
		{
			Pattern p = Pattern.compile("^(((13[0-9])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8})|(0\\d{2}-\\d{8})|(0\\d{3}-\\d{7})$");
		    Matcher m = p.matcher(mobile); 
		   return m.matches();
		}
		
		//校验qq号码
		public static boolean valQQ(String qq)
		{
		String  regex ="[1-9][0-9]{4,14}";
		  Pattern p = Pattern.compile(regex);  
		  Matcher m = p.matcher(qq);  
		 return m.matches();
		}
		
		//校验账号和姓名，满足格式字母，数字或者下划线
		public static boolean valUserName(String name)
		{
		String  regex ="^[0-9a-zA-Z_]+$";
		  Pattern p = Pattern.compile(regex);  
		  Matcher m = p.matcher(name);  
		 return m.matches();
		}
		
    //标题行
		public static String num="序号"; 
		public static String username="账号";
		public static String fullName="姓名";
		public static String birth="出生日期";
		public static String sex="性别";
		
		public static String telPhone="手机";
	
	
	

	//提示信息
		public static String errorMsg="错误信息";
		public static String saveErrorMsg="信息保存错误！请检查输入的记录是否满足条件";
		public static String userNullMsg="账号为空";
		public static String userIsExist="账号已存在！";
		public static String fullNameNullMsg="姓名为空";
		public static String birthNullMsg="出生日期为空或格式错误";
		
		public static String emailErrorMsg="邮箱格式错误";
		public static String FixPhoneErrorMsg="电话格式错误";
		
		public static String readerTypeNullMsg="读者类型为空";
		public static String readerTypeErrorMsg="读者类型错误";
		public static String typeNullMsg="类别为空";
		public static String borrowNullMsg="借阅证号为空";
		public static String borrowExistMsg="借阅证号已存在";
		
		public static String facultyNullMsg="院系为空";
		public static String gradeNullMsg="年级组为空";
		public static String majorNullMsg="专业为空";
		
		public static String telPhoneNullMsg="手机号码为空";
		public static String telPhoneErrorMsg="手机格式错误";
		public static String companyNullMsg="单位为空";
		
		public static String qqErrorMsg="qq号码格式错误";
		
		public static String userNameFormatError="账号格式为数字、字母或下划线"; //账号格式有误
		public static String fullNameFormatError="姓名格式为数字、字母或下划线"; //姓名格式有误
		
		
		
		
		
		
		
		
		
		
		
}
