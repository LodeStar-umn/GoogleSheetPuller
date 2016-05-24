# displayGoogleSheet and Google Sheets API
================

## Description:
displayGoogleSheet is a Javascript object that allows you to easily display information from a Google Sheet. Because the Google Sheets API uses CORS, there isn't an issue with cross domain errors.

Note this uses the unauthenticated API and should NOT be used for non-public information.

displayGoogleSheet does not require jQuery or any other javascript framework.

## Simple displayGoogleSheet example
The following will display the first sheet (aka tab) in the worksheet (aka a Google sheet file) with the following document ID: 1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg

	<!doctype html>
	<html lang="en">
	<head>
  		<title>Example Google Sheet</title>
	</head>

	<body>
		<h1>Example Google Sheet</h1>
		<div id="results-SampleSheet"></div>

	<script type="text/javascript" src="displayGoogleSheet.js"></script>
	<script>
		displayGoogleSheet({
			'docId':'1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg',
			'containingObj':document.getElementById('results-SampleSheet')} 
		);
	</script>

	</body>
	</html>

Once the new displayGoogleSheet object is created, there is an AJAX call to get the data from the Google spreadsheet and is displayed as a simple HTML table.


##Options:
There are numerous options that can be passed to the displayGoogleSheet object.  Note - all options are optional unless marked.

**docId**: REQUIRED - the document ID of the file you want to display.

**containingObj**: the DOM object where the results will be displayed.  Defaults to the body tag.

**sheetId**: the sheet ID that contains the data.  Defaults to the first sheet in a spreadsheet file (od6).

================

**timeout**: Function called if the request times out.
 
**noResults**: Function called if no results are returned.

**noResultsString**: Text displayed if there are no results. Set to "" if no text is wanted.  Defaults to "No data available."

**getData**: When supplied, this function is called instead of entries being inserted into the DOM.  The JSON as formatted from Google is the only parameter.

**getDataClean**: When supplied, this function is called instead of entries being inserted into the DOM.  A simplifed version of the returned JSON is the only parameter. See below for more information.

**customFormatting**: Function called when a custom formatting or HTML structure is wanted.  The blog entries JSON is the only parameter.  This function MUST return the HTML that is to be inserted into the DOM.

**callback**: Function called when the events HTML is inserted into the DOM.

================

**feedURL**: If you know the full url for the JSON Google sheets api, it can be passed with this option instead of providing the sheetId and docId (see above).  The use of this option isn't recommended for normal use.

**testing**: Defaulted to false.  If set to true, some additional debugging lines will be run.  The use of this option isn't recommended for normal use.


**helpersObj**: At the bottom of the displayGoogleSheet.js file there is an object that holds helper functions.  The name of object that holds the helper functions can be changed with this option.   The use of this option isn't recommended for normal use.



##getDataClean
A single parameter is supplied to this function - a simplified array of the data in the format of:
	
	[
		{'column':'data row1', 'column':'data row1', 'column':'data row1'},  
		{'column':'data row2', 'column':'data row2', 'column':'data row2'},   ...
	]

The 'column' index is the text in the first row of that column. For example the following table:

Color  | Number 
------ | ------
Red    | ff0000
Orange | ff9900
Yellow | ffff00  


Will be in the format of:

	[
		{'Color':'Red', 'Number':'ff0000'},  
		{'Color':'Orange', 'Number':'ff9900'}, 
		{'Color':'Yellow', 'Number':'ffff00'}
	]

Here is a simple example:

	<!doctype html>
	<html lang="en">
	<head>
  		<meta charset="utf-8">
 	 	<title>Example Google Sheet</title>
	</head>

	<body>
		<h1>Example Google Sheet</h1>
		<div id="results-SampleSheet"></div>
		<script type="text/javascript" src="displayGoogleSheet.js"></script>
		<script>
		
			displayGoogleSheet({
				'docId':'1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg',
				'getDataClean':function(cleanResults){
					var HTML="<ul>";
					for(var i=0;i<cleanResults.length;i++){
						HTML+="<li>"+cleanResults[i].Color+" "+cleanResults[i].Number+"</li>";
					}
					HTML+="</ul>";
					document.getElementById('results-SampleSheet').innerHTML=HTML;
				}
			});
		</script>
	</body>
	</html>
	
##jQuery Plugin
While jQuery is not required for displayGoogleSheet to work, if it is available, it can be called using jQuery.  DisplayGoogleSheet will insert an html table of the data from the spreadsheet into the daisy chained object.

