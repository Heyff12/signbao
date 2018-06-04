require(['../require-config'], function() {
    require(["zepto", "yanzheng", "localstorage"], function($, yanzheng, localstorage) {
        $(function() {
            var business_if;
            var data_set = ['username', 'referphone', 'shopname', 'shoptype_id', 'address', 'landline', 'shopheader', 'shopin', 'ownername', 'idnumber', 'cardface', 'cardback', 'cardhand', 'idcard_startime', 'idcard_endtime', 'bankuser', 'bankaccount', 'bankmobile', 'banktype', 'banktype_val', 'bankprovince', 'bankprovince_val', 'bankcity', 'bankcity_val', 'bankname'];

            $(document).ready(function() {
                //判断是小微商户还是企业商户
                var business = yanzheng.get_hash('business');
                if (business == 'small') {
                    $('.js_gradetwo').find('i.i_normal').text('小微商户');
                    business_if = 'business=small';
                } else {
                    $('.js_gradetwo').find('i.i_normal').text('企业/个体商户');
                    business_if = '';
                }

                //获取数据
                var data_end = JSON.parse(localstorage.get_data_all(data_set));
                //console.log(data_end);
                //console.log(data_end['username']);
                // for(var i=0;i<data_set.length;i++){
                //     var key=data_set[i];
                //     var key_val=data_end[key];
                //     var li_val='<li><span class="t">'+key+'</span><span class="b">'+key_val+'</span></li>';
                //     $('.section_endlist ul').append(li_val);
                // }
                $(data_set).each(function(i, item) {
                    var key = data_set[i];
                    var key_val = data_end[key];
                    var li_val = '<li><span class="t">' + key + '</span><span class="b">' + key_val + '</span></li>';
                    $('.section_endlist ul').append(li_val);
                });
            });
            //点击下一步
            $('.js_last').on('click', function() {
                var error_len = $('.error_data').length;
                if (error_len > 0) {
                    return false;
                }
                //清空数据
                //localstorage.clean_storage(data_set);
            });
        });
    });
});
