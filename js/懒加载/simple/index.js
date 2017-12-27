import $ from "jquery";


// 判断元素是否在可视范围内
function isVisible($node){
    var winH = $(window).height();
    var scrollTop = $(window).scrollTop();
    var offSetTop = 0;
    if ($node) {
        offSetTop = $($node).offset().top;
    }
    if (offSetTop < winH + scrollTop - 250) {
        return true;
    } else {
        return false;
    }
}
// 更新图片
function update() {
    $("img.lazy").each(function(){
        if (isVisible(this)){
            // 将其图片进行显示
            $(this).attr('src',$(this).attr('data-original'));
        }
    })
}

var scrolling = false;
// 添加上浏览器的事件监听函数，让浏览器每次滚动就检查元素是否出现在窗口可视范围内
$(window).on("scroll", function () {
    if (scrolling) {
        return;
    } else {
        scrolling = true;
        setTimeout(function(){
            scrolling = false
        },200);
        // 更新img
        update();
    }
})

update();