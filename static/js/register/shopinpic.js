/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
require(["../require-config"],function(){require(["zepto","yanzheng","add_bounced","ajax_rule","localstorage","upload"],function($,e,o,a,i,n){$(function(){var a;$(document).ready(function(){var o=e.get_hash("business");a="small"==o?"business=small":""}),$(".js_storage_img").each(function(e,o){var a=$(this).attr("data-mame"),i=localStorage.getItem(a);return!i||void $(this).attr("src",i)}),$("#js_shopheader").on("change",function(){n.previewImage(this,"0","shopheader")}),$("#js_shopin").on("change",function(){n.previewImage(this,"1","shopin")}),$(".js_shoppic").on("click",function(){e.pic_if(".js_shophead_pic"),e.pic_if(".js_shopin_pic");var o=$(".error_data").length;return!(o>0)&&(i.set_storage(),void(location.href="file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/shopinfo.html?"+a))}),o.add_bounced(),o.close_tip()})})});