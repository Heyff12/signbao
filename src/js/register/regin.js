require(['../require-config'], function() {
    require(["zepto", "yanzheng", "add_bounced", "ajax_rule", "localstorage"], function($, yanzheng, add_bounced, ajax_rule, localstorage) {
        $(function() {
            $(document).ready(function() {
                //获取数据
                localstorage.get_storage();
            });
            //判断是小微商户还是企业商户
            var business = yanzheng.get_hash('business');
            var business_if;
            if (business == 'small') {
                business_if='business=small';
            } else {
                business_if='';
            }
            //点击下一步
            $('.js_first').on('click', function() {
                yanzheng.tel_test('.js_phone');
                yanzheng.code_test('.js_code');
                var refer_tel = $('.js_refer_tel').val();
                if (refer_tel.length > 0) {
                    yanzheng.tel_test('.js_refer_tel');
                } else {
                    $('.js_refer_tel').parents('dl').removeClass('error_data');
                }
                var error_len = $('.error_data').length;
                if (error_len > 0) {
                    return false;
                }
                //存储数据并进入下一步
                localstorage.set_storage();
                location.href = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/shopinfo.html?'+business_if;
            });
            //获取验证码
            $('#get_identyCode').on('click', function() {
                //验证
                yanzheng.tel_test('.js_phone');
                if ($('.js_phone').parents('dl').hasClass('error_data')) {
                    return false;
                } else {
                    //获取值
                    var mobile_val = $('.js_phone').val();
                    var url = '/util/v1/smscode/';
                    var data = {
                        'mobile': mobile_val,
                        'type': 'signup',
                        'verify_num': 1
                    };
                    //获取验证码--todo--show
                    //ajax_rule.ajax_rule(url, 'POST', 'json', data, '.zheceng', get_code);
                    get_code(); //测试倒计时
                }
            });
            //倒计时不可点击
            $('.js_show_entycode').on('click', function() {
                $('.alert_con').show();
                $('.alert_con .alert_con_br').html("一分钟后再次获取！");
                $('.zheceng').show();
            });
            //获取验证码
            function get_code(return_data) {
                $('.js_get_entycode').hide();
                $('.js_show_entycode').show();
                timedCount();
            }
            //添加弹框
            add_bounced.add_bounced();
            //关闭弹框
            add_bounced.close_tip();
        });
    });
});
//倒计时60s
function timedCount() {
    var time0 = $('.js_show_entycode i').text();
    $('.js_show_entycode i').text(time0 - 1);
    t = setTimeout("timedCount()", 1000);
    if (time0 == 0) {
        clearTimeout(t);
        $('.js_get_entycode').show();
        $('.js_show_entycode i').text(61);
        $('.js_show_entycode').hide();
    }
}
