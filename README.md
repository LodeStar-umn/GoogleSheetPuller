# displayGoogleSheet and Google Sheets API
================

## Description:
displayGoogleSheet is a Javascript object that allows you to easily display information from a Google Sheet. Because the Google Sheets API uses CORS, there isn't an issue with cross domain errors.

Note this uses the unauthenticated API and should NOT be used for non-public information.

displayGoogleSheet does not require jQuery or any other javascript framework.

## Simple displayGoogleSheet example
The following will display the first sheet (aka tab) in the worksheet (aka a Google sheet file) with the following worksheetID: 1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg

	<!doctype html>
	<html lang="en">
	<head>
  		<title>Example Google Sheet</title>
	</head>

	<body>
		<h1>Example Google Sheet</h1>
		<div id="results-SampleSheet"></div>

	<script type="text/javascript" src="Sheets-API-Object.js"></script>
	<script>
		displayGoogleSheet({
			'sheetsId':'1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg',
			'containingObj':document.getElementById('results-SampleSheet')} 
		);
	</script>

	</body>
	</html>

Once the new displayGoogleSheet object is created, there is an AJAX call to get the data from the Google spreadsheet and is displayed as a simple HTML table.


##Options:
There are numerous options that can be passed to the displayGoogleSheet object:

**sheetsID**: REQUIRED - the spreadsheet ID of the file you want to display.

**containingObj**: OPTIONAL - the DOM object where the results will be displayed.  Defaults to the body tag.

**sheetId**: OPTIONAL - the sheet ID that contains the data.  Defaults to the first sheet in a spreadsheet file (od6).

**callback**: OPTIONAL - function that is executed when the data is returned.  This function must include the display logic using the data as formatted from Google.

**callbackClean**: OPTIONAL - function that is executed when the data is returned.  This function must use a "cleaned up" version of the data returned (see below).

**feedURL**: OPTIONAL - instead of supplying the sheetsID and sheetID, you can just suppy the full API url. Note: If you use the option, then the sheetsID is not required.


##callbackClean
A single parameter is supplied to this function - a simplified array of the data in the format of:
	
	[
		{'column':'data row1', 'column','data row1', 'column':'data row1'},  
		{'column':'data row2', 'column','data row2', 'column':'data row2'},   ...
	]

The 'column' index is the text in the first row of that column. For example the following table:

Color  | Number 
------ | ------
Red    | ff0000
Orange | ff9900
Yellow | ffff00  


Will be in the format of:

	[
		{'Color':'Red', 'Number','ff0000'},  
		{'Color':'Orange', 'Number','ff9900'}, 
		{'Color':'Yellow', 'Number','ffff00'}
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
		<script type="text/javascript" src="Sheets-API-Object.js"></script>
		<script>
		
			displayGoogleSheet({
				'sheetsId':'1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg',
				'callbackClean':function(cleanResults){
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
		'sheetsId':'1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg',
		'success':function(){console.log("success using jQuery plugin");}
	})

###jQuery Plugin options:



'sheetsId':'', // ID of the Google spreadsheet file 
				'sheetId':'od6', //ID of the individual sheet.  Defaults to the first sheet
				'success':'', //  callback to be used to display the JSON feed from Google
				'feedURL':'' /
				
**sheetsID**: REQUIRED - the spreadsheet ID of the file you want to display.

**sheetId**: OPTIONAL - the sheet ID that contains the data.  Defaults to the first sheet in a spreadsheet file (od6).

**feedURL**: OPTIONAL - instead of supplying the sheetsID and sheetID, you can just suppy the full API url. Note: If you use the option, then the sheetsID is not required.

**success**: OPTIONAL - function that is executed when the insertion of the simple table into the daisychained DOM object is complete.




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

##Getting a spreadsheet id:
You will need the spreadsheet id in order to use the displayGoogleSheet object.  The easiest way to get the spreadsheet id is to open the file in a browser and look at the URL.  The spreadsheet id is the long list alphanumeric string at the end of the url.

For example, if the URL for the sheet is:
https://docs.google.com/spreadsheets/d/1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg/edit

Then the spreadsheet ID is: 1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg

##Sheet listing API:
There is an API (XML or JSON )to get a listing of individual published sheets in a spreadsheet file.

https://spreadsheets.google.com/feeds/worksheets/SPREADSHEETID/public/full

Will return the XML, you can add the following parameters at the end to get JSON:

?alt=json&callback=i

While this API isn't used in the displayGoogleSheet object, it is handy to get the IDs of individual sheets (aka tabs) in a spreadsheet.  

Example: https://spreadsheets.google.com/feeds/worksheets/1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg/public/full?alt=json

###Getting the sheet id:
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

https://spreadsheets.google.com/feeds/cells/SPREADSHEETID/SHEETID/public/full

this will return the XML, you can add the following parameters at the end to get JSON:

?alt=json&callback=i

For example: https://spreadsheets.google.com/feeds/cells/1JgVXA3ud90wpxqMmwMsc1ejlLsTKjjZKW5aDtZzB-Qg/od6/public/full?alt=json

You do not need to know this url in order to use the displayGoogleSheet object, because it builds the URL for you.

================
================
================


##Known Issues
The first row of a sheet is assumed to be the column headers and must contain some text

The displayGoogleSheet function can only display information from a single sheet.  Displaying information from multiple sheets is not yet supported.

This is extremely light on error handeling.

##Author(s):
Kim Doberstein (dobe0002@umn.edu) - OIT, University of Minnesota



