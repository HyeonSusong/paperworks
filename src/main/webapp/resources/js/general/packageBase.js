var NotifyManager = (function(notifyManager) {
	var NotifyManager = (function(NotifyManager) {
		function NotifyManager(notifyListArea) {
			this.tableArea = notifyListArea;
			this.init();
//			this.addInterval();
			this.ccsCoundtionNotify();
		}
		return NotifyManager;
	})(NotifyManager || {});
	
	var pr = NotifyManager.prototype;
	
	
	pr.init = function() {
		this.addReporter();
	};
	
	pr.ccsCoundtionNotify = function(){
		var _this = this;
		$.ajax({
			async : true,
			type : 'POST',
			url : "/ccs/dashboard/CurrentConditionNotify.do",
			dataType : 'json',
			contentType : "application/json; charset=UTF-8",
			success : function(data){
				var result = data.result;
				if(result == true){
					_this.changeEmergency();
				}else if(result == false){
					_this.changeOrdinary();
				}
			},
			error : function(error){
				console.log(error);
			}
		});
	}
	
	pr.addReporter = function(){
		var listArea = this.tableArea;
		var _this = this;
		
	    var sock;
	    $(function(){
	    	sock = new SockJS('<c:url value="/socket"/>');		
	    	
	    	sock.onmessage = onMessage;
	    	sock.onclose = onClose;
	    	
	    	sock.onopen = function(evt){
	    		sock.send();
	    	}
    	});
	    
	    function onMessage(evt){
	    	var data = evt.data;
	    	var sessionId = null;
	    	var message = null;
	    	data = decodeURIComponent(data);
	    	var obj = JSON.parse(data);
	    	var notiCnt = obj.length;
			this.tableArea.text("");
			$.each(obj,function(idx,reporter){
				var type = reporter.REPORTER_TYPE;
				var uuid = "";
				if(type == 'P'){
					uuid = reporter.PERSON_UUID;
				}else if(type=='S'){
					uuid = reporter.SENSOR_UUID;
				}
				text += "<tr>"
				text += '<td>'+reporter.BUILDING_NAME;
				text += '</td>'+'<td>'+reporter.FLR+'층 </td>';
				text += '<td class="reporterUUID" spatialNo="'+reporter.SPATIAL_NO+'" uuid="'+uuid+'" state="'+reporter.STATE+'" notifyNo="'+reporter.NOTIFY_NO+'">';
				text += uuid+'</td></tr>';
			});
			listArea.append(text);
			_this.addTrigger();
	    }
	    function onClose(evt){
	    	listArea.text("연결끊김");
	    }
		
/*		$.ajax({
			async : true,
			type : 'POST',
			url : "/ccs/dashboard/requestNotifyList.do",
			dataType : 'json',
			contentType : "application/json; charset=UTF-8",
			success : function(data){
				var text = "";
				$.each(data,function(idx,reporter){
					var type = reporter.REPORTER_TYPE;
					var uuid = "";
					if(type == 'P'){
						uuid = reporter.PERSON_UUID;
					}else if(type=='S'){
						uuid = reporter.SENSOR_UUID;
					}
					text += "<tr>"
					text += '<td>'+reporter.BUILDING_NAME;
					text += '</td>'+'<td>'+reporter.FLR+'층 </td>';
					text += '<td class="reporterUUID" spatialNo="'+reporter.SPATIAL_NO+'" uuid="'+uuid+'" state="'+reporter.STATE+'" notifyNo="'+reporter.NOTIFY_NO+'">';
					text += uuid+'</td></tr>';
				});
				listArea.append(text);
				_this.addTrigger();
			},
			error : function(error){
				console.log(error);
			}
			
		});*/
	};
	
/*	pr.addInterval = function(){
		var _this = this;
		setInterval(function(){
			_this.init();
		},30000);
	}*/
	
	pr.addTrigger = function(){
		var _this = this;
		$(function(){
			$(".reporterUUID").on("click",function(){
				_this.calledEmergencyModal(this);
			});
		})
	};

	pr.calledEmergencyModal = function(reporter){
	    $('.status_table table tbody tr').click(function(){
	        $('.chanegeEmergency').addClass('on');
	    });
	    var _this = this;
	    $('#notify').on("click",function(){
	    	_this.chaserForReporter(reporter);
	    });
	    $('#c_confirm_btn').click(function(){
	    	_this.requestReporterNotifyStatusChange(reporter);
	    });

	    $('#p_confirm_btn').click(function(){

	    });
	    
	    $('.c_cancel_btn').click(function(){
	        $('.modal').removeClass('on');
	    });
	};
	
	pr.calledOrdinaryModal = function(reporter){
	    $('.status_table table tbody tr').click(function(){
	        $('.chanegeOrdinary').addClass('on');
	    });		
	};
	
	pr.chaserForReporter = function(reporter){
		var uuid = $(reporter).attr("uuid");
		var spatialNo = $(reporter).attr("spatialNo");
		location.href="/ccs/dashboard/dashBoard.do?uuid="+uuid+"&spatialNo="+spatialNo;
	};
	
	pr.requestReporterNotifyStatusChange = function(reporter){
		var _this = this;
		var uuid = $(reporter).attr("uuid");
		var spatialNo = $(reporter).attr("spatialNo");
		var notifyNo = $(reporter).attr("notifyNo");
		var state = $(reporter).attr("state");
		var obj = {
				"UUID" : uuid,
				"SPATIAL_NO" : spatialNo,
				"NOTIFY_NO" : notifyNo,
				"STATE" : state
		}
		$.ajax({
			async : true,
			type : 'POST',
			data : JSON.stringify(obj),
			url : "/ccs/dashboard/requestReporterNotifyStatusChange.do",
			dataType : 'json',
			contentType : "application/json; charset=UTF-8",
			success : function(data){
				_this.changeEmergency();
				_this.init();
				location.href="/ccs/dashboard/dashBoard.do?spatialNo="+spatialNo;
			},
			error : function(error){
				console.log(error);
			}			
		});
	};
	
	pr.requestOrdinaryState = function(reporter){
		
	}
	
	pr.changeEmergency = function(){
        $('.modal').removeClass('on');
        $('.status_circle').removeClass('s_peace');
        $('.status_circle').addClass('s_emergency');
        $('.status_circle').children('p:nth-child(1)').css('display','none');
        $('.status_circle').children('p:nth-child(2)').css('display','block');
		
	};
	
	pr.changeOrdinary = function(){
        $('.modal').removeClass('on');
        $('.status_circle').removeClass('s_emergency');
        $('.status_circle').addClass('s_peace');
        $('.status_circle').children('p:nth-child(1)').css('display','block');
        $('.status_circle').children('p:nth-child(2)').css('display','none');
		
	};
//	pr.reporter
		
		
	notifyManager.NotifyManager = NotifyManager;
})(io.dtonic.ccs || {});