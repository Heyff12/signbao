/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
require(["../require-config"],function(){require(["zepto","add_bounced"],function($,s){$(function(){function e(){var s="5",e="6",a="2",t="23";$(".js_new_person").text(a),$(".js_all_person").text(t),$(".js_drafts").text(s),$(".js_message").text(e),s-0>0?$(".js_drafts").parents("dl").addClass("has_see"):$(".js_drafts").parents("dl").removeClass("has_see"),e-0>0?$(".js_message").parents("dl").addClass("has_see"):$(".js_message").parents("dl").removeClass("has_see")}$(document).ready(function(){e()}),$(".js_goto_smallbusy").on("click",function(){var s="file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/regin.html?business=small";location.href=s}),$(".js_goto_busy").on("click",function(){var s="file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/regin.html";location.href=s}),s.add_bounced(),s.close_tip()})})});