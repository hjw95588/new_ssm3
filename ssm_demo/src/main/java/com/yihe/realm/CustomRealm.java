package com.yihe.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import com.yihe.bean.User;
import com.yihe.service.IUserService;
import com.yihe.service.Impl.UserServiceImpl;

public class CustomRealm extends AuthorizingRealm{
	// 设置realm的名称
		@Override
		public void setName(String name) {
			super.setName("customRealm");
		}

		@Autowired
		private IUserService userService;
		
		//用于认证
		@Override
		protected AuthenticationInfo doGetAuthenticationInfo(
				AuthenticationToken token) throws AuthenticationException {
			
			// token是用户输入的用户名和密码 
			// 第一步从token中取出用户名
			String account=token.getPrincipal().toString();
			
			//第二步拿着用户名查询是否存在当前用户
			User user=null;
			try{
				user=userService.searchAccount(account);
			}catch(Exception e){
				System.out.println(e.getMessage()+"错误信息");
			}
			
			if(user==null){
				return null;
			}
			
			//得到盐值,密码
			String salt=user.getSalt();
			String password=user.getPassword();
			
			SimpleAuthenticationInfo info=new SimpleAuthenticationInfo(user, password,
					ByteSource.Util.bytes(salt), this.getName());
			
			return info;
		}
		

		// 用于授权
		@Override
		protected AuthorizationInfo doGetAuthorizationInfo(
				PrincipalCollection principals) {
			
			User  u=(User) principals.getPrimaryPrincipal();
			
			System.out.println(u.getAccount());
			System.out.println(111);
			return null;
		}



		

		

		

}
