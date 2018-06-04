require(['../require-config'], function() {
    require(["zepto", "yanzheng", "add_bounced", "ajax_rule", "localstorage"], function($, yanzheng, add_bounced, ajax_rule, localstorage) {
        $(function() {
            var business_if;
            $(document).ready(function() {
                //判断是小微商户还是企业商户
                var business = yanzheng.get_hash('business');
                if (business == 'small') {
                    $('.js_lisencepic').parents('dl').hide();
                    business_if = 'business=small';
                } else {
                    $('.js_lisencepic').parents('dl').show();
                    business_if = '';
                }
            });
            //点击一级分类
            $('.js_one li').live('click', function() {
                var li_val = $(this).text();
                //赋值
                $('.js_gradetwo').removeClass('span_hide').addClass('span_show').find('i.i_normal').text(li_val);
                //赋值--二级分类
                var two_grade = '<li>食品零售</li><li>食品零售</li><li>食品零售</li><li>食品零售</li><li>食品零售</li><li>食品零售</li><li>食品零售</li><li>食品零售</li>';
                $('.js_two').html(two_grade);
                //显示
                $('.js_one').addClass('ul_hide');
                $('.js_two').removeClass('ul_hide');
            });
            //点击二级分类
            $('.js_two li').live('click', function() {
                var li_val = $(this).text();
                //赋值
                $('.js_gradethree').removeClass('span_hide').addClass('span_show').find('i.i_normal').text(li_val);
                //赋值--二级分类
                var three_grade = '<li>休闲娱乐</li><li>休闲娱乐</li><li>休闲娱乐</li><li>休闲娱乐</li><li>休闲娱乐</li><li>休闲娱乐</li><li>休闲娱乐</li><li>休闲娱乐</li>';
                $('.js_three').html(three_grade);
                //显示
                $('.js_two').addClass('ul_hide');
                $('.js_three').removeClass('ul_hide');
            });
            //点击三级分类
            $('.js_three li').live('click', function() {
                var li_val = $(this).text();
                //存储并跳转
                localStorage.setItem('shoptype_id', li_val);
                location.href = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/shopinfo.html?' + business_if;
            });
            //添加弹框
            add_bounced.add_bounced();
            //关闭弹框
            add_bounced.close_tip();
        });
    });
});
