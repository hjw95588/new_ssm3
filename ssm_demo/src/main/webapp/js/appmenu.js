/**
 * Created by joyC on 2016/4/13.
 */
//动态生成表单
var _menuNode=[
    {name:"政府采购",src:"",pageId:"",children:[
        {name:"采购申请",src:"../html/purchaseList.html",pageId:""},
        {name:"待办事项",src:"../html/purchaseTask.html",pageId:""},
        {name:"经办事项",src:"../html/purchaseHandled.html",pageId:"",children:[
            {name:"采购申请",src:"../html/purchaseList.html",pageId:""},
            {name:"待办事项",src:"../html/purchaseTask.html",pageId:""},
            {name:"经办事项",src:"../html/purchaseHandled.html",pageId:""}
        ]}
    ]},
    {name:"政府采购",src:"",pageId:"",children:[
        {name:"采购申请",src:"../html/purchaseList.html",pageId:""},
        {name:"待办事项",src:"../html/purchaseTask.html",pageId:""},
        {name:"经办事项",src:"../html/purchaseHandled.html",pageId:""}
    ]},
    {name:"政府采购",src:"",pageId:""}
];
function buildMenu(arr,num,padLeft,initColor){
    var _ul=document.createElement("ul");
    initColor = initColor>255?255:initColor;
    $(_ul).addClass("nav-list" + num);
    for(var i=0;i<arr.length;i++) {
        var _li = document.createElement("li");
        if(arr[i].children){
            var _span = document.createElement("span");
            var _i=document.createElement("i");
            $(_span).text(arr[i].name).css("padding-left",padLeft + "px").css("background","rgb(" + initColor + "," + initColor +","+ initColor + ")");
            $(_i).addClass("fa menu-caret").addClass("fa-angle-left");
            $(_li).append($(_span)).append($(_i)).css("position","relative");
            num++;
            padLeft+=15;
            initColor += 7;
            var _ul2=arguments.callee(arr[i].children,num,padLeft,initColor);//jquery对象
            initColor -= 7;
            padLeft-=15;
            num--;
            $(_li).append(_ul2);
            _ul2.hide();
            $(_span).bind({"click":function(){
                if($(this).siblings("ul:hidden").length!=0){
                    $(this).parent().siblings().children("ul").hide();
                    $(this).parent().siblings().children("i").removeClass("fa-angle-down").addClass("fa-angle-left");
                    $(this).siblings("ul:hidden").show();
                    $(this).siblings("i").removeClass("fa-angle-left").addClass("fa-angle-down");
                }else {
                    $(this).siblings("ul:visible").hide();
                    $(this).siblings("i").removeClass("fa-angle-down").addClass("fa-angle-left");
                }
            }
            })
        }else{
            if(num==0){
                var _span = document.createElement("span");
                $(_span).attr({"href": arr[i].src, "toggle-pageid": arr[i].pageId}).text(arr[i].name).css({"padding-left":padLeft + "px","background":"rgb(" + initColor + "," + initColor +","+ initColor + ")"}).bind("click",function(){
                    $(this).parent().siblings().children("ul").hide();
                    $(this).parent().siblings().children("i").removeClass("fa-angle-down").addClass("fa-angle-left");
                });;
                $(_li).append($(_span));
            }else{
                var _a = document.createElement("a");
                $(_a).attr({"href": arr[i].src, "toggle-pageid": arr[i].pageId}).text(arr[i].name).css({"padding-left":padLeft + "px","background":"rgb(" + initColor + "," + initColor +","+ initColor + ")"}).addClass("border-bottom");
                $(_li).append($(_a)).bind("click",function(){
                    $(".left-menu li a.active").removeClass("active").each(function(){
                        var _num=parseInt($(this).parent().parent().attr("class").slice(-1)),
                            _initColor = 235 + 7*(_num);
                            $(this).css({"background":"rgb(" + _initColor + "," + _initColor +","+ _initColor + ")"});
                    });
                    $(this).children("a").addClass("active").css({"background":"#E3F7FC"});
                });
                $(_a).attr("target","smIframe");
            }
        }
        $(_ul).append($(_li));
    }
    return $(_ul);
}
function initMenu(){
    var _pageId=sessionStorage.getItem("pageId");
    if(_pageId!==""){
        $(".nav-list0>li:first-child").addClass("active").children("ul").show();
        $(".nav-list0>li:first-child").children("i").removeClass("fa-angle-left").addClass("fa-angle-down");
    }else{
        $(".nav-list0>li:first-child").addClass("active").children("ul").show();
        $(".nav-list0>li:first-child").children("i").removeClass("fa-angle-left").addClass("fa-angle-down");
    }
}
$(function() {
    $(".left-menu").append(buildMenu(_menuNode, 0,15,235));
    initMenu();
})