import System;
import System.Windows.Forms;
import Fiddler;

// INTRODUCTION
//
// Well, hello there!
//
// Don't be scared! :-)
//
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first runs, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a 
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// The best way to edit this file is to install the FiddlerScript Editor, part of
// the free SyntaxEditing addons. Get it here: http://fiddler2.com/r/?SYNTAXVIEWINSTALL

// GLOBALIZATION NOTE: Save this file using UTF-8 Encoding.

// JScript.NET Reference
// http://fiddler2.com/r/?msdnjsnet
//
// FiddlerScript Reference
// http://fiddler2.com/r/?fiddlerscriptcookbook




class Handlers
{
	// *****************
	//
	// This is the Handlers class. Pretty much everything you ever add to FiddlerScript
	// belongs right inside here, or inside one of the already-existing functions below.
	//
	// *****************

	// The following snippet demonstrates a custom-bound column for the Web Sessions list.
	// See http://fiddler2.com/r/?fiddlercolumns for more info

	// The following snippet demonstrates how to create a custom tab that shows simple text
	/*
	public BindUITab("Flags")
	static function FlagsReport(arrSess: Session[]):String {
	var oSB: System.Text.StringBuilder = new System.Text.StringBuilder();
	for (var i:int = 0; i<arrSess.Length; i++)
	{
	oSB.AppendLine("SESSION FLAGS");
	oSB.AppendFormat("{0}: {1}\n", arrSess[i].id, arrSess[i].fullUrl);
	for(var sFlag in arrSess[i].oFlags)
	{
	oSB.AppendFormat("\t{0}:\t\t{1}\n", sFlag.Key, sFlag.Value);
	}
	}
	return oSB.ToString();
	}
	*/

	// You can create a custom menu like so:
	/*
	QuickLinkMenu("&Links") 
	QuickLinkItem("IE GeoLoc TestDrive", "http://ie.microsoft.com/testdrive/HTML5/Geolocation/Default.html")
	QuickLinkItem("FiddlerCore", "http://fiddler2.com/fiddlercore")
	public static function DoLinksMenu(sText: String, sAction: String)
	{
	Utilities.LaunchHyperlink(sAction);
	}
	*/

	public static RulesOption("Hide 304s")
	BindPref("fiddlerscript.rules.Hide304s")
	var m_Hide304s: boolean = false;

	// Cause Fiddler to override the Accept-Language header with one of the defined values
	public static RulesOption("Request &Japanese Content")
	var m_Japanese: boolean = false;

	// Automatic Authentication
	public static RulesOption("&Automatically Authenticate")
	BindPref("fiddlerscript.rules.AutoAuth")
	var m_AutoAuth: boolean = false;

