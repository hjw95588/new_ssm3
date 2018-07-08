//全局变量
var oframe;
var isOpened = false;



//初始化oframe对象
function InitEvent() {
    oframe = document.getElementById("oframe");
    //alert("请您将IE的文档模式调成IE7标准模式");
}

//检查是否打开文档
function CheckFileOpened() {
    if (!isOpened)
        alert("you should open a document first.");
    return isOpened;
}

function SS_ShangChuan(type)
{
	
}

function SS_Taohongtou()
{
	var urlOriging = "http://192.168.136.128:8080/test.doc";

	oframe.LoadOriginalFile(urlOriging, "doc");//首先打开原文件    
	var tmppath = oframe.GetTempFilePath();//把源文件保存到本地并获取到路径
    oframe.SaveAs(tmppath, 0);//源文件保存到本地并获取到路径

    
    oframe.LoadOriginalFile("http://192.168.136.128:8080/hongtou.doc" , "doc");//将控件里面的文件换成选择的红头文件
    var tempCodeArray = [];//准备插入有关编号信息的数据
    var code = "文号2016-001";//准备插入有关编号信息的数据
    oframe.SetFieldValue("data", tmppath, "::FILE::");//将原文件插入到红头文件data书签处
    /*
     准备插入有关编号信息的数据
     */    
    oframe.SetFieldValue("code", "青粮 " + "〔" + code +"〕" + " 号", "");
    
    oframe.DelLocalFile(tmppath);//删除本地文件保存的原文件
    oframe.ProtectDoc(1, 2, "12345");//给套红后的文件锁定
}

function GetSealList()
{
	if (!CheckFileOpened()) return;
	var strSignList = oframe.GetSealList();
	alert(strSignList);
}

function InsertSeal(nPage, fXCoor, fYCoor)
{
	if (!CheckFileOpened()) return;
	oframe.InsertSign(nPage, fXCoor, fYCoor);
}

function InsertSealByBookmark(varBookmark)
{
	if (!CheckFileOpened()) return;
}

function InsertLiuheSeal(nPage, fXCoor, fYCoor)
{
	if (!CheckFileOpened()) return;
	oframe.InsertLiuhe(nPage, fXCoor, fYCoor,'196', '', '', '', '储备处', '');
}

function InsertLiuheSealByBookmark(varBookmark)
{
	if (!CheckFileOpened()) return;
}

//dsoframe(打开)事件
function OnDocumentOpened(str, obj) {
    //alert("触发了dsoframe的OnDocumentOpened事件！");
    isOpened = true;

	/*
    //设置打开Word的用户
    oframe.ActiveDocument.Application.UserName = document.getElementById("tUserName").value;

    //saved属性用来判断文档是否被修改过,文档打开的时候设置成ture,当文档被修改,自动被设置为false,该属性由office提供.
    oframe.ActiveDocument.Saved = true;

    UnProtectDoc(); //默认解锁文档
    ToggleTrackRevisions(true); //默认开启修订功能
    ToggleShowRevisions(false); //默认看到正文清稿
    oframe.ActiveDocument.ActiveWindow.View.Type = 3; //普通视图=1,大纲视图=2,页面视图=3,打印预览视图=4,主控视图=5,Web视图=6,阅读视图=7
    oframe.ActiveDocument.ActiveWindow.View.Zoom.PageFit = 2; //使页面自动适应用户的可视范围
    //oframe.ActiveDocument.ActiveWindow.View.Zoom.Percentage = 100; //使页面按页宽的百分比展示

    //将word的修订视图模式设置为final
    oframe.ActiveDocument.ActiveWindow.View.ShowRevisionsAndComments = false;
    oframe.ActiveDocument.ActiveWindow.View.RevisionsView = 1;

    ////屏蔽预览，保存，新建，打开，打印的按钮（貌似并不起作用）
    //oframe.ActiveDocument.CommandBars("Reviewing").Visible = true;
    //oframe.ActiveDocument.CommandBars("Standard").Controls(1).Visible = false;
    //oframe.ActiveDocument.CommandBars("Standard").Controls(2).Visible = false;
    //oframe.ActiveDocument.CommandBars("Standard").Controls(3).Visible = false;

    //有的电脑太卡，部分设置有可能不生效，所以采用延时设置，确保设置生效
    setTimeout(function () {
        ToggleShowRevisions(false); //默认看到正文清稿
        oframe.ActiveDocument.ActiveWindow.View.Zoom.PageFit = 2; //使页面自动适应用户的可视范围
    }, 1000);
	*/
}

