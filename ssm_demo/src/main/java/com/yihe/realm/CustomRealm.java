package com.yihe.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import com.yihe.bean.User;

public class CustomRealm extends AuthorizingRealm{
	// 设置realm的名称
		@Override
		public void setName(String name) {
			super.setName("customRealm");
		}

		// 用于认证
		@Override
		protected AuthenticationInfo doGetAuthenticationInfo(
				AuthenticationToken token) throws AuthenticationException {
			 //token是用户输入的
			// 第一步从token中取出身份信息
			String userCode = (String) token.getPrincipal();

			
			
			// 模拟从数据库查询到密码
			String password = "111111";

			// 如果查询到返回认证信息AuthenticationInfo

			SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(
					userCode, password, this.getName());

			return simpleAuthenticationInfo;
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
