package com.yihe.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.InetAddress;
import java.net.URLDecoder;
import java.net.UnknownHostException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.ProgressListener;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.ExpiredCredentialsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.UnauthorizedException;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.yihe.bean.EbookResponse;
import com.yihe.bean.PageRole;
import com.yihe.bean.PageUser;
import com.yihe.bean.Role;
import com.yihe.bean.User;
import com.yihe.bean.UserRole;
import com.yihe.excel.UserUtils;
import com.yihe.service.IRoleService;
import com.yihe.service.IUserRoleService;
import com.yihe.service.IUserService;
import com.yihe.util.PageBean;
import com.yihe.util.PasswordMD5;
import com.yihe.util.ReaderInforUtils;
import com.yihe.util.UUid;

@Controller  
@RequestMapping("/user")
public class UserController {

	public UserController() {
		
	}
	
	 @Resource  
	 private IRoleService roleService;  
	
	 @Resource  
	 private IUserService userService;  
	 
	 @Autowired
	 private IUserRoleService userRoleService;
	
	 public static String temp_dir = null;
	 /**
	  * 增加用户数据
	  * @param data
	  * @return
	  */
	@RequestMapping(value="/add.do",method=RequestMethod.POST)  
	@ResponseBody
	public Map<String,Object> addUser(@RequestBody String data){
		
		Map<String,Object> map=new HashMap<String, Object>();
		try{
			if(StringUtils.isEmpty(data)){
				map.put("status", "0");
				map.put("msg","用户信息为空");	
			}
			else{
				User user=JSON.parseObject(data, User.class);
				String uid=UUid.getUuid();
				addUserMethod(user, uid);
				addUserRoleMethod(user,uid);
				map.put("status", "1");
				map.put("msg","用户信息添加成功");
			}
		}catch(Exception e){
			map.put("status", "0");
			map.put("msg",e.getMessage());
		}
		
		
		return map;
	}
	
	public int addUserMethod(User user,String uid){
		user.setId(uid);
		String salt=UUid.getUuid();
		user.setSalt(salt);
		user.setPassword(PasswordMD5.md5ForPassword(user.getPassword(), salt));
		user.setCreateTime(new Date());
		user.setUpdateTime(new Date());

		return userService.add(user);
	}
	
	public int addUserRoleMethod(User user,String uid){
		List<Role> roleList=user.getRoleList();
		List<UserRole> urList=new ArrayList<UserRole>(); //用户id,角色id集合
		if(roleList!=null){
			for(int x=0;x<roleList.size();x++){
				UserRole ur=new UserRole(uid, roleList.get(x).getId());
				urList.add(ur);
			}
		}
		if(urList.size()==0){
			return 0;
		}
		
		
	  return userRoleService.insertByBatch(urList);
	}
	
	/**
	  * 增加用户数据
	  * @param data
	  * @return
	  */
	@RequestMapping(value="/queryExitAccount.do",method=RequestMethod.GET)  
	@ResponseBody
	public Map<String,Object> queryExitAccount( String account){
		//@PathVariable(value="account")String account
		Map<String,Object> map=new HashMap<String, Object>();
		
		if(com.mysql.jdbc.StringUtils.isNullOrEmpty(account)){
			map.put("status", "400");
			map.put("message", "账号为空");
		}
		else
		{
			 int n=userService.queryExistAccount(account);
			 
			 if(n==1){
				 map.put("status", "500");
			     map.put("message", "账号已经存在！");
			 }
			 else{
				 map.put("status", "200");
			     map.put("message", "账号不存在，可以注册");
			 }
		}
		
		return map;
	}
	
	
	
