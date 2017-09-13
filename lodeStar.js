const axios = require('axios'),
      Crosswords =  require('./service/Crosswords.js'),
      Ars =  require('./service/Ars.js'),
      fs = require('fs');

let processResults;
let weekonedayone = '1sCCmFBogLb6mHItJF5QyN8PNfJgXZGr2gwsjOrtM7JA';
let url = `https://spreadsheets.google.com/feeds/cells/${weekonedayone}/od6/public/full`;
	
axios.get(url, {
    params: {
	  alt : 'json'
    }
  })
  .then(function (response) {
	let words = processResults(response.data);
    let crosswords = new Crosswords();
	crosswords.make(words);
    let ars = new Ars();
	ars.make(words);
  })
  .catch(function (error) {
    console.log('error ', error.message);
  });






































	processResults=function(results){
		//console.log('processResults: '+results);

	
	
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

	  return rowObj;

	};

