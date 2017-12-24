<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>swiper 轮播图</title>
<link rel="stylesheet" type="text/css" href="../css/swiper-3.4.2.min.css" />
<style type="text/css">
.swiper-container {
  width: 100%;
  height: 300px;
} 
</style>
</head>
<body>
   <div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide" ><a><img src="../images/1.png"/></a></div>
    <div class="swiper-slide"><a><img src="../images/2.png"/></a></div>
    <div class="swiper-slide"><a><img src="../images/3.png"/></a></div>
    <div class="swiper-slide"><a><img src="../images/4.png"/></a></div>
  </div>
  
  <!-- 如果需要分页器 -->
	 <div class="swiper-pagination"></div>
  
   <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
<script type="text/javascript" src="../js/swipe/swiper-3.4.2.min.js"></script>
<script>
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',//水平滑动
        loop: true,
        autoplay: 3000,//可选选项，自动滑动
        autoplayDisableOnInteraction:false,//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'

    })
</script> 
</body>

</html>