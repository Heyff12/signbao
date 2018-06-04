define(function() {　
    //获取url的指定hash值
    function get_hash(hash_val) {
        var c_val;
        if (location.href.split('?').length < 2) {
            return false;
        }
        var url_l = location.href.split('?')[1].split('&');
        var url_l_l = url_l.length;
        for (var i = 0; i < url_l_l; i++) {
            var url_val = url_l[i].split('=');
            if (url_val[0] == hash_val) {
                c_val = url_val[1];
                return c_val;
            }
        }
    }
    //验证中文-----add_new
    function china_test(id, num1, num2) {
        var val = $(id).val();
        var val_exp = new RegExp("^[\u4e00-\u9fa5]{" + num1 + "," + num2 + "}$"); // /^[\u4e00-\u9fa5]{num1,num2}$/
        if (!val_exp.test(val)) {
            $(id).addClass('border_red');
        } else {
            $(id).removeClass('border_red');
        }
    }
    //验证手机号-----add_new
    function tel_test(id) {
        var val = $(id).val();
        var val_exp = /^1[0-9]{10}$/;
        if (!val_exp.test(val)) {
            $(id).parents('dl').addClass('error_data');
        } else {
            $(id).parents('dl').removeClass('error_data');
        }
    }
    //验证生日-----add_new
    function birth_test(id, num1, num2) {
        var val = $(id).val();
        var val_l = val.length;
        if (val_l <= num1 || val_l > num2) {
            $(id).addClass('border_red');
        } else {
            $(id).removeClass('border_red');
        }
    }
    //验证验证码6位数字-----add_new
    function code_test(id) {
        var val = $(id).val();
        var val_exp = /^[0-9]{6}$/;
        if (!val_exp.test(val)) {
            $(id).parents('dl').addClass('error_data');
        } else {
            $(id).parents('dl').removeClass('error_data');
        }
    }
    //验证法人姓名  验证企业姓名 验证详细地址、经营地址  收据显示名称  银行所在地 公司开户银行  开户名称
    function name_test(id, num1, num2) {
        var name_val = $(id).val() || $(id).text();
        if (name_val.length < num1 || name_val.length > num2 || !name_val.length) {
            $(id).parents('dl').addClass('error_data');
        } else {
            $(id).parents('dl').removeClass('error_data');
        }
    }
    //验证图片是否上传
    function pic_if(id) {
        var pic_url = $(id).find('img').attr('src');
        var pic_url_before = '../../static/img/wu@3x.png';
        if (pic_url == pic_url_before) {
            $(id).addClass('error_data');
        } else {
            $(id).removeClass('error_data');
        }
    }
    return {
        get_hash: get_hash,
        china_test: china_test,
        tel_test: tel_test,
        birth_test: birth_test,
        code_test: code_test,
        name_test: name_test,
        pic_if: pic_if,
    };　
});
