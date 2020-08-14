function initMap(){
$(function(){

	var container = document.getElementById('map');
	var latitude = parseFloat($('#latitude').val());
	var longitude = parseFloat($('#longitude').val());
	if(latitude==0||latitude==''){
		latitude=parseFloat(37.49888138935761);
	}
	if(longitude==0||longitude==''){
		longitude=parseFloat(127.0335192632618);
	}
	var bulidingPosition = {lat:latitude, lng: longitude};
		 
    var map = new google.maps.Map(document.getElementById('map'), {
		center: bulidingPosition, zoom: 14
    });	
    var marker = new google.maps.Marker({
        position: bulidingPosition,
        map: map
    });
    
    google.maps.event.addListener(map, 'click', function(event) {
    	   placeMarker(event.latLng);
    	});
	// 지도에 마커를 표시합니다
	function placeMarker(location) {
       	
		if(marker != null){
			marker.setMap(null);
		}
	      
	    marker = new google.maps.Marker({
	        position: location, 
	        map: map
	    });
	    var latitude = location.lat();
	    var longitude = location.lng();
	    $('#latitude').val(latitude);  //위도
	    $('#longitude').val(longitude); //경도
	    var addr = latitude+' / '+longitude;
	    $('#building_address').val(addr);
	    
	   var url = ' https://maps.googleapis.com/maps/api/geocode/json?';
	   		url +='latlng='+latitude+','+longitude;
	   		url +='&key=AIzaSyDrUcATVCIhgvw0ht2MmSm258Dg_YIJL7Q&language=ko';
	   		url +='&result_type=street_address '
		$.post( url, function( data ) {
			var address = data.results[0].formatted_address;
			$("#map_address").val(address);
			});
	}
	             
});
}