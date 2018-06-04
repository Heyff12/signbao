/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(["zepto"],function($){function e(){$("body").append(n),$("body").append(s),$("body").append(a)}function c(e){var c=$(e).height(),n=c/2-20;$(e).css("marginTop",-n+"px")}var n='<div id="loading"></div>',a='<div class="zheceng"></div><div class="zheceng1"></div><div class="zheceng2"></div>',s='<div class="alert_con" id="alert_alert"><div class="alert_con_t orange">提示<span class="pass_close js_alert_con_close">×</span></div><div class="alert_con_b"><div class="alert_con_br"></div><div class="clearfix"></div><span class="alert_con_close js_alert_con_close">确定</span></div></div>',i=function(){$(".js_alert_con_close").on("click",function(){$(".alert_con").hide(),$(".zheceng").hide(),$(".zheceng1").hide(),$(".zheceng2").hide()})};return{add_bounced:e,close_tip:i,alert_top:c}});