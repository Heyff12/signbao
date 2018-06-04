require(['../require-config'], function() {
    require(["zepto", "yanzheng", "add_bounced", "ajax_rule", "localstorage", "iosselect", "city_data", "date_get"], function($, yanzheng, add_bounced, ajax_rule, localstorage, iosselect, city_data, date_get) {
        $(function() {
            var pro_data_val = city_data.iosProvinces;
            var city_data_val = city_data.iosCitys;
            var data_banktype = [
                { 'id': '1', 'value': '对公账户' },
                { 'id': '2', 'value': '对私账户' },
            ];
            //判断是小微商户还是企业商户
            var business_if;
            var business = yanzheng.get_hash('business');
            if (business == 'small') {
                $('.js_banktype').parents('dl').hide();
                business_if = 'business=small';
            } else {
                $('.js_banktype').parents('dl').show();
                business_if = '';
            }
            $(document).ready(function() {                
                //获取数据
                localstorage.get_storage(get_data_show);
            });
            //跳到身份证正反面
            $('.js_go_idcard').on('click', function() {
                var url_val = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/busipic.html';
                location.href = url_val;
            });
            //跳到开户行页面
            $('.js_go_bankname').on('click', function() {
                var url_val = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/bankname.html';
                location.href = url_val;
            });
            //点击账户类型选择
            $('.js_open_banktype').on('click', function() {
                var getBankDom = document.querySelector('#js_banktype');
                var getBankDom_val = document.querySelector('#js_banktype_val');
                var showBankDom = document.querySelector('.js_banktype');
                var bankId = showBankDom.dataset['id'];
                var bankName = showBankDom.dataset['value'];

                var bankSelect = new iosselect(1, [data_banktype], {
                    container: '.ios_select_container',
                    title: '账户类型',
                    itemHeight: 50,
                    itemShowCount: 3,
                    oneLevelId: bankId,
                    callback: function(selectOneObj) {
                        getBankDom.value = selectOneObj.id;
                        getBankDom_val.value = selectOneObj.value;
                        showBankDom.innerHTML = selectOneObj.value;
                        showBankDom.dataset['id'] = selectOneObj.id;
                        showBankDom.dataset['value'] = selectOneObj.value;
                    }
                });
            });
            //点击开户行地址选择
            $('.js_open_bankaddr').on('click', function() {
                var get_pro = document.querySelector('#js_bankprovince');
                var get_city = document.querySelector('#js_bankcity');
                var get_pro_val = document.querySelector('#js_bankprovince_val');
                var get_city_val = document.querySelector('#js_bankcity_val');
                var showDom = document.querySelector('.js_bank_addr');
                var pro_id = showDom.dataset['pro_id'];
                var pro_val = showDom.dataset['pro_val'];
                var city_id = showDom.dataset['city_id'];
                var city_val = showDom.dataset['city_val'];

                var bankSelect = new iosselect(2, [pro_data_val, city_data_val], {
                    container: '.ios_select_container',
                    title: '开户地与店铺所在省份保持一致',
                    itemHeight: 50,
                    itemShowCount: 7,
                    relation: [1, 0, 0, 0],
                    oneLevelId: pro_id,
                    twoLevelId: city_id,
                    callback: function(prodata, citydata) {
                        get_pro.value = prodata.id;
                        get_city.value = citydata.id;
                        get_pro_val.value = prodata.value;
                        get_city_val.value = citydata.value;
                        showDom.innerHTML = prodata.value + ' ' + citydata.value;
                        showDom.dataset['pro_id'] = prodata.id;
                        showDom.dataset['pro_val'] = prodata.value;
                        showDom.dataset['city_id'] = citydata.id;
                        showDom.dataset['city_val'] = citydata.value;
                    }
                });
            });
            //点击开始时间
            $('.js_idcard_startime').on('click', function() {
                var showDom = document.querySelector('.js_idcard_startime');
                var year = showDom.dataset['year'];
                var month = showDom.dataset['month'];
                var day = showDom.dataset['day'];

                var bankSelect = new iosselect(3, [date_get.yearData, date_get.monthData, date_get.dateData], {
                    container: '.ios_select_container',
                    title: '请与身份证背面起始日期保持一致',
                    itemHeight: 50,
                    itemShowCount: 7,
                    relation: [1, 1, 0, 0],
                    oneLevelId: year,
                    twoLevelId: month,
                    threeLevelId: day,
                    //showLoading: true,
                    callback: function(year_data, month_data, day_data) {
                        showDom.dataset['year'] = year_data.id;
                        showDom.dataset['month'] = month_data.id;
                        showDom.dataset['day'] = day_data.id;
                        showDom.value = year_data.id + '-' + month_data.id + '-' + day_data.id;
                    }
                });
            });
            //点击到期时间
            $('.js_idcard_endtime').on('click', function() {
                var showDom = document.querySelector('.js_idcard_endtime');
                var year = showDom.dataset['year'];
                var month = showDom.dataset['month'];
                var day = showDom.dataset['day'];

                var bankSelect = new iosselect(3, [date_get.yearData, date_get.monthData, date_get.dateData], {
                    container: '.ios_select_container',
                    title: '请与身份证背面起始日期保持一致',
                    itemHeight: 50,
                    itemShowCount: 7,
                    relation: [1, 1, 0, 0],
                    oneLevelId: year,
                    twoLevelId: month,
                    threeLevelId: day,
                    //showLoading: true,
                    callback: function(year_data, month_data, day_data) {
                        showDom.dataset['year'] = year_data.id;
                        showDom.dataset['month'] = month_data.id;
                        showDom.dataset['day'] = day_data.id;
                        showDom.value = year_data.id + '-' + month_data.id + '-' + day_data.id;
                    }
                });
            });
            //点击下一步
            $('.js_third').on('click', function() {
                yanzheng.name_test('.js_ownername', 0, 60);
                yanzheng.name_test('.js_idnumber', 0, 60);
                yanzheng.name_test('.js_idcard', 0, 60);
                yanzheng.name_test('.js_idcard_startime', 0, 60);
                yanzheng.name_test('.js_idcard_endtime', 0, 60);
                yanzheng.name_test('.js_bankuser', 0, 60);
                yanzheng.name_test('.js_bankaccount', 0, 60);
                yanzheng.tel_test('.js_bankmobile');
                yanzheng.name_test('.js_banktype', 0, 60);
                yanzheng.name_test('.js_bank_addr', 0, 60);
                yanzheng.name_test('.js_bankname', 0, 60);
                var error_len = $('.error_data').length;
                if (error_len > 0) {
                    return false;
                }
                //存储数据并进入下一步
                localstorage.set_storage();
                location.href = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/end.html?'+business_if;
            });
            //显示储存的隐藏信息
            function get_data_show() {
                //类型
                var banktype = $('#js_banktype').val();
                var banktype_val = $('#js_banktype_val').val();
                if (banktype) {
                    $('.js_banktype').text(banktype_val);
                    $('.js_banktype').data('id',banktype);
                    $('.js_banktype').data('value',banktype_val);
                    $('.js_banktype').parents('dl').addClass('success');
                }else{
                    $('.js_banktype').text('');
                    $('.js_banktype').parents('dl').removeClass('success');
                }
                //地址
                var bankpro = $('#js_bankprovince_val').val();
                var bankcity = $('#js_bankcity_val').val();
                var bankpro_id = $('#js_bankprovince').val();
                var bankcity_id = $('#js_bankcity').val();
                if (bankpro || bankcity) {
                    $('.js_bank_addr').text(bankpro + ' ' + bankcity);
                    $('.js_bank_addr').attr('data-pro_id',bankpro_id);
                    $('.js_bank_addr').attr('data-pro_val',bankpro);
                    $('.js_bank_addr').attr('data-city_id',bankcity_id);
                    $('.js_bank_addr').attr('data-city_val',bankcity);
                    $('.js_bank_addr').parents('dl').addClass('success');
                }else{
                    $('.js_bank_addr').text('');
                    $('.js_bank_addr').parents('dl').removeClass('success');
                }
                //日期
                var startime=$('.js_idcard_startime').val();
                if(startime){
                    $('.js_idcard_startime').data('year',startime.substr(0,4));
                    $('.js_idcard_startime').data('month',startime.substr(5,2));
                    $('.js_idcard_startime').data('day',startime.substr(8,2));
                }else{
                    $('.js_idcard_startime').data('year',date_get.nowYear);
                    $('.js_idcard_startime').data('month',date_get.nowMonth);
                    $('.js_idcard_startime').data('day',date_get.nowDate);
                }
                var endtime=$('.js_idcard_endtime').val();
                if(endtime){
                    $('.js_idcard_endtime').data('year',endtime.substr(0,4));
                    $('.js_idcard_endtime').data('month',endtime.substr(5,2));
                    $('.js_idcard_endtime').data('day',endtime.substr(8,2));
                }else{
                    $('.js_idcard_endtime').data('year',date_get.nowYear);
                    $('.js_idcard_endtime').data('month',date_get.nowMonth);
                    $('.js_idcard_endtime').data('day',date_get.nowDate);
                }
                //图片
                var cardback = localstorage.getone_storage('cardback');
                var cardface = localstorage.getone_storage('cardface');
                var cardhand = localstorage.getone_storage('cardhand');
                if (cardhand && cardface && cardback) {
                    $('.js_go_idcard').addClass('success');
                    $('.js_shoppic').val('已上传');
                } else {
                    $('.js_go_idcard').removeClass('success');
                    $('.js_shoppic').val('');
                }
                //开户行
                var bankname_val=localstorage.getone_storage('bankname');
                if (bankname_val) {
                    $('.js_go_bankname').addClass('success');
                    $('.js_bankname').val(bankname_val);
                } else {
                    $('.js_go_bankname').removeClass('success');
                    $('.js_bankname').val('');
                }
            }
            //添加弹框
            add_bounced.add_bounced();
            //关闭弹框
            add_bounced.close_tip();
        });
    });
});