	// Cause Fiddler to override the User-Agent header with one of the defined values
	// The page http://browserscope2.org/browse?category=selectors&ua=Mobile%20Safari is a good place to find updated versions of these
	RulesString("&User-Agents", true) 
	BindPref("fiddlerscript.ephemeral.UserAgentString")
	RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
	RulesStringValue(1,"WinPhone8.1", "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537")
	RulesStringValue(2,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
	RulesStringValue(3,"Safari9 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56")
	RulesStringValue(4,"iPad", "Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F5027d Safari/600.1.4")
	RulesStringValue(5,"iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4")
	RulesStringValue(6,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
	RulesStringValue(7,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
	RulesStringValue(8,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
	RulesStringValue(9,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
	RulesStringValue(10,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
	RulesStringValue(11,"IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")
	RulesStringValue(12,"IE 11 (Surface2)", "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko")
	RulesStringValue(13,"IE 11 (Win8.1)", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko")
	RulesStringValue(14,"Edge (Win10)", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.11082")
	RulesStringValue(15,"&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17")
	RulesStringValue(16,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
	RulesStringValue(17,"&Firefox 43", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")
	RulesStringValue(18,"&Firefox Phone", "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0")
	RulesStringValue(19,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0")
	RulesStringValue(20,"Chrome (Win)", "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.48 Safari/537.36")
	RulesStringValue(21,"Chrome (Android)", "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36")
	RulesStringValue(22,"ChromeBook", "Mozilla/5.0 (X11; CrOS x86_64 6680.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.74 Safari/537.36")
	RulesStringValue(23,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
	RulesStringValue(24,"Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")
	RulesStringValue(25,"&Custom...", "%CUSTOM%")
	public static var sUA: String = null;

	//public var discoverComments: String = "start";
	// Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
	public static RulesOption("Simulate &Modem Speeds", "Per&formance")
	var m_SimulateModem: boolean = false;

	// Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
	public static RulesOption("&Disable Caching", "Per&formance")
	var m_DisableCaching: boolean = false;

	public static RulesOption("Cache Always &Fresh", "Per&formance")
	var m_AlwaysFresh: boolean = false;
        
	// Force a manual reload of the script file.  Resets all
	// RulesOption variables to their defaults.
	public static ToolsAction("Reset Script")
	function DoManualReload() { 
		FiddlerObject.ReloadScript();
	}

	public static ContextAction("Decode Selected Sessions")
	function DoRemoveEncoding(oSessions: Session[]) {
		for (var x:int = 0; x < oSessions.Length; x++){
			oSessions[x].utilDecodeRequest();
			oSessions[x].utilDecodeResponse();
		}
		UI.actUpdateInspector(true,true);
	}	
	
	public static function DiscoRequestMsgType(oSession,filterStr){
		if (oSession.fullUrl.toLowerCase().indexOf("discoverui")>=0){  //hightlight the Discover library and target page
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function DiscoRequestMsgType");
			if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0 && oSession.HTTPMethodIs("OPTIONS") ){
				oSession["ui-backcolor"] = "dodgerblue";
				if (oSession["ui-comments"]===undefined){
					//oSession["ui-comments"] = "DscOPTIONS:"+oSession.fullUrl.toLowerCase().replace("http","").replace("s://","S:");
					oSession["ui-comments"] = oSession.fullUrl.toLowerCase().replace("http","OPT").replace("s://","S|");
					//comment the above line out if you're going to do work in OnBeforeResponse
				}
			}
			//blank string allows everything
			var filterString="0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30";
			if (filterStr.length>0){  
				filterString=filterStr;
			}
			filterString=","+filterString+","; // this helps avoid false positives
			
			if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0 && oSession.HTTPMethodIs("POST") ){
				oSession["ui-backcolor"] = "cornflowerblue";
				
				//allow Fiddler to decode beacon posts by adding encoding header
//				  /*  COMMENT this line to remove GZIP tweak of Beacon POSTS
				if ((oSession.fullUrl.toLowerCase().indexOf("x-discover-syncxhr=false")>=0) &&
					(oSession.fullUrl.toLowerCase().indexOf("x-discover-page-url=")>=0) &&
					(oSession.fullUrl.toLowerCase().indexOf("x-pageid=")>=0) &&
					(oSession.fullUrl.toLowerCase().indexOf("x-discover-messagetypes=")>=0) &&
					(oSession.fullUrl.toLowerCase().indexOf("x-discovertype=gui")>=0)) {
					
					oSession.oRequest["Content-Encoding"]="gzip";
					if (oSession["ui-comments"]===undefined){
						oSession["ui-comments"]="";
					}
					oSession["ui-comments"]="GZ"+oSession["ui-comments"];
					//FiddlerObject.log("["+oSession.id + "]DISCOVER: RUSSELL:"+oSession["ui-comments"]+"|");
					FiddlerObject.log("["+oSession.id + "]DISCOVER: DiscoRequestMsgType:Added Content-Encoding:gzip (BEACON)");
				}  //*/
				
				var strRequest = oSession.GetRequestBodyAsString();
				var typeArray = strRequest.split('"type":');
				//var typeArray = strRequest.split('{"type":'); 
				
				strRequest = "";
				var commapos = 0;
				var count = "_";
				var seperator = "";  // between type number and abbreviation
				var poststep = ":"; // between stepcounter and type number
				var countpos = 0;
				var messagesep = "|";  // used as the sepearator between each message in the shorthand
				var countstr = "";
				for (var i = 1; i < typeArray.length; i++) {
					commapos = typeArray[i].indexOf(",");
					countpos = typeArray[i].indexOf(',"count":');
					countstr = typeArray[i].substring(countpos+9);
					count = countstr.split(",")[0];
					
					if (typeArray[i].substring(0,commapos).length<3){
						//if (i>1){
						//	strRequest = strRequest+"|";
						//strRequest = strRequest+",";
						//}	
						strRequest = strRequest+messagesep+count+poststep;
						//strRequest = strRequest+count+"-";
						// starts right here
						if (typeArray[i].substring(0,commapos).indexOf("24")>-1){
							if (filterString.indexOf(",24,")>-1){	
								//strRequest = strRequest+"22"+seperator+"??";  // UNUSED
								strRequest = strRequest+"24"+seperator+"UNUSED";  // UNUSED
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}						
						else if (typeArray[i].substring(0,commapos).indexOf("23")>-1){
							if (filterString.indexOf(",23,")>-1){	
								//strRequest = strRequest+"22"+seperator+"??";  // UNUSED
								strRequest = strRequest+"23"+seperator+"UNUSED";  // UNUSED
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}						
						else if (typeArray[i].substring(0,commapos).indexOf("22")>-1){
							if (filterString.indexOf(",22,")>-1){	
								//strRequest = strRequest+"22"+seperator+"??";  // UNUSED
								strRequest = strRequest+"22"+seperator+"UNUSED";  // UNUSED
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("21")>-1){
							if (filterString.indexOf(",21,")>-1){	
								//strRequest = strRequest+"21"+seperator+"??";  // UNUSED
								strRequest = strRequest+"21"+seperator+"UNUSED";  // UNUSED
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("20")>-1){
							if (filterString.indexOf(",20,")>-1){	
								// add additional shorthand code for struggle events
								// wild mouse, rage click, dead link
								//strRequest = strRequest+"20"+seperator+"struggle";  // struggle
								strRequest = strRequest+"20"+seperator+"sg";  // Struggle
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("19")>-1){
							if (filterString.indexOf(",19,")>-1){
								//strRequest = strRequest+"19"+seperator+"datalayer";  
								strRequest = strRequest+"19"+seperator+"dL";  
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("18")>-1){
							if (filterString.indexOf(",18,")>-1){
								strRequest = strRequest+"18"+seperator+"mm"; 
								//strRequest = strRequest+"18"+seperator+"mousemove"; 
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("17")>-1){
							if (filterString.indexOf(",17,")>-1){
								strRequest = strRequest+"17"+seperator+"pa";  
								//strRequest = strRequest+"17"+seperator+"perfalert";  
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("16")>-1){
							if (filterString.indexOf(",16,")>-1){
								strRequest = strRequest+"16"+seperator+"dlm";  
								//strRequest = strRequest+"16"+seperator+"datalimit";  
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("15")>-1){
							if (filterString.indexOf(",15,")>-1){
								strRequest = strRequest+"15"+seperator+"fc";  
								//strRequest = strRequest+"15"+seperator+"formcomplete";
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}							
						else if (typeArray[i].substring(0,commapos).indexOf("14")>-1){
							if (filterString.indexOf(",14,")>-1){
								strRequest = strRequest+"14"+seperator+"co";  //  cookies
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}							
						}		
						else if (typeArray[i].substring(0,commapos).indexOf("13")>-1){
							if (filterString.indexOf(",13,")>-1){
								strRequest = strRequest+"13"+seperator+"geo";  // geolocations
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}	
							//*
						else if (typeArray[i].substring(0,commapos).indexOf("12")>-1){
							if (filterString.indexOf(",12,")>-1){
								var shortArray=typeArray[i].substring(0,150);
								if (shortArray.split('"fullDOM":false,').length>1){
									//if (shortArray.indexof('"fullDOM":false,')>-1){  // Fiddler didn't like this
									strRequest = strRequest+"12"+seperator+"dd";  // domdiff
								}
								else {
									strRequest = strRequest+"12"+seperator+"fd";  // fullDOM
								}	
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf(messagesep)+1);
								//this needs cleanup, the count can be more digits
							}
						}  //*/
						else if (typeArray[i].substring(0,commapos).indexOf("11")>-1){
							if (filterString.indexOf(",11,")>-1){
								strRequest = strRequest+"11"+seperator+"gs";  // gestures
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}			
						else if (typeArray[i].substring(0,commapos).indexOf("10")>-1){
							if (filterString.indexOf(",10,")>-1){
								strRequest = strRequest+"10"+seperator+"lyt";  // Layout
								//strRequest = strRequest+"10"+seperator+"layout";  // Layout
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("9")>-1){
							if (filterString.indexOf(",9,")>-1){
								strRequest = strRequest+"9"+seperator+"us";  // usability
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}		
						else if (typeArray[i].substring(0,commapos).indexOf("8")>-1){
							if (filterString.indexOf(",8,")>-1){	
								//strRequest = strRequest+"8"+seperator+"??";  // UNUSED
								strRequest = strRequest+"8"+seperator+"UNUSED";  // UNUSED
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("7")>-1){
							if (filterString.indexOf(",7,")>-1){
								strRequest = strRequest+"7"+seperator+"pf";  // performance
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}	
						else if (typeArray[i].substring(0,commapos).indexOf("6")>-1){
							if (filterString.indexOf(",6,")>-1){
								strRequest = strRequest+"6"+seperator+"ex";  // exceptions
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf("|")+1);
								//this needs cleanup, the count can be more digits
							}
						}							
						else if (typeArray[i].substring(0,commapos).indexOf("5")>-1){
							if (filterString.indexOf(",5,")>-1){
								strRequest = strRequest+"5"+seperator+"cm";  // custom
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf(messagesep)+1);
								//this needs cleanup, the count can be more digits
							}
							// id or name?
						}
						else if (typeArray[i].substring(0,commapos).indexOf("4")>-1){
							//the type array isn't a perfect delimeter, hence the weird i+1 below
							if (filterString.indexOf(",4,")>-1){
								var event="";
								if (typeArray[i+1].indexOf('"mousedown"}')==0){
									event="4"+seperator+"md";
									//event="4"+seperator+"msd";
									//event="4"+seperator+"mousedown";
								}
								else if (typeArray[i+1].indexOf('"mouseup"}')==0){
									event="4"+seperator+"mu";
									//event="4"+seperator+"msu";
									//event="4"+seperator+"mouseup";
								}	
								else if (typeArray[i+1].indexOf('"keydown"}')==0){
									event="4"+seperator+"kd";
									//event="4"+seperator+"kyd";
									//event="4"+seperator+"keydown";
								}
								else if (typeArray[i+1].indexOf('"keyup"}')==0){
									event="4"+seperator+"ku";
									//event="4"+seperator+"kyu";
									//event="4"+seperator+"keyup";
								}	
								else if (typeArray[i+1].indexOf('"dblclick"}')==0){
									event="4"+seperator+"dc";
									//event="4"+seperator+"dck";
									//event="4"+seperator+"dblclick";
								}	
								else if (typeArray[i+1].indexOf('"contextmenu"}')==0){
									event="4"+seperator+"rc";
									//event="4"+seperator+"dck";
									//event="4"+seperator+"dblclick";
								}
								else if (typeArray[i+1].indexOf('DCXLazyLoad')>-1){
									//event="4"+seperator+"Lazy";
									//event="4"+seperator+"LZ";
									event="4"+seperator+"LL";
									//event="4"+seperator+"LazyLoad";
								}	
								else if (typeArray[i+1].indexOf('DCX')>-1){
									//event="4"+seperator+"DCX";
									event="4"+seperator+"dcx";
								}									
								//dcevent types
								else if (typeArray[i+1].indexOf('"dcEvent":"valueChange",')>-1){
									//event="4"+seperator+"cg";
									event="4"+seperator+"chg";
									//event="4"+seperator+"change";
								}
								else if (typeArray[i+1].indexOf('"dcEvent":"click",')>-1){
									//event="4"+seperator+"ck";
									event="4"+seperator+"clk";
									//event="4"+seperator+"click";
								}
								else if (typeArray[i+1].indexOf('"dcEvent":"focusout",')>-1){
									event="4"+seperator+"fo";
									//event="4"+seperator+"fco";
									//event="4"+seperator+"focusout";
								}								
								else if (typeArray[i+1].indexOf('"dcEvent":"focus",')>-1){
									event="4"+seperator+"fs";
									//event="4"+seperator+"fcs";
									//event="4"+seperator+"focus";
								}
								else { // unhandled event type 4
									event="4"+seperator+"???";
									//event="4"+seperator+"??";
									//event="4"+seperator+"??WHAT??";
								}
								strRequest = strRequest+""+event;	
							}
							//*/
						}
						else if (typeArray[i].substring(0,commapos).indexOf("3")>-1){
							if (filterString.indexOf(",3,")>-1){
								strRequest = strRequest+"3"+seperator+"cn"; 
								//strRequest = strRequest+"3"+seperator+"connections";
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf(messagesep)+1);
								//this needs cleanup, the count can be more digits
							}
						}							
							//*/
						else if (typeArray[i].substring(0,commapos).indexOf("2")>-1){
							if (filterString.indexOf(",2,")>-1){
								//strRequest = strRequest+" 2:sv";  // screenview
								if (typeArray[i+1].indexOf('"UNLOAD"')>-1){
									strRequest = strRequest+"2"+seperator+"ul";
									//strRequest = strRequest+"2"+seperator+"UL";
									//strRequest = strRequest+"2"+seperator+"UNLOAD";
									i=i++;
								}
								if (typeArray[i+1].indexOf('"LOAD"')>-1){
									//strRequest = strRequest+"2"+seperator+"LOAD";
									strRequest = strRequest+"2"+seperator+"ld";
									//strRequest = strRequest+"2"+seperator+"LD";
									i=i++;
								} // load or unload
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf(messagesep)+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else if (typeArray[i].substring(0,commapos).indexOf("1")>-1){
							if (filterString.indexOf(",1,")>-1){
								strRequest = strRequest+"1"+seperator+"ct";  // clientstate
							}
							else {
								strRequest=strRequest.substring(0,strRequest.lastIndexOf(messagesep)+1);
								//this needs cleanup, the count can be more digits
							}
						}
						else {
							strRequest = strRequest+" "+typeArray[i].substring(0,commapos);
						}
						// ends here
					}
				}
				var XRW = oSession.oRequest["X-Requested-With"];
				var FMode = oSession.oRequest["Sec-Fetch-Mode"];
				if (XRW.indexOf("XMLHttpRequest")>-1){
					//XRW = "DscXHR:";
					XRW = "XHR:";
				}
				else if (XRW.indexOf("fetch")>-1){
					//XRW = "DscFETCH:";
					XRW = "FTC:";
				}	
				else if ((oSession.fullUrl.toLowerCase().indexOf("x-discover-syncxhr=false")>=0) &&
					(oSession.fullUrl.toLowerCase().indexOf("x-discover-page-url=")>=0) &&
					(oSession.fullUrl.toLowerCase().indexOf("x-pageid=")>=0) &&
					(oSession.fullUrl.toLowerCase().indexOf("x-discover-messagetypes=")>=0) &&
					(oSession.fullUrl.toLowerCase().indexOf("x-discovertype=gui")>=0)) {
					XRW = "*** Weird Beacon thing happened ***";
					if (FMode.indexOf("no-cors")>-1){
						XRW = "BCN:";
					}
				}
					
				//untested	
				else if (oSession.oRequest["X-Discover-SaaS-TLTSID"].indexOf("VMX")==0){
					oSession["ui-backcolor"] = "MediumBlue";
					XRW="VoltVMX_POST:";
				}					
				else if (oSession.fullUrl.toLowerCase().indexOf("mobilediscoveruipost")>=0 && oSession.HTTPMethodIs("POST") ){
					oSession["ui-backcolor"] = "MediumBlue";
					XRW="MobilePOST:";
				}
				//untested
					
					
				else {
					XRW = "*** What the hell kinda request is this??? ***";
				}
				
				if (oSession.fullUrl.toLowerCase().indexOf("https://")>-1){
					//XRW=XRW.replace(":","S:");
					XRW=XRW.replace(":","S");
				}
				if (oSession.oRequest["X-Requested-From"]=="dcxWorker"){
					XRW="w"+XRW;  // ❋
					//XRW="Worker:"+XRW;
				}
				if (oSession.oRequest["X-Discover-EndpointCheck"]=="true"){
					strRequest="|X-Discover-EndpointCheck";
				}
				if (oSession["ui-comments"]===undefined){
					oSession["ui-comments"] = XRW + strRequest;
					if (strRequest.length>1) {
						oSession["ui-comments"] = oSession["ui-comments"] + messagesep;
					}
				}
				else {
					oSession["ui-comments"] = oSession["ui-comments"] + ":" + XRW + strRequest+messagesep;
				}
				//oSession["ui-comments"] = "count:"+count+" countstr:"+countstr;
			
				strRequest="";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: DiscoMsgType: " + oSession["ui-comments"]);
				}	
		}		
	}
/*		
		1:ct					clientstate
		2:ld or ul 				load or unload
		3:cn					native network connection
		4:clk,chg,fs,fo,LL,dcx,mu,md,kd,ku,dc
			click,change,focus,focusout,DCXLazyLoad,DCX*,mouseup,mousedown,keydown,keyup,dblclick
		5:cm					custom
		6:ex					Exceptions
		7:pf					performance
		8:UNUSED				-UNUSED-
		9:us					usability
		10:lyt					native layout 
		11:gs					gesture
		12:fd or dd				FullDom or DomDiff
		13:geo					geolocation
		14:co					cookies
		15:fc					formcomplete
		16:lmt					datalimit
		17:pa					perfalert
		18:mm					mousemove
		19:dL					datalayer	
		20:sg					struggle, wild mouse, rage click, dead link
*/												
				
		
		// ❤	❥	웃	유	🍾	☮	☏	☢	☠	✔	☑	♚	▲	♪	฿	Ɖ
		// ♥	♂	♀	✉	☣	☤	✘	☒	♛	▼	♫	¡
		// ღ	ツ	☼	☁	❅	♾️	✎	©	®	™	Σ	✪	✯	☭	➳	•	✞
		// °	✿		☃	☂	✄	¢	€	£	∞	✫	★	½	☯	✡	☪
		// ✬ ✭ ✮ ✯ ✰ ✡ ✢ ✣ ✤ ✥ ❋ ✦ ✧ ✩ ✪ ✫ ★
		// zʎxʍʌnʇsɹbdouɯʅʞɾᴉɥƃⅎǝpɔqɐ 
		// Z⅄XϺɅՈꓕSꓤꝹԀONꟽ⅂ꓘᒋIH⅁ᖵƎᗡϽꓭ∀
		// ➟ ➡ ➢ ➣ ➤ ➥ ➦ ➧ ➨ ➚ ➘ ➙ ➛ ➜ ➝ ➞ ➸ ♐ ➲ ➳ ➳ ➴ ➵ ➶ ➷ ➸ ➹ ➺ // odd weird characters
					
//filter example:   REGEX:(?insx).*\.(jRUSSELLs\?.*|js|otf|gif|png|json|jpg|svg|bmp|css|jpeg|map|pdf|ico|eot|woff|woff2|axd|ttf|gif\?.*|png\?.*|jpg\?.*|svg\?.*|bmp\?.*|css\?.*|jpeg\?.*|pdf\?.*|ico\?.*|eot\?.*|woff\?.*|woff2\?.*|axd\?.*|ttf\?.*|otf\?.*|map\?.*)$		
                                                               
                                                                
/*
		
    RRRRRRRRRRRRRRRRR       EEEEEEEEEEEEEEEEEEEEEE       QQQQQQQQQ      
    R::::::::::::::::R      E::::::::::::::::::::E     QQ:::::::::QQ    
    R::::::RRRRRR:::::R     E::::::::::::::::::::E   QQ:::::::::::::QQ  
    RR:::::R     R:::::R    EE::::::EEEEEEEEE::::E  Q:::::::QQQ:::::::Q 
      R::::R     R:::::R    E:::::E         EEEEEE  Q::::::O   Q::::::Q 
      R::::R     R:::::R    E:::::E                 Q:::::O     Q:::::Q 
      R::::RRRRRR:::::R     E::::::EEEEEEEEEE       Q:::::O     Q:::::Q 
      R:::::::::::::RR      E:::::::::::::::E       Q:::::O     Q:::::Q 
      R::::RRRRRR:::::R     E:::::::::::::::E       Q:::::O     Q:::::Q 
      R::::R     R:::::R    E::::::EEEEEEEEEE       Q:::::O     Q:::::Q 
      R::::R     R:::::R    E:::::E                 Q:::::O  QQQQ:::::Q 
      R::::R     R:::::R    E:::::E         EEEEEE  Q::::::O Q::::::::Q 
    RR:::::R     R:::::R    EE::::::EEEEEEEE:::::E  Q:::::::QQ::::::::Q 
    R::::::R     R:::::R    E::::::::::::::::::::E   QQ::::::::::::::Q  
    R::::::R     R:::::R    E::::::::::::::::::::E     QQ:::::::::::Q   
    RRRRRRRR     RRRRRRR    EEEEEEEEEEEEEEEEEEEEEE       QQQQQQQQ::::QQ 
                                                                 Q:::::Q
                                                                  QQQQQQ
//*/
                                                                					
	static function OnBeforeRequest(oSession: Session) {
		FiddlerObject.log("["+oSession.id + "]DISCOVER:______________________");
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function OnBeforeRequest");
		//change port number or host
		//if (oSession.host=="www.bayden.com:8080") {
		//  oSession.host="test.bayden.com:9090";
		//}        
        
		//modify URL and query string
		//if (oSession.PathAndQuery=="/version1.css") {
		//  oSession.PathAndQuery="/version2.css";
		//}        
        
		//User Agent gets overwritten 30 lines down, comment that out if you are going to use this.
		//oSession.oRequest["User-Agent"]="Googlebot/2.X (+http://www.googlebot.com/bot.html)";
		
		// start custom code by Russell _______________________________________________________________________________
		
		//Beacon issues hackfix
		//		DiscoBeaconFix(oSession);
		
		//Russell Debugging function - Diplay content of post in comments column
		DiscoRequestMsgType(oSession,"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25");	// display only, should be safe to leave on all the time
		//DiscoRequestMsgType(oSession,"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25");  // second argument is an allow filter string
		
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function OnBeforeRequest");

			
		// Sets a session variable on GETs of the target page for data integrity testing
//		addSessionIDtoTargetGETonRequest(oSession);  // should be safe to leave on all the time
		
		//System.Diagnostics.Process.Start("c:\russell.bat");
		
		// remove/change origin from request header 
		//		oSession.oRequest.headers.Remove("Origin");
		//		oSession.oRequest["Origin"] = "https://www.discoverstore.hclcx.com";
		
		// advanced removal of DISCO header values on OPTION request
		//		wipeDiscoverRequest(oSession);
		
		/*
		if (oSession.fullUrl.toLowerCase().indexOf("index-embed")>=0) {
			oSession.oRequest.headers.Remove("Access-Control-Request-Method");
			oSession.oRequest.headers.Remove("Access-Control-Request-Headers");
			//oSession.oRequest.headers.Remove("Origin");
			oSession["ui-comments"]="hacked out AC headers";
		}  //*/
		
		
		
		
		// REVERSE PROXY REVERSE PROXY REVERSE PROXY REVERSE PROXY REVERSE PROXY REVERSE PROXY REVERSE PROXY REVERSE PROXY 
		// added by Loryn Williams to support REVERSE PROXY
		// has issues with HTTPS (SSL) Currently
		// http://206.198.145.95:8888/
		// http://206.198.145.95:8888/DiscoverUIPost.php
		
		var redirecthost = "";
		//redirecthost="unicacx-demo-1.hcltechsw.com";
		//redirecthost="unicacx-demo-1.hcltechsw.com/journey/api/entrysources/rest/data";
		// redirecthost="34.120.144.173/journey/api/entrysources/rest/data";
		// redirecthost="neverssl.com";
		// redirecthost="neverssl.com";
		// redirecthost="206.198.145.110";  // Loryn's Skytap
		// redirecthost="unidiscover-packet-fwdr.sbx0067.play.hclsofy.com"
		// redirecthost="net.discoverstore.hclcx.com"

		
		if (oSession.host.toLowerCase().indexOf(":8888")>-1){
			oSession["ui-comments"]=oSession["ui-comments"]+"Reverse Proxy 8888 ????"
		}
		if (oSession.host.toLowerCase().indexOf("unicacx-demo-1.hcltechsw.com")>-1){
			oSession["ui-comments"]=oSession["ui-comments"]+"Reverse Proxy HOST ????"
		}
		if (redirecthost.length>0){
			oSession["ui-comments"]="Reverse Proxy is configured";
			if (oSession.host.toLowerCase().indexOf(":8888")>-1)
			{
				//if(oSession.HostnameIs("servername.com") && oSession.isHTTPS){
				//  oSession.oRequest.headers.UriScheme = "http";
				//  oSession.oRequest.headers.UriScheme = "https";
				// }
				oSession["ui-comments"]="ReverseProxy: "+oSession.host;
				oSession.host = redirecthost;
				oSession["ui-comments"]=oSession["ui-comments"]+" -> "+oSession.host;
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Reverse Proxy Host:"+oSession.host);
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Reverse Proxy URL:"+oSession.url);
			}		
		}
	
		
		
		var targetPage="";
		//targetPage="35.197.214.91:8443/DiscoverUIPost.php";  // this enables the below code to run and change a target URL
		if (targetPage.length>0) {
			if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0) {
				//post soemwhere else
				oSession.url = targetPage;
				FiddlerObject.log("Changed Target Page:"+targetPage);
			}
		}
	
	
		var FiddlerReplaySessionID=""; 
		//FiddlerReplaySessionID="Juan011";  // header value
		//FiddlerReplaySessionID="Laviaguerre001";  // this enables the below code to run and hardcode a session ID
		//FiddlerReplaySessionID=oSession.oRequest["X-Discover-SaaS-TLTSID"]+"1";
		if (FiddlerReplaySessionID.length>0) {
			if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0){
				//if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0 && oSession.HTTPMethodIs("POST") ){
				oSession.oRequest["X-Discover-SaaS-TLTSID"] = FiddlerReplaySessionID;
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Changed X-Discover-SaaS-TLTSID:"+FiddlerReplaySessionID);
			}
		}		
		
		
		///*
		var sessionID="";  // header value
		//sessionID="TestSession001";  // this enables the below code to run and hardcode a session ID
		//sessionID="TestSession002";
		//sessionID="TestSession003";
		//sessionID="TestSession004";
		//sessionID="TestSession005";
		if (sessionID.length>0) {
			if((oSession.oRequest["Referer"].indexOf("availity.com")>-1) ||
				(oSession.oRequest["Referer"].indexOf("bcbst.com")>-1) ||
				(oSession.oRequest["Referer"].indexOf("crossdomain3.com")>-1) ||
				(oSession.oRequest["Referer"].indexOf("crossdomain4.com")>-1) ||
				(oSession.oRequest["Referer"].indexOf("crossdomain5.com")>-1)) { 
				if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0 && oSession.HTTPMethodIs("POST") ){
					oSession.oRequest["X-Discover-SaaS-TLTSID"] = sessionID;
					oSession.oRequest['Cookie'] = oSession.oRequest['Cookie'] ? oSession.oRequest['Cookie'].Replace('TLTSID=','ignored_TLTSID_old=') + ';TLTSID='+sessionID : 'TLTSID='+sessionID;
					FiddlerObject.log("["+oSession.id + "]DISCOVER: Changed X-Discover-SaaS-TLTSID/Cookie:"+sessionID);
				}
			}
		}  // */
		
		//ON-PREM COOKIE hardcode METHOD (not header) COOKIE COOKIE COOKIE COOKIE COOKIE COOKIE COOKIE 
		var TLTSIDcookie = "";
		//TLTSIDcookie = "HardCodedCookie001";  // this enables the below code to run and hardcode a TLTSID cookie
		if (TLTSIDcookie.length>0) {
			oSession.oRequest['Cookie'] = oSession.oRequest['Cookie'] ? oSession.oRequest['Cookie'].Replace('TLTSID=','ignored_TLTSID_old=') + ';TLTSID='+TLTSIDcookie : 'TLTSID='+TLTSIDcookie;
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Changed Cookie:"+TLTSIDcookie);
		}	
		
		//this function rewrites Disco Headers to impersonate Tealeaf headers for POSTs and OPTIONS
		//		impersonateTealeafRequest(oSession); 		
		//don't forget it has to be handled in OnBeforeResponse too
 
		//this function rewrites Disco Headers to impersonate Discover headers for POSTs and OPTIONS
		//		impersonateDiscoverRequest(oSession); 		
		//don't forget it has to be handled in OnBeforeResponse too	
		
		
		/*
		var appKey="";  // For Tealeaf SaaS
		//appKey="HardCodedAppKeyRussell";   // this enables the below code to run and change an appkey
		if (appKey.length>0) {
		if((oSession.hostname.toLowerCase().indexOf("acoustic-demo.com")>-1) ||
		(oSession.hostname.toLowerCase().indexOf("teabooster")>-1)       ||
		(oSession.hostname.toLowerCase().indexOf("brilliantcollector.com")>-1)) {
		//X-Tealeaf-SaaS-AppKey
		oSession.oRequest["X-Tealeaf-SaaS-AppKey"] = appKey;
		}
		}		//   */
		
		// end custom code by Russell _______________________________________________________________________________
        
		
		
        
		if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
			oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith); 
		}
		if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
			oSession["x-overridehost"] = gs_OverrideHostWith; 
		}

		if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
			oSession["x-breakrequest"]="uri";
		}

		if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
			oSession["x-breakrequest"]="method";
		}

		if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
			oSession["ui-bold"]="QuickExec";
		}

		if (m_SimulateModem) {
			// Delay sends by 300ms per KB uploaded.
			oSession["request-trickle-delay"] = "300"; 
			// Delay receives by 150ms per KB downloaded.
			oSession["response-trickle-delay"] = "150"; 
		}

		if (m_DisableCaching) {
			oSession.oRequest.headers.Remove("If-None-Match");
			oSession.oRequest.headers.Remove("If-Modified-Since");
			oSession.oRequest["Pragma"] = "no-cache";
		}

		// User-Agent Overrides
		if (null != sUA) {
			oSession.oRequest["User-Agent"] = sUA; 
		}

		if (m_Japanese) {
			oSession.oRequest["Accept-Language"] = "ja";
		}

		if (m_AutoAuth) {
			// Automatically respond to any authentication challenges using the 
			// current Fiddler user's credentials. You can change (default)
			// to a domain\\username:password string if preferred.
			//
			// WARNING: This setting poses a security risk if remote 
			// connections are permitted!
			oSession["X-AutoAuth"] = "(default)";
		}

		if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
		{
			oSession.utilCreateResponseAndBypassServer();
			oSession.responseCode = 304;
			oSession["ui-backcolor"] = "Lavender";
		}
		FiddlerObject.log("["+oSession.id + "]DISCOVER: End Function OnBeforeRequest");
	}
						
	
	
	public static function DiscoBeaconFix(oSession){
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function DiscoBeaconFix");
		// this is changing the POST, could be dangerous, improve IF so only Beacon without content-encoding is modified
		// needs to be before DiscoRequestMsgType 
		if ((oSession.oRequest["Content-Encoding"].length==0)&&
			(oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0)&&
			(oSession.HTTPMethodIs("POST"))&&
			(oSession.oRequest["X-Requested-With"].length==0))	{
			// //oSession.fullUrl=oSession.fullUrl+"&Content-Encoding=gzip";  //Does this work too?  No it doesn't.
			oSession.oRequest["Content-Encoding"]="gzip";  // this will allow fiddler to read Beacon POSTS (DNCA too)

			//copy the querystring values into a header
			// required for sessioning
			oSession.oRequest["X-Discover-SaaS-TLTSID"]=Utilities.UrlDecode(oSession.fullUrl.substring(oSession.fullUrl.indexOf("X-Discover-SaaS-TLTSID=")+23));
			//*
			// required for vhit agent to process
			oSession.oRequest["Content-Type"]=Utilities.UrlDecode(oSession.fullUrl.substring(oSession.fullUrl.indexOf("Content-Type=")+13));
			oSession.oRequest["Content-Type"]=oSession.oRequest["Content-Type"].Substring(0,oSession.oRequest["Content-Type"].IndexOf("&"));//*/
			//*
			// required for vhit agent to process
			oSession.oRequest["X-Discover"]=Utilities.UrlDecode(oSession.fullUrl.substring(oSession.fullUrl.indexOf("X-Discover=")+11));
			oSession.oRequest["X-Discover"]=oSession.oRequest["X-Discover"].Substring(0,oSession.oRequest["X-Discover"].IndexOf("&"));//*/			

		} else {
			// debugging Beacon issues // move header value to querystring
			//oSession.fullUrl=oSession.fullUrl+"?Russell=test&X-Discover-SaaS-TLTSID="+oSession.oRequest["X-Discover-SaaS-TLTSID"];
			//oSession.oRequest.headers.Remove("X-Discover-SaaS-TLTSID");
		}		
	}
		
	public static function addSessionIDtoTargetGETonRequest(oSession) {
		// The following snippet allows a TLTSID to be provided in the querystring
		if(oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0) {
			
			if(oSession.RequestMethod=="GET"){
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function addSessionIDtoTargetGETonRequest");
				//if (oSession.oRequest.headers.Exists("X-Discover-SaaS-TLTSID")){
				if (oSession.oRequest["X-Discover-SaaS-TLTSID"].length==0){
					if (oSession.oRequest['Cookie'].toLowerCase().indexOf("tltsid=")==-1){
						// grab TLTSID from query string
						var position = oSession.fullUrl.toLowerCase().indexOf("tltsid=");
						var TLTSID = "";
						if (position>-1) {
							TLTSID=oSession.fullUrl.substring(position+7);
							position=TLTSID.indexOf("&");
							if (position>-1) {
								TLTSID=TLTSID.substring(0,position);
							}
							// set header value
							oSession.oRequest["X-Discover-SaaS-TLTSID"]=TLTSID;
							// set cookie value
							oSession.oRequest["Cookie"] = (oSession.oRequest["Cookie"] + ";TLTSID="+TLTSID);
							oSession["ui-comments"]="Added X-Discover-SaaS-TLTSID & cookie value" ;
						}
					}
				}
			}
		}  // snippet above sessions togethet discoverUIPost.php GETs for ease in testing
	}				
						
						
	
											
	public static function impersonateDiscoverRequest(oSession) {
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function impersonateDiscoverRequest");

		//oSession.oRequest["X-Tealeaf-SaaS-appkey"]=oSession.oRequest["x-discover-saas-appkey"]; //not needed
		//oSession.oRequest.headers.Remove("x-discover-saas-appkey");
		
		if (oSession.oRequest.headers.HTTPMethod=="OPTIONS"){	
			oSession.oRequest.headers.Remove("Access-Control-Request-Headers");
			oSession.oRequest["Access-Control-Request-Headers"]="content-encoding,content-type,x-pageid,x-requested-with,x-discover,x-discover-messagetypes,x-discover-page-url,x-discover-saas-tltsid,x-discover-syncxhr,x-discovertype,x-wcxsid";
			//content-encoding,content-type,x-pageid,x-requested-with,x-tealeaf,x-tealeaf-messagetypes,x-tealeaf-page-url,x-tealeaf-saas-tltsid,x-tealeaf-syncxhr,x-tealeaftype,x-wcxsid
			// You have to do the next line in OnBeforeRespone
			//oSession.oResponse["Access-Control-Allow-Headers"]="X-WCXSID, X-PageId, X-Requested-With, origin, content-type, accept, content-encoding, Cookie, x-tealeaf-saas-appkey, x-tealeaf-saas-tltsid, x-discover-saas-tltsid, x-tealeaf, x-discover, x-tealeaf-messagetypes, x-discover-messagetypes, x-tealeaf-page-url, x-discover-page-url, x-tealeaftype, x-discovertype, X-Tealeaf-SyncXHR, X-Discover-SyncXHR, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Headers,X-Content-Type-Options";
		}
		
		if (oSession.oRequest.headers.HTTPMethod=="POST"){			
			oSession.oRequest["X-Discover-SaaS-TLTSID"]=oSession.oRequest["x-tealeaf-saas-tltsid"];
			oSession.oRequest.headers.Remove("x-tealeaf-saas-tltsid");
		
			oSession.oRequest["X-Discover"]=oSession.oRequest["x-tealeaf"];
			oSession.oRequest.headers.Remove("x-tealeaf");
		
			oSession.oRequest["X-Discover-MessageTypes"]=oSession.oRequest["x-tealeaf-messagetypes"];
			oSession.oRequest.headers.Remove("x-tealeaf-messagetypes");
		
			oSession.oRequest["X-Dicover-Page-Url"]=oSession.oRequest["x-tealeaf-page-url"];
			oSession.oRequest.headers.Remove("x-tealeaf-page-url");
		
			oSession.oRequest["X-DiscoverType"]=oSession.oRequest["x-tealeaftype"];
			oSession.oRequest.headers.Remove("x-tealeaftype");
		
			oSession.oRequest["X-Discover-SyncXHR"]=oSession.oRequest["x-tealeaf-syncxhr"];	
			oSession.oRequest.headers.Remove("x-tealeaf-syncxhr");
		}
	}		
		
	public static function impersonateTealeafRequest(oSession) {
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function impersonateTealeafRequest");

		//oSession.oRequest["X-Tealeaf-SaaS-appkey"]=oSession.oRequest["x-discover-saas-appkey"]; //not needed
		//oSession.oRequest.headers.Remove("x-discover-saas-appkey");
		
		if (oSession.oRequest.headers.HTTPMethod=="OPTIONS"){	
			oSession.oRequest.headers.Remove("Access-Control-Request-Headers");
			oSession.oRequest["Access-Control-Request-Headers"]="content-encoding,content-type,x-pageid,x-requested-with,x-tealeaf,x-tealeaf-messagetypes,x-tealeaf-page-url,x-tealeaf-saas-tltsid,x-tealeaf-syncxhr,x-tealeaftype,x-wcxsid";
			//content-encoding,content-type,x-pageid,x-requested-with,x-tealeaf,x-tealeaf-messagetypes,x-tealeaf-page-url,x-tealeaf-saas-tltsid,x-tealeaf-syncxhr,x-tealeaftype,x-wcxsid
			// You have to do the next line in OnBeforeRespone
			//oSession.oResponse["Access-Control-Allow-Headers"]="X-WCXSID, X-PageId, X-Requested-With, origin, content-type, accept, content-encoding, Cookie, x-tealeaf-saas-appkey, x-tealeaf-saas-tltsid, x-discover-saas-tltsid, x-tealeaf, x-discover, x-tealeaf-messagetypes, x-discover-messagetypes, x-tealeaf-page-url, x-discover-page-url, x-tealeaftype, x-discovertype, X-Tealeaf-SyncXHR, X-Discover-SyncXHR, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Headers,X-Content-Type-Options";
		}
		
		if (oSession.oRequest.headers.HTTPMethod=="POST"){			
			oSession.oRequest["X-Tealeaf-SaaS-TLTSID"]=oSession.oRequest["x-discover-saas-tltsid"];
			oSession.oRequest.headers.Remove("x-discover-saas-tltsid");
		
			oSession.oRequest["X-Tealeaf"]=oSession.oRequest["x-discover"];
			oSession.oRequest.headers.Remove("x-discover");
		
			oSession.oRequest["X-Tealeaf-MessageTypes"]=oSession.oRequest["x-discover-messagetypes"];
			oSession.oRequest.headers.Remove("x-discover-messagetypes");
		
			oSession.oRequest["X-Tealeaf-Page-Url"]=oSession.oRequest["x-discover-page-url"];
			oSession.oRequest.headers.Remove("x-discover-page-url");
		
			oSession.oRequest["X-TealeafType"]=oSession.oRequest["x-discovertype"];
			oSession.oRequest.headers.Remove("x-discovertype");
		
			oSession.oRequest["X-Tealeaf-SyncXHR"]=oSession.oRequest["x-discover-syncxhr"];	
			oSession.oRequest.headers.Remove("x-discover-syncxhr");
		}
	}
		
	public static function wipeDiscoverRequest(oSession) {
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function wipeDiscoverRequest");

		//oSession.oRequest["X-Tealeaf-SaaS-appkey"]=oSession.oRequest["x-discover-saas-appkey"]; //not needed
		//oSession.oRequest.headers.Remove("x-discover-saas-appkey");
		
		if (oSession.oRequest.headers.HTTPMethod=="OPTIONS"){	
			oSession.oRequest.headers.Remove("Access-Control-Request-Headers");
			oSession.oRequest["Access-Control-Request-Headers"]="content-encoding,content-type";
			
			//oSession.oRequest["Access-Control-Request-Headers"]="content-encoding,content-type,x-pageid,x-requested-with,x-tealeaf,x-tealeaf-messagetypes,x-tealeaf-page-url,x-tealeaf-saas-tltsid,x-tealeaf-syncxhr,x-tealeaftype,x-wcxsid";
			
			
			//content-encoding,content-type,x-pageid,x-requested-with,x-tealeaf,x-tealeaf-messagetypes,x-tealeaf-page-url,x-tealeaf-saas-tltsid,x-tealeaf-syncxhr,x-tealeaftype,x-wcxsid
			// You have to do the next line in OnBeforeRespone
			//oSession.oResponse["Access-Control-Allow-Headers"]="X-WCXSID, X-PageId, X-Requested-With, origin, content-type, accept, content-encoding, Cookie, x-tealeaf-saas-appkey, x-tealeaf-saas-tltsid, x-discover-saas-tltsid, x-tealeaf, x-discover, x-tealeaf-messagetypes, x-discover-messagetypes, x-tealeaf-page-url, x-discover-page-url, x-tealeaftype, x-discovertype, X-Tealeaf-SyncXHR, X-Discover-SyncXHR, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Headers,X-Content-Type-Options";
		}
	}										
			
	public static function impersonateTealeafOptionsResponse(oSession) {
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function impersonateTealeafOptionsResponse");
		//add code here so that Disco Headers impersonate Tealeaf headers
		if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0) {
			if (oSession.oRequest.headers.HTTPMethod=="OPTIONS"){			
				oSession.oResponse["Access-Control-Allow-Headers"]="x-requested-from,X-WCXSID, X-PageId, X-Requested-With, origin, content-type, accept, content-encoding, Cookie, x-tealeaf-saas-appkey, x-tealeaf-saas-tltsid, x-discover-saas-tltsid, x-tealeaf, x-discover, x-tealeaf-messagetypes, x-discover-messagetypes, x-tealeaf-page-url, x-discover-page-url, x-tealeaftype, x-discovertype, X-Tealeaf-SyncXHR, X-Discover-SyncXHR, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Headers,X-Content-Type-Options";
			}
		}
		//have to muck with the headers going and coming if you're impersonating Tealeaf
	}			
		
	public static function impersonateDiscoverOptionsResponse(oSession) {
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function impersonateDiscoverOptionsResponse");
		//add code here so that Disco Headers impersonate Discover headers
		if ((oSession.oRequest.headers.HTTPMethod=="OPTIONS")&&(oSession.url.toLowerCase().indexOf("discoveruipost.php")>-1)){			
			//oSession.oResponse["Access-Control-Allow-Headers"]="X-WCXSID, X-PageId, X-Requested-With, origin, content-type, accept, content-encoding, Cookie, x-tealeaf-saas-appkey, x-tealeaf-saas-tltsid, x-discover-saas-tltsid, x-tealeaf, x-discover, x-tealeaf-messagetypes, x-discover-messagetypes, x-tealeaf-page-url, x-discover-page-url, x-tealeaftype, x-discovertype, X-Tealeaf-SyncXHR, X-Discover-SyncXHR, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Headers,X-Content-Type-Options";
			oSession.oResponse["Access-Control-Allow-Headers"]="content-type,x-discover,x-discover-messagetypes,x-discover-page-url,x-discover-saas-tltsid,x-discover-syncxhr,x-discovertype,x-pageid,x-requested-with";
			
			//added for strengthening cross domain post security
			oSession.oResponse["Access-Control-Allow-Origin"]=oSession.oRequest.headers["Origin"]; 																		
		}
		//have to muck with the headers going and coming if you're impersonating Discover
	}		
		
	public static function AllowOriginResponse(oSession) {
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function AllowOriginResponse");
		oSession.oResponse["Access-Control-Allow-Origin"]=oSession.oRequest.headers["Origin"]; 
		oSession.oResponse["Access-Control-Allow-Methods"]="GET,HEAD,OPTIONS,POST,PUT,FETCH";
		
	}		
																													
	static function OnBeforeRequestORIG(oSession: Session) {
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function OnBeforeRequestORIG");
		// Sample Rule: Color ASPX requests in RED
		// if (oSession.uriContains(".aspx")) {	oSession["ui-color"] = "red";	}

		// Sample Rule: Flag POSTs to fiddler2.com in italics
		// if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {	oSession["ui-italic"] = "yup";	}

		// Sample Rule: Break requests for URLs containing "/sandbox/"
		// if (oSession.uriContains("/sandbox/")) {
		//     oSession.oFlags["x-breakrequest"] = "yup";	// Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
		// }

		if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
			oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith); 
		}
		if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
			oSession["x-overridehost"] = gs_OverrideHostWith; 
		}

		if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
			oSession["x-breakrequest"]="uri";
		}

		if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
			oSession["x-breakrequest"]="method";
		}

		if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
			oSession["ui-bold"]="QuickExec";
		}

		if (m_SimulateModem) {
			// Delay sends by 300ms per KB uploaded.
			oSession["request-trickle-delay"] = "300"; 
			// Delay receives by 150ms per KB downloaded.
			oSession["response-trickle-delay"] = "150"; 
		}

		if (m_DisableCaching) {
			oSession.oRequest.headers.Remove("If-None-Match");
			oSession.oRequest.headers.Remove("If-Modified-Since");
			oSession.oRequest["Pragma"] = "no-cache";
		}

		// User-Agent Overrides
		if (null != sUA) {
			oSession.oRequest["User-Agent"] = sUA; 
		}

		if (m_Japanese) {
			oSession.oRequest["Accept-Language"] = "ja";
		}

		if (m_AutoAuth) {
			// Automatically respond to any authentication challenges using the 
			// current Fiddler user's credentials. You can change (default)
			// to a domain\\username:password string if preferred.
			//
			// WARNING: This setting poses a security risk if remote 
			// connections are permitted!
			oSession["X-AutoAuth"] = "(default)";
		}

		if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
		{
			oSession.utilCreateResponseAndBypassServer();
			oSession.responseCode = 304;
			oSession["ui-backcolor"] = "Lavender";
		}

		if (oSession.HostnameIs("www.TonyAuth.commercetest1.tk")){
			oSession.bypassGateway = true;
			oSession["x-overrideHost"] = "184.170.232.228:6443";
		}	
		
	}

	// This function is called immediately after a set of request headers has
	// been read from the client. This is typically too early to do much useful
	// work, since the body hasn't yet been read, but sometimes it may be useful.
	//
	// For instance, see 
	// http://blogs.msdn.com/b/fiddler/archive/2011/11/05/http-expect-continue-delays-transmitting-post-bodies-by-up-to-350-milliseconds.aspx
	// for one useful thing you can do with this handler.
	//
	// Note: oSession.requestBodyBytes is not available within this function!
	/*
	static function OnPeekAtRequestHeaders(oSession: Session) {
	var sProc = ("" + oSession["x-ProcessInfo"]).ToLower();
	if (!sProc.StartsWith("mylowercaseappname")) oSession["ui-hide"] = "NotMyApp";
	}
	*/

	//
	// If a given session has response streaming enabled, then the OnBeforeResponse function 
	// is actually called AFTER the response was returned to the client.
	//
	// In contrast, this OnPeekAtResponseHeaders function is called before the response headers are 
	// sent to the client (and before the body is read from the server).  Hence this is an opportune time 
	// to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers 
	// which suggests that tampering with the response body is necessary.
	// 
	// Note: oSession.responseBodyBytes is not available within this function!
	//
	static function OnPeekAtResponseHeaders(oSession: Session) {
		//FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
		if (m_DisableCaching) {
			oSession.oResponse.headers.Remove("Expires");
			oSession.oResponse["Cache-Control"] = "no-cache";
		}

		if ((bpStatus>0) && (oSession.responseCode == bpStatus)) {
			oSession["x-breakresponse"]="status";
			oSession.bBufferResponse = true;
		}
        
		if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)) {
			oSession["x-breakresponse"]="uri";
			oSession.bBufferResponse = true;
		}

	}


	
	   /*
	public static BindUIColumn("X-Discover-SaaS-TLTSID",140,2)
	function DiscoHeaderTLTSID(oSession: Session){
		if (null != oSession.oRequest) return oSession.oRequest["X-Discover-SaaS-TLTSID"]; 
	}    //*/
	
		
	   /*
	public static BindUIColumn("TLTSID(cookie)",140,3)
	function DiscoCookieTLTSID(oSession: Session){
		var result = "";
		if (null != oSession.oRequest){
			var position=oSession.oRequest['Cookie'].indexOf("TLTSID=");
			if(position>-1){
				//result=oSession.oRequest['Cookie'].substring(position+7,position+39);
				result=oSession.oRequest['Cookie'].substring(position+7);
				position = result.indexOf(";");
				if(position>-1){
					result=result.substring(0,position);
				}
			}
		}
		return result;
	}			// */
		
			
	//    /*    // Combined Column
	public static BindUIColumn("TLTSID",86,2)
	function DiscoTLTSIDcombined(oSession: Session){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function DiscoTLTSIDcombined");
		var result = "";
		if (null != oSession.oRequest){
			var cookiePos=oSession.oRequest['Cookie'].indexOf("TLTSID=");
			var queryPos=oSession.fullUrl.toLowerCase().indexOf("x-discover-saas-tltsid=");
			if(cookiePos>-1){  // cookies value
				//result=oSession.oRequest['Cookie'].substring(position+7,position+39);
				result=oSession.oRequest['Cookie'].substring(cookiePos+7);
				cookiePos = result.indexOf(";");
				if(cookiePos>-1){
					result=result.substring(0,cookiePos);
				}
			}
			else if(queryPos>-1){  // beacon
				//result=oSession.oRequest['Cookie'].substring(queryPos+23,queryPos+39);
				result=oSession.fullUrl.toLowerCase().substring(queryPos+23);
				queryPos = result.indexOf("&");
				if(queryPos>-1){
					result=result.substring(0,queryPos);
				}
			}				// header value
			else if (null != oSession.oRequest) result=oSession.oRequest["X-Discover-SaaS-TLTSID"];
		}
		if (result.length>0){	
			FiddlerObject.log("["+oSession.id + "]DISCOVER: TLTSIDcombined: "+result);
		}
	//	FiddlerApplication.UI.lvSessions.SetColumnOrderAndWidth("TLTSID", 2, 86);
	//	FiddlerApplication.UI.lvSessions.SetColumnOrderAndWidth("Comments", 1, 500); // why does this work here
		return result;
	}		//*/  
	
			
	public static BindUIColumn("Method",75,4)
	function CalcMethodCol(oSession: Session){
		if (null != oSession.oRequest) return oSession.oRequest.headers.HTTPMethod; else return String.Empty; 
		FiddlerApplication.UI.lvSessions.SetColumnOrderAndWidth("Method", 4, 75);
	}	
		
		
	public static function highlightQualtricsResponse(oSession) {
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightQualtricsResponse");
		// let's highlight interesting sessions with background colors   
		if (oSession.hostname.toLowerCase().indexOf("qualtrics")>=0){ //highlisht Dynatrace posts
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "BlueViolet";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Qualtrics-POST";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 204)){
				oSession["ui-backcolor"] = "BlueViolet";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Qualtrics-Options";
				oSession["ui-color"]="white";
			}			
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "BlueViolet";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Qualtrics-Options";
				oSession["ui-color"]="white";
			}	
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "BlueViolet";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Qualtrics-Javascript";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				oSession["ui-backcolor"] = "BlueViolet";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Qualtrics-Javascript *** 304 ***";
				oSession["ui-color"]="white";
			}	
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}			
		
	public static function highlightForeseeAnalyticsResponse(oSession) {
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightForeseeAnalyticsResponse");
		// let's highlight interesting sessions with background colors
		if (oSession.hostname.toLowerCase().indexOf("foresee")>=0){ //highlisht Dynatrace posts
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "teal";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Foresee-POST";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 204)){
				oSession["ui-backcolor"] = "teal";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Foresee-Options";
				oSession["ui-color"]="white";
			}			
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "teal";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Foresee-Options";
				oSession["ui-color"]="white";
			}	
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "teal";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Foresee-Javascript";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				oSession["ui-backcolor"] = "teal";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Foresee-Javascript *** 304 ***";
				oSession["ui-color"]="white";
			}			
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}			
		
	public static function highlightQuantumMetricAnalyticsResponse(oSession) {
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightQuantumMetricAnalyticsResponse");
		// let's highlight interesting sessions with background colors
		//oSession["ui-comments"] = oSession.PathAndQuery;
		if (oSession.PathAndQuery.indexOf("/ingest/")==0){
			if (oSession.PathAndQuery.indexOf("?T=")>=0){
				if (oSession.PathAndQuery.indexOf("u=")>=0){
					//if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
					if (oSession.HTTPMethodIs("POST")){
						oSession["ui-backcolor"] = "mediumorchid";
						oSession["ui-bold"] = "true";
						oSession["ui-comments"] = "QuantumMetric-Ingest Relay";
						oSession["ui-color"]="white";
					}
					if (oSession.HTTPMethodIs("GET")){
						oSession["ui-backcolor"] = "mediumorchid";
						oSession["ui-bold"] = "true";
						oSession["ui-comments"] = "QuantumMetric-Ingest GET";
						oSession["ui-color"]="white";
					}					
				}
			}
		}
		if (oSession.hostname.toLowerCase().indexOf("quantummetric")>=0){ //highlisht Dynatrace posts
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "mediumorchid";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "QuantumMetric-POST";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 204)){
				oSession["ui-backcolor"] = "mediumorchid";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "QuantumMetric-Options";
				oSession["ui-color"]="white";
			}			
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "mediumorchid";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "QuantumMetric-Options";
				oSession["ui-color"]="white";
			}	
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "mediumorchid";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "QuantumMetric-Javascript";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				oSession["ui-backcolor"] = "mediumorchid";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "QuantumMetric-Javascript *** 304 ***";
				oSession["ui-color"]="white";
			}			
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}			
		
	public static function highlightCoreMetricsAnalyticsResponse(oSession) {
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightCoreMetricsAnalyticsResponse");
		// let's highlight interesting sessions with background colors
		if (oSession.hostname.toLowerCase().indexOf("coremetrics")>=0){ //highlisht Dynatrace posts
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "peachpuff";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "CoreMetrics-POST";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 204)){
				oSession["ui-backcolor"] = "peachpuff";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "CoreMetrics-Options";
				oSession["ui-color"]="white";
			}			
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "peachpuff";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "CoreMetrics-Options";
				oSession["ui-color"]="white";
			}	
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "peachpuff";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "CoreMetrics-Javascript";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				oSession["ui-backcolor"] = "peachpuff";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "CoreMetrics-Javascript *** 304 ***";
				oSession["ui-color"]="white";
			}			
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}			

	public static function highlightUserReplayAnalyticsResponse(oSession) {
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightUserReplayAnalyticsResponse");
		// let's highlight interesting sessions with background colors
		if (oSession.hostname.toLowerCase().indexOf("userreplay")>=0){ //highlisht Dynatrace posts
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "mediumpurple";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "UserReplay-POST";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 204)){
				oSession["ui-backcolor"] = "mediumpurple";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "UserReplay-Options";
				oSession["ui-color"]="white";
			}			
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "mediumpurple";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "UserReplay-Options";
				oSession["ui-color"]="white";
			}	
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "mediumpurple";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "UserReplay-Javascript";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				oSession["ui-backcolor"] = "mediumpurple";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "UserReplay-Javascript *** 304 ***";
				oSession["ui-color"]="white";
			}			
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}			

	public static function highlightDynatraceResponse(oSession) {
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightDynatraceResponse");
		// let's highlight interesting sessions with background colors
		if (oSession.hostname.toLowerCase().indexOf("dynatrace")>=0){ //highlisht Dynatrace posts
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "darkgoldenrod";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Dynatrace-POST";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "darkgoldenrod";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Dynatrace-Options";
				oSession["ui-color"]="white";
			}	
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "darkgoldenrod";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Dynatrace-Javascript";
				oSession["ui-color"]="white";
			}
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				oSession["ui-backcolor"] = "darkgoldenrod";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Dynatrace-Javascript *** 304 ***";
				oSession["ui-color"]="white";
			}			
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}				
		
	public static function highlightGoogleAnalyticsResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightGoogleAnalyticsResponse");
		if (oSession.hostname.toLowerCase().indexOf("google-analytics")>=0){ //highlight Google Analytics posts
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 302)){
				if (oSession.fullUrl.indexOf("/analytics.js")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleAnalytics-Javascript";
					oSession["ui-color"]="white";
				}
				if (oSession.fullUrl.indexOf("/collect")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleAnalytics-Redirect";
					oSession["ui-color"]="white";
				}
			}	
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				if (oSession.fullUrl.indexOf("/analytics.js")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleAnalytics-Javascript *** 304 ***";
					oSession["ui-color"]="white";
					oSession["ui-hide"] = "false";
				}
				if (oSession.fullUrl.indexOf("/collect")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleAnalytics-Redirect";
					oSession["ui-color"]="white";
				}
			}
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				if (oSession.fullUrl.indexOf("/collect")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleAnalytics-POST";
					oSession["ui-color"]="white";
				}
			}	
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 204)){
				if (oSession.fullUrl.indexOf("/collect")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleAnalytics-POST 204";
					oSession["ui-color"]="white";
				}
			}			
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				if (oSession.fullUrl.indexOf("/analytics.js")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleAnalytics-Javascript";
					oSession["ui-color"]="white";
				}
				if (oSession.fullUrl.indexOf("/collect")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleAnalytics-Collect";
					oSession["ui-color"]="white";
				}
			}
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}
	


	//GTM Google Tag Manager
	public static function highlightGoogleTagManagerResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightGoogleTagManagerResponse");
		if (oSession.hostname.toLowerCase().indexOf("googletagmanager")>=0){ //highlight Google Analytics posts
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 302)){
				if (oSession.fullUrl.indexOf("/gtm.js")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-Javascript";
					oSession["ui-color"]="white";
					//FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightGoogleAnalyticsResponse "+oSession["ui-comments"]);
				}
				if (oSession.fullUrl.indexOf("/ns.html")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-ns";
					oSession["ui-color"]="white";
					//FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightGoogleAnalyticsResponse "+oSession["ui-comments"]);
				}
			}	
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				if (oSession.fullUrl.indexOf("/gtm.js")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-Javascript *** 304 ***";
					oSession["ui-color"]="white";
					oSession["ui-hide"] = "false";
				}
				if (oSession.fullUrl.indexOf("/ns.html")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-ns";
					oSession["ui-color"]="white";
				}
			}
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				if (oSession.fullUrl.indexOf("/ns.html")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-POST";
					oSession["ui-color"]="white";
				}
			}	
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 204)){
				if (oSession.fullUrl.indexOf("/ns.html")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-POST 204";
					oSession["ui-color"]="white";
				}
			}			
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				if (oSession.fullUrl.indexOf("/gtm.js")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-Javascript";
					oSession["ui-color"]="white";
				}
				if (oSession.fullUrl.indexOf("/ns.html")>=0){				
					oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-ns";
					oSession["ui-color"]="white";
				}
			}
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 404)){
				if (oSession.fullUrl.indexOf("/gtm.js")>=0){				
					//oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-Javascript 404";
					//oSession["ui-color"]="white";
				}
				if (oSession.fullUrl.indexOf("/ns.html")>=0){				
					//oSession["ui-backcolor"] = "olivedrab";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "GoogleTagManager-ns 404";
					//oSession["ui-color"]="white";
				}
			}	
			FiddlerObject.log("["+oSession.id + "]DISCOVER: highlightGoogleAnalyticsResponse "+oSession["ui-comments"]);
		}		
	}
	

	// FullStory
	public static function highlightFullStoryResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightFullStoryResponse");
		if (oSession.HTTPMethodIs("GET")){
			if (oSession.fullUrl.indexOf("/fs.js")>=0){				
				oSession["ui-backcolor"] = "aquamarine";
				oSession["ui-bold"] = "true";
				if (oSession.fullUrl.indexOf("/fsrelay/")>=0){	
					oSession["ui-comments"] = "FullStory-Javascript RELAY";
				}
				else {
					//oSession["ui-comments"] = "FullStory-Javascript";
				}	
				oSession["ui-color"]="black";
			}
		}
		if (oSession.HTTPMethodIs("POST")){
			if (oSession.fullUrl.indexOf("/fsrelay/rec/bundle")>=0){				
				oSession["ui-backcolor"] = "aquamarine";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "FullStory-POST RELAY";
				oSession["ui-color"]="black";
			}
		}
		if (oSession.hostname.toLowerCase().indexOf("fullstory")>=0){ //highlight FullStory posts
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 302)){
				if (oSession.fullUrl.indexOf("/fs.js")>=0){				
					oSession["ui-backcolor"] = "aquamarine";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "FullStory-Javascript";
					oSession["ui-color"]="black";
				}
			}		
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
				if (oSession.fullUrl.indexOf("/fs.js")>=0){				
					oSession["ui-backcolor"] = "aquamarine";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "FullStory-Javascriptv *** 304 ***";
					oSession["ui-color"]="black";
				}
			}			
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				if (oSession.fullUrl.indexOf("/rec/bundle")>=0){				
					oSession["ui-backcolor"] = "aquamarine";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "FullStory-POST";
					oSession["ui-color"]="black";
				}
			}			
			if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
				if (oSession.fullUrl.indexOf("/fs.js")>=0){				
					oSession["ui-backcolor"] = "aquamarine";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "FullStory-Javascript";
					oSession["ui-color"]="black";
				}
				if (oSession.fullUrl.indexOf("/rec/bundle")>=0){				
					oSession["ui-backcolor"] = "aquamarine";
					oSession["ui-bold"] = "true";
					oSession["ui-comments"] = "FullStory-Collect";
					oSession["ui-color"]="black";
				}
			}
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}

	public static function highlightDummyTargetResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightDummyTargetResponse");
		if (oSession.fullUrl.toLowerCase().indexOf("dumbytarget")>=0){  
			oSession["ui-backcolor"] = "purple";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="white";
			oSession["ui-comments"] = "DumbyTarget";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}
		
	public static function highlightTealeafSaaSResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightTealeafSaaSResponse");
		if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 200)){
			if (oSession.fullUrl.indexOf("/ubxCapture.min.js")>=0){				
				oSession["ui-backcolor"] = "green";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "TL SaaS-Javascript";
				oSession["ui-color"]="black";
			}
		}
		if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 302)){
			if (oSession.fullUrl.indexOf("/ubxCapture.min.js")>=0){				
				oSession["ui-backcolor"] = "green";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "TL SaaS-Javascript";
				oSession["ui-color"]="black";
			}
		}		
		if (oSession.HTTPMethodIs("GET") && (oSession.responseCode == 304)){
			if (oSession.fullUrl.indexOf("/fs.js")>=0){				
				oSession["ui-backcolor"] = "green";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "TL SaaS-Javascriptv *** 304 ***";
				oSession["ui-color"]="black";
			}
		}
		
		
		if (oSession.hostname.toLowerCase().indexOf(".brilliantcollector.com")>=0){ //highlisht NA SaaS posts
			if (oSession.HTTPMethodIs("POST") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "green";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "TL SaaS-POST";
			}
			if (oSession.HTTPMethodIs("OPTIONS") && (oSession.responseCode == 200)){
				oSession["ui-backcolor"] = "green";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "TL SaaS-Options";
			}	
			if (oSession.responseCode != 200) {
				oSession["ui-backcolor"] = "red";
				oSession["ui-bold"]="true";
				oSession["ui-color"]="white";
				oSession["ui-comments"] = "TL SaaS-Error";
			}
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}
						
	public static function highlightTealeafOnPremResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightTealeafOnPremResponse");
		if (oSession.fullUrl.toLowerCase().indexOf("tealeaf")>=0){  //hightlight the Tealeaf library and target page
			if (oSession.fullUrl.toLowerCase().indexOf(".js")>=0 && oSession.responseCode == 200){
				oSession["ui-backcolor"] = "gold";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Existing TL JS";
			}
			if (oSession.fullUrl.toLowerCase().indexOf(".js")>=0 && oSession.responseCode == 304){
				oSession["ui-backcolor"] = "gold";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Existing TL JS *** 304 ***";
			}			
			if (oSession.fullUrl.toLowerCase().indexOf("tealeaftarget")>=0 && oSession.responseCode == 200 && oSession.HTTPMethodIs("POST")){
				oSession["ui-backcolor"] = "gold";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "TLOP-POST";
			}	
			if (oSession.fullUrl.toLowerCase().indexOf("tealeaftarget")>=0 && oSession.responseCode == 200 && oSession.HTTPMethodIs("OPTIONS")){
				oSession["ui-backcolor"] = "gold";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "TLOP-OPTIONS";
			}			
			if (oSession.responseCode != 200) {
				oSession["ui-backcolor"] = "red";
				oSession["ui-bold"]="true";
				oSession["ui-color"]="white";
				if (oSession["ui-comments"]===undefined){   // only update this column if it's blank
					oSession["ui-comments"] = oSession.responseCode;
				}
				else {
					oSession["ui-comments"] = oSession["ui-comments"]+" "+oSession.responseCode;
				}
			}
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}	
	
	public static function highlightDiscoverResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightDiscoverResponse");
		//hightlight the Discover library and target page
		// LOWERCASE the literals you dummy
		if (oSession.fullUrl.toLowerCase().indexOf("discoverui.js")>=0 || 
			oSession.fullUrl.toLowerCase().indexOf("discover.js")>=0 ||
		    oSession.fullUrl.toLowerCase().indexOf("discover_uic.js")>=0 ||
			oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0 ||
			oSession.fullUrl.toLowerCase().indexOf("hcl-discovery.js")>=0 ||
			oSession.fullUrl.toLowerCase().indexOf("discover_uic")>=0 ||
			oSession.fullUrl.toLowerCase().indexOf("dcxworker")>=0 ||
			oSession.fullUrl.toLowerCase().indexOf("discover_12.1.4_min.js")>=0 ||
		    oSession.fullUrl.toLowerCase().indexOf("onbefrsp_")>=0){  
			if (oSession.fullUrl.toLowerCase().indexOf(".js")>=0 && oSession.responseCode == 200){
				oSession["ui-backcolor"] = "SkyBlue";
				oSession["ui-bold"] = "false";
				oSession["ui-comments"] = "Existing Disco JS";
				oSession["ui-color"]= "black";
				FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}
			if (oSession.fullUrl.toLowerCase().indexOf(".js")>=0 && oSession.responseCode == 304){
				oSession["ui-backcolor"] = "SkyBlue";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "Existing Disco JS  *** 304 ***";
				oSession["ui-color"]= "black";
				FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}			
			if (oSession.fullUrl.toLowerCase().indexOf("onbefrsp_discoverui_onbefrsp.js")>=0 && oSession.responseCode == 200){
				oSession["ui-backcolor"] = "thistle";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "OnBeforeResponse DisocoverUI JS";
				FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}
			if (oSession.fullUrl.toLowerCase().indexOf("onbefrsp_discoverui_onbefrsp.js")>=0 && oSession.responseCode == 304){
				oSession["ui-backcolor"] = "thistle";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "OnBeforeResponse DisocoverUI JS  *** 304 ***";
				FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}		
			if (oSession.fullUrl.toLowerCase().indexOf("onbefrsp_pako_onbefrsp.js")>=0 && oSession.responseCode == 200){
				oSession["ui-backcolor"] = "burlywood";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "OnBeforeResponse PAKO JS";
				FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}
			if (oSession.fullUrl.toLowerCase().indexOf("onbefrsp_pako_onbefrsp.js")>=0 && oSession.responseCode == 304){
				oSession["ui-backcolor"] = "burlywood";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "OnBeforeResponse PAKO JS  *** 304 ***";
				FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}			
			if (oSession.fullUrl.toLowerCase().indexOf("dcxworker")>=0 && oSession.responseCode == 200){
				oSession["ui-backcolor"] = "RoyalBlue";
				oSession["ui-bold"] = "false";
				oSession["ui-comments"] = "DISCOVER WebWorker JS";
				oSession["ui-color"]= "white";
				FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}
			if (oSession.fullUrl.toLowerCase().indexOf("dcxworker")>=0 && oSession.responseCode == 404){
				oSession["ui-backcolor"] = "Red";
				oSession["ui-bold"] = "false";
				oSession["ui-comments"] = "DISCOVER WebWorker JS";
				oSession["ui-color"]= "white";
				FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}			
			if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0 && oSession.responseCode == 200 && oSession.HTTPMethodIs("POST") ){
				oSession["ui-backcolor"] = "cornflowerblue";
				//oSession["ui-bold"] = "true";
				oSession["ui-color"]= "black";
				if (oSession["ui-comments"]===undefined){   // only update this column if it's blank
					oSession["ui-comments"] = "DscPOST";
					FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				}
				//FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}	
			if (oSession.fullUrl.toLowerCase().indexOf("mobilediscoveruipost")>=0 && oSession.responseCode == 200){
				oSession["ui-backcolor"] = "MediumBlue";
				//oSession["ui-bold"] = "true";
				oSession["ui-color"]= "black";
				if (oSession["ui-comments"]===undefined){   // only update this column if it's blank
					oSession["ui-comments"] = "MobilePOST";
					FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				}
				//FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}	
			if (oSession.oRequest["X-Discover-SaaS-TLTSID"].indexOf("VMX")==0){
				oSession["ui-backcolor"] = "MediumBlue";
				//oSession["ui-bold"] = "true";
				oSession["ui-color"]= "black";
				if (oSession["ui-comments"]===undefined){   // only update this column if it's blank
					oSession["ui-comments"] = "VoltVMX_POST";
					FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				}
				//FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}	
			if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0 && oSession.responseCode == 200 && oSession.HTTPMethodIs("GET") ){
				oSession["ui-backcolor"] = "dodgerblue";
				//oSession["ui-bold"] = "true";
				oSession["ui-color"]= "black";
				if (oSession["ui-comments"]===undefined){
					oSession["ui-comments"] = "DscGET "+oSession.fullUrl.toLowerCase().replace("http","").replace("s://","S:");
					FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				}
				//FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
			}			
			if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost")>=0 && oSession.responseCode == 200 && oSession.HTTPMethodIs("OPTIONS") ){
				oSession["ui-backcolor"] = "deepskyblue";
				//oSession["ui-bold"] = "true";
				oSession["ui-color"]= "black";
				var oBodyString = oSession.GetResponseBodyAsString();
				oBodyString = oBodyString.substring(oBodyString.indexOf("Discover Target Version")+24);
				oBodyString = "|TrgtVrsn:"+oBodyString.replace("</p></body>","").replace("</html>","");	
				oBodyString = oBodyString.replace(/(\r\n|\n|\r)/gm, "");
				if (oSession["ui-comments"]===undefined){  // only update comments column if it's empty
					oSession["ui-comments"]=oSession.fullUrl.toLowerCase().replace("http","OPT").replace("s://","S|")+oBodyString;
					//oSession["ui-comments"]=oSession.fullUrl.toLowerCase().replace("http","OPT").replace("s://","S|");
					FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				}else{
					oSession["ui-comments"]=oSession["ui-comments"]+oBodyString; // add to existing comments
					FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				}
				//FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
					
			}			
			if (oSession.responseCode != 200) {
				oSession["ui-backcolor"] = "red";
				oSession["ui-bold"]="true";
				oSession["ui-color"]="white";
				if (oSession["ui-comments"]===undefined){   // only update this column if it's blank
					oSession["ui-comments"] = oSession.responseCode;
					FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				}
				else {
					oSession["ui-comments"] = oSession["ui-comments"]+"ResponseCode:"+oSession.responseCode;
					FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				}
				//FiddlerObject.log("["+oSession.id+"]DISCOVER: highlightDiscoverResponse "+oSession["ui-comments"]);
				
			}
			//FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}	
										
	public static function highlightUtagResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightUtagResponse");
		if ((oSession.fullUrl.toLowerCase().indexOf("utag.")>=0) && (oSession.fullUrl.toLowerCase().indexOf(".js")>=0) && oSession.responseCode == 200){  
			oSession["ui-backcolor"] = "pink";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "Utag javascript";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
		if ((oSession.fullUrl.toLowerCase().indexOf("utag.")>=0) && (oSession.fullUrl.toLowerCase().indexOf(".js")>=0) && oSession.responseCode == 304){  
			oSession["ui-backcolor"] = "pink";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "Utag javascript *** 304 ***";
			oSession["ui-hide"] = "false";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		}		
	}			
		
	
	public static function highlightClickTaleResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightClickTaleResponse");
		if (oSession.fullUrl.toLowerCase().indexOf("clicktale.")>=0){
			if ((oSession.fullUrl.toLowerCase().indexOf("clicktale.")>=0) && (oSession.fullUrl.toLowerCase().indexOf(".js")>=0) && oSession.responseCode == 200){  
				oSession["ui-backcolor"] = "darkkhaki";
				oSession["ui-bold"] = "true";
				oSession["ui-color"]="black";
				oSession["ui-comments"] = "ClickTale javascript";
			}	
			if ((oSession.fullUrl.toLowerCase().indexOf("clicktale.")>=0) && oSession.responseCode == 204){  
				oSession["ui-backcolor"] = "darkkhaki";
				oSession["ui-bold"] = "true";
				oSession["ui-color"]="black";
				oSession["ui-comments"] = "ClickTale GET";
			}		
			if ((oSession.fullUrl.toLowerCase().indexOf("clicktale.")>=0) && (oSession.fullUrl.toLowerCase().indexOf(".js")>=0) && oSession.responseCode == 304){  
				oSession["ui-backcolor"] = "darkkhaki";
				oSession["ui-bold"] = "true";
				oSession["ui-color"]="black";
				oSession["ui-comments"] = "ClickTale javascript *** 304 ***";
				oSession["ui-hide"] = "false";
			}		
			if (oSession.fullUrl.toLowerCase().indexOf("clicktale.")>=0 && oSession.responseCode == 200 && oSession.HTTPMethodIs("POST")){
				oSession["ui-backcolor"] = "darkkhaki";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "ClickTale-POST";
			}	
			if (oSession.fullUrl.toLowerCase().indexOf("clicktale.")>=0 && oSession.responseCode == 200 && oSession.HTTPMethodIs("OPTIONS")){
				oSession["ui-backcolor"] = "darkkhaki";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "ClickTale-OPTIONS";
			}	
			if (oSession.fullUrl.toLowerCase().indexOf("clicktale.")>=0 && oSession.responseCode == 204 && oSession.HTTPMethodIs("POST")){
				oSession["ui-backcolor"] = "darkkhaki";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "ClickTale-POST";
			}	
			if (oSession.fullUrl.toLowerCase().indexOf("clicktale.")>=0 && oSession.responseCode == 204 && oSession.HTTPMethodIs("OPTIONS")){
				oSession["ui-backcolor"] = "darkkhaki";
				oSession["ui-bold"] = "true";
				oSession["ui-comments"] = "ClickTale-OPTIONS";
			}	
			FiddlerObject.log("["+oSession.id + "]DISCOVER: "+oSession["ui-comments"]);
		} 
	}			
		
		
	public static function highlightGlassBoxResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightUtagResponse");
		if (oSession.oResponse["Server"]=="GlassBox Cligate"){
			oSession["ui-backcolor"] = "orange";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "GlassBox POST";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: highlightGlassBoxResponse "+oSession["ui-comments"]);
		}		
		else if (oSession.fullUrl.toLowerCase().indexOf(".glassboxdigital.")>=0){
			oSession["ui-backcolor"] = "orange";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "GlassBox POST";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: highlightGlassBoxResponse "+oSession["ui-comments"]);
		}		
		else if (oSession.fullUrl.toLowerCase().indexOf("glassbox")>=0){
			oSession["ui-backcolor"] = "orange";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "GlassBox POST";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: highlightGlassBoxResponse "+oSession["ui-comments"]);
		}
		else if ((oSession.fullUrl.toLowerCase().indexOf("gbx_")>=0) && (oSession.fullUrl.toLowerCase().indexOf(".js")>=0)){  
			oSession["ui-backcolor"] = "orange";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "GlassBox Javascript Library";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: highlightGlassBoxResponse "+oSession["ui-comments"]);
		}		
	}				
				
	
	public static function highlightSnowPlowResponse(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightSnowPlowResponse");
		if (oSession.fullUrl.toLowerCase().indexOf("snowplow-web")>=0){
			oSession["ui-backcolor"] = "SandyBrown";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "SnowPlow POST";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: highlightSnowPlowResponse "+oSession["ui-comments"]);
		}		
		//else if (oSession.fullUrl.toLowerCase().indexOf("snowplow")>=0){
		else if (oSession.hostname.toLowerCase().indexOf("snowplow")>=0){
			oSession["ui-backcolor"] = "SandyBrown";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "SnowPlow POST";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: highlightSnowPlowResponse "+oSession["ui-comments"]);
		}
		else if ((oSession.fullUrl.toLowerCase().indexOf("/snowplow/")>=0) && (oSession.fullUrl.toLowerCase().indexOf("sp.js")>=0)){  
			oSession["ui-backcolor"] = "SandyBrown";
			oSession["ui-bold"] = "true";
			oSession["ui-color"]="black";
			oSession["ui-comments"] = "SnowPlow Javascript Library";
			FiddlerObject.log("["+oSession.id + "]DISCOVER: highlightSnowPlowResponse "+oSession["ui-comments"]);
		}		
	}
			
				
						
	public static function injectDXValidation(oSession){
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Function injectDXValidation");
		if (oSession.oResponse.headers.ExistsAndContains('Content-Type' ,'text/javascript;charset="UTF-8"')){
			if (oSession.fullUrl.indexOf("forms/anon")>=0){
				oSession.utilDecodeResponse();
				oSession["ui-comments"] = "Before";
				if (oSession.utilReplaceOnceInResponse('F_RoutingNumber-widget\\"\\nposition=\\"after,before,below,above\\"style=\\"width: 10em\\" role', 'F_RoutingNumber-widget\" position=\"after,before,below,above\"style=\"color:red;\" role', false)){
				//if (oSession.utilReplaceOnceInResponse('F_RoutingNumber-widget\\', 'F_RoutingNumber-widget\RUSSELLHOGG', false)){
					if (oSession["ui-comments"]===undefined){
						oSession["ui-comments"] = "Replacment1";
					} else {
						oSession["ui-comments"] = oSession["ui-comments"] + " Replacment1";
					}
				}
				//*
				if (oSession.utilReplaceOnceInResponse('Your Routing Number is a nine digit code, used in the United States, which appears on the bottom of negotiable instruments such as checks to identify the financial institution on which it was drawn.', 'The account number or routing number cannot be verified, please try again.', false)){
					if (oSession["ui-comments"]===undefined){
						oSession["ui-comments"] = "Replacment2";
					} else {
						oSession["ui-comments"] = oSession["ui-comments"] + " Replacment2";
					}
				} //*/
			}
		}
	}
		
			
	//There are some scenarios where a folder is asked for, that throws an error currently because no file name								
	public static function SaveStaticContentOnBeforeResponse(oSession){
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse");
		if (oSession.responseCode == 200){
			var StaticPath="C:\\FiddlerStatic\\";
			oSession["ui-comments"] = "Static Content NOT Recorded";  //error state will be written over
			//oSession.utilDecodeResponse();  // This is slow, do as few as possible based on type 
			if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "image/")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
				//IIS won't serve files that have colons in the name
			} //   /*
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "/css")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}		
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "/javascript")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}	
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "/x-javascript")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}				
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "application/octet-stream")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}	
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "application/x-font-ttf")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}			
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "font/")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}	
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "/font")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}	
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "application/pdf")){ 
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}    
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type" ,"text/plain")){
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}				
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type" ,"application/json;charset=UTF-8")||
			oSession.oResponse.headers.ExistsAndContains("Content-Type" ,"application/json")) {
				oSession.utilDecodeResponse();
				oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				oSession["ui-comments"] = "Static Content Recorded";	
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
			}	
			else if (oSession.oResponse.headers.ExistsAndContains("Content-Type" ,"text/html;charset=UTF-8")||
			oSession.oResponse.headers.ExistsAndContains("Content-Type" ,"text/html")) {
				// Don't need text/html
				//oSession.utilDecodeResponse();
				//oSession.SaveResponseBody(StaticPath + oSession.url.replace(":","_").split("?")[0]);
				//oSession["ui-comments"] = "Static Content Recorded";
				oSession["ui-comments"] = "HTML is NOT Recorded";
			} 			
			else { 
				oSession["ui-comments"] = "ContentType Issues";
				if (oSession.HTTPMethodIs("CONNECT")){
					// Do nothing, I didn't realize CONNECTs were 200s
				}
				else {
					oSession.utilDecodeResponse();
					oSession.SaveResponseBody("C:\\FiddlerStatic\\" +oSession.url.replace(":","_").split("?")[0]);
					//oSession.SaveResponseBody(StaticPath + "ContentType_"+oSession.url.replace(":","_").split("?")[0]);
					oSession["ui-comments"] = "Recorded w/ ContentType Issues";
					FiddlerObject.log("["+oSession.id + "]DISCOVER: Function SaveStaticContentOnBeforeResponse "+StaticPath + oSession.url.replace(":","_").split("?")[0]);
				}
			}			
		}
	}
																				
																	
																		
	public static function injectDiscoJSintoHTML(oSession){
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function injectDiscoJSintoHTML");
		//First check is for content type, HTML only
		if (oSession.oResponse.headers.ExistsAndContains("Content-Type" ,"text/html;charset=UTF-8")||
		oSession.oResponse.headers.ExistsAndContains("Content-Type" ,"text/html")) {
			if (oSession.fullUrl.toLowerCase().indexOf("discoveruipost.")>=0){
				// do nothing, this is a UIC Post, we work with those in OnBeforeRequest
			}
			else if (     //URL blackllist (don't include SDK on these URLs)
				(oSession.fullUrl.toLowerCase().indexOf("/inqchat.html")>=0) || 
				(oSession.fullUrl.toLowerCase().indexOf("/rp-iframe.html")>=0) || 
				(oSession.fullUrl.toLowerCase().indexOf("RUSSELL/bancochile-web/persona/login/index.html")>=0) || 
				(oSession.fullUrl.toLowerCase().indexOf("RUSSELL/college-planning")>=0) || 
				(oSession.fullUrl.toLowerCase().indexOf("RUSSELLb_sale_condition")>=0) ||  
				(oSession.fullUrl.toLowerCase().indexOf("/iframe_history.html")>=0) || 
				(oSession.fullUrl.toLowerCase().indexOf("/BlackListedURL")>=0) || 
			    (oSession.fullUrl.toLowerCase().indexOf("/BlackListedURL")>=0)) {
				oSession["ui-backcolor"] = "black";
				oSession["ui-bold"]="true";
				oSession["ui-color"]="white";
				oSession["ui-comments"] = "BlackListed URL " + oSession.fullUrl;
			}
			else if ((oSession.responseCode == 200)||   // this if tries to add a reference in files of type text/html
				(oSession.responseCode == 404)||
			    (oSession.responseCode == 500)) {
				oSession["ui-backcolor"] = "blue";
				oSession["ui-bold"] = "true";
				oSession["ui-color"]="white";
				oSession["ui-comments"] = "text/HTML";

				// Remove any compression or chunking from the response in order to make it easier to manipulate
				oSession.utilDecodeResponse();
				
				//replace head tag with SDK
				oSession["ui-comments"] = "Head Injected";
				
				// PAKO 
				//oSession.utilReplaceOnceInResponse("</head>", "<script src='/OnBefRSP_PAKO_OnBefRSP.js'></script></head>", false);
				// PAKO at Coppel
				//oSession.utilReplaceOnceInResponse("</head>", "<script src='https://cdn2.coppel.com/images/emarketing/scripts/Pako_min.js'></script></head>", false);
				
				//hack meta tag CSP at salliemae
				//oSession.utilReplaceInResponse("tluic.salliemae.com","sky.discoverstore.hclcx.com");
				//oSession.utilReplaceInResponse('http-equiv="Content-Security-Policy"','http-equiv="FIDDLER-DISABLE-Content-Security-Policy"');
				//it was there multiple times for XHR and Fetch (and maybe Beacon)
				
				//replace title tag with SDK instead
				// /*	
				// Coppel specific code
				//if (!oSession.utilReplaceOnceInResponse("</head>", "<script src='https://cdn2.coppel.com/images/emarketing/scripts/Discover_12.1.4_min.js'></script></head>", false)) {
				if (!oSession.utilReplaceOnceInResponse("</head>", "<script src='/OnBefRSP_DiscoverUI_OnBefRSP.js'></script></head>", false)) {
				    //replace title tag with SDK instead
					oSession["ui-comments"] = "Title Injected";
					if (!oSession.utilReplaceOnceInResponse("</title>", "</title><script src='/OnBefRSP_DiscoverUI_OnBefRSP.js'></script>", false))
					{
						// insert SDK reference failed
						oSession["ui-backcolor"] = "red";
						oSession["ui-bold"]="true";
						oSession["ui-color"]="white";
						oSession["ui-comments"] = "Not Injected";
					}
				}  //*/
				// Debug: oSession["ui-comments"] = oSession["ui-comments"] + " " + oSession.fullUrl.toLowerCase();
				// if I'm missing my AutoResponder, update comment field
				if (oSession.fullUrl.toLowerCase().indexOf("/onbefrsp_discoverui_onbefrsp.js")>=0) {
					oSession["ui-backcolor"]="red";
					oSession["ui-bold"]="true";
					oSession["ui-color"]="white";
					//oSession["ui-comments"] = "AutoResponder Needed for /OnBefRSP_DiscoverUI_OnBefRSP.js";
					oSession["ui-comments"] = "OnBefRsp_DiscoverUI_OnBefRsp.js AutoResponder Needed";
				}
				if (oSession.fullUrl.toLowerCase().indexOf("/onbefrsp_pako_onbefrsp.js")>=0) {
					oSession["ui-backcolor"]="red";
					oSession["ui-bold"]="true";
					oSession["ui-color"]="white";
					//oSession["ui-comments"] = "AutoResponder Needed for /OnBefRSP_PAKO_OnBefRSP.js";
					oSession["ui-comments"] = "Pako.js AutoResponder Needed";
				}				
			}
		}
	}
			

