/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(["zepto"],function($){function o(o){$(window).on("scroll",function(e){var i=document.documentElement.scrollTop||document.body.scrollTop;i<r.body_height-a?clearTimeout(r.timer_rt):(e.stopPropagation(),r.scroll_if&&($(".load").show(),r.scroll_if=!1,r.timer_rt=window.setTimeout(o,2e3)),r.nomor_show&&(t(),window.setTimeout(n,2e3),r.nomor_show=!1),console.log("scroll:scroll_if=="+r.scroll_if),console.log("scroll:nomor_show=="+r.nomor_show))})}function e(o,e){$(o).append(r.load_img),$(o).append(r.nomore_word),e?$("#nomoredata").text(e):$("#nomoredata").text("没有更多数据了")}function n(){$("#nomoredata").animate({opacity:0},500,"ease-out")}function t(){$("#nomoredata").animate({opacity:.7},500,"ease-out")}var r={timer_rt:null,scroll_if:!1,nomor_show:!1,body_height:$("body").height(),load_img:'<div class="load"></div>',nomore_word:'<div class="nomoredata" id="nomoredata"></div>'},a=window.innerHeight;return{scroll_more:o,nomoredata_hide:n,nomoredata_show:t,scroll_data:r,add_load_img:e}});