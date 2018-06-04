/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(function(){function t(){$(".js_storage").each(function(t,e){var a=$(this).attr("name"),o=$(this).val();localStorage.setItem(a,o)})}function e(t){$(".js_storage").each(function(t,e){var a=$(this).attr("name"),o=localStorage.getItem(a);return!o||void $(this).val(o)}),t&&t()}function a(){localStorage.clear()}function o(t){$(t).each(function(e,a){var o=t[e];localStorage.setItem(o,"")})}function n(t){return localStorage.getItem(t)}function r(t,e){localStorage.setItem(t,e)}function c(t){var e={};return $(t).each(function(a,o){var n=t[a],r=localStorage.getItem(n);return!r||void(e[n]=r)}),JSON.stringify(e)}return{set_storage:t,get_storage:e,clear_storage:a,clean_storage:o,getone_storage:n,setone_storage:r,get_data_all:c}});