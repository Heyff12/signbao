require(['../require-config'], function() {
    require(["jquery", "yanzheng", "add_bounced", "ajax_rule", "localstorage", "pinyin"], function($, yanzheng, add_bounced, ajax_rule, localstorage, pinyin) {
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
                //获取已选择银行
                var bank_val=localstorage.getone_storage('bankname');
                if(bank_val){
                    $('.js_banktitle').text(bank_val);                
                }else{
                    $('.js_banktitle').text('中国建设银行'); 
                }
            });
            //添加字母列表
            var Initials = $('.initials'); //字母列表
            var LetterBox = $('#letter'); //选中的字幕
            Initials.find('ul').append('<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li><li>#</li>');
            //排序
            initials();
            $(".initials ul li").click(function() {
                var _this = $(this);
                var LetterHtml = _this.html();
                LetterBox.html(LetterHtml).fadeIn();

                Initials.css('background', 'rgba(145,145,145,0.6)');

                setTimeout(function() {
                    Initials.css('background', 'rgba(145,145,145,0)');
                    LetterBox.fadeOut();
                }, 1000);

                var _index = _this.index()
                if (_index == 0) {
                    $('html,body').animate({ scrollTop: '0px' }, 300); //点击第一个滚到顶部
                } else if (_index == 27) {
                    var DefaultTop = $('#default').position().top; //????#需要添加id=default
                    $('html,body').animate({ scrollTop: DefaultTop + 'px' }, 300); //点击最后一个滚到#号
                } else {
                    var letter = _this.text();
                    if ($('#' + letter).length > 0) {
                        var LetterTop = $('#' + letter).position().top;
                        $('html,body').animate({ scrollTop: LetterTop - 45 + 'px' }, 300);
                    }
                }
            });

            var windowHeight = $(window).height();
            var InitHeight = windowHeight - 45;
            Initials.height(InitHeight);
            var LiHeight = InitHeight / 28;
            Initials.find('li').height(LiHeight);

            function initials() { //公众号排序
                var SortList = $(".sort_list");
                var SortBox = $(".sort_box");
                SortList.sort(asc_sort).appendTo('.sort_box'); //按首字母排序
                function asc_sort(a, b) {
                    return pinyin.makePy($(b).find('.num_name').text().charAt(0))[0].toUpperCase() < pinyin.makePy($(a).find('.num_name').text().charAt(0))[0].toUpperCase() ? 1 : -1;
                }

                var initials = [];
                var num = 0;
                //获取拥有的首字母
                SortList.each(function(i) {
                    var initial = pinyin.makePy($(this).find('.num_name').text().charAt(0))[0].toUpperCase();
                    if (initial >= 'A' && initial <= 'Z') {
                        if (initials.indexOf(initial) === -1)
                            initials.push(initial);
                    } else {
                        num++;
                    }

                });
                //添加首字母标签
                $.each(initials, function(index, value) { //添加首字母标签
                    SortBox.append('<div class="sort_letter" id="' + value + '">' + value + '</div>');
                });
                if (num != 0) { SortBox.append('<div class="sort_letter" id="default">#</div>'); }
                //插入到对应的首字母后面
                for (var i = 0; i < SortList.length; i++) { //插入到对应的首字母后面
                    var letter = pinyin.makePy(SortList.eq(i).find('.num_name').text().charAt(0))[0].toUpperCase();
                    switch (letter) {
                        case "A":
                            $('#A').after(SortList.eq(i));
                            break;
                        case "B":
                            $('#B').after(SortList.eq(i));
                            break;
                        case "C":
                            $('#C').after(SortList.eq(i));
                            break;
                        case "D":
                            $('#D').after(SortList.eq(i));
                            break;
                        case "E":
                            $('#E').after(SortList.eq(i));
                            break;
                        case "F":
                            $('#F').after(SortList.eq(i));
                            break;
                        case "G":
                            $('#G').after(SortList.eq(i));
                            break;
                        case "H":
                            $('#H').after(SortList.eq(i));
                            break;
                        case "I":
                            $('#I').after(SortList.eq(i));
                            break;
                        case "J":
                            $('#J').after(SortList.eq(i));
                            break;
                        case "K":
                            $('#K').after(SortList.eq(i));
                            break;
                        case "L":
                            $('#L').after(SortList.eq(i));
                            break;
                        case "M":
                            $('#M').after(SortList.eq(i));
                            break;
                        case "O":
                            $('#O').after(SortList.eq(i));
                            break;
                        case "P":
                            $('#P').after(SortList.eq(i));
                            break;
                        case "Q":
                            $('#Q').after(SortList.eq(i));
                            break;
                        case "R":
                            $('#R').after(SortList.eq(i));
                            break;
                        case "S":
                            $('#S').after(SortList.eq(i));
                            break;
                        case "T":
                            $('#T').after(SortList.eq(i));
                            break;
                        case "U":
                            $('#U').after(SortList.eq(i));
                            break;
                        case "V":
                            $('#V').after(SortList.eq(i));
                            break;
                        case "W":
                            $('#W').after(SortList.eq(i));
                            break;
                        case "X":
                            $('#X').after(SortList.eq(i));
                            break;
                        case "Y":
                            $('#Y').after(SortList.eq(i));
                            break;
                        case "Z":
                            $('#Z').after(SortList.eq(i));
                            break;
                        default:
                            $('#default').after(SortList.eq(i));
                            break;
                    }
                };
            }

            //点击银行
            $('.js_bank_kuang .sort_list').on('click',function(){
                var bankname_val=$(this).text();
                $('.js_banktitle').text(bankname_val); 
                localstorage.setone_storage('bankname',bankname_val);
                location.href = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/businfo.html?'+business_if;
            });
            $('.js_bank_hotkuang .sort_list_hot').on('click',function(){
                var bankname_val=$(this).text();
                $('.js_banktitle').text(bankname_val); 
                localstorage.setone_storage('bankname',bankname_val);
                location.href = 'file:///Users/yaya/Documents/job/local/%E7%AD%BE%E7%BA%A6%E5%AE%9D/signbao/html/register/businfo.html?'+business_if;
            });
            //添加弹框
            add_bounced.add_bounced();
            //关闭弹框
            add_bounced.close_tip();
        });
    });
});
