/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(function(){function t(t){for(var e=[],n=t-100;n<=t+100;n++)e.push({id:n+"",value:n+"年"});return e}function e(){for(var t=[],e=1;e<=12;e++)e<10&&(e="0"+e),t.push({id:e+"",value:e+"月"});return t}function n(t){for(var e=[],n=1;n<=t;n++)n<10&&(n="0"+n),e.push({id:n+"",value:n+"日"});return e}var u=new Date,o=u.getFullYear(),r=u.getMonth()+1,i=u.getDate(),a=function(e){setTimeout(function(){e(t(o))},0)},f=function(t,n){setTimeout(function(){n(e())},0)},s=function(t,e,u){"0"==e.substr(0,1)&&(e=e.substr(1,1)),setTimeout(function(){if(/^1|3|5|7|8|10|12$/.test(e))u(n(31));else if(/^4|6|9|11$/.test(e))u(n(30));else{if(!/^2$/.test(e))throw new Error("month is illegal");u(t%4===0&&t%100!==0||t%400===0?n(29):n(28))}},0)};return{yearData:a,monthData:f,dateData:s,nowYear:o,nowMonth:r,nowDate:i}});