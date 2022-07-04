package com.church.treasuryApp;

import java.awt.Font;
import java.io.FileNotFoundException;
import java.net.MalformedURLException;
import java.net.URL;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.io.image.ImageType;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.geom.Rectangle;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
  
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;

public class PdfTable  {

public void getTable(String date) throws FileNotFoundException, MalformedURLException {

String file
	= "./PDF_Table/SundayOfferings_"+date+".pdf";


   PdfDocument pdfDoc
       = new PdfDocument(new PdfWriter(file));


   Document doc = new Document(pdfDoc, PageSize.A4.rotate());
   

   Table table = new Table(17);
   table.setFixedPosition(20, 270, null);
   
   ImageData imageData = ImageDataFactory.create("./Images/beersheba.png");
   Image pdfImg = new Image(imageData);
   pdfImg.setHeight(30);
   pdfImg.setFixedPosition(430, 480, null);
   
   Paragraph p = new Paragraph("DATE: "+date);
   p.setFontSize(8);
   p.setBold();
   p.setFixedPosition(20, 470, null);
   
   Paragraph p2 = new Paragraph("SUNDAY OFFERING PARTICULARS");
   p2.setFontSize(8);
   p2.setUnderline();
   p2.setBold();
   p2.setFixedPosition(200, 480, null);
   

table.addCell(new Cell(2,1).add(new Paragraph("DENOMIN\nATION").setFontSize(8)).setTextAlignment(TextAlignment.CENTER));
   table.addCell(new Cell(1,2).add(new Paragraph("BEERSHEBA").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(6));
   table.addCell(new Cell(1,2).add(new Paragraph("HOUSE OF\nBEATITUDES").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(4));
   table.addCell(new Cell(1,2).add(new Paragraph("ELIEM").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(6));
   table.addCell(new Cell(1,2).add(new Paragraph("BETHEL").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(6));
   table.addCell(new Cell(1,2).add(new Paragraph("BETHANI").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(6));
   table.addCell(new Cell(1,2).add(new Paragraph("NEW\nJERUSALEM").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(4));
   table.addCell(new Cell(1,2).add(new Paragraph("REHABOTH").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(6));
   table.addCell(new Cell().add(new Paragraph("TOTAL").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(6));
   table.addCell(new Cell().add(new Paragraph("REMARKS").setBold().setFontSize(8)).setTextAlignment(TextAlignment.CENTER).setPadding(6));
   table.addCell(new Cell().add(new Paragraph("No.").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("Total").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("No.").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("Total").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("No.").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("Total").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("No.").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("Total").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("No.").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("Total").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("No.").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("Total").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("No.").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("Total").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("      ")));
   table.addCell(new Cell().add(new Paragraph("      ").setWidth(100)));
   
   SundayOfferingsHandler sundayOfferingHandler = new SundayOfferingsHandler();
   
   SundayOfferingsDAO house_of_beatitudes = new SundayOfferingsDAO();    
   house_of_beatitudes = sundayOfferingHandler.getDataByDate(date, "house_of_beatitudes");
   
   SundayOfferingsDAO beersheba = new SundayOfferingsDAO();    
   beersheba = sundayOfferingHandler.getDataByDate(date, "beersheba");
   
   SundayOfferingsDAO eliem = new SundayOfferingsDAO();    
   eliem = sundayOfferingHandler.getDataByDate(date, "eliem");
   
   SundayOfferingsDAO bethel = new SundayOfferingsDAO();    
   bethel = sundayOfferingHandler.getDataByDate(date, "bethel");
   
   SundayOfferingsDAO bethani = new SundayOfferingsDAO();    
   bethani = sundayOfferingHandler.getDataByDate(date, "bethani");
   
   SundayOfferingsDAO new_jerusalem = new SundayOfferingsDAO();    
   new_jerusalem = sundayOfferingHandler.getDataByDate(date, "new_jerusalem");
   
   SundayOfferingsDAO rehaboth = new SundayOfferingsDAO();    
   rehaboth = sundayOfferingHandler.getDataByDate(date, "rehaboth");
   
   
   table.addCell(new Cell().add(new Paragraph("Rs.2000").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no2000())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no2000() * 2000)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no2000())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no2000() * 2000)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no2000())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no2000() * 2000)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no2000())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no2000() * 2000)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no2000())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no2000() * 2000)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no2000())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no2000() * 2000)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no2000())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no2000() * 2000)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no2000() * 2000 + house_of_beatitudes.getSundayOffering_no2000() * 2000 + eliem.getSundayOffering_no2000() * 2000 + bethel.getSundayOffering_no2000() * 2000 + bethani.getSundayOffering_no2000() * 2000 + new_jerusalem.getSundayOffering_no2000() * 2000 + rehaboth.getSundayOffering_no2000() * 2000)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   table.addCell(new Cell().add(new Paragraph("Rs.500").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no500())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no500() * 500)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no500())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no500() * 500)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no500())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no500() * 500)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no500())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no500() * 500)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no500())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no500() * 500)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no500())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no500() * 500)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no500())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no500() * 500)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no500() * 500 + house_of_beatitudes.getSundayOffering_no500() * 500 + eliem.getSundayOffering_no500() * 500 + bethel.getSundayOffering_no500() * 500 + bethani.getSundayOffering_no500() * 500 + new_jerusalem.getSundayOffering_no500() * 500 + rehaboth.getSundayOffering_no500() * 500)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   table.addCell(new Cell().add(new Paragraph("Rs.200").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no200())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no200() * 200)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no200())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no200() * 200)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no200())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no200() * 200)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no200())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no200() * 200)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no200())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no200() * 200)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no200())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no200() * 200)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no200())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no200() * 200)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no200() * 200 + house_of_beatitudes.getSundayOffering_no200() * 200 + eliem.getSundayOffering_no200() * 200 + bethel.getSundayOffering_no200() * 200 + bethani.getSundayOffering_no200() * 200 + new_jerusalem.getSundayOffering_no200() * 200 + rehaboth.getSundayOffering_no200() * 200)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   table.addCell(new Cell().add(new Paragraph("Rs.100").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no100())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no100() * 100)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no100())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no100() * 100)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no100())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no100() * 100)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no100())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no100() * 100)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no100())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no100() * 100)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no100())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no100() * 100)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no100())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no100() * 100)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no100() * 100 + house_of_beatitudes.getSundayOffering_no100() * 100 + eliem.getSundayOffering_no100() * 100 + bethel.getSundayOffering_no100() * 100 + bethani.getSundayOffering_no100() * 100 + new_jerusalem.getSundayOffering_no100() * 100 + rehaboth.getSundayOffering_no100() * 100)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   table.addCell(new Cell().add(new Paragraph("Rs.50").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no50())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no50() * 50)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no50())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no50() * 50)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no50())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no50() * 50)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no50())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no50() * 50)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no50())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no50() * 50)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no50())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no50() * 50)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no50())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no50() * 50)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no50() * 50 + house_of_beatitudes.getSundayOffering_no50() * 50 + eliem.getSundayOffering_no50() * 50 + bethel.getSundayOffering_no50() * 50 + bethani.getSundayOffering_no50() * 50 + new_jerusalem.getSundayOffering_no50() * 50 + rehaboth.getSundayOffering_no50() * 50)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   table.addCell(new Cell().add(new Paragraph("Rs.20").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no20())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no20() * 20)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no20())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no20() * 20)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no20())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no20() * 20)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no20())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no20() * 20)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no20())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no20() * 20)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no20())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no20() * 20)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no20())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no20() * 20)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no20() * 20 + house_of_beatitudes.getSundayOffering_no20() * 20 + eliem.getSundayOffering_no20() * 20 + bethel.getSundayOffering_no20() * 20 + bethani.getSundayOffering_no20() * 20 + new_jerusalem.getSundayOffering_no20() * 20 + rehaboth.getSundayOffering_no20() * 20)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   table.addCell(new Cell().add(new Paragraph("Rs.10").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no10())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no10() * 10)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no10())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_no10() * 10)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no10())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_no10() * 10)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no10())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_no10() * 10)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no10())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_no10() * 10)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no10())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_no10() * 10)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no10())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_no10() * 10)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_no10() * 10 + house_of_beatitudes.getSundayOffering_no10() * 10 + eliem.getSundayOffering_no10() * 10 + bethel.getSundayOffering_no10() * 10 + bethani.getSundayOffering_no10() * 10 + new_jerusalem.getSundayOffering_no10() * 10 + rehaboth.getSundayOffering_no10() * 10)).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   table.addCell(new Cell().add(new Paragraph("COINS").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_coinsTotal() + rehaboth.getSundayOffering_coinsTotal() + rehaboth.getSundayOffering_coinsTotal() + rehaboth.getSundayOffering_coinsTotal() + rehaboth.getSundayOffering_coinsTotal() + rehaboth.getSundayOffering_coinsTotal() + rehaboth.getSundayOffering_coinsTotal())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   table.addCell(new Cell().add(new Paragraph("TOTAL").setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_Total())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(" ")));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(house_of_beatitudes.getSundayOffering_Total())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(" ")));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(eliem.getSundayOffering_Total())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(" ")));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethel.getSundayOffering_Total())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(" ")));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(bethani.getSundayOffering_Total())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(" ")));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(new_jerusalem.getSundayOffering_Total())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(" ")));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(rehaboth.getSundayOffering_Total())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph(" ")));
   table.addCell(new Cell().add(new Paragraph(Integer.toString(beersheba.getSundayOffering_Total() + house_of_beatitudes.getSundayOffering_Total() + eliem.getSundayOffering_Total() + bethel.getSundayOffering_Total() + bethani.getSundayOffering_Total() + new_jerusalem.getSundayOffering_Total() + rehaboth.getSundayOffering_Total())).setFontSize(8)));
   table.addCell(new Cell().add(new Paragraph("    ")));
   
   
   Paragraph p3 = new Paragraph("ACCOUNTENT :");
   p3.setFontSize(8);
   p3.setBold();
   p3.setFixedPosition(20, 220, null);
   
   Paragraph p4 = new Paragraph("TREASURER :");
   p4.setFontSize(8);
   p4.setBold();
   p4.setFixedPosition(200, 220, null);
   
   Paragraph p5 = new Paragraph("PRESIDENT :");
   p5.setFontSize(8);
   p5.setBold();
   p5.setFixedPosition(400, 220, null);
   

   doc.add(p);
   doc.add(p2);
   doc.add(p3);
   doc.add(p4);
   doc.add(p5);
   doc.add(pdfImg);
   doc.add(table);
   


   doc.close();
   System.out.println("Table created successfully..");

}

}