//dsoframe(关闭)事件
function OnDocumentClosed() {
    //alert("触发了dsoframe的OnDocumentClosed事件！");
    isOpened = false;
}

//菜单操作
function ToggleTitlebar() {
    oframe.Titlebar = !oframe.Titlebar;
    oframe.Activate();
}
function ToggleMenubar() {
    oframe.Menubar = !oframe.Menubar;
    oframe.Activate();
}
function ToggleToolbars() {
    if (!CheckFileOpened()) return;
    oframe.Toolbars = !oframe.Toolbars;
    oframe.Activate();
}


//基本操作
function NewDoc() {
    oframe.showdialog(0);
}
function OpenDoc() {
    //oframe.showdialog(1);

	var url = "http://192.168.136.128:8080/test.doc";
	//oframe.Open(url + "?random=" + Math.random(), true);
	// oframe.Open(url , true);
    oframe.LoadOriginalFile("http://dev.doc.app.abus.qhgrain.com/doc/download/comm00008f2276309d7c443ebb135b4f605f3689?token=127.0.0.1:8181", "doc");
}
function OpenLocalWord(path) {
    oframe.Open(path, false, "Word.Document");
}
function OpenWebWord(url) {
    oframe.Open(url + "?random=" + Math.random(), true);
}
function SaveCopyDoc() {
    if (!CheckFileOpened()) return;
    //oframe.showdialog(3);
	//var url = "http://192.168.136.128:8080/upload/test1.doc";
	var url = "ftp://192.168.136.128/test1.doc";	
	var url2 = "ftp://192.168.136.128/test2.doc";	
	//oframe.Save(url, true, "test", "123");
	//oframe.Save(url, true);
	//oframe.Save(url2, true);

	var strSaveAs = "C:\\test.doc";
	oframe.SaveAs(strSaveAs, 11);
}
function ChgLayout() {
    if (!CheckFileOpened()) return;
    oframe.showdialog(5);
}
function PrintDoc() {
    if (!CheckFileOpened()) return;
    //oframe.printout(true);
    // 1.oframe.printout(true) = oframe.showdialog(4);(弹出打印设置页面)
    // 2.oframe.printout(false); (直接打印)
	var strSealList = oframe.GetSealList();
	alert(strSealList);

	oframe.DelSeal(strSealList);
}
function OpenProperty() {
    if (!CheckFileOpened()) return;
    oframe.showdialog(6);
}
function CloseDoc() {
    if (!CheckFileOpened()) return;
    if (!oframe.ActiveDocument.Saved) {
        if (confirm("文档修改过,还没有保存,是否需要保存?")) {
        }
    }
    oframe.close();
}



//检查是否安装控件
function CheckControlInstall() {
    if (typeof (oframe) === 'undefined') {
        alert("you must install dsoframe control first.");
        return false;
    } else {
        return true;
    }
}


//Word相关
function AddNewWord() {
    oframe.CreateNew("Word.Document");
}

