package com.poi.data.valicate;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.DVConstraint;
import org.apache.poi.hssf.usermodel.HSSFDataValidation;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.CellRangeAddressList;
import org.apache.poi.xssf.usermodel.XSSFDataValidation;
import org.apache.poi.xssf.usermodel.XSSFDataValidationConstraint;
import org.apache.poi.xssf.usermodel.XSSFDataValidationHelper;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openxmlformats.schemas.spreadsheetml.x2006.main.CTDataValidation;
import org.openxmlformats.schemas.spreadsheetml.x2006.main.impl.CTDataValidationImpl;

import com.lowagie.tools.plugins.DvdCover;


public class Demo2007 {
	public static void main(String [] args) throws IOException {
		
		File excel = new File("d://111111.xlsx");
		FileInputStream excelStream = new FileInputStream(excel);
		XSSFWorkbook wb2=new XSSFWorkbook(excelStream);//excel文件对象
		
		XSSFSheet sheet2 = wb2.getSheet("导入模板");
		
		//设置下拉列表的内容
		  String[] datas = new String[] {"维持1","恢复1","调整1"};
		setDataValidationList2007(sheet2,datas,20);
		
		FileOutputStream out=new FileOutputStream("d://aa.xlsx");
		
        wb2.write(out);
        out.close();
    }
    
	 public static void setDataValidationList2007(XSSFSheet sheet2,String[] datas,int n){
	    	//设置下拉列表的内容
		   //String[] datas = new String[] {"维持1","恢复1","调整1"};
	    	
	    	XSSFDataValidationHelper dvHelper = new XSSFDataValidationHelper(sheet2);
	    	 XSSFDataValidationConstraint dvConstraint = (XSSFDataValidationConstraint) dvHelper
	    	            .createExplicitListConstraint(datas);
	    	 CellRangeAddressList addressList = null;
	    	    XSSFDataValidation validation = null;
	    	    for (int i = 1; i < 600; i++) {
	    	        addressList = new CellRangeAddressList(i, i, n, n);
	    	        validation = (XSSFDataValidation) dvHelper.createValidation(
	    	                dvConstraint, addressList);
	    	        sheet2.addValidationData(validation);
	    	    }
	    	
	    }
	
	
    public static HSSFDataValidation setDataValidationList(short firstRow,short firstCol,short endRow, short endCol){
    	//设置下拉列表的内容
    	String[] textlist={"列表1","列表2","列表3","列表4","列表5"};
    	
    	
    	//加载下拉列表内容
    	DVConstraint constraint=DVConstraint.createExplicitListConstraint(textlist);
    	//设置数据有效性加载在哪个单元格上。
		
		//四个参数分别是：起始行、终止行、起始列、终止列
    	CellRangeAddressList regions=new CellRangeAddressList(firstRow,firstCol,endRow,endCol);
    	//数据有效性对象
    	
    	
    	
    	HSSFDataValidation data_validation_list = new HSSFDataValidation(regions, constraint);
    	
    	return data_validation_list;
    }
   

}