	/**
	 * 更新数据
	 * @param data
	 * @return
	 */
	@RequestMapping(value="/updateUser.do",method=RequestMethod.POST)  
	@ResponseBody
	public Map<String,Object> updateUser(@RequestBody String data){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		if(StringUtils.isEmpty(data)){
			map.put("status", "0");
			map.put("msg","用户信息为空");
			
		}
		else{
			User user=JSON.parseObject(data, User.class);
			String salt=UUid.getUuid();
			user.setSalt(salt);  //盐值
			user.setPassword(PasswordMD5.md5ForPassword(user.getPassword(), salt));//密码
			user.setUpdateTime(new Date());
			int n=userService.update(user);
			
			//先删除该用户之前的用户-角色关系表
			delOldUserRole(user.getId()+",");
			//更新用户-角色关系表
			addUserRoleMethod(user, user.getId());
			
			map.put("status", "1");
			map.put("msg","用户信息修改成功");
		}
		
		return map;
	}
	
	public int delOldUserRole(String userId){
		
		List<String> list=Arrays.asList(userId.split(","));
		
		userRoleService.deleteByUser(list);
		return 0;
	}
	
	/**
	 * 根据id 查询用户信息
	 * @param request
	 * @param response
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/query.do",method=RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> query(HttpServletRequest request, HttpServletResponse response,String id){
		
		Map<String, Object> re=new HashMap<String, Object>();
		
		
		if(!StringUtils.isEmpty(id))
		{
			
		 User u=userService.query(id);
			
			re.put("status","1");
			re.put("message", "查询成功");
			re.put("data", u);
			
			return re;
		}
		
		re.put("status","0");
		re.put("message", "查询失败");
		re.put("data", "");
		
		return re;
	}
	
	public void showIp(HttpServletRequest request){
		
		try {
			System.out.println("本地ip:"+InetAddress.getLocalHost().getHostAddress());
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}  
		
		String path = request.getContextPath();  
	     String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/"; 
	     
	     System.out.println(path);
	     
	     System.out.println(basePath);
	}
	
	/**
	 * 上传图片
	 * @return
	 */
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
    @ResponseBody
    @Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces({MediaType.APPLICATION_JSON+";charset=UTF-8"})
	public Map<String,Object> uploadImage(HttpServletRequest request){
		
		Map<String,Object> map=new HashMap<String, Object>();
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		try {
			if (isMultipart){
				FileItemFactory factory = new DiskFileItemFactory();
				ServletFileUpload upload = new ServletFileUpload(factory);
				upload.setHeaderEncoding("utf-8"); // 支持中文文件名
				List<FileItem> list = new ArrayList<FileItem>();
				list = upload.parseRequest(request);
				if(null != list && list.size() > 0){
					for (FileItem item : list) {
						if (!item.isFormField()) {
							InputStream inputStream = (InputStream) item.getInputStream();
							
							String fileName = UUID.randomUUID().toString().replaceAll("\\-", "")+"."+item.getName().split("\\.")[1]; //文件名
					        
							// 获取真实路径，对应${项目目录}/uploads，当然，这个目录必须存在
							//String realPath=request.getServletContext().getRealPath("/uploads"); //这种写法，目录必须存在
							//String a=request.getServletContext().getRealPath("/uploads");
							//System.out.println("1111"+a);
							String realPath=System.getProperty("ssm.root")+"/uploads";//这种写法，如果目录不存在可以进行创建
							File file_=new File(realPath);
					         if(!file_.exists() && !file_.isDirectory()){
					        	 file_.mkdir();
					         }
							
							File file=new File(realPath, fileName);
							
							//把上传文件保存到指定的目录下
							item.write(file);
							inputStream.close();
							map.put("status", "1");
							map.put("url", fileName);
							
					        return map;
						}
					}
				}
			}
		} catch (Exception e) {
			throw new RuntimeException("文件异常");
		}
		map.put("status", "0");
		map.put("url", "");
		
		return map;
	}
	
	
	/**
	 * 分页
	 * @param data
	 * @return
	 */
	