function SetUserName() {
    if (!CheckFileOpened()) return;
    oframe.ActiveDocument.Application.UserName = document.getElementById("tUserName").value;
}
function ToggleTrackRevisions(flag) { //是否保留痕迹
    if (!CheckFileOpened()) return;
    oframe.ActiveDocument.TrackRevisions = flag;
}
function ToggleShowRevisions(flag) { //是否显示痕迹
    if (!CheckFileOpened()) return;
    oframe.ActiveDocument.ShowRevisions = flag;
}
function ToggleAllRevisions(flag) {
    if (!CheckFileOpened()) return;
    if (flag)
        oframe.ActiveDocument.AcceptAllRevisions(); //接受所有修订
    else
        oframe.ActiveDocument.Application.WordBasic.RejectAllChangesInDoc(); //拒绝所有修订
}
function ProtectDoc(type) { //文档加锁
    if (!CheckFileOpened()) return;
    try { oframe.ActiveDocument.Protect(type, true, "123"); } catch (e) { }
    /*
    Protect(Type, NoReset, Password, UseIRM, EnforceStyleLock)
    Type:wdAllowOnlyComments = 1,wdAllowOnlyFormFields = 2,wdAllowOnlyReading = 3,wdAllowOnlyRevisions = 0,wdNoProtection = -1
    NoReset:Optional Variant. False to reset form fields to their default values. True to retain the current form field values if the specified document is protected. If Type isn't wdAllowOnlyFormFields, the NoReset argument is ignored.
    Password:Optional Variant. The password required to remove protection from the specified document. (See Remarks below.)
    UseIRM:Optional Variant. Specifies whether to use Information Rights Management (IRM) when protecting the document from changes.
    EnforceStyleLock:Optional Variant. Specifies whether formatting restrictions are enforced in a protected document.
    */
}
function UnProtectDoc(password) { //文档解锁
    if (!CheckFileOpened()) return;
    try { oframe.ActiveDocument.UnProtect(password); } catch (e) { }
}
function SetViewMode() {
    if (!CheckFileOpened()) return;
    //普通视图=1, 大纲视图=2, 页面视图=3, 打印预览视图=4, 主控视图=5, Web视图=6, 阅读视图=7
    //主控视图：会导致所有文本变成formtext，用快捷键alt+f9可以把formtext切换为文字
    oframe.ActiveDocument.ActiveWindow.View.Type = document.getElementById("sViewMode").value;
}
function SetPageFit() { //使页面自动适应用户的可视范围
    if (!CheckFileOpened()) return;
    oframe.ActiveDocument.ActiveWindow.View.Zoom.PageFit = document.getElementById("sPageFit").value;
}
function CopyWithoutFormat() {
    if (!CheckFileOpened()) return;
    oframe.Activedocument.Application.Selection.PasteAndFormat(20);
}

function InsertPicture() {
    if (!CheckFileOpened()) return;
    //var tempFile = "D:\\Code\\github\\stone0090\\OfficeTools.OnlineEditWord\\DSOframer\\Image\\1.jpg";
    //var tempFile = "http://7xkhp9.com1.z0.glb.clouddn.com/blog/2013/01/28/dsoframer-introduction-resources/5.jpg";
	var tempFile = "C:\\六合章.bmp";	
    try {
        var oShape = oframe.ActiveDocument.Shapes.AddPicture(tempFile, false, true, oframe.ActiveDocument.Application.Selection.Range);
        oShape.WrapFormat.Type = 3;
        oShape.ZOrder(5);
        oframe.Activate();
    }
    catch (e) {
        alert("插入图片失败，请检查您的路径是否正确，物理路径和网络路径均可！");
    }
}

//模板套红
var strOriginPath = "";
function AddDocHeader(strHeader) {
    if (!CheckFileOpened()) return;

	if(strOriginPath == "")
	{
		strOriginPath = oframe.Caption;
		alert(strOriginPath);
	}

	var strTempFile = "C:\\红头文件模板.dot";

	// 将文件保存到临时文件
	var strSaveAs = "C:\\test套红头后.doc";
	

	 // 用模板新建一个文件
	 oframe.Open(strTempFile);

	 // 插入内容
	 oframe.ActiveDocument.Application.Selection.EndKey(6);
	 oframe.ActiveDocument.Application.Selection.InsertFile(strOriginPath, "", false, false, false);	 

	 // 另存
	 oframe.SaveAs(strSaveAs, 11);
	 oframe.Close();

	// 再次打开:这样当前路径才变为strSaveAs
	oframe.Open(strSaveAs);	

	//strOriginPath = oframe.Caption;
	//alert(strOriginPath);
	
}

