/////////////////////////////////////////////////////
// displayGoogleSheet
// Version 0.6.1
//https://github.umn.edu/dobe0002/GoogleSheetPuller

function displayGoogleSheet(c){var a={docId:"",sheetId:"od6",feedURL:"",containingObj:document.getElementsByTagName("body")[0],error:function(){console.log("an error has happened")},timeout:"",callback:function(){},noResults:function(){console.log("no results returned")},noResultsString:"No content is available.",helpersObj:displayGoogleSheetHelper,customFormatting:"",getData:"",getDataClean:"",testing:!1,testingArea:"",sheetsId:"",callbackClean:""},b;for(b in c)void 0!=c[b]&&(a[b]=c[b]);""==a.docId&&
(a.docId=a.sheetsId);""==a.getDataClean&&""!=a.callbackClean&&(a.getDataClean=a.callbackClean);b=function(){if(""===a.feedURL){var e="https:";"http:"==location.protocol&&(e="http:");a.feedURL=e+"//spreadsheets.google.com/feeds/cells/"+a.docId+"/"+a.sheetId+"/public/full?alt=json"}if(!0===a.testing&&(console.log("url: "+a.feedURL),"url"==a.testingArea))return a.feedURL;a.helpersObj.makeCORSRequest({url:a.feedURL,onload:d,error:a.error,timeout:a.timeout,type:"json"})};var d=function(e){1==a.testing&&
console.log("Success.  Json: "+JSON.stringify(e));if(""!=a.getData)a.getData(e);else if("undefined"==typeof e.feed.entry||0==e.feed.entry.length)a.noResults(),a.containingObj.innerHTML=a.noResultsString;else{for(var b=0,c=0,f=[],d=[],g={},k=0;k<e.feed.entry.length;k++){var h=e.feed.entry[k];0==k&&(c=h.gs$cell.row);if(h.gs$cell.row==c)f[h.gs$cell.col]=h.content.$t;else{if(h.gs$cell.row!=b&&b!=c&&0!=b){for(j in f)void 0==g[f[j]]&&(g[f[j]]="");d.push(g);g={}}b=h.gs$cell.row;g[f[h.gs$cell.col]]=h.content.$t}}for(j in f)void 0==
g[f[j]]&&(g[f[j]]="");d.push(g);if(""!=a.getDataClean)a.getDataClean(d);else{e="";if(""!=a.customFormatting)e+=a.customFormatting(d);else{e+="<table>";for(b=0;b<d.length;b++){if(0==b){e+="<thead><tr>";for(j in d[b])e+="<th>"+j+"</th>";e+="</tr></thead>"}1==b&&(e+="<tbody>");e+="<tr>";for(j in d[0])e+="<td>"+d[b][j]+"</td>";e+="</tr>"}e+="</tbody></table>"}a.containingObj.innerHTML=e;a.callback()}}};if(!0===a.testing||"version"==c)if(console.log("displayGoogleSheet version: 0.6.1"),"version"==c)return"0.6.1";
if(""==a.docId&&""==a.feedURL)console.log("ERROR: No Document ID is defined");else return b()}
function getGoogleSheetList(c){var a={docId:"",feedURL:"",error:"",timeout:"",callback:function(){},noResults:function(){console.log("no results returned")},noResultsString:"No events available.",helpersObj:displayGoogleSheetHelper,getData:"",getDataClean:function(a){console.log(JSON.stringify(a))},testing:!1,containingObj:document.getElementsByTagName("body")[0],noResultsString:"No data available.",customFormatting:""},b;for(b in c)void 0!=c[b]&&(a[b]=c[b]);c=function(){if(""==a.feedURL){var b="https:";
"http:"==location.protocol&&(b="http:");a.feedURL=b+"//spreadsheets.google.com/feeds/worksheets/"+a.docId+"/public/full?alt=json"}!0===a.testing&&console.log("url: "+a.feedURL);a.helpersObj.makeCORSRequest({url:a.feedURL,onload:d,error:a.error,timeout:a.timeout,type:"json"})};var d=function(b){if("undefined"==typeof b.feed.entry||0==b.feed.entry.length)a.noResults();else if(""!=a.getData)a.getData(b);else{for(var c=[],d=0;d<b.feed.entry.length;d++){var f={},l=b.feed.entry[d];f.sheetName=l.title.$t;
f.sheetId=/[\/]([^\/]+)$/.exec(l.id.$t)[1];f.url=l.link[1].href;c.push(f)}1==a.testing&&console.log("sheetArray "+c);a.getDataClean(c);a.callback()}};if(""==a.docId&&""==a.feedURL)console.log("ERROR: No Document ID is defined");else return c()}try{var jqueryIsLoaded=jQuery;(function(c){c.fn.displayGoogleSheet=function(a){return this.each(function(){a.containingObj=this;displayGoogleSheet(a);""!=a.success&&void 0!=a.success&&a.success()})}})(jQuery)}catch(c){}
var displayGoogleSheetHelper={makeCORSRequest:function(c){var a={url:"",method:"GET",onload:"",error:"",timeout:"",type:""},b;for(b in c)void 0!=c[b]&&(a[b]=c[b]);var d=this.createCORSRequest(a.method,a.url);d?(d.onload="json"==a.type?function(){try{a.onload(JSON.parse(d.responseText))}catch(b){console.log("DisplayGoogleSheet - Data returned from CORS request is not JSON - this may most likely be because the document or sheet is not published or unknown."),""!=a.error&&a.error()}}:function(){a.onload(d.responseText)},
d.onerror=function(){""!=a.error&&a.error()},d.onprogress=function(){},d.ontimeout=function(){""!=a.timeout&&a.timeout()},d.send()):alert("CORS not supported")},createCORSRequest:function(c,a){var b=new XMLHttpRequest;"withCredentials"in b?b.open(c,a,!0):"undefined"!=typeof XDomainRequest?(b=new XDomainRequest,b.open(c,a)):b=null;return b}};