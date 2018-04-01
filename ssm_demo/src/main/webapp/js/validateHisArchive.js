
   $(document).ready(function(){
	   
	   jQuery.validator.addMethod("isSpace", function(value, element) {
		   value=$.trim(value);
		   var length=value.length;
		   return this.optional(element) || (length !=0);
		   }, "请完善必填信息");
	
	$("#searchForm").validate({
        rules: {
        	fileName: {
            	required: true,
            	isSpace:true
            },
            partNo:{
            	required: true,
            	isSpace:true
            },
            responsibility: {
            	required: true,
            	isSpace:true
            },
            saveYear: {
            	required: true,
            	isSpace:true
            },
            year: {
            	required: true,
            	isSpace:true
            },
            paper: {
            	required: true,
            	isSpace:true
            },
            applicaDate: {
            	required: true,
            	isSpace:true
            }
			
        },
        messages: {
        	fileName: {
        		required: "请完善必填信息"
        	},
        	partNo:{
            	required: "请完善必填信息"
            },
            responsibility: {
        		required: "请完善必填信息"
        	},
        	saveYear: {
        		required: "请完善必填信息"
        	},
        	year: {
        		required: "请完善必填信息"
        	},
        	paper: {
        		required: "请完善必填信息"
        	},
        	applicaDate: {
        		required: "请完善必填信息"
        	}
	       
	        
        },
        errorPlacement: function (error, ele) {
        	if(ele.attr("id")=='dataStart'){
        		error.appendTo(ele.next().next());
        	}
            error.appendTo(ele.next());
        }
    });
});
   
   
   
   
   