require.config({
    baseUrl: "../../src/js",
    paths: {
        "jquery": ["plug/jquery-2.1.4.min", "plug/jquery-1.7.2.min", "http://libs.baidu.com/jquery/2.0.3/jquery"],
        "zepto": "plug/zepto.min",
        "mobile": "plug/date/jquery.mobile-1.4.5.min",
        "mobiscroll": "plug/date/mobiscroll", //通过shim绑定关联模块jquery
        "jsonp": "plug/jquery.jsonp",
        "iscroll": "plug/iscroll",
        "iosselect": "plug/iosselect/iosSelect",//ios select样式
        "yanzheng": "common/yanzheng", //将通用方法放在同一个模块中
        "ajaxps": "common/ajaxps", //在模块中调用其他模块的方法
        "date": "common/date", //在模块中调用其他模块的方法--日期插件
        "close_tip": "common/close_tip", //在模块中调用其他模块的方法--关闭弹框
        "date_change": "common/date_change",//时间格式化 从2016-09-22 11:22:33到2016.9.18
        "ajax_rule": "common/ajax_rule",//ajax框架
        "scroll_more": "common/scroll_more",//滑动查看更多
        "scroll_down": "common/scroll_down",//缓慢滚动到底部
        "add_bounced": "common/add_bounced",//弹框，包括load动画和遮层
        "localstorage":"common/localstorage",//存储localstorage
        "city_data": "plug/data/areaData_v2",//省市区数据
        "pinyin": "plug/wordselect/jquery.charfirst.pinyin",//省市区数据
        "date_get": "common/date_get",//获取年月日
        "upload": "common/upload",//图片上传
    },
    shim: {　　　　　　
        'mobiscroll': {　　　　　　　　
            deps: ['jquery'],
            　　　　　　　　
            exports: 'mobiscroll'　　　　　　
        },
        　　　　　
        'jsonp': {　　　　　　　　
            deps: ['jquery'],
            　　　　　　　　
            exports: 'jsonp'　　　　　　
        },
        'zepto': {　　　　　　　　　　　　　　　　
            exports: '$'　　　　　　
        },　
    }
});