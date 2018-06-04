define(function() {　
    //ajax规则
    function ajax_rule(url,type,dataType,data,zhecengid,success_func) {
        $.ajax({
            url: url,
            type: type,
            dataType: dataType,
            data: data,
            beforeSend: function() {
                $('#loading').show();
                $(zhecengid).show();
            },
            success: function(data) {
                if (data.respcd != '0000') {
                    $('#alert_alert').show();
                    $(zhecengid).show();
                    if (!data['respmsg']) {
                        $('#alert_alert .alert_con_br').html(data['resperr']);
                    } else {
                        $('#alert_alert .alert_con_br').html(data['respmsg']);
                    }
                } else {
                    var return_data = data.data;
                    success_func(return_data);
                    $(zhecengid).hide();
                    $('.load').hide();
                }
            },
            error: function(data) {
                $('#alert_alert').show();
                $(zhecengid).show();
                //$('.alert_con .alert_con_br').html('XMLHttpRequest.readyState:'+XMLHttpRequest.readyState+',XMLHttpRequest.status:'+XMLHttpRequest.status+',textStatus:'+textStatus+'!');
                $('#alert_alert .alert_con_br').html('网络超时!');
            },
            complete: function() {
                $('#loading').hide();
            }
        });
    }
    return {
        ajax_rule: ajax_rule,
    };　
});
