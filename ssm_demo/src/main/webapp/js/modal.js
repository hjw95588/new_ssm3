$(function(){
    //document.getElementById(".modal-bg").style.height=document.offsetHeight+ "px";
    ////兼容FF、IE等
    $("#modal-pbox").click(function(){
       $(".fade").css("display","block").addClass("in").attr("aria-hidden","true");
	   $(".modal-input-ul").css("display","none");
	   $(".modal-open").text('展开').append('<i class="fa fa-angle-down ml5"></i>');
     });
    $(".close[aria-label='Close']").click(function(){
        $(".fade").css("display","none").removeClass("in").attr("aria-hidden","true");
    });
    $(".modal-bg").click(function(){
        $(".fade").hide();
    });
    $(".modal-open").toggle(
        function(){
            $(".modal-input-ul").slideDown();
            $(".modal-open").text('收起').append('<i class="fa fa-angle-up ml5"></i>');

        },
		function(){
           	$(".modal-input-ul").slideUp();
            $(".modal-open").text('展开').append('<i class="fa fa-angle-down ml5"></i>');
        }
     );
})