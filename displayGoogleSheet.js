/////////////////////////////////////////////////////
// displayGoogleSheet


// Kim Doberstein 
// University of Minnesota
// Version 0.6.1
//https://github.umn.edu/dobe0002/GoogleSheetPuller




// MAIN FUNCTION
	  
function displayGoogleSheet(options){
	var version="0.6.1";

	var settings = {
		'docId':'' // ID of the Google spreadsheet file 
		,'sheetId':'od6' //ID of the individual sheet.  Defaults to the first sheet
		,'feedURL':''
		,'containingObj':document.getElementsByTagName('body')[0]
		,'error':function(){console.log('an error has happened');} //function called on error (and on timeout if a separate timeout is not provided)
		,'timeout':'' //function called on timeout 
		,'callback':function(){}
		,'noResults':function(){console.log('no results returned')}
		,'noResultsString':"No content is available."
		,'helpersObj':displayGoogleSheetHelper
		,'customFormatting':'' //function called to get formatted HTML
		,'getData':'' //function called when user only wants the json returned
		,'getDataClean':'' //
		,'testing':false
		,'testingArea':'' // options include 'url'

		/// (from older versions of code )
		,'sheetsId':'' // Same as docId(older version of code)
		,'callbackClean':'' // same as getDataClean 
	};
	

	
	for (var key in options) {if(options[key]!=undefined)settings[key]=options[key]} // push options into settings

	// account for older options
	if(settings.docId=="") settings.docId=settings.sheetsId;
	if(settings.getDataClean=="" && settings.callbackClean!="")settings.getDataClean=settings.callbackClean;



	var init=function(){
		if(settings.feedURL===""){
			var protocol="https:";
			if(location.protocol=="http:") protocol="http:";
			settings.feedURL=protocol+'//spreadsheets.google.com/feeds/cells/'+settings.docId+'/'+settings.sheetId+'/public/full?alt=json';

		}

		if(settings.testing===true){
			console.log("url: "+settings.feedURL);
			if(settings.testingArea=="url") return settings.feedURL;
		}

		settings.helpersObj.makeCORSRequest({
			'url':settings.feedURL
			,'onload':processResults
			,'error':settings.error
			,'timeout':settings.timeout
			,'type':'json'
		});


	};

	
	var processResults=function(results){
		//console.log('processResults: '+results);

		if(settings.testing==true) console.log('Success.  Json: '+JSON.stringify(results));

		if(settings.getData!=''){
			settings.getData(results);
			return;
		}

	
		//check for empty results set
		if(typeof results.feed.entry =='undefined' ||results.feed.entry.length==0){
			settings.noResults();
			settings.containingObj.innerHTML = settings.noResultsString;
			return;
		}
	
		//Format simplifed version
			/*
			[
				{'column':'data row1', 'column':'data row1', 'column':'data row1'},  
				{'column':'data row2', 'column':'data row2', 'column':'data row2'},   ...
			]
			*/
		
		var currentRow=0;
		var initRow=0;
		var headerArray=new Array();
		var rowObj=new Array();
		var rowTempArray={};//new Array();
		
		for (var i = 0; i < results.feed.entry.length; i++) {
			var currentItem = results.feed.entry[i];
			
			/* Find initial row and col */
			if(i==0){initRow=currentItem.gs$cell.row;}
			/*Add to Header Array*/
			if(currentItem.gs$cell.row==initRow){
				headerArray[currentItem.gs$cell.col]=currentItem.content.$t;
			}

			/* Not a Header Row */
			else{
				if(currentItem.gs$cell.row!=currentRow&&currentRow!=initRow&&currentRow!=0){

					/* need to process the previous row */
					/*Check to insure that there is an entry for each header */
					for(j in headerArray){if(rowTempArray[headerArray[j]]==undefined){rowTempArray[headerArray[j]]=""}}

					/*Push last row into rowObj*/
					rowObj.push(rowTempArray);

					rowTempArray={};//new Array();
					
					
				} 
				currentRow=currentItem.gs$cell.row;

				
				rowTempArray[headerArray[currentItem.gs$cell.col]]=currentItem.content.$t;

			} 

		}  

		
		
		/* process last rowTemp Array*/
		for(j in headerArray){if(rowTempArray[headerArray[j]]==undefined){rowTempArray[headerArray[j]]=""}}
		rowObj.push(rowTempArray);

	
		
		if(settings.getDataClean!=""){settings.getDataClean(rowObj); return;}
		
		appendResults(rowObj);

	};

	/* Displays simple table */
	var appendResults=function(rowObj){
		var HTML = "";
		
		if(settings.customFormatting!=""){
			HTML+=settings.customFormatting(rowObj);
		}
		else{
			HTML+="<table>";
			for(var i=0; i<rowObj.length;i++){
				if(i==0){
					HTML+="<thead><tr>";
					for(j in rowObj[i]){
						HTML+="<th>"+j+"</th>";
					}

					HTML+="</tr></thead>";

				}
				if(i==1) HTML+="<tbody>";

				HTML+="<tr>";
				for(j in rowObj[0]){
					HTML+="<td>"+rowObj[i][j]+"</td>";
				}
				HTML+="</tr>";
			}
			HTML+="</tbody></table>";
		}
		settings.containingObj.innerHTML = HTML;
		settings.callback();



	};

	/**** INIT ****/
	//Version
	if(settings.testing===true || options=="version"){
		console.log("displayGoogleSheet version: "+version);
		if(options=="version")return version;
	}
	
	if(settings.docId=="" && settings.feedURL=="" ){console.log('ERROR: No Document ID is defined');return}
	return init();
}


