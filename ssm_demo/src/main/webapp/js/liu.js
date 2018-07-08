
//全局变量
var WebOffice1;

function loadOffice(){
	
	 WebOffice1 = document.getElementById("WebOffice1");
	WebOffice1.CreateNew("Word.Document");
	WebOffice1.ActiveDocument.ActiveWindow.Selection.Font.NameFarEast = "微软雅黑";
	WebOffice1.ActiveDocument.ActiveWindow.Selection.Font.NameAscii = "Times New Roman";
	WebOffice1.ActiveDocument.ActiveWindow.Selection.Font.NameOther = "Times New Roman";
	WebOffice1.ActiveDocument.ActiveWindow.Selection.Font.Size = 33;
    var _protectType = WebOffice1.GetFileProTectType();
    if (_protectType != -1) {
    	WebOffice1.ActiveDocument.UnProtect("12345");
    }

}


//配置方法列表
    var fnList = {
    		
    		/**
             * 显示留痕
             */
            fnShowRevision: function() {
            	debugger;
                WebOffice1.Activate();
                WebOffice1.ActiveDocument.ActiveWindow.View.ShowRevisionsAndComments = true;
            },
            /**
             * 隐藏留痕
             */
            fnHideRevision: function() {
            	debugger;
                WebOffice1.Activate();
                WebOffice1.ActiveDocument.ActiveWindow.View.ShowRevisionsAndComments = false;
            },
            fnShowRevisionForProtect: function() {
                WebOffice1.Activate();
                var _protectType = document.all.WebOffice1.GetFileProTectType();
                if (_protectType !== -1 && _protectType !== 0) {
                    //-1时说明没有受到保护
                    WebOffice1.ActiveDocument.UnProtect("12345");
                    WebOffice1.ActiveDocument.ActiveWindow.View.ShowRevisionsAndComments = true;
                    document.all.WebOffice1.ProtectDoc(1, 2, "12345");
                } else {
                    WebOffice1.ActiveDocument.ActiveWindow.View.ShowRevisionsAndComments = true;
                }
            },
            fnHideRevisionForProtect: function() {
                WebOffice1.Activate();
                var _protectType = document.all.WebOffice1.GetFileProTectType();
                if (_protectType !== -1 && _protectType !== 0) {
                    //-1时说明没有受到保护
                    WebOffice1.ActiveDocument.UnProtect("12345");
                    WebOffice1.ActiveDocument.ActiveWindow.View.ShowRevisionsAndComments = false;
                    document.all.WebOffice1.ProtectDoc(1, 2, "12345");
                } else {
                    WebOffice1.ActiveDocument.ActiveWindow.View.ShowRevisionsAndComments = false;
                }
            }
    		
    }