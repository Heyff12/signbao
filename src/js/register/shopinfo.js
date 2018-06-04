require(['../require-config'], function() {
    require(["zepto", "yanzheng", "add_bounced", "ajax_rule", "localstorage"], function($, yanzheng, add_bounced, ajax_rule, localstorage) {
        $(function() {
            //判断是小微商户还是企业商户
            var business_if;
            var business = yanzheng.get_hash('business');
            if (business == 'small') {
                $('.js_lisencepic').parents('dl').hide();
                business_if = 'business=small';
            } else {
                $('.js_lisencepic').parents('dl').show();
                business_if = '';
            }
            $(document).ready(function() {
                //获取数据
                localstorage.get_storage(pic_if);
            });
            //跳到经营类型
            $('.js_go_classify').on('click', function() {
                var url_val = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/classify.html?' + business_if;
                location.href = url_val;
            });
            //跳到店铺地址
            $('.js_go_address').on('click', function() {
                var url_val = '';
                location.href = url_val;
            });
            //跳到店铺实拍图片
            $('.js_go_shopinpic').on('click', function() {
                var url_val = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/shopinpic.html?' + business_if;
                location.href = url_val;
            });
            //跳到营业执照实拍图片
            $('.js_go_companypic').on('click', function() {
                var url_val = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/companypic.html?' + business_if;
                location.href = url_val;
            });
            //点击下一步
            $('.js_second').on('click', function() {
                yanzheng.name_test('.js_shopname', 0, 60);
                yanzheng.name_test('.js_shoptype_id', 0, 60);
                yanzheng.name_test('.js_address', 0, 60);
                yanzheng.name_test('.js_shoppic', 0, 60);
                yanzheng.tel_test('.js_shoptel');
                yanzheng.name_test('.js_address_p', 0, 60);
                if (business == 'small') {
                    $('.js_lisencepic').parents('dl').removeClass('error_data');
                } else {
                    yanzheng.name_test('.js_lisencepic', 0, 60);
                }                
                var error_len = $('.error_data').length;
                if (error_len > 0) {
                    return false;
                }
                //存储数据并进入下一步
                localstorage.set_storage();
                location.href = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/businfo.html';
            });
            //判断图片是否存在
            function pic_if() {
                var shophead = localstorage.getone_storage('shopheader');
                var shopin = localstorage.getone_storage('shopin');
                var lisencepic = localstorage.getone_storage('lisencepic');
                if (shophead && shopin) {
                    $('.js_go_shopinpic').addClass('success');
                    $('.js_shoppic').val('已上传');
                } else {
                    $('.js_go_shopinpic').removeClass('success');
                    $('.js_shoppic').val('');
                }
                if (business == 'small') {
                    if (lisencepic) {
                        $('.js_go_companypic').addClass('success');
                        $('.js_lisencepic').val('已上传');
                    } else {
                        $('.js_go_companypic').removeClass('success');
                        $('.js_lisencepic').val('');
                    }
                }
                goto_data('.js_shoptype_id');
                goto_data('.js_address_p');
            }
            //判断跳转页面的数据是否存在
            function goto_data(id){
                var id_val=$(id).val();
                if(id_val){
                    $(id).parents('dl').addClass('success');
                }
            }
            //添加弹框
            add_bounced.add_bounced();
            //关闭弹框
            add_bounced.close_tip();
        });
    });
});