//filter example:   REGEX:(?insx).*\.(jRUSSELLs\?.*|js|otf|gif|png|json|jpg|svg|bmp|css|jpeg|map|pdf|ico|eot|woff|woff2|axd|ttf|gif\?.*|png\?.*|jpg\?.*|svg\?.*|bmp\?.*|css\?.*|jpeg\?.*|pdf\?.*|ico\?.*|eot\?.*|woff\?.*|woff2\?.*|axd\?.*|ttf\?.*|otf\?.*|map\?.*)$		

		
/*	
		
  RRRRRRRRRRRRRRRRR          SSSSSSSSSSSSSSS      PPPPPPPPPPPPPPPPP   
  R::::::::::::::::R       SS:::::::::::::::S     P::::::::::::::::P  
  R::::::RRRRRR:::::R     S:::::SSSSSS::::::S     P::::::PPPPPP:::::P 
  RR:::::R     R:::::R    S:::::S     SSSSSSS     PP:::::P     P:::::P
    R::::R     R:::::R    S:::::S                   P::::P     P:::::P
    R::::R     R:::::R    S:::::S                   P::::P     P:::::P
    R::::RRRRRR:::::R      S::::SSSS                P::::PPPPPP:::::P 
    R:::::::::::::RR        SS::::::SSSSS           P:::::::::::::PP  
    R::::RRRRRR:::::R         SSS::::::::SS         P::::PPPPPPPPP    
    R::::R     R:::::R           SSSSSS::::S        P::::P            
    R::::R     R:::::R                S:::::S       P::::P            
    R::::R     R:::::R                S:::::S       P::::P            
  RR:::::R     R:::::R    SSSSSSS     S:::::S     PP::::::PP          
  R::::::R     R:::::R    S::::::SSSSSS:::::S     P::::::::P          
  R::::::R     R:::::R    S:::::::::::::::SS      P::::::::P          
  RRRRRRRR     RRRRRRR     SSSSSSSSSSSSSSS        PPPPPPPPPP          	

//*/
		
	//OnBeforeResponse
	static function OnBeforeResponse(oSession: Session)
	{
		FiddlerObject.log("["+oSession.id + "]DISCOVER: Function OnBeforeResponse");
		if (m_Hide304s && oSession.responseCode == 304) {
			oSession["ui-hide"] = "false";  //I don't mind seeing 304s
		}	

		// inject DISCO into HTML-------------------------------------------------------------------------------------------------------------------
		if (oSession.HostnameIs("www.WhiteListedDomain.com") ||  //exact domain match
			oSession.HostnameIs("www.WhiteListedDomain.com") ||  //exact domain match
			oSession.HostnameIs("www.WhiteListedDomain.com") ||  //exact domain match
			oSession.HostnameIs("RUSSELLwww.madore.org") ||  //exact domain match
			oSession.hostname.toLowerCase().indexOf("RUSSELLwww.hdb.gov.sg")>=0 ||  //wildcard domain match
			oSession.hostname.toLowerCase().indexOf("RUSSELLwww.babyfresh.co")>=0 ||  //wildcard domain match
			oSession.hostname.toLowerCase().indexOf("RUSSELLwww.redeipiranga.com.br")>=0 ||  //wildcard domain match
			oSession.hostname.toLowerCase().indexOf("RUSSELLwww.salliemae.com")>=0 ||  //wildcard domain match
			oSession.hostname.toLowerCase().indexOf("RUSSELLwwwgalax.co")>=0 ||  //wildcard domain match
			oSession.hostname.toLowerCase().indexOf("RUSSELLwww.gvsu.edu")>=0)  {
			injectDiscoJSintoHTML(oSession);	// add in OnBefRsp_DiscoverUI_OnBefRsp.js
		}
	
		/*
		if (oSession.hostname.toLowerCase().indexOf("www.freedommortgage.comRUSSELL")>-1){
			if (oSession.fullUrl.indexOf("get-started")>-1){
				oSession["ui-comments"] = "document.domain set!!!";
				if (!oSession.utilReplaceOnceInResponse("<body", "<body onload=\"document.domain='freedommortgage.com';\" ", false)) {
					oSession["ui-comments"] = "document.domain NOT set";
				}
			}
		}//*/
		
		// some hacking for injection of validation
//		injectDXValidation(oSession);		
		
		// overwrite Disco Headers to impersonate Tealeaf headers for OPTIONS response
//		impersonateTealeafOptionsResponse(oSession);
		
		// over ride server side headers with DISCO
//		impersonateDiscoverOptionsResponse(oSession);
		
		//Override customer headers for UIC inclusion
//		AllowOriginResponse(oSession);
		
		// STATIC STATIC STATIC STATIC STATIC STATIC STATIC STATIC STATIC STATIC STATIC 
		//Create folders of static content in C:\FiddlerStatic
		if (oSession.hostname.toLowerCase().indexOf("RUSSELL.coppel.com")>=0){
			SaveStaticContentOnBeforeResponse(oSession);
		}
		
		// Highlight all the things - competitors/3rd party tools
		var highlightLog=false;  // enhanced logging in highlight functions
		highlightAllResponse(oSession,highlightLog);  // this should be safe to leave on all the time
				
		var Hack="";
		//Hack=Hack+"-CORS";  	// this turns on the "Hack-CORS" in Fiddler // Probably this one
		//Hack=Hack+"-ACAM";  	// Access Control Allow Methods = GET, POST
		//Hack=Hack+"-ACAH";  	// Access Control Allow Headers = *
		//Hack=Hack+"-ACAC";  	// Access Control Allow Credentials = true
		//Hack=Hack+"-CSP";		// Remove Content Security Policy
		//Hack=Hack+"-XCSP";	// Remove X Content Security Policy
		//Hack=Hack+"-XFO";		// Remove X Frame Options
		responseHack(oSession, Hack);
		
		//Content Security policy below is inside an IF that only applies it to target page
/*		if (oSession.hostname.toLowerCase().indexOf("apply2.salliemae.com")>=0) {
		   oSession.oResponse.headers.Remove("Content-Security-Policy");
			//Note this didn't work because the CSP policy was implemented in a META tag, not a header
		}  //*/
		
		FiddlerObject.log("["+oSession.id + "]DISCOVER: End Function OnBeforeResponse");
		FiddlerObject.log("["+oSession.id + "]DISCOVER:___________________________");
	}

		
	static function responseHack(oSession: Session, Hack) {
		//FiddlerObject.log("["+oSession.id + "]DISCOVER: Hack1");

		if (Hack.length>0){
			if (Hack.indexOf("-CSP")>-1){
				//this chunk needs to be outside the URL if, so that it applies to all things
				oSession.utilReplaceInResponse('http-equiv="Content-Security-Policy"','http-equiv="FIDDLER-DISABLE-Content-Security-Policy"');
				oSession.oResponse.headers.Remove("Content-Security-Policy");  // cross site scripting
				FiddlerObject.log("["+oSession.id + "]DISCOVER: CSP-Hack");
				oSession["ui-comments"] = "OnBefRSPHack"+Hack+":" + oSession["ui-comments"];
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Hack-CORS: Response Headers Changed");
			}
			if (oSession.url.toLowerCase().indexOf("discoveruipost")>-1){	
				if (Hack.indexOf("-CORS")>-1){	
					oSession.oResponse["Access-Control-Allow-Origin"] = "*";  // Preflight allow all, this is probably the one you want
					//oSession.oResponse["Access-Control-Allow-Origin"] = oSession.oRequest["Origin"]; // More specific
					FiddlerObject.log("["+oSession.id + "]DISCOVER: CORS-Hack");
				}	
				if (Hack.indexOf("-ACAM")>-1){	
					oSession.oResponse.headers.Remove("Access-Control-Allow-Methods");
					//oSession.oResponse["Access-Control-Allow-Headers"] = "*"; // allows JS access to see headers/cookies
					//oSession.oResponse.headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
					oSession.oResponse.headers.Add("Access-Control-Allow-Methods", "GET, POST");
					FiddlerObject.log("["+oSession.id + "]DISCOVER: ACAM-Hack");
				}
				if (Hack.indexOf("-ACAH")>-1){	
					oSession.oResponse.headers.Remove("Access-Control-Allow-Headers");
					//"x-dcxvid,content-type,content-encoding,x-discover,x-discover-messagetypes,x-discover-page-url,x-discover-saas-tltsid,x-discover-syncxhr,x-discovertype,x-pageid,x-requested-with");
					//oSession.oResponse.headers.Add("Access-Control-Allow-Headers","x-dcxvid,content-type,content-encoding,x-discover,x-discover-messagetypes,x-discover-page-url,x-discover-saas-tltsid,x-discover-syncxhr,x-discovertype,x-pageid,x-requested-with");
					oSession.oResponse["Access-Control-Allow-Headers"] = "*"; // allows JS access to see headers/cookies
					FiddlerObject.log("["+oSession.id + "]DISCOVER: ACAH-Hack");
				}
				if (Hack.indexOf("-ACAC")>-1){	
					oSession.oResponse["Access-Control-Allow-Credentials"] = "true"; // allows JS access to see headers/cookies
					//oSession.oResponse.headers.Remove("Access-Control-Allow-Credentials");
					FiddlerObject.log("["+oSession.id + "]DISCOVER: ACAC-Hack");
				}
				if (Hack.indexOf("-XCSP")>-1){
					oSession.oResponse.headers.Remove("X-Content-Security-Policy"); // should be deprecated
					FiddlerObject.log("["+oSession.id + "]DISCOVER: XCSP-Hack");
				}
				if (Hack.indexOf("-XFO")>-1){
					oSession.oResponse.headers.Remove["X-Frame-Options"]; // allows a browser load a frame 
					//oSession.oResponse["X-Frame-Options"] = "SAMEORIGIN";
					//oSession.oResponse["X-Frame-Options"] = "DENY";
					FiddlerObject.log("["+oSession.id + "]DISCOVER: XFO-Hack");
				}
				oSession["ui-comments"] = "OnBefRSPHack"+Hack+":" + oSession["ui-comments"];
				FiddlerObject.log("["+oSession.id + "]DISCOVER: Hack-CORS: Response Headers Changed");
			}
		}
	}
		
		
	static function OnBeforeResponseORIG(oSession: Session) {
		if (m_Hide304s && oSession.responseCode == 304) {
			oSession["ui-hide"] = "false";
		}
	}
				

		
	// highlight everything 
	public static function highlightAllResponse(oSession, highlightLog){	
		
		//var highlightLog=false;
		
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightAllResponse");
		}
			
			// highlight Utag  
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightUtagResponse");
		}
		highlightUtagResponse(oSession);
		
		// highlight Qualtrics
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightQualtricsResponse");
		}
		highlightQualtricsResponse(oSession);
		
		// highlight QuantumMetric
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightQuantumMetricAnalyticsResponse");
		}
		highlightQuantumMetricAnalyticsResponse(oSession);
		
		// highlight Dynatrace
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightDynatraceResponse");
		}
		highlightDynatraceResponse(oSession);
		
		// higligth CoreMetrics
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightCoreMetricsAnalyticsResponse");
		}
		highlightCoreMetricsAnalyticsResponse(oSession);
		
		// highlight Foresee Analytics
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightForeseeAnalyticsResponse");	
		}
		highlightForeseeAnalyticsResponse(oSession);
		
		// highlight Google Analytics
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightGoogleAnalyticsResponse");
		}
		highlightGoogleAnalyticsResponse(oSession);
	
		// highlight Google Analytics
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightGoogleTagManagerResponse");
		}
		highlightGoogleTagManagerResponse(oSession);
	
		// highlight FullStory
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightFullStoryResponse");
		}
		highlightFullStoryResponse(oSession);
		
		// highlight User Replay
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightUserReplayAnalyticsResponse");
		}
		highlightUserReplayAnalyticsResponse(oSession);

		// highlight Tealeaf SaaS
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightTealeafSaaSResponse");
		}
		highlightTealeafSaaSResponse(oSession);
	
		// highlight Tealeaf On-Prem
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightTealeafOnPremResponse");
		}
		highlightTealeafOnPremResponse(oSession);
	
		// highlight dummy target
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightDummyTargetResponse");
		}
		highlightDummyTargetResponse(oSession);	
		
		// hightlight Discover
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightDiscoverResponse");
		}
		highlightDiscoverResponse(oSession);
	
		// highlight ClickTale
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightClickTaleResponse");
		}												
		highlightClickTaleResponse(oSession);		
		
		// highlight GlassBox
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightGlassBoxResponse");
		}												
		highlightGlassBoxResponse(oSession);	
		
		// highlight Snowploa
		if (highlightLog){
			FiddlerObject.log("["+oSession.id + "]DISCOVER: Function highlightSnowPlowResponse");
		}												
		highlightSnowPlowResponse(oSession);
		
		
		
		
	}				
										
									
