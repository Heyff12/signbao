/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
require(["../require-config"],function(){require(["zepto","yanzheng","localstorage"],function($,a,n){$(function(){var e,r=["username","referphone","shopname","shoptype_id","address","landline","shopheader","shopin","ownername","idnumber","cardface","cardback","cardhand","idcard_startime","idcard_endtime","bankuser","bankaccount","bankmobile","banktype","banktype_val","bankprovince","bankprovince_val","bankcity","bankcity_val","bankname"];$(document).ready(function(){var i=a.get_hash("business");"small"==i?($(".js_gradetwo").find("i.i_normal").text("小微商户"),e="business=small"):($(".js_gradetwo").find("i.i_normal").text("企业/个体商户"),e="");var s=JSON.parse(n.get_data_all(r));$(r).each(function(a,n){var e=r[a],i=s[e],t='<li><span class="t">'+e+'</span><span class="b">'+i+"</span></li>";$(".section_endlist ul").append(t)})}),$(".js_last").on("click",function(){var a=$(".error_data").length;if(a>0)return!1})})})});