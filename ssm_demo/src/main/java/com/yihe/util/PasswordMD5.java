package com.yihe.util;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;

public class PasswordMD5 {
	public static String md5ForPassword(String password,String sa){
		String algorithmName = "MD5";
		String source = password;
		ByteSource salt = ByteSource.Util.bytes(sa);
		int hashIterations = 1024;
		
		Object o = new SimpleHash(algorithmName, source, salt, hashIterations);
		String s = o.toString();
		return s;
	}
}
