package ssm_demo;

public class other {
	/*@RequestMapping(value="/queryAll.do",method=RequestMethod.GET)  
	@ResponseBody
	public Map<String,Object> queryExitAccount( String account,HttpServletRequest request){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		String path=request.getServletContext().getRealPath("/");  //获取根路径；
		
		String b=request.getServletContext().getRealPath("/");
		
		System.out.println(path);
		
		System.out.println(request.getRequestURI());
		
		System.out.println(request.getContextPath());
		System.out.println(request.getServletPath());
		
		
		return map;
	}*/
	
	
	/*@RequestMapping(value="/test.do",method=RequestMethod.GET)  
	@ResponseBody
	public Map<String,Object> test( String account,HttpServletRequest request){
		
		Map<String,Object> map=new HashMap<String, Object>();
		
		
		System.out.println(System.getProperty("ssm.root"));
		System.out.println(System.getProperties());
		
		Configuration config = freeMarkerConfigurer.getConfiguration();
		System.out.println(config);
		
		
		return map;
	}*/
}