//显示功能区（只对office2007以上版本有效）
function ToggleRibbonBar() {
    if (!CheckFileOpened()) return;
    var cmdbar = oframe.ActiveDocument.CommandBars("Ribbon");
    if (cmdbar) {
        // 可以通过 cmdbar.Height>120 来判断功能区已经打开
        try { cmdbar.visible = !cmdbar.visible; } catch (e) { } // 适用于2007
        try { oframe.ActiveDocument.ActiveWindow.ToggleRibbon(); } catch (e) { } // 适用于2007以上的版本
    }
}
function GetBookmarksCount() {
    if (!CheckFileOpened()) return;
    alert(oframe.ActiveDocument.Bookmarks.Count);
}
function BookmarksContent() {
    if (!CheckFileOpened()) return;
    for (var i = 1; i <= oframe.ActiveDocument.Bookmarks.Count; i++) {
        alert(oframe.ActiveDocument.Bookmarks(i).Range.Text);
        // var name = oframe.ActiveDocument.Bookmarks(i);
        // oframe.ActiveDocument.BookMarks(name).Range.Text
    }
}



//Excel相关
function AddNewExcel() {
    oframe.CreateNew("Excel.Sheet");
}


//PPT相关
function AddNewPPT() {
    oframe.CreateNew("PowerPoint.Show");
}



//上传word服务器的完整范例
//1、下载word到临时文件目录（要求ie浏览器必须开启了临时文件功能，系统默认是开启的）
//2、在页面上，使用DSOframer打开临时文件目录中的word，并进行编辑
//3、保存word到临时文件目录，然后再使用webfile将word上传到服务器
//备注：使用此方法需要把网站加入受信站点，并把安全级别设置为低，再开启Internet选项-安全-受信任站点-自定义级别-对未标记为可安全执行脚本的ActiviteX控件初始化并执行
function test() {
    debugger;
    alert(GetLocalTempFileName());
}

//用于上传下载的ActiviteX控件
var WebFile2;
//var webfile1 = new ActiveXObject("WebFileHelper.WebFile.1");
//var webfile2 = new ActiveXObject("WebFileHelper2.WebFile2.1");

function UploadWord(hostUrl) { //上传本地word到服务器上
    var tempFile1 = GetLocalTempFileName();
    var tempFile2 = GetLocalTempFileName();
    try {
        oframe.Save(tempFile1, true);
        var fso = new ActiveXObject("Scripting.FileSystemObject"); //word被占用时，上传会失败，所以用fso控件copy一份出来，再上传
        fso.CopyFile(tempFile1, tempFile2, true);
        //oframe.close(); //如果担心fso有兼容性问题，就必须先关闭oframe，才能成功上传word
    } catch (e) {
        alert("请先打开一个word！");
        return;
    }
    try {
        //WebFile2.MaxFileSize = 1258290;//该属性可以限制上传的容量
        WebFile2.UploadFile(tempFile2, "http://" + hostUrl + "/FileUpload.aspx");
        alert("上传成功！");
    } catch (e) {
        var errCode = e.number >> 16 & 0xFFFF;
        if (errCode == 32778)
            alert("上传失败:word文件容量过大，必须小于1.2M！");
        else
            alert("上传失败:" + e.message + "\n" + e.description);
    }
}

function DownloadWord(hostUrl) { //下载word到临时文件目录
    try {
        var tempFileName = GetLocalTempFileName();
        WebFile2.DownloadFile("http://" + hostUrl + "/FileDownload.aspx?random=" + Math.random(), tempFileName);
        //alert("成功下载word到临时文件目录：" + tempFileName);
        return tempFileName;
    } catch (e) {
        alert("下载失败，请检查您的ie设置！");
        return "";
    }
}

function GetLocalTempFileName() {
    if (WebFile2 == null) WebFile2 = document.getElementById("WebFile2");
    var time = new Date();
    var fileNameFix = PadLeft(time.getFullYear().toString(), 4) + PadLeft((time.getMonth() + 1).toString(), 2) + PadLeft(time.getDate().toString(), 2) + PadLeft(time.getHours().toString(), 2) + PadLeft(time.getMinutes().toString(), 2) + PadLeft(time.getSeconds().toString(), 2) + ("." + Math.random() * 1000).substr(0, 4);
    var tempFileName = WebFile2.GetLocalTempFile("temp") + "." + fileNameFix + ".doc"; //temp和.doc都是可以自己随意改的
    return tempFileName;
}

//字符串长度不足，左边补0
function PadLeft(str, len) {
    str = '00000000000000000000000000000' + str;
    return str.substr(str.length - len);
}


