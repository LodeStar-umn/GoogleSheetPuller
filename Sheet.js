const axios = require('axios'),
      async = require('async');

class Sheet {

  constructor(props) {
    props = props || {};
    this.id = props.id;
    this.tabs = [];
	  this.tabsContent = [];
    this.baseURL = 'https://spreadsheets.google.com/feeds/';
    this.sheetListUrl = `${this.baseURL}worksheets/${this.id}/public/full`;

    this.axiosParams = {  params: {
        alt : 'json'
      }
    }
  }

  getTabs(callback) {
    let self = this;
    axios.get(this.sheetListUrl, this.axiosParams)
     .then((response) => {
       self.tabs = response.data.feed.entry;
       callback(null, self);
     }).catch((error) => {
       callback(error);
     });
  }
  
  getTabsContent(callbackWaterfall) {
    let self = this;
    async.map(this.tabs, function(tab, callback) {
		 let url = tab.link[1].href;
          axios.get(url, self.axiosParams)
           .then((response) => {
						try {
							 self.tabsContent.push({
						     id: tab.title.$t,
								 items: _processResults(response.data)
						   });
               callback(null);
						 } catch(error) {
							callback(error);
						 }
           }).catch( error => {
             callback(error , []);
           });
     }, function(err) {
        callbackWaterfall(err, self);
    });
  }

}

module.exports = Sheet;

	_processResults=function(results){

	
	
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

