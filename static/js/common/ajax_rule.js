/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(function(){function e(e,r,t,a,l,o){$.ajax({url:e,type:r,dataType:t,data:a,beforeSend:function(){$("#loading").show(),$(l).show()},success:function(e){if("0000"!=e.respcd)$("#alert_alert").show(),$(l).show(),e.respmsg?$("#alert_alert .alert_con_br").html(e.respmsg):$("#alert_alert .alert_con_br").html(e.resperr);else{var r=e.data;o(r),$(l).hide(),$(".load").hide()}},error:function(e){$("#alert_alert").show(),$(l).show(),$("#alert_alert .alert_con_br").html("网络超时!")},complete:function(){$("#loading").hide()}})}return{ajax_rule:e}});