define(function() {　
    function previewImage(file, n, name) {
        var a = 0;
        var MAXWIDTH = 260;
        var MAXHEIGHT = 180;
        var div = document.getElementById('preview' + n);
        // console.log(file.files);
        // console.log(file.files.length);
        console.log(file.files[0]);
        var file_ajax = file.files[0];
        var file_name = file_ajax.name;
        var file_size = file_ajax.size;
        var file_type = file_ajax.type;
        if (file_size > 1024 * 1024 * 8) {
            $('.alert_con').show();
            $('.alert_con .alert_con_br').html('图片不能大于8M');
            $('.zheceng').show();
            $('#js_pic' + n).addClass('error_data');
            return false;
        } else {
            $('#js_pic' + n).removeClass('error_data');
        }
        if (file.files.length > 0) {
            if (file.files && file.files[0]) {
                div.innerHTML = '<img id=imghead' + n + '>';
                var img = document.getElementById('imghead' + n);
                img.onload = function() {
                    var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                    img.width = rect.width;
                    img.height = rect.height;
                    //img.style.marginLeft = rect.left+'px';
                    img.style.marginTop = rect.top + 'px';
                }
                var reader = new FileReader();
                reader.onload = function(evt) {
                    img.src = evt.target.result;
                    var quality = 20;
                    //img.src = jic.compress(img, quality).src;
                    try {
                        localStorage.setItem(name, img.src);
                    } catch (e) {
                        var storageSize = Math.round(JSON.stringify(localStorage).length / 1024);
                        console.log("LIMIT REACHED:  " + storageSize + "K");
                        console.log(e);
                    }
                }
                reader.readAsDataURL(file.files[0]);
            } else //兼容IE
            {
                var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
                file.select();
                var src = document.selection.createRange().text;
                div.innerHTML = '<img id=imghead' + n + '>';
                var img = document.getElementById('imghead' + n);
                img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
                div.innerHTML = "<div id=divhead" + n + " style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
            }
        }
        var rul_token = '1403d7e2-3cd1-4559-9b74-8a91a7bc9313';
        console.log(document.getElementById('regis_pic' + n));
        console.log($('#regis_pic' + n)[0]);
        var formdata = new FormData($('#regis_pic' + n)[0]);
        console.log(formdata);
        console.log(new FormData(document.getElementById('regis_pic' + n)));
        var file = $('#regis_pic' + n)[0][0].files[0];
        // console.log($("#regis_pic" + n)[0]);
        // console.log(formdata);
        // console.log($("#regis_pic" + n)[0][0]);
        // console.log($("#regis_pic" + n)[0][0].files[0]);
        console.log(file);
        console.log(document.getElementById('regis_pic' + n)[0].files[0]);
        formdata.append('file', file);
        formdata.append('token', rul_token);
        formdata.append('file_name', file_name);
        formdata.append('file_size', file_size);
        formdata.append('file_type', file_type);
        console.log(formdata);
        //ajax
    }
    //设置图片宽高和位置
    function clacImgZoomParam(maxWidth, maxHeight, width, height) {
        var param = { top: 0, left: 0, width: width, height: height };
        if (width > maxWidth || height > maxHeight) {
            rateWidth = width / maxWidth;
            rateHeight = height / maxHeight;

            if (rateWidth > rateHeight) {
                param.width = maxWidth;
                param.height = Math.round(height / rateWidth);
            } else {
                param.width = Math.round(width / rateHeight);
                param.height = maxHeight;
            }
        }
        param.left = Math.round((maxWidth - param.width) / 2);
        param.top = Math.round((maxHeight - param.height) / 2);
        return param;
    }
    //图片压缩
    var jic = {
        /**
         * Receives an Image Object (can be JPG OR PNG) and returns a new Image Object compressed
         * @param {Image} source_img_obj The source Image Object
         * @param {Integer} quality The output quality of Image Object
         * @return {Image} result_image_obj The compressed Image Object
         */
        compress: function(source_img_obj, quality, output_format) {
            var mime_type = "image/jpeg";
            if (output_format != undefined && output_format == "png") {
                mime_type = "image/png";
            }

            var cvs = document.createElement('canvas');
            //naturalWidth真实图片的宽度
            cvs.width = source_img_obj.naturalWidth;
            cvs.height = source_img_obj.naturalHeight;
            var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
            var newImageData = cvs.toDataURL(mime_type, quality / 100);
            var result_image_obj = new Image();
            result_image_obj.src = newImageData;
            return result_image_obj;
        }
    }

    return {
        previewImage: previewImage,
    };　
});
