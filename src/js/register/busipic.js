require(['../require-config'], function() {
    require(["zepto", "yanzheng", "add_bounced", "ajax_rule", "localstorage", "upload"], function($, yanzheng, add_bounced, ajax_rule, localstorage, upload) {
        $(function() {
            var business_if;
            $(document).ready(function() {
                //判断是小微商户还是企业商户
                var business = yanzheng.get_hash('business');
                if (business == 'small') {
                    business_if = 'business=small';
                } else {
                    business_if = '';
                } 
            });
            //给图片赋值
            $('.js_storage_img').each(function(i, item) {
                var key = $(this).attr('data-mame');
                var key_val = localStorage.getItem(key);
                if (!key_val) {
                    return true;
                }
                $(this).attr('src', key_val);
            });
            //上传身份证正面
            $('#js_cardface').on('change', function() {
                upload.previewImage(this, '0', 'cardface');
            });
            //上传身份证反面
            $('#js_cardback').on('change', function() {
                upload.previewImage(this, '1', 'cardback');
            });
            //上传身份证手持
            $('#js_cardhand').on('change', function() {
                upload.previewImage(this, '2', 'cardhand');
            });
            //点击下一步
            $('.js_busypic').on('click', function() {
                yanzheng.pic_if('.js_cardface_pic');
                yanzheng.pic_if('.js_cardback_pic');
                yanzheng.pic_if('.js_cardhand_pic');
                var error_len = $('.error_data').length;
                if (error_len > 0) {
                    return false;
                }
                //存储数据并进入下一步
                localstorage.set_storage();
                location.href = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/businfo.html?' + business_if;
            });
            //添加弹框
            add_bounced.add_bounced();
            //关闭弹框
            add_bounced.close_tip();
        });
    });
});
