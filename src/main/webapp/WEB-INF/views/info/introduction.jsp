<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>paperworks</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="/resources/css/general.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="/resources/css/base.css" />
    <script src="/resources/js/general/jquery-3.3.1.min.js"></script>
    <script src="/resources/js/general/general.js"></script>
</head>

<body>
	<c:import url="/WEB-INF/views/general/header.jsp"></c:import>
    <section>
        <div class="section_title">
            <h1>회사소개</h1>
        </div>
    	<div class="main_wrap">
    		<div class="main_photo_wrap">
    			<div class="main_photo">
    				
    			</div>
    		</div>
    		<div class="businessarea_warp">
    			<div class="ba_image_warp">
    				<div class="ba_image">
    					<img src="resouces/image/businessarea.png" alt="ba_image">
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

<c:import url="/WEB-INF/views/general/nav.jsp"></c:import>
<c:import url="/WEB-INF/views/general/footer.jsp"></c:import>
</body>
</html>