/////////////////////// GET LIST OF SHEETS (AKA TABS) IN A SINGLE DOCUMENT /////////

function getGoogleSheetList(options){
	var settings = {
		'docId':'' // ID of the Google spreadsheet file 
		,'feedURL':''
		,'error':'' //function called on error (and on timeout if a separate timeout is not provided)
		,'timeout':'' //function called on timeout 
		,'callback':function(){} 
		,'noResults':function(){console.log('no results returned')} 
		,'noResultsString':"No events available."
		,'helpersObj':displayGoogleSheetHelper
		,'getData':'' //function called when user only wants the json returned
		,'getDataClean':function(json){console.log(JSON.stringify(json))}
		,'testing':false

		//Currently not used but included for future use
		,'containingObj':document.getElementsByTagName('body')[0]
		,'noResultsString':"No data available."
		,'customFormatting':'' //function called to get formatted HTML

	};


	for (var key in options) {if(options[key]!=undefined)settings[key]=options[key]} // push options into settings

	var init=function(){
		if(settings.feedURL==""){ 
	
			var protocol="https:";
			if(location.protocol=="http:") protocol="http:";
			settings.feedURL=protocol+'//spreadsheets.google.com/feeds/worksheets/'+settings.docId+'/public/full?alt=json';			
		}
		if(settings.testing===true)console.log("url: "+settings.feedURL);

		settings.helpersObj.makeCORSRequest({
			'url':settings.feedURL
			,'onload':processResults
			,'error':settings.error
			,'timeout':settings.timeout
			,'type':'json'
		});

	};

	var processResults=function(results){

		if(typeof results.feed.entry =='undefined' ||results.feed.entry.length==0){
			settings.noResults();
			return;
		}
		
		if(settings.getData!="") {
			settings.getData(results); 
			return;
		}
		/*return simplified version:
		[
			{'sheetName':'sheetName for tab 1', 'sheetId':'sheetId for tab 1', 'url':'url for tab 1'},  
			{'sheetName':'sheetName for tab 2', 'sheetId':'sheetId for tab 2', 'url':'url for tab 2'},     ...
		]
		*/
		var sheetArray=new Array();
		for (var i = 0; i < results.feed.entry.length; i++) {
			var rowTempArray={};
			var thisSheet=results.feed.entry[i];
			rowTempArray.sheetName=thisSheet.title.$t;

			rowTempArray.sheetId=/[\/]([^\/]+)$/.exec(thisSheet.id.$t)[1];
			rowTempArray.url=thisSheet.link[1].href;
						
			sheetArray.push(rowTempArray);
		}

		if(settings.testing==true){ console.log("sheetArray "+sheetArray)}
		
		settings.getDataClean(sheetArray);
		settings.callback();


	}	
	if(settings.docId=="" && settings.feedURL=="" ){console.log('ERROR: No Document ID is defined');return}
	 return init();


};



// JQUERY PLUGIN
try
{
     var jqueryIsLoaded = jQuery;
     (function( $ ){

		  $.fn.displayGoogleSheet = function( options ) {  
			 
		    return this.each(function() {        
		      options.containingObj=this;
			  displayGoogleSheet(options);
			  if(options.success!=""&&options.success!=undefined){options.success(); }


		    });

		  };
		})( jQuery );

}
catch(err){
	//console.log('no jquery');
}



/////////// HELPER FUNCTIONS ///////////////

var displayGoogleSheetHelper={
		makeCORSRequest:function(options){

			var settings={
				'url':''
				,'method':'GET'
				,'onload':''
				,'error':''
				,'timeout':''
				,'type':'' // possible: 'json'
			};
			for (var key in options) {if(options[key]!=undefined)settings[key]=options[key]} // push options into settings

			var xhr = this.createCORSRequest(settings.method, settings.url);
			  if (!xhr) {alert('CORS not supported');return;}
			
			  if(settings.type=='json'){
			  	xhr.onload = function() {
			  		try {
					    settings.onload(JSON.parse(xhr.responseText))
					}
					catch(err) {
						console.log('DisplayGoogleSheet - Data returned from CORS request is not JSON - this may most likely be because the document or sheet is not published or unknown.')
					    if(settings.error!="")settings.error();
					} 
			  	};
			  }
			  else xhr.onload = function() {settings.onload(xhr.responseText)};
			  xhr.onerror = function() {if(settings.error!="")settings.error()};
			  xhr.onprogress=function(){};
			 xhr.ontimeout=function(){if(settings.timeout!="")settings.timeout()};
			  xhr.send();
		},

		createCORSRequest:function(method,url){
			var xhr = new XMLHttpRequest();
			  if ("withCredentials" in xhr) {
				// XHR for Chrome/Firefox/Opera/Safari.
				xhr.open(method, url, true);
			  } else if (typeof XDomainRequest != "undefined") {
				// XDomainRequest for IE.
				xhr = new XDomainRequest();
				xhr.open(method, url);
			  } else {
				// CORS not supported.
				xhr = null;
			  }
			  return xhr;	
		}

		

		
};










	  