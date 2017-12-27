import $ from "jquery";
import Rx from "rxjs/Rx";
import "rxjs/operators"

(function($, window){

    var dConf = {
        'time': 120,
        'imgs': 'img.lazy',
        'imgUrl': 'data-original',
        'src': ''
    }

    $.fn.extend({
        // 扩张$方法
        conf: function (o) {
            if (o == '') {
                // 使用默认值
            }
            if (typeof o !== 'object'&&typeof o.length !== 'number') {
                console.log("请传入一个对象");
                return;
            }
            // 获取对象参数
            for (var key_ of o) {
                conf[key_];
            }
        }
    });
    $.extend({
        // 启动懒加载
        lz: {
            conf: dConf,
            isVisible: function(e){
                var winH = $(window).height();
                var scrollTop = $(window).scrollTop();
                var offSetTop = 0;
                if (e) {
                    offSetTop = $(e).offset().top;
                }
                if (offSetTop < winH + scrollTop - 250) {
                    return true;
                } else {
                    return false;
                }
            },
            update: function (imgs) {
                // 更新图片
                imgs.each(function(){
                    if ($.lz.isVisible(this)){
                        // 将其图片进行显示
                        $(this).attr('src',$(this).attr(dConf.imgUrl));
                    }
                })
            }
        }
    })

    var obWin = Rx.Observable.fromEvent($(window), 'scroll');
    obWin.delay(dConf.time).map(e=>e.target).subscribe(res=> {
        $.lz.update($(dConf.imgs));
    })
    return $;
})($, window)