<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<link rel="stylesheet" type="text/css" media="screen" href="/resources/css/support/customersupport.css" />
<script src="/resources/js/main/main.js"></script>
	<c:import url="/WEB-INF/views/general/header.jsp"></c:import>
<body>
    <div class="container">
		<c:import url="/WEB-INF/views/general/nav.jsp"></c:import>
    	<div class="main_wrap">
   	        <div class="section_title">
    	        <h1>고객문의</h1>
 	       	</div>
    		<div class="support_wrap">
    			<div class="title_wrap">
    				<p>제목</p>
    				<input type="text" name="mail_title" class="title" value="" placeholder="제목을 입력해주세요">
    			</div>
    			<div class="text_area_wrap">
    				<textarea rows="70" cols="90"></textarea>
    			</div>
    			<div class="mail_btn_wrap">
    				<div class="mail_btn">
    					<p>메일전송</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
<c:import url="/WEB-INF/views/general/footer.jsp"></c:import>
</body>
</html>