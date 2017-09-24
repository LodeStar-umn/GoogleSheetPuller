const Crosswords =  require('./service/Crosswords.js'),
      Ars =  require('./service/Ars.js'),
      fs = require('fs'),
      async = require('async'),
      axios = require('axios'),
	    _ = require('lodash'),
      Sheet = require('./Sheet');

let processResults;
let weekonedayone = {
                    id: '1sCCmFBogLb6mHItJF5QyN8PNfJgXZGr2gwsjOrtM7JA'
                  };

let sheet = new Sheet(weekonedayone);
    async.waterfall([
      (callback) => {
        sheet.getTabs(callback);
      },
      (sheet, callback) => {
        sheet.getTabsContent(callback)
      },
    ],
    (err, sheet) => {
		if (err) {
	      console.log('err ', err);
		} else {
		  let sheets = sheet.tabsContent(),
				crosswords = new Crosswords();
			/*
			console.log('words ', words);
			  //crosswords.make(words);
			let ars = new Ars();
			   ars.make(words);*/
		  console.log('num of tabs ', JSON.stringify(, null, 4));
		  //console.log(JSON.stringify(sheet.tabs, null, 4));
		}
    });




























