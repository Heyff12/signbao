/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
require(["../require-config"],function(){require(["zepto","yanzheng","add_bounced","ajax_rule","localstorage","upload"],function($,a,e,c,i,n){$(function(){var c;$(document).ready(function(){var e=a.get_hash("business");c="small"==e?"business=small":""}),$(".js_storage_img").each(function(a,e){var c=$(this).attr("data-mame"),i=localStorage.getItem(c);return!i||void $(this).attr("src",i)}),$("#js_cardface").on("change",function(){n.previewImage(this,"0","cardface")}),$("#js_cardback").on("change",function(){n.previewImage(this,"1","cardback")}),$("#js_cardhand").on("change",function(){n.previewImage(this,"2","cardhand")}),$(".js_busypic").on("click",function(){a.pic_if(".js_cardface_pic"),a.pic_if(".js_cardback_pic"),a.pic_if(".js_cardhand_pic");var e=$(".error_data").length;return!(e>0)&&(i.set_storage(),void(location.href="file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/businfo.html?"+c))}),e.add_bounced(),e.close_tip()})})});