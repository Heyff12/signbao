/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(function(){function t(t){var n=t.substr(0,10),u=n.split("-"),s=u[0],e=r(u[1]),i=r(u[2]),c=s+"."+e+"."+i;return c}function n(t,n){var u=t.substr(0,10),s=n.substr(0,10),e=u.split("-"),i=s.split("-"),c=e[0],f=i[0],a=r(i[1]),b=r(i[2]);return c!=f?f+"."+a+"."+b:a+"."+b}function r(t){return t<10?t.substr(-1):t}return{time_change:t,time_change2:n}});