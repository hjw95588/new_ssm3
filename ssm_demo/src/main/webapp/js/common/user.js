/**
 * Created by mei on 2015/5/15.
 */
$(document).ready(function() {
    $(".ztc-bolck").hide();
    $(".ztc-drop a").click(function(){
        $(".ztc-bolck").slideToggle();
        if ($(this).hasClass("activi")) {
            $(this).removeClass("activi").html("查看更多  ∨");
        } else {
            $(this).addClass("activi").html("收起  ∧");
        }
    });
});

$(document).ready(function() {
    $(".ztc-bolck-1").hide();
    $(".ztc-down a").click(function(){
        $(".ztc-bolck-1").slideToggle();
        if ($(this).hasClass("activi")) {
            $(this).removeClass("activi").html("查看更多  ∨");
        } else {
            $(this).addClass("activi").html("收起  ∧");
        }
    });
});

