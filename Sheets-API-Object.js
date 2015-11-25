// displayGoogleSheet


// Kim Doberstein 
// University of Minnesota
// Version 0.5


// JQUERY PLUGIN
try
{
     var jqueryIsLoaded = jQuery;
     (function( $ ){

		  $.fn.displayGoogleSheet = function( options ) {  

		    var settings = {
		    	'sheetsId':'', // ID of the Google spreadsheet file 
				'sheetId':'od6', //ID of the individual sheet.  Defaults to the first sheet
				'success':'', //  callback to be used to display the JSON feed from Google
				'feedURL':'' // if known the URL to the sheet feed can be supplied
		    }; 
		      if ( options ) { $.extend( settings, options ); }
			 
		    return this.each(function() {        
		      
				displayGoogleSheet({
					'sheetsId':settings.sheetsId,
					'sheetId':settings.sheetId,
					'feedURL':settings.feedURL,
					'containingObj':this
				});
				if(settings.success!=""){settings.success(); }


		    });

		  };
		})( jQuery );

}
catch(err){
	//console.log('no jquery');
}


// MAIN FUNCTION
	  
function displayGoogleSheet(options){
	var settings = {
		'sheetsId':'', // ID of the Google spreadsheet file 
		'sheetId':'od6', //ID of the individual sheet.  Defaults to the first sheet
		'containingObj':document.getElementsByTagName('body')[0],
		'callback':'', //  callback to be used to display the JSON feed from Google
		'callbackClean':'', // callback to be used to display the clean version of the JSON object
		'feedURL':'' // if known the URL to the sheet feed can be supplied
		};
	

	
	for (var key in options) {if(options[key]!=undefined)settings[key]=options[key]} // push options into settings

	if(settings.feedURL!="") var URL=feedURL;
	else{ 
		
		var protocol="https:";
		if(location.protocol=="http:") protocol="http:";
		var URL=protocol+'//spreadsheets.google.com/feeds/cells/'+settings.sheetsId+'/'+settings.sheetId+'/public/full?alt=json';
			
	}
	var dataResult;


	/*** PRIVATE METHODS ****/
	var setURL=function(){
		makeRequest();
	};

	var makeRequest=function(){
		var xhr = createCORSRequest('GET', URL);
		  if (!xhr) {alert('CORS not supported');return;}
		
		  
		  xhr.onload = function() {processResults(JSON.parse(xhr.responseText))};
		  xhr.onerror = function() {alert('Error making the CORS request.');};
		  xhr.onprogress=function(){};
		 xhr.ontimeout=function(){};
		  xhr.send();
	};

	var createCORSRequest=function(method,url){
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


	
	var processResults=function(results){
		//console.log('processResults: '+results);

		if(results.feed.entry.length==0){/*console.log("No results");*/ return;}
		if(settings.callback!=""){settings.callback(results); return;}

		/*return simplified version:
		[
			{'column':'data row1', 'column','data row1', 'column':'data row1'},  
			{'column':'data row2', 'column','data row2', 'column':'data row2'},   ...
		]
		*/
		
		var currentRow=0;
		var initRow=0;
		var headerArray=new Array();
		var rowObj=new Array();
		var rowTempArray=new Array();
		
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

					rowTempArray=new Array();
					
					
				} 
				currentRow=currentItem.gs$cell.row;

				
				rowTempArray[headerArray[currentItem.gs$cell.col]]=currentItem.content.$t;

			} 

		}  

		
		
		/* process last rowTemp Array*/
		for(j in headerArray){if(rowTempArray[headerArray[j]]==undefined){rowTempArray[headerArray[j]]=""}}
		rowObj.push(rowTempArray);

	
		
		if(settings.callbackClean!=""){settings.callbackClean(rowObj); return;}
		appendResults(rowObj);

	};

/* Displays simple table */
var appendResults=function(rowObj){

	var HTML = "<table>";
	for(var i=0; i<rowObj.length;i++){
		if(i==0){
			HTML+="<thead><tr>";
			for(j in rowObj[i]){
				HTML+="<th>"+j+"</th>";
			}

			HTML+="</tr></thead>";

		}
		
		HTML+="<tr>";
		for(j in rowObj[0]){
			HTML+="<td>"+rowObj[i][j]+"</td>";
		}
		HTML+="</tr>";
	}
	HTML+="</table>";
	
	settings.containingObj.innerHTML = HTML;




};

	/**** INIT ****/
	if(settings.sheetsId=="" && settings.feedURL=="" ){console.log('ERROR: No Sheets ID is defined');return}
	else setURL();
}
	  