	@RequestMapping(value = "/pageQuery.do",method=RequestMethod.POST)
	@ResponseBody
	public PageBean<User> pageQuery(@RequestBody String data,HttpServletRequest request){
		PageUser pa=JSON.parseObject(data, PageUser.class); //传递的参数
		PageBean<User> pageBean=new PageBean<User>();  //返回的结果
		if(pa!=null){
	        Integer pageSize = pa.getPageSize();  //每页的页数
	        Integer pageNum = (pa.getPageNum()-1)*pageSize;
	        pa.setPageNum(pageNum);
	        pa.setPageSize(pageSize);
			
			List<User> list=userService.getList(pa); //集合
			
			Integer n=userService.getListNum(pa);  //记录数
			
			pageBean.setList(list);
			pageBean.setTotalRecords(n);
			pageBean.setPageNum(pageNum/pageSize+1);
			pageBean.setPageSize(pageSize);
				
		}
		
		
		return pageBean;
	}
	
	/**
	 * 逻辑删除
	 * @param request
	 * @param response
	 * @param ids
	 * @return
	 */
	@RequestMapping(value = "/deleteUser.do",method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> deleteUser(HttpServletRequest request, HttpServletResponse response,String ids){
		List<String> li=new ArrayList<String>();
		
		Map<String, Object> re=new HashMap<String, Object>();
		
		if(!StringUtils.isEmpty(ids))
		{
			String []k=ids.split(",");
			
			for(int x=0;x<k.length;x++){
				li.add(k[x]);
			}
			userService.deleteUser(li);
			
			re.put("status","1");
			re.put("data", "删除成功");
			
			return re;
		}
		
		re.put("status","0");
		re.put("data", "删除失败");
		
		return re;
	}
	
	/**
	 * 导出用户数据
	 * @return
	 * @throws IOException 
	 * @throws ParseException 
	 */
	@RequestMapping(value="/exportUser.do",method=RequestMethod.GET)  
	@ResponseBody
	public void exportUser(HttpServletRequest request,HttpServletResponse response,
			String account,String username,String startTime,String endTime,
			String sex,String mobile) throws IOException, ParseException{
		
		SimpleDateFormat sd=new SimpleDateFormat("yyyy-MM-dd");
		
		PageUser pageUser=new PageUser();
		pageUser.setAccount(decode(account));
		pageUser.setUsername(decode(username));
		
		if(!StringUtils.isEmpty(startTime)){
		pageUser.setStartTime(sd.parse(startTime));
		}
		
		if(!StringUtils.isEmpty(endTime)){
			pageUser.setEndTime(sd.parse(endTime));
		}
		
		pageUser.setSex(decode(sex));
		pageUser.setMobile(mobile);
		
		 String title = "用户信息表";
		    response.setContentType("octets/stream;charset=utf-8");

		    response.addHeader("Content-Disposition", "attachment;filename=" + new String(title.getBytes("utf-8"), "ISO-8859-1") + ".xls");

		    OutputStream out = response.getOutputStream();

		    String[] header = { "用户名", "姓名", "性别", "手机号码", "出生日期","照片" };

		    ArrayList userlist = (ArrayList) userService.getAll(pageUser);
		
		    UserUtils.excelDemo(out, userlist, title, header);
		
	}
	
	public String decode(String str){
		String s="";
		try {
			s=URLDecoder.decode(URLDecoder.decode(str, "UTF-8"),"UTF-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return s;
	}
	
	
	
	@RequestMapping(value = "/ss")
	public String ss(HttpServletRequest request, HttpServletResponse response,String account,String password){
       
		UsernamePasswordToken token=new UsernamePasswordToken(account,password);
		
		Subject sub=SecurityUtils.getSubject();
		String msg="";
		try {  
	        sub.login(token);  
	        if (sub.isAuthenticated()) {  
	            return "redirect:/index/index.html";  
	        } else {  
	            return "/login/login.html";  
	        }  
	    } catch (IncorrectCredentialsException e) {  
	        msg = "登录密码错误. Password for account " + token.getPrincipal() + " was incorrect.";  
	        
	        System.out.println(msg);  
	    } catch (ExcessiveAttemptsException e) {  
	        msg = "登录失败次数过多";  
	          
	        System.out.println(msg);  
	    } catch (LockedAccountException e) {  
	        msg = "帐号已被锁定. The account for username " + token.getPrincipal() + " was locked.";  
	        
	        System.out.println(msg);  
	    } catch (DisabledAccountException e) {  
	        msg = "帐号已被禁用. The account for username " + token.getPrincipal() + " was disabled.";  
	       
	        System.out.println(msg);  
	    } catch (ExpiredCredentialsException e) {  
	        msg = "帐号已过期. the account for username " + token.getPrincipal() + "  was expired.";  
	       
	        System.out.println(msg);  
	    } catch (UnknownAccountException e) {  
	        msg = "帐号不存在. There is no user with username of " + token.getPrincipal();  
	        
	        System.out.println(msg);  
	    } catch (UnauthorizedException e) {  
	        msg = "您没有得到相应的授权！" + e.getMessage();  
	        
	        System.out.println(msg);  
	    }  
		
		return null;
	}
	
	File root =null;
	/**
	 * 创建临时文件路径
	 */
	@PostConstruct
	public void init() { 
		temp_dir = System.getProperty("java.io.tmpdir");
		File root = new File(temp_dir);
		if (root.exists()) {
			root.mkdirs();
		}
	}
	
	/**
	 * 随机生成临时文件夹名称
	 * @return
     */
	private static String makeUUID() {
		return UUID.randomUUID().toString().replaceAll("-", "").toUpperCase();
	}
	
	
	/**
	 * 批量上传 学生读者信息模板
     */
	@ResponseBody
	@RequestMapping(value="/batchUpload",method=RequestMethod.POST)
	public EbookResponse<String> batchUpload(HttpServletRequest request) {
		String uuid = makeUUID();
		EbookResponse<String> resp = new EbookResponse(uuid, null, "100", null);
		OutputStream os = null;
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		String unRarPath = "";
		String departmentid="";
		int pd = 0;
		Workbook wb = null;
		try {
			

			if (isMultipart){
				//FileItemFactory factory = new DiskFileItemFactory();
				 DiskFileItemFactory factory = new DiskFileItemFactory();
				 //设置工厂的缓冲区的大小，当上传的文件大小超过缓冲区的大小时，就会生成一个临时文件存放到指定的临时目录当中。
				 factory.setSizeThreshold(1024*100);//设置缓冲区的大小为100KB，如果不指定，那么缓冲区的大小默认是10KB
				//设置上传时生成的临时文件的保存目录
				 factory.setRepository(root);
				ServletFileUpload upload = new ServletFileUpload(factory);
				upload.setHeaderEncoding("utf-8"); // 支持中文文件名
				upload.setProgressListener(new ProgressListener(){
                      public void update(long pBytesRead, long pContentLength, int arg2) {
                          System.out.println("文件大小为：" + pContentLength + ",当前已处理：" + pBytesRead+"!!!上传进度="+(pBytesRead/pContentLength)*100+"%");
                      }
			     });
				List<FileItem> list = new ArrayList<FileItem>();
				InputStream fis = null;
				FileOutputStream fos = null;
				String rarPath = null;
				//生成本地文件
				try {
					list = upload.parseRequest(request);
					for (FileItem item : list) {
							try {
								fis = item.getInputStream();
							} catch (IOException e) {
							}
							String fileName = item.getName();
							String extension = FilenameUtils.getExtension(fileName);
							rarPath = temp_dir + File.separator + uuid + "." + extension;
							unRarPath = rarPath;
							fos = new FileOutputStream(rarPath);
							IOUtils.copy(fis, fos);
					}
				} catch (Exception e) {
					throw new RuntimeException("upload file to local error");
				} finally {
					IOUtils.closeQuietly(fis);
					IOUtils.closeQuietly(fos);
				}

				File excel = new File(rarPath);
				FileInputStream excelStream = null;
				try {
					excelStream = new FileInputStream(excel);
					if (FilenameUtils.isExtension(excel.getName(), "xlsx")) {
						resp.setStatus("2");
						wb = new XSSFWorkbook(excelStream);
					} else {
						resp.setStatus("1");
						wb = new HSSFWorkbook(excelStream);
					}
					Sheet sheet = wb.getSheetAt(0);
					System.out.println("单元格的行数:"+sheet.getPhysicalNumberOfRows());
					int rowNum = 0;
					List<Integer> deleteRows = new ArrayList<Integer>();
					syntax : for(Row row : sheet) 
					{
						
						if(valicateTitle(sheet, "1"))
						{
							resp.setCode("-101");
							pd =1;
							return resp;
						}
						
						long bookStart = System.currentTimeMillis(); //时间戳
						if (rowNum++ == 0) 
						{
							
							row.createCell(6).setCellValue(ReaderInforUtils.errorMsg);//第一行，第6列添加“错误信息”标题
							continue;
						}
						Map<String, Object> bookTargetMap = new HashMap<String, Object>();
						if (!readRowToMap(row,bookTargetMap, resp,departmentid,userService)) 
						{
							continue;
						}
						
						
						try {
							
							String st=JSON.toJSONString(bookTargetMap);
							User user=JSON.parseObject(st, User.class);
							
							int n=userService.add(user);
							
						} catch(Exception ex) {
							resp.setCode("-103");
							row.createCell(6).setCellValue(ReaderInforUtils.saveErrorMsg);
							continue syntax;
						}
						deleteRows.add(rowNum-1);
						long bookEnd = System.currentTimeMillis();
						System.out.println("one book uploaded time :"+(bookEnd-bookStart));
					}
					// 删除无错误信息行 倒着删除保证后面行的行号不变
					
					for (int num=deleteRows.size()-1; num >= 0; num--) {
						removeRow(sheet, deleteRows.get(num));
					}
					
				} catch (Exception e) {
					System.out.println("asdasdas");
				}finally {
					//写入文件
					String type = "2".equals(resp.getStatus())? ".xlsx" : ".xls";
					FileOutputStream errFos = new FileOutputStream(temp_dir + "/" + uuid + type);
					wb.write(errFos);
					if(pd == 1){
						FileUtils.deleteQuietly(new File(temp_dir + "/" + uuid + type));
					}
					IOUtils.closeQuietly(errFos);
					wb.close();
				}
			}
		} catch (Exception e) {
			if ("100".equals(resp.getCode())) {
				resp.setCode("-100");
			}
			System.out.println("222222222222");
		} finally {
			IOUtils.closeQuietly(os);
			int num =wb.getSheetAt(0).getLastRowNum();
			if(num==0){
				FileUtils.deleteQuietly(new File(unRarPath));
			}
		}
		return resp;
	}
	
	/**学生信息模板
	 * 读取列 并判断必填项，缺失必填项则返回false
	 * @param row
	 * @param bookMap
	 * @param bookTargetMap
	 * @param resp
     * @return
     */
	private boolean readRowToMap(Row row,Map<String, Object> bookTargetMap,EbookResponse<String> resp,String departmentid,IUserService userService) {
		 transType(row, 1);  //当account输入栏目为数值时，则把类型转成String类型
		 transType(row, 2);  //当name输入栏目为数值时，则把类型转成String类型
		
		String account = getCellStringValue(row, 1);  //第2列 账号 (必须)
		String username = getCellStringValue(row, 2);     //第3列 姓名 (必须)
		Date birth = null; //第4列 出生日期
		 String sex=getCellStringValue(row,4);   //第5列  性别  (必须)
		
		 if(row.getCell(5)!=null)
		 {
		 if(row.getCell(5).getCellType()==0)
		 {
			 row.getCell(5).setCellType(Cell.CELL_TYPE_STRING);
		 }
		 }
		 String mobile=getCellStringValue(row,5);      //第6列  手机号码（必须）
		
		
		//账号校验
		if (StringUtils.isEmpty(account)) {
			resp.setCode("-103");
			row.createCell(6).setCellValue(ReaderInforUtils.userNullMsg); //在第7列添加错误信息
			return false;
		}
		else
		{
			//账号是否存在校验
			int n=userService.queryExistAccount(account);
			System.out.println("account:"+account);
			System.out.println("n:"+n);
			if(n==1){
				resp.setCode("-103");
				row.createCell(6).setCellValue(ReaderInforUtils.userIsExist); //在第7列添加错误信息
				return false;
			}
			
			//账号格式校验
			if(!ReaderInforUtils.valUserName(account)){
				resp.setCode("-103");
				row.createCell(6).setCellValue(ReaderInforUtils.userNameFormatError); //在第7列添加错误信息
				return false;
			}
			//账号长度校验
			if(account.length()>20)
			{
				resp.setCode("-103");
				row.createCell(6).setCellValue("账号需控制在20字以内"); //在第7列添加错误信息
				return false;
			}
			
			
			
		}
		
		
		
		//姓名校验
		if (StringUtils.isEmpty(username) ) {
			resp.setCode("-103");
			row.createCell(6).setCellValue(ReaderInforUtils.fullNameNullMsg);
			return false;
		}else
		{
			//姓名格式校验
			if(!ReaderInforUtils.valUserName(username)){
				resp.setCode("-103");
				row.createCell(6).setCellValue(ReaderInforUtils.fullNameFormatError); //在第16列添加错误信息
				return false;
			}
			if(username.length()>20)
			{
				resp.setCode("-103");
				row.createCell(6).setCellValue("姓名需控制在20字以内"); //在第16列添加错误信息
				return false;
			}
			
		}
		
		//出生日期校验
		//如果日期栏为空，则日期为空,否则判断日期栏输入是否为正确日期，错误则提示
		if (row.getCell(3) == null || row.getCell(3).getCellType() == Cell.CELL_TYPE_BLANK) {
			birth=null;
		}
		else
		{
			try {
				//日期格式错误
				if(row.getCell(3).getCellType()==Cell.CELL_TYPE_STRING)
				{resp.setCode("-103");
				row.createCell(6).setCellValue("日期错误"); //在第16列添加错误信息
				return false;
				}
				else
				{
					birth = row.getCell(3).getDateCellValue();
				}
			} catch (Exception e) {
				System.out.println("格式转换错误，错误的行的下标为:" + row.getCell(3).getColumnIndex());
			}
		}
		
		
		
		
		//手机校验
		if(StringUtils.isEmpty(mobile))
		{
			resp.setCode("-103");
			row.createCell(6).setCellValue(ReaderInforUtils.telPhoneNullMsg);
	     return false;
		}
		
		
		if(!ReaderInforUtils.valTelPhone(mobile))
		{
			resp.setCode("-103");
			row.createCell(6).setCellValue(ReaderInforUtils.telPhoneErrorMsg);
	     return false;
		}
		
		bookTargetMap.put("account", account); //账号
		bookTargetMap.put("username", username); //姓名
		bookTargetMap.put("id",UUid.getUuid()); //主键
		bookTargetMap.put("sex",sex);  //性别
		bookTargetMap.put("birth", birth); //出生日期
		bookTargetMap.put("mobile", mobile); //手机号码
		bookTargetMap.put("userType", "TYPE_READER"); //读者类型
		String salt=UUid.getUuid();
		bookTargetMap.put("salt", salt); //盐值
		bookTargetMap.put("password", PasswordMD5.md5ForPassword("123456",salt)); //密码
		bookTargetMap.put("createTime",new Date()); //创建日期
		bookTargetMap.put("updateTime",new Date()); //更新日期
		
		
		return true;
	}
	
	
	
	/**
	 * 获取单元格字符串格式的值
	 * @param row
	 * @param position
     * @return
     */
	private String getCellStringValue(Row row, int position) {
		Cell cell = row.getCell(position);
		if (cell == null || cell.getCellType() == Cell.CELL_TYPE_BLANK) {
			return null;
		} else if (cell.getCellType() == Cell.CELL_TYPE_STRING) {
			return StringUtils.trim(cell.getStringCellValue());
		} else if (cell.getCellType() == Cell.CELL_TYPE_NUMERIC) {
			return StringUtils.trim(String.valueOf(cell.getNumericCellValue()));
		} else if (cell.getCellType() == Cell.CELL_TYPE_BOOLEAN) {
			return String.valueOf(cell.getBooleanCellValue());
		}
		return null;
	}

	/**
	 * 获取excel单元格中的日期信息
	 * 如果日期信息非法，返回null
	 * @param cell
	 * @return
     */
	private static final SimpleDateFormat DATE_FORMAT_SUPPORTED_SIMPLE = new SimpleDateFormat("yyyy-MM-dd");
	private Date getDateValue(Cell cell) {
		Date date = null;
		if (cell == null || cell.getCellType() == Cell.CELL_TYPE_BLANK) {
			return null;
		}
		try {
			date = cell.getDateCellValue();
		} catch(Exception e) {
			System.out.println("parse cell value to date error, cell index:" + cell.getColumnIndex());
		}
		return date;
	}
	

	/**
	 * 获取单元格的数字
	 * @param cell
	 * @return
     */
	private Double getDoubleValue(Cell cell) {
		Double result = null;
		if (cell==null || cell.getCellType() == Cell.CELL_TYPE_BLANK) {
			return null;
		}
		try {
			result = cell.getNumericCellValue();
		} catch(Exception e) {
			System.out.println("get cell double value error, cell index :" + cell.getColumnIndex());
		}
		return result;
	}
	
	/**
	 * 删除excel某一行
	 * @param sheet
	 * @param rowIndex
     */
	private void removeRow(Sheet sheet, int rowIndex) {
		int lastRowNum=sheet.getLastRowNum();
		if(rowIndex>=0&&rowIndex<lastRowNum)
			sheet.shiftRows(rowIndex+1,lastRowNum,-1);//将行号为rowIndex+1一直到行号为lastRowNum的单元格全部上移一行，以便删除rowIndex行
		if(rowIndex==lastRowNum){
			Row removingRow=sheet.getRow(rowIndex);
			if(removingRow!=null)
				sheet.removeRow(removingRow);
		}
	}
	

	/**
	 * 下载错误信息
	 * @param request
	 * @param response
     */
	@RequestMapping("/downloadErrorInfo")
	public void downloadImpInfo(HttpServletRequest request, HttpServletResponse response) {
		String type = request.getParameter("type");
		String uuid = request.getParameter("uuid");
		String path = temp_dir + "/" + uuid;
		String fileName = "error";
		OutputStream os = null;
		try {
			fileName = new String("错误信息".getBytes("GBK"), "ISO-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		if (StringUtils.equals(type, "1")) {
			response.setContentType("application/vnd.ms-excel");
			response.setHeader("Content-disposition","attachment; filename="+fileName+".xls");
			path += ".xls";
		} else {
			response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			response.setHeader("Content-disposition","attachment; filename="+fileName+".xlsx");
			path += ".xlsx";
		}
		File file = new File(path);
		FileInputStream fis = null;
		try {
			fis = new FileInputStream(file);
			os = response.getOutputStream();
			IOUtils.copy(fis, os);
		} catch (FileNotFoundException e) {
     throw new RuntimeException("error find info file");
		} catch (IOException e) {
			 throw new RuntimeException("error open response outputstream");
		} finally {
			IOUtils.closeQuietly(fis);
			IOUtils.closeQuietly(os);
			FileUtils.deleteQuietly(new File(path));
		}

	}
	
	/**
	 * 如果输入excel输入栏为数值类型，则转成String类型
	 */
	public void transType(Row row,int position)
	{
		 if(row.getCell(position)!=null)
		 {
			 if(row.getCell(position).getCellType()==0)
			 {
				 row.getCell(position).setCellType(Cell.CELL_TYPE_STRING);
			 }
		 }
		 
	}
	
	/**
	 * 判断3个模板的第一行的每个栏目是否符合
	 */
	public boolean valicateTitle(Sheet sheet,String type)
	{
		if("1".equals(type))  //学生读者信息
		{
			
			if( !getCellStringValue(sheet.getRow(0), 0).equals(ReaderInforUtils.num)
					||!getCellStringValue(sheet.getRow(0), 1).equals(ReaderInforUtils.username)
					||!getCellStringValue(sheet.getRow(0), 2).equals(ReaderInforUtils.fullName)
					||!getCellStringValue(sheet.getRow(0), 3).equals(ReaderInforUtils.birth)
					||!getCellStringValue(sheet.getRow(0), 4).equals(ReaderInforUtils.sex)
					/*||!getCellStringValue(sheet.getRow(0), 5).equals(ReaderInforUtils.telPhone)*/
					)
			{
				return true;
			}
			
		}
		
		
		return false;
	}
	
	/**
	 * 初始化添加页面 
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/initAdd.do")
	public ModelAndView initAdd(String id,ModelAndView mv){
	mv.setViewName("/user/user_add.jsp");
	User user=null;
	List<Role> userRole=null;
	try{
		if(StringUtils.isNotEmpty(id)){
			user=userService.query(id);
			userRole=userService.queryRoleByUserId(id);
			if(userRole!=null){
				user.setRoleList(userRole);
			}
	      }
	}catch(Exception e){
		System.out.println(e.getMessage());
	}
      mv.addObject("user", user);
      mv.addObject("roleList",getRoleList());
      mv.addObject("roleAll", JSON.toJSONString(getRoleList()));  //所有的角色
      
      String myRole="";
      if(user==null){
    	  myRole=JSON.toJSONString(new ArrayList<Role>());
      }else{
    	  myRole=JSON.toJSONString(user.getRoleList());
      }
      
      mv.addObject("myRole",myRole); //我的角色
		return mv;
	}
	
	//获取所有的角色信息
	public List<Role> getRoleList(){
		PageRole pr=new PageRole(Integer.MAX_VALUE, 0);
		List<Role> list=roleService.getList(pr);
		return list;
	}
	
	
	
	
	/*@RequestMapping("/aa.do")
	public String aa(String userId,String roleId){
		UserRole ur=new UserRole(userId,roleId);
		
		int n=0;
		try {
			n=userRoleService.insertSelective(ur);
			
		} catch (Exception e) {
			System.out.println(e.getMessage()+"信息");
		}
		
		System.out.println(n+"       -----------");
		
		return n+"";
	}
	
	
	@RequestMapping("/bb.do")
	@ResponseBody
	public String bb(String userIds,String roleIds){

		List<String> uIds=null;
		List<String> rIds=null;
		int un=0,rn=0;
		try{
		if(StringUtils.isNotEmpty(userIds)){
			uIds=Arrays.asList(userIds.split(","));
			un=userRoleService.deleteByUser(uIds);
		}
		if(StringUtils.isNotEmpty(roleIds)){
			rIds=Arrays.asList(roleIds.split(","));
			rn=userRoleService.deleteByRole(rIds);
		}
		
		}catch(Exception e){
			throw new RuntimeException(e.getMessage());
		}
		
	
		return "un="+un+"    "+"rn="+rn;
	}*/
	

}
