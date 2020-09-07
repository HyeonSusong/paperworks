<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<link rel="stylesheet" type="text/css" media="screen" href="/css/main/main.css" />
<script src="/resources/js/main/main.js"></script>
	<c:import url="/WEB-INF/views/general/header.jsp"></c:import>
<body>
    <div class="container">
		<c:import url="/WEB-INF/views/general/nav.jsp"></c:import>
    	<div class="main_wrap">
   	        <div >
    	        <h1></h1>
 	       	</div>
    		<div class="main_photo_wrap">
    			<div class="main_photo">
    				<img src="/resources/images/general/main.jpg" alt="main_image">
    			</div>
    		</div>
    		<div class="businessarea_warp">
    			<div class="ba_image_warp">
    				<div class="ba_image">
    					<img src="/resources/images/businessarea.png" alt="ba_image">
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
<c:import url="/WEB-INF/views/general/footer.jsp"></c:import>
</body>
</html>