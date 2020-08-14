$(function(){
	var container = document.getElementById('map');
	var latitude = $('#latitude').val();
	var longitude = $('#longitude').val();
	if(latitude==0||latitude==''){
		latitude=33.450701;
	}
	if(longitude==0||longitude==''){
		longitude=126.570667;
	}
	var options = {
		center: new daum.maps.LatLng(latitude, longitude),
		level: 3
	};
	var map = new daum.maps.Map(container, options);
	
	var marker = new daum.maps.Marker({ 
	    // 지도 중심좌표에 마커를 생성합니다 
	    position: map.getCenter() 
	}); 
	// 지도에 마커를 표시합니다
	marker.setMap(map);
	
	daum.maps.event.addListener(map, 'click', function(mouseEvent) {        	    
	    // 클릭한 위도, 경도 정보를 가져옵니다 
	    var latlng = mouseEvent.latLng; 
	    
	    // 마커 위치를 클릭한 위치로 옮깁니다
	    marker.setPosition(latlng);
	    var latitude = latlng.getLat();
	    var longitude = latlng.getLng();
	    $('#latitude').val(latitude);  //위도
	    $('#longitude').val(longitude); //경도
	    var addr = latitude+' / '+longitude;
	    $('#building_address').val(addr);
	});                
});