Simple Example:

	('#results-SampleSheet3').displayGoogleSheet({
		'docId':'1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg',
		'success':function(){console.log("success using jQuery plugin");}
	})



##Version Number
You can easily get the version number of the displayGoogleCal by entering the following in the browser console:
	
	displayGoogleSheet('version');
	
================
================
================

#Helpful information when using displayGoogleSheet


##How to publish sheets:
A given sheet must be published in order for this to work properly.  Note, making a sheet published turns on a public API for the sheet, but does not change the permissions on viewing/editing the sheet itself.

1.  Open the Google Sheet.
2.  Go to File > Publish to the Web
3.  Under "Published content and settings", select the sheets you wish to publish.
4.  Usually you want the "Automatically republish when chagnes are made" checkbox checked.
5.  Click on "Publish"

##Getting a document id:
You will need the document id in order to use the displayGoogleSheet object.  The easiest way to get the document id is to open the file in a browser and look at the URL.  The document id is the long list alphanumeric string at the end of the url.

For example, if the URL for the sheet is:
https://docs.google.com/spreadsheets/d/1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg/edit

Then the document ID is: 1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg


##Getting a sheet id:
There is a helper method to easily get the sheet IDs of published sheets within a spreadsheet file.

The following will display the following document ID: 1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg in a browser's console:

	<!doctype html>
	<html lang="en">
	<head>
  		<title>Example Google Sheet</title>
	</head>

	<body>
		

	<script type="text/javascript" src="displayGoogleSheet.js"></script>
	<script>
		getGoogleSheetList({
			'docId':'1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg'
			,'getDataClean':function(results){console.log(results)}
		})
	</script>

	</body>
	</html>


This helper function will return a JSON object in a callback parameter in the following format:

	[
			{	'sheetName':'sheetName for tab 1', 
				'sheetId':'sheetId for tab 1', 
				'url':'url for tab 1'
			},  
			{	'sheetName':'sheetName for tab 2', 
				'sheetId':'sheetId for tab 2', 
				'url':'url for tab 2'
			}, 
			    ...
		]

If only a docId is passed to getGoogleSheetList, then the JSON results will be displayed in the console.


###Sheet listing API:

There is an API (XML or JSON )to get a listing of individual published sheets in a spreadsheet file.

https://spreadsheets.google.com/feeds/worksheets/DOCUMENTID/public/full

Will return the XML, you can add the following parameters at the end to get JSON:

?alt=json&callback=i

While this API isn't used in the displayGoogleSheet object, it is handy to get the IDs of individual sheets (aka tabs) in a spreadsheet.  

Example: https://spreadsheets.google.com/feeds/worksheets/1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg/public/full?alt=json


Looking at the sheet listing API results is the only reliable way to get an id of an individual sheet in a spreadsheet file is to use the sheet listing API.  The sheet ID is listed at the end of the entry ID url.  In the following example "od6" is the sheet id.

JSON:

    "entry":[
    	{
    		"id":{
    			"$t":"https://spreadsheets.google.com/feeds/worksheets/1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg/public/full/od6"

XML:

    <entry>
    <id>https://spreadsheets.google.com/feeds/worksheets/1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg/public/full/od6</id>

##Sheet data API
The API to get the data in an individual published sheet is:

https://spreadsheets.google.com/feeds/cells/DOCUMENTID/SHEETID/public/full

this will return the XML, you can add the following parameters at the end to get JSON:

?alt=json&callback=i

For example: https://spreadsheets.google.com/feeds/cells/1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg/od6/public/full?alt=json

You do not need to know this url in order to use the displayGoogleSheet object, because it builds the URL for you.

================
================
================

##Changes to version 0.6.1
   * Callback is now only called when the code is complete.
   
   * CallbackClean has been removed. 
   
   * Added the following options to easily allow for custom formatting/processing of results
      * getData
      * getDataClean
      * customFormatting
      
   * Other options added to more closely match other Google Puller functions
   
   * displayGoogleSheet_GetSheetIDs method renamed to getGoogleSheetList and additional options added.
   
   * GetSheetIDHelper.htmle added to more easily get document and sheet IDs
   
   * Addition of simple test html pages
   
   * Readme update.


##Known Issues
The first row of a sheet is assumed to be the column headers and must contain some text

The displayGoogleSheet function can only display information from a single sheet.  Displaying information from multiple sheets is not yet supported.

This is extremely light on error handeling.

##Author(s):
Kim Doberstein (dobe0002@umn.edu) - OIT, University of Minnesota



