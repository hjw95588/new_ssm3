package com.pdf.png.test;

import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import javax.imageio.ImageIO;

import org.icepdf.core.pobjects.Document;
import org.icepdf.core.util.GraphicsRenderingHints;

public class PdftoImage2 {

	public static void main(String[] args) {
		String path="http://www.grainmarket.com.cn/Uploads/ArtAccessory/PDF/statistics/2015年取得中央储备粮代储资格企业名单.pdf";
		PDF2Pic(path);
	}

	private static void PDF2Pic(String pdfFileUrl) {
		Document document = new Document(); 
		document.setFile(pdfFileUrl); 
		float scale = 2.5f;//缩放比例 
		float rotation = 0f;//旋转角度 

		

		if(document != null && document.getNumberOfPages() > 0){ 
		for (int i = 0; i < document.getNumberOfPages(); i++) { 
		 BufferedImage image = (BufferedImage) 
		document.getPageImage(i, GraphicsRenderingHints.SCREEN, org.icepdf.core.pobjects.Page.BOUNDARY_CROPBOX, rotation, scale); 
		 
		 RenderedImage rendImage = image; 
		 try { 
		
		String pngFileUrl = pdfFileUrl.replaceAll(".pdf", ".png"); 
		String prex = pngFileUrl.substring(0,pngFileUrl.lastIndexOf(".")); 
		String suffix = pngFileUrl.substring(pngFileUrl.lastIndexOf(".") ); 
		String imgName = prex+i+ suffix; 
		System.out.println(imgName); 
		File file = new File(imgName); 
		ImageIO.write(rendImage, "png", file); 
		
		
		
 } catch (IOException e) { 
 e.printStackTrace(); 
	 } 
	 image.flush(); 
	 } 
		
	}
	
	}
}
