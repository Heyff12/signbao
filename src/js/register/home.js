require(['../require-config'], function() {
    require(["zepto", "add_bounced", ], function($, add_bounced) {
        $(function() {
            //注册首页----------------------------------------------------------------------------------------------------------------------------------------------------
            $(document).ready(function() {
                //获取草稿箱和消息中心数据
                get_data();                
            });
            //跳到小微商户
            $('.js_goto_smallbusy').on('click', function() {
                var url_val = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/regin.html?business=small';
                location.href = url_val;
            });
            //跳到个体、企业商户
            $('.js_goto_busy').on('click', function() {
                var url_val = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/regin.html';
                location.href = url_val;
            });
            //获取草稿箱和消息中心数据
            function get_data(){
                var drafts='5',message='6',new_person='2',all_person='23';
                $('.js_new_person').text(new_person);
                $('.js_all_person').text(all_person);
                $('.js_drafts').text(drafts);
                $('.js_message').text(message);
                if(drafts-0>0){
                    $('.js_drafts').parents('dl').addClass('has_see');
                }else{
                    $('.js_drafts').parents('dl').removeClass('has_see');
                }
                if(message-0>0){
                    $('.js_message').parents('dl').addClass('has_see');
                }else{
                    $('.js_message').parents('dl').removeClass('has_see');
                }
            }
            //添加弹框
            add_bounced.add_bounced();
            //关闭弹框
            add_bounced.close_tip();
        })
    })
})
