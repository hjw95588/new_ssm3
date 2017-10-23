package com.yihe.util;

import java.util.UUID;

public class UUid {

	public static String getUuid(){
		return UUID.randomUUID().toString().replaceAll("-", "").toLowerCase();
	}
	
	
}