/*
    // This function executes just before Fiddler returns an error that it has 
    // itself generated (e.g. "DNS Lookup failure") to the client application.
    // These responses will not run through the OnBeforeResponse function above.
    static function OnReturningError(oSession: Session) {
    }
*/
/*
    // This function executes after Fiddler finishes processing a Session, regardless
    // of whether it succeeded or failed. Note that this typically runs AFTER the last
    // update of the Web Sessions UI listitem, so you must manually refresh the Session's
    // UI if you intend to change it.
    static function OnDone(oSession: Session) {
    }
		
*/

    //   /*
	static function OnBoot() {
		if (FiddlerApplication.Prefs.GetBoolPref("fiddler.ui.rules.removeencoding",null)){
			MessageBox.Show('"Remove all Encodings" is set to true. This can be dangerous in conjunction with HCL Discover. It will be disabled. You need to re-enable if you really want this switch ON.');
			FiddlerApplication.Prefs.SetBoolPref("fiddler.ui.rules.removeencoding",false);
		}
		//Fiddler.FilterNowRules
		//FiddlerApplication.Prefs.
		//MessageBox.Show("Fiddler has finished booting");
		//System.Diagnostics.Process.Start("iexplore.exe");

		//UI.ActivateRequestInspector("HEADERS");
		//UI.ActivateResponseInspector("HEADERS");
		}   //  */

		/*
		static function OnBeforeShutdown(): Boolean {
		// Return false to cancel shutdown.
		return ((0 == FiddlerApplication.UI.lvSessions.TotalItemCount()) ||
		(DialogResult.Yes == MessageBox.Show("Allow Fiddler to exit?", "Go Bye-bye?",
		MessageBoxButtons.YesNo, MessageBoxIcon.Question, MessageBoxDefaultButton.Button2)));
		}
		*/

		 /*
		static function OnShutdown() {
			//MessageBox.Show("Fiddler has shutdown");
			//FiddlerApplication.Prefs.SetStringPref("fiddler.ui.lastview","Filters");
		}
		 */

		/*
		static function OnAttach() {
		MessageBox.Show("Fiddler is now the system proxy");
		}
		*/

		/*
		static function OnDetach() {
		MessageBox.Show("Fiddler is no longer the system proxy");
		}
		*/

		// The Main() function runs everytime your FiddlerScript compiles
		static function Main() {
			var today: Date = new Date();
			FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;
			//MessageBox.Show(" CustomRules.js was loaded at: " + today);
		
			// Uncomment to add a "Server" column containing the response "Server" header, if present
			// UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");

			// Uncomment to add a global hotkey (Win+G) that invokes the ExecAction method below...
			// UI.RegisterCustomHotkey(HotkeyModifiers.Windows, Keys.G, "screenshot"); 
		}

		//static function getDiscoverColumn(oS: Session){ if (null != oS.oRequest) return oS.oRequest["Cookie"]; }
			
				
		// These static variables are used for simple breakpointing & other QuickExec rules 
		BindPref("fiddlerscript.ephemeral.bpRequestURI")
		public static var bpRequestURI:String = null;

		BindPref("fiddlerscript.ephemeral.bpResponseURI")
		public static var bpResponseURI:String = null;

		BindPref("fiddlerscript.ephemeral.bpMethod")
		public static var bpMethod: String = null;

		static var bpStatus:int = -1;
		static var uiBoldURI: String = null;
		static var gs_ReplaceToken: String = null;
		static var gs_ReplaceTokenWith: String = null;
		static var gs_OverridenHost: String = null;
		static var gs_OverrideHostWith: String = null;

		// The OnExecAction function is called by either the QuickExec box in the Fiddler window,
		// or by the ExecAction.exe command line utility.
		static function OnExecAction(sParams: String[]): Boolean {

			FiddlerObject.StatusText = "ExecAction: " + sParams[0];

			var sAction = sParams[0].toLowerCase();
			switch (sAction) {
				case "bold":
					if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return false;}
					uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
					return true;
				case "bp":
					FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
					return true;
				case "bps":
					if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return false;}
					bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
					return true;
				case "bpv":
				case "bpm":
					if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return false;}
					bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
					return true;
				case "bpu":
					if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return false;}
					bpRequestURI = sParams[1]; 
					FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
					return true;
				case "bpa":
				case "bpafter":
					if (sParams.Length<2) {bpResponseURI=null; FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return false;}
					bpResponseURI = sParams[1]; 
					FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
					return true;
				case "overridehost":
					if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return false;}
					gs_OverridenHost = sParams[1].toLowerCase();
					gs_OverrideHostWith = sParams[2];
					FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
					return true;
				case "urlreplace":
					if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return false;}
					gs_ReplaceToken = sParams[1];
					gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
					FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
					return true;
				case "allbut":
				case "keeponly":
					if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return false;}
					UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
					UI.actRemoveUnselectedSessions();
					UI.lvSessions.SelectedItems.Clear();
					FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
					return true;
				case "stop":
					UI.actDetachProxy();
					return true;
				case "start":
					UI.actAttachProxy();
					return true;
				case "cls":
				case "clear":
					UI.actRemoveAllSessions();
					return true;
				case "g":
				case "go":
					UI.actResumeAllSessions();
					return true;
				case "goto":
					if (sParams.Length != 2) return false;
					Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));
					return true;
				case "help":
					Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");
					return true;
				case "hide":
					UI.actMinimizeToTray();
					return true;
				case "log":
					FiddlerApplication.Log.LogString((sParams.Length<2) ? "User couldn't think of anything to say..." : sParams[1]);
					return true;
				case "nuke":
					UI.actClearWinINETCache();
					UI.actClearWinINETCookies(); 
					return true;
				case "screenshot":
					UI.actCaptureScreenshot(false);
					return true;
				case "show":
					UI.actRestoreWindow();
					return true;
				case "tail":
					if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return false;}
					UI.TrimSessionList(int.Parse(sParams[1]));
					return true;
				case "quit":
					UI.actExit();
					return true;
				case "dump":
					UI.actSelectAll();
					UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
					UI.actRemoveAllSessions();
					FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
					return true;

				default:
					if (sAction.StartsWith("http") || sAction.StartsWith("www.")) {
						System.Diagnostics.Process.Start(sParams[0]);
						return true;
					}
					else
					{
						FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
						return false;
					}
			}
		}
	}





