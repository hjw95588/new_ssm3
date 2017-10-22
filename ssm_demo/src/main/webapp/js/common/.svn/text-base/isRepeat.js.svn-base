/**
 * description : 某个input失去焦点的时候，判断排序号是否被占用
 *
 ``````javascript```````````
    $('#dataListView').isRepeat({
        el : '.tabNumInput'
        },function (rs) {
        console.log(rs)
    });
 */


//step1 定义jquery的作用域
(function ($) {
    //step3a 默认值属性
    var defaults = {
        el : '.tabNumInput'
        //...
    };

    //step2 插件的扩展方法名称
    $.fn.isRepeat = function(options, callback){
        //step3b 合并用户自定义属性，默认属性
        var options  = $.extend(defaults, options);
        var els = this.find(options.el);//元素集合
        var oldValue = [];//保留之前的值

        els.each(function (index, item) {

            oldValue.push($(item).val() || 0);

        })

        els.each(function(index) {

            $(this).blur(function(){

                var newValue = $(this).val();

                if(!isNaN(window.parseInt(newValue))){ //一些校验

                    if((window.parseInt(newValue) != newValue) || newValue <= 0){ //一些校验

                        alert("请输入大于0的整数");
				        $(this).focus();
                        return ;
                    }else{
                        //基本校验通过， 进行业务上的处理
                        var rsArr = oldValue.filter(function (im, inx) {
                            return im != oldValue[index];
                        })

                        var isReapet = rsArr.some(function (items, inx) {
                            return items == newValue;
                        });

                        if(isReapet){
                            //在数组中
                            alert('排序号重复，请重新输入！')
                        }else{
                            //不再数组中
                            callback({nowValue : newValue});
                        }
                    }

                }else{
                    alert("请输入大于0的整数");
                    return ;
                }
            });
        });
        //step4 支持jQuery选择器
        //step5 支持链式调用
        return this.each(function () {
            
        });
    }
})(jQuery)