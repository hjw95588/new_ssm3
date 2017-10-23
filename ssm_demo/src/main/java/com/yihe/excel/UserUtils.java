package com.yihe.excel;

import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.util.CellRangeAddress;

import com.yihe.bean.User;

public class UserUtils {
	 public static void excelDemo(OutputStream out, List<User> user, String title, String[] header)
			    throws IOException
			  {
		 HSSFWorkbook workbook = new HSSFWorkbook();

		    HSSFCellStyle titlesStyle = workbook.createCellStyle();

		    titlesStyle.setAlignment((short)2);

		    HSSFFont titleFont = workbook.createFont();

		    titleFont.setFontHeightInPoints((short)12);

		    titlesStyle.setFont(titleFont);

		    HSSFSheet sheet = workbook.createSheet();

		    sheet.setDefaultColumnWidth(30);

		    sheet.setDefaultRowHeightInPoints(18.0F);

		    HSSFRow row = sheet.createRow(0);

		    HSSFCell cell = row.createCell(0);

		    cell.setCellStyle(titlesStyle);

		    cell.setCellValue(title);

			    sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 5));

			    HSSFCellStyle headStyle = workbook.createCellStyle();

			    headStyle.setFillForegroundColor((short)48);

			    headStyle.setFillPattern((short)1);

			    headStyle.setAlignment((short)2);
			    headStyle.setBorderTop((short)1);
			    headStyle.setBorderRight((short)1);
			    headStyle.setBorderBottom((short)1);
			    headStyle.setBorderLeft((short)1);

			    HSSFFont headFont = workbook.createFont();

			    headFont.setColor((short)42);
			    headFont.setBoldweight((short)700);
			    headFont.setFontHeightInPoints((short)12);

			    headStyle.setFont(headFont);

			    row = sheet.createRow(1);
			    for (int i = 0; i < header.length; i++) {
			      cell = row.createCell(i);
			      cell.setCellStyle(headStyle);
			      cell.setCellValue(header[i]);
			    }

			    User s = null;
			    for (int x = 0; x < user.size(); x++) {
			      s = (User)user.get(x);
			      row = sheet.createRow(2 + x);
			      cell = row.createCell(0);
			      cell.setCellValue(s.getAccount());  //用户名

			      cell = row.createCell(1);
			      cell.setCellValue(s.getUsername()); //姓名

			      cell = row.createCell(2);
			      cell.setCellValue(s.getSex());//性别

			      cell = row.createCell(3);
			      cell.setCellValue(s.getMobile()); //手机号

			      SimpleDateFormat sd=new SimpleDateFormat("yyyy-MM-dd");
			      cell = row.createCell(4);
			      cell.setCellValue(sd.format(s.getBirth())); //出生日期

			      cell = row.createCell(5);
			      cell.setCellValue("/ssm_demo/uploads/"+s.getPhoto()); //照片
		      
			   
			    }

			    workbook.write(out);
			  }
	
    
}
