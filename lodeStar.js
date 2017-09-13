const axios = require('axios');
const fs = require('fs');

let processResults;
let makeCrossWords;
let geo;
let weekonedayone = '1sCCmFBogLb6mHItJF5QyN8PNfJgXZGr2gwsjOrtM7JA';
let url = `https://spreadsheets.google.com/feeds/cells/${weekonedayone}/od6/public/full`;
	
axios.get(url, {
    params: {
	  alt : 'json'
    }
  })
  .then(function (response) {
	let words = processResults(response.data);
	makeCrossWords(words);
	makeARs(words);
  })
  .catch(function (error) {
    console.log('error ', error.message);
  });

let studyAreaCnter = 50;
makeARs = (words) => {

	let xml, question, answer, pageId, hint;
		jt = [];

    words.forEach((item, index) => {
		let word = item.Word,
			hint = item.Definition;


    var {n, lat, lon, src, desc} = geo[studyAreaCnter++];
    xml = `
     <optionpage bbHeight="100" bbWidth="200" bbx="-14" bby="-10" cloneable="1" node="${index}" orderable="1" promptSize="0">
            <prompt />
            <entrydata>
              <input items="Gate;Image;Journal;Long Answer;Multiple Choice Question;Organizer;Report;Short Answer;Text;Video;Wall;" optionStore="Combo" pageTypes="Gate;Image;Journal;LA;MC1;Organizer;Report;ShortAnswer;mText;Video;Wall;" type="JetCustomOptionComboBox" values="Gate;Image;Journal;Long Answer;Multiple Choice Question;Organizer;Report;ShortAnswer;Text;Video;Wall;"><![CDATA[Text]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="Title" type="JetOptionTextArea"><![CDATA[${n} - Word - ${word}]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="TotalPoints_Label" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_NodesManager_Checked" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_NodesManager_UnChecked" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="TotalPoints" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input optionStore="Title_Label" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input name="Table of Contents" optionStore="Checkbox_TOC" type="JetOptionCheckBox">false</input>
            </entrydata>
            <entrydata>
              <input name="Do Not Display Correct Answer" optionStore="Checkbox_DDCA" type="JetOptionCheckBox">false</input>
            </entrydata>
            <entrydata>
              <input name="Use Multiple Choice Radio Buttons" optionStore="Checkbox_MC" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Do Not Display Check Answer Button" optionStore="Checkbox_DSCAB" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Use Percentage" optionStore="Checkbox_Percentage" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Remove from Flow" optionStore="Checkbox_Flow" type="JetOptionCheckBox">false</input>
            </entrydata>
            <entrydata>
              <input name="Randomize" optionStore="Checkbox_Randomize" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Ignore X Position" optionStore="IgnoreXPosition" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Ignore Y Position" optionStore="IgnoreYPosition" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input optionStore="Instructions" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input optionStore="Instructions_Label" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="InteractionType_Label" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="HTMLTextArea_1" type="JetOptionAdvancedHTMLEditor"><![CDATA[<html dir="ltr">
   <head> 
   </head> 
   <body style="font-family:Arial, Verdana, Helv, Helvetica, sans-serif" contenteditable="false"> 
   <table>
  <tr>
  <td>
  <p>Word: <b>${word}</b> </p>
  <p> Desc: ${hint}</p>
  ${desc}
  </td>
  <td>
  <p><img alt="" width="400" height="" src="${src}" id="" style="border: none; float: none; margin: 20px 40px 20px 20px;" /></p> 
  </td>
  </tr>
  </table>

   </body>
  </html>]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="HTMLTextArea_2" type="JetOptionAdvancedHTMLEditor"><![CDATA[<html>
   <head>
   </head> 
   <body style="font-family:Arial, Verdana, Helv, Helvetica, sans-serif" contenteditable="false"> 
    <p style="text-align: left;"><font face="'Arial'"><br /></font></p>  
   </body>
  </html>]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_1" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_2" type="JetOptionTextArea"><![CDATA[${lat}]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_3" type="JetOptionTextArea"><![CDATA[${lon}]]></input>
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_4" type="JetOptionTextArea"><![CDATA[40]]></input>
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_5" type="JetOptionTextArea"><![CDATA[40]]></input>
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_6" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_7" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_8" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_9" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_10" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="InaccessibleTextArea" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_1" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_2" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_3" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_4" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_5" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_6" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_7" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input imageHeight="300" imageWidth="400" optionStore="ImageArea_1" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input imageHeight="" imageWidth="" optionStore="ImageArea_2" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input imageHeight="" imageWidth="" optionStore="ImageArea_Q" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input imageHeight="" imageWidth="" optionStore="ImageArea_3" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input imageHeight="" imageWidth="" optionStore="ImageArea_4" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input enableAutoPlay="0" enableController="0" optionStore="Audio" type="JetOptionAudio" volume="100" />
            </entrydata>
            <entrydata>
              <input optionStore="NodeSelector" type="JetOptionNodeSelector" />
            </entrydata>
            <entrydata>
              <input optionStore="AccessibilitySelector" type="JetOptionAccessibilitySelector" />
            </entrydata>
            <entrydata>
              <input optionStore="HelpSelector" type="JetOptionHelpSelector" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_1" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_2" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_3" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_4" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_5" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Override Navigation" optionStore="Checkbox_Nav" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Reset Score" optionStore="Checkbox_A" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Allow Back Button" optionStore="Checkbox_B" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Allow Next Button" optionStore="Checkbox_C" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Reg Ex" optionStore="RegEx_CheckBox" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Allow Student to Pass Regardless of Score" optionStore="Checkbox_D" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Use Custom Score" optionStore="Checkbox_E" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Custom Score Variable Name" optionStore="CustomScoreVariableName" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input name="NodesManager" optionStore="checkedJetOptionNodesManagerButton" type="JetOptionNodesManagerButton" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input name="NodesManager" optionStore="uncheckedJetOptionNodesManagerButton" type="JetOptionNodesManagerButton" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="interviewer_content_panel" type="JetOptionImageArea" />
            </entrydata>
            <entrydata>
              <input optionStore="video_panel" type="JetOptionVideoArea" />
            </entrydata>
            <entrydata>
              <input optionStore="crossword" type="JetOptionCrossword" />
            </entrydata>
            <entrydata>
              <input optionStore="crosswordDataInput" type="JetOptionDataInput" />
            </entrydata>
            <entrydata>
              <input optionStore="dataInput" type="JetOptionDataInput" />
            </entrydata>
            <entrydata>
              <input optionStore="JetOptionResourceImportButton_1" type="JetOptionResourceImportButton" />
            </entrydata>
            <entrydata>
              <input optionStore="JetOptionResourceImportButton_2" type="JetOptionResourceImportButton" />
            </entrydata>
          </optionpage>
              <optionpage bbHeight="100" bbWidth="200" bbx="-14" bby="-10" cloneable="1" node="${index}_long_text" orderable="1" promptSize="0">
            <prompt />
            <entrydata>
              <input items="Gate;Image;Journal;Long Answer;Multiple Choice Question;Organizer;Report;Short Answer;Text;Video;Wall;" optionStore="Combo" pageTypes="Gate;Image;Journal;LA;MC1;Organizer;Report;ShortAnswer;mText;Video;Wall;" type="JetCustomOptionComboBox" values="Gate;Image;Journal;Long Answer;Multiple Choice Question;Organizer;Report;ShortAnswer;Text;Video;Wall;"><![CDATA[Long Answer]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="Title" type="JetOptionTextArea"><![CDATA[${n} - Word - ${word}]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="TotalPoints_Label" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_NodesManager_Checked" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_NodesManager_UnChecked" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="TotalPoints" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input optionStore="Title_Label" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input name="Table of Contents" optionStore="Checkbox_TOC" type="JetOptionCheckBox">false</input>
            </entrydata>
            <entrydata>
              <input name="Do Not Display Correct Answer" optionStore="Checkbox_DDCA" type="JetOptionCheckBox">false</input>
            </entrydata>
            <entrydata>
              <input name="Use Multiple Choice Radio Buttons" optionStore="Checkbox_MC" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Do Not Display Check Answer Button" optionStore="Checkbox_DSCAB" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Use Percentage" optionStore="Checkbox_Percentage" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Remove from Flow" optionStore="Checkbox_Flow" type="JetOptionCheckBox">false</input>
            </entrydata>
            <entrydata>
              <input name="Randomize" optionStore="Checkbox_Randomize" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Ignore X Position" optionStore="IgnoreXPosition" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Ignore Y Position" optionStore="IgnoreYPosition" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input optionStore="Instructions" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input optionStore="Instructions_Label" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="InteractionType_Label" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="HTMLTextArea_1" type="JetOptionAdvancedHTMLEditor"><![CDATA[<html dir="ltr">
   <head></head>  
   <body style="font-family:Arial, Verdana, Helv, Helvetica, sans-serif" contenteditable="false"> 
    <p style="text-align: left;"><font face="Lucida Grande">Now that you have found the <i>${n}</i>, describe in detail the word association&nbsp;</font>
    <span style="font-family: 'Lucida Grande';">you are able to make</span>
    <span style="font-family: 'Lucida Grande';">&nbsp;with the word <i>${word}</i></span></p>  
   </body>
  </html>]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="HTMLTextArea_2" type="JetOptionAdvancedHTMLEditor"><![CDATA[<html>
   <head></head> 
   <body style="font-family:Arial, Verdana, Helv, Helvetica, sans-serif" contenteditable="false"> 
    <p style="text-align: left;"><font face="'Arial'"><br /></font></p>  
   </body>
  </html>]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_1" type="JetOptionTextArea"><![CDATA[${n} & ${word}]]></input>
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_2" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_3" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_4" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_5" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_6" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_7" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_8" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_9" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="TextArea_10" type="JetOptionTextArea" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="InaccessibleTextArea" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_1" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_2" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_3" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_4" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_5" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_6" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input optionStore="Label_7" type="JetOptionLabel" />
            </entrydata>
            <entrydata>
              <input imageHeight="300" imageWidth="400" optionStore="ImageArea_1" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input imageHeight="" imageWidth="" optionStore="ImageArea_2" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input imageHeight="" imageWidth="" optionStore="ImageArea_Q" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input imageHeight="" imageWidth="" optionStore="ImageArea_3" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input imageHeight="" imageWidth="" optionStore="ImageArea_4" type="JetOptionImageArea" />
              <imageCaption />
              <imageSource />
              <mediaController />
              <showMiniNav />
              <enableMiniNav />
            </entrydata>
            <entrydata>
              <input enableAutoPlay="0" enableController="0" optionStore="Audio" type="JetOptionAudio" volume="100" />
            </entrydata>
            <entrydata>
              <input optionStore="NodeSelector" type="JetOptionNodeSelector" />
            </entrydata>
            <entrydata>
              <input optionStore="AccessibilitySelector" type="JetOptionAccessibilitySelector" />
            </entrydata>
            <entrydata>
              <input optionStore="HelpSelector" type="JetOptionHelpSelector" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_1" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_2" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_3" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_4" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Correct" optionStore="Checkbox_5" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Override Navigation" optionStore="Checkbox_Nav" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Reset Score" optionStore="Checkbox_A" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Allow Back Button" optionStore="Checkbox_B" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Allow Next Button" optionStore="Checkbox_C" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Reg Ex" optionStore="RegEx_CheckBox" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Allow Student to Pass Regardless of Score" optionStore="Checkbox_D" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Use Custom Score" optionStore="Checkbox_E" type="JetOptionCheckBox" />
            </entrydata>
            <entrydata>
              <input name="Custom Score Variable Name" optionStore="CustomScoreVariableName" type="JetOptionTextArea" />
            </entrydata>
            <entrydata>
              <input name="NodesManager" optionStore="checkedJetOptionNodesManagerButton" type="JetOptionNodesManagerButton" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input name="NodesManager" optionStore="uncheckedJetOptionNodesManagerButton" type="JetOptionNodesManagerButton" />
              <checkedOption />
              <checkedValue />
              <showFeedback />
              <feedback />
              <branchOptions />
              <branchDelay />
            </entrydata>
            <entrydata>
              <input optionStore="interviewer_content_panel" type="JetOptionImageArea" />
            </entrydata>
            <entrydata>
              <input optionStore="video_panel" type="JetOptionVideoArea" />
            </entrydata>
            <entrydata>
              <input optionStore="crossword" type="JetOptionCrossword" />
            </entrydata>
            <entrydata>
              <input optionStore="crosswordDataInput" type="JetOptionDataInput" />
            </entrydata>
            <entrydata>
              <input optionStore="dataInput" type="JetOptionDataInput" />
            </entrydata>
            <entrydata>
              <input optionStore="JetOptionResourceImportButton_1" type="JetOptionResourceImportButton" />
            </entrydata>
            <entrydata>
              <input optionStore="JetOptionResourceImportButton_2" type="JetOptionResourceImportButton" />
            </entrydata>
          </optionpage>
    `;
    jt.push(xml);
  });
   let arData = jt.join("\n");
	fs.readFile('templates/ar.xml', "utf8" , (err, data) => {
	  if (err) throw err;
      data = data.replace('_gdoc_input_', arData);
      fs.writeFileSync('/Users/wolde034/LodeStar/Projects/ARMaker/base/main.xml',data);
	});
}

makeCrossWords = (words) => {
	var entityMap = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;',
	  '/': '&#x2F;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	function escapeHtml (string) {
	  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
		return entityMap[s];
	  });
	}

	let xml, question, answer, pageId, hint;
		jt = [];

		words.forEach((item, index) => {
		let w = item.Word,
			t = item.Type,
			d = item.Definition;
		xml = `<dataPage><Word>${w}</Word><Hint>${d}</Hint></dataPage>`;

		jt.push(xml);

	});
   let crosswordsData = escapeHtml('<data>'+jt.join("")+'</data>');
	fs.readFile('templates/crossword.xml', "utf8" , (err, data) => {
	  if (err) throw err;
      data = data.replace('_gdoc_input_', crosswordsData);
      fs.writeFileSync('/Users/wolde034/LodeStar/Projects/ActivityMakerCrossWord/base/main.xml',data);
	});
}


































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

geo = 
[{"n":"Biological Sciences 15","lat":44.98473064,"lon":-93.1824708,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_1_BiologicalSciences15_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 0B</p><p style='outline: none;'>Room Number: 15</p><p>Seats: 45</p><p style='outline: none;'>Whiteboards</p><p style='outline: none;'>Outlets</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Quiet</p></p></p>"},{"n":"Blegen Hall  90","lat":44.97167472,"lon":-93.24339149,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_3_BlegenHall90_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0B</p><p>Room Number: 90</p><p>Seats: 25</p><p style='outline: none;'>Study Room without Doors</p><p style='outline: none;'>Computer Lab</p><p>Whiteboards</p><p>Outlets</p><p>Both Mac and PC</p><p>Large Display</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p><p></p></p>"},{"n":"Borlaug Hall - 3rd Floor","lat":44.98681173,"lon":-93.18325395,"src":"https://egis.umn.edu/studyspace/studyspaceimages/Borlaug_3rd_floor.jpg","desc":"<p><p><p>Floor: 03</p><p>Room Numbers: 341, 359, 369</p><p>Seats: 11</p><p>Outlets</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Low Hum</p></p></p>"},{"n":"Bruininks Hall - 1st Floor","lat":44.97379016,"lon":-93.23732265,"src":"https://egis.umn.edu/studyspace/studyspaceimages/Bruininks_Hall_1st_Floor.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: 101A</p><p>Seats: 28</p><p style='outline: medium none;'>Outlets</p><p>Markerboards</p><p>Vending</p><p>Microwave</p><p>Wireless Internet access</p><p>Network printer</p><p>Large Display</p><p style='outline: medium none;'>Tables and Chairs</p><p style='outline: medium none;'>Noise Level: Chatter<br /></p><p></p></p>"},{"n":"Bruininks Hall - 3rd Floor","lat":44.97378307,"lon":-93.23732067,"src":"https://egis.umn.edu/studyspace/studyspaceimages/Bruininks_Hall_3rd_Floor.jpg","desc":"<p><p></p><p style='outline: medium none;'>Floor: 03</p><p>Room Number: 301A</p><p>Seats: 10</p><p style='outline: medium none;'>Outlets</p><p style='outline: none;'>Lounge seating<br /></p><p style='outline: medium none;'>Natural Light</p><p>Noise Level: Chatter</p><p></p></p>"},{"n":"Bruininks Hall - 4th Floor","lat":44.97380634,"lon":-93.23741751,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_11_BruininksHall401A_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 04</p><p>Room Number: 401A</p><p>Seats: 28</p><p style='outline: medium none;'>Outlets</p><p style='outline: none;'>Printing (Gopher Gold)<br /></p><p style='outline: medium none;'>Tables and Chairs</p><p style='outline: medium none;'>Lounge seating</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Chatter</p><p></p></p>"},{"n":"Bruininks Hall - 5th Floor","lat":44.97378646,"lon":-93.2372992,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_12_BruininksHall501A_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 05</p><p>Room Number: 501A</p><p style='outline: medium none;'>Seats: 12</p><p style='outline: medium none;'>Outlets</p><p style='outline: medium none;'>Lounge seating</p><p>Natural Light</p><p style='outline: medium none;'>Noise Level: Chatter</p><p></p></p>"},{"n":"Carlson School of Management - Medtronic Dining Hall","lat":44.97047975,"lon":-93.24450674,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_13_CarlsonSchoolofManagement125_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 0L</p><p style='outline: medium none;'>Room Number: L-145</p><p style='outline: medium none;'>Seats: 231</p><p style='outline: medium none;'>Outlets</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Chatter</p><p>Notes: UDS/OCM shared support</p></p></p>"},{"n":"Coffman Memorial Union - 1st Floor - Fireplace Lounge East","lat":44.97290089,"lon":-93.235224,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_129_CoffmanMemorialUnionFireplaceLoungeEast_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 01</p><p style='outline: none;'>Room Number: Fireplace Lounge East</p><p style='outline: none;'>Seats: 15</p><p>Natural Light</p><p>Outlets</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Coffman Memorial Union - 1st Floor - Fireplace Lounge West","lat":44.97290754,"lon":-93.23547347,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_130_CoffmanMemorialUnionFireplaceLoungeWest_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 01</p><p style='outline: none;'>Room Number: Fireplace Lounge West</p><p style='outline: none;'>Seats: 35</p><p>Natural Light</p><p>Outlets</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Coffman Memorial Union - 1st Floor - South Lounge","lat":44.97280412,"lon":-93.23532866,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_132_CoffmanMemorialUnionSouthLounge_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 01</p><p style='outline: none;'>Room Number: South Lounge</p><p>Seats: 14</p><p>Natural Light</p><p>Outlets</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Coffman Memorial Union - 1st Floor - TV Lounge","lat":44.97291038,"lon":-93.2348901,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_131_CoffmanMemorialUnionTVLounge_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 01</p><p style='outline: none;'>Room Number: TV Lounge</p><p>Natural Light</p><p>Outlets</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Coffman Memorial Union - 2nd Floor - East and West Area","lat":44.97284681,"lon":-93.23512743,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_127_CoffmanMemorialUnionEandWArea_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: East and West Area</p><p style='outline: none;'>Seats: 8</p><p>Natural Light</p><p>Outlets</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Coffman Memorial Union - 2nd Floor - North Area","lat":44.97302992,"lon":-93.23533135,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_126_CoffmanMemorialUnionNorthArea_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: North Area</p><p>Seats: 260</p><p style='outline: none;'>Study Room (Without Doors)</p><p style='outline: none;'>Whiteboards</p><p style='outline: none;'>Large Displays</p><p>Natural Light</p><p>Outlets</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Coffman Memorial Union - 2nd Floor - South Hallway Lounges","lat":44.97285345,"lon":-93.23549224,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_128_CoffmanMemorialUnionSouthLounge_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: South Hallway Lounges</p><p style='outline: none;'>Seats: 31</p><p>Natural Light</p><p>Outlets</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Coffman Memorial Union - 3rd Floor - North Hallway","lat":44.97298059,"lon":-93.23538363,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_125_CoffmanMemorialUnionNorthAreaHallway_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 03</p><p style='outline: none;'>Room Number: North Area Hallway</p><p style='outline: none;'>Seats: 8</p><p>Outlets</p><p style='outline: none;'>Noise Level: Low Hum</p></p></p>"},{"n":"Coffman Memorial Union - Basement Floor","lat":44.97283739,"lon":-93.23534842,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_15_20170607_comp.jpg","desc":"<p><p><p>Floor: 0B</p><p>Room: Basement</p></p></p>"},{"n":"Coffman Memorial Union - Basement Floor - Corridor Lounges","lat":44.97277735,"lon":-93.23537231,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_166_CoffmanBasementCorridorLoungesComposite_comp.jpg","desc":"<p style='outline: none;'>Floor: 0B</p><p style='outline: none;'>Room Number: Corridor Lounges</p><p style='outline: none;'>Seats: 45</p><p>Soft couches and chairs</p><p>Outlets</p><p>Noise Level: Low Hum</p>"},{"n":"Coffman Memorial Union - Basement Floor - Goldy's Gameroom","lat":44.97282669,"lon":-93.23581222,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_164_CoffmanGoldysGameroom_comp.jpg","desc":"<p style='outline: none;'>Floor: 0B</p><p style='outline: none;'>Room Number: Goldy's Gameroom</p><p style='outline: none;'>Seats: 188</p><p>Coffee Shop / Cafe</p><p>Tables and Chairs</p><p>Outlets</p><p>Natural Light</p><p>Noise Level: Chatter</p>"},{"n":"Coffman Memorial Union - Basement Floor - Hallway Outside Goldy's Gameroom","lat":44.97283807,"lon":-93.23566741,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_165_CoffmanHallwayOutsideGoldysGameroom_comp.jpg","desc":"<p style='outline: none;'>Floor: 0B</p><p style='outline: none;'>Room Number: Hallway outside Goldy's Gameroom</p><p style='outline: none;'>Seats: 3</p><p style='outline: none;'>Soft lounge chairs<br /></p><p style='outline: none;'>Outlets<br /></p><p style='outline: none;'>Noise Level: Low Hum</p>"},{"n":"Coffman Memorial Union - Ground Floor - Dining Area","lat":44.97260298,"lon":-93.23491696,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_123_CoffmanMemorialUnionDiningArea_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0G</p><p style='outline: none;'>Room Number: Dining Area</p><p style='outline: none;'>Seats: 260</p><p style='outline: none;'>Coffee Shop/Cafe</p><p style='outline: none;'>Natural Light</p><p>Outlets</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p></p></p>"},{"n":"Coffman Memorial Union - Ground Floor - East Corridor","lat":44.97280727,"lon":-93.23510956,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_162_CoffmanEastCorridor_comp.jpg","desc":"<p style='outline: none;'>Floor: 0G</p><p style='outline: none;'>Room Number: East Corridor (Area outside Minnesota Marketplace along corridor)</p><p style='outline: none;'>Seats: 26</p><p>Tables and Chairs</p><p>Outlets</p><p>Natural Light</p><p>Noise Level: Chatter</p>"},{"n":"Coffman Memorial Union - Ground Floor - South Lounge East","lat":44.97262101,"lon":-93.23536486,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_124_CoffmanMemorialUnionSEL_comp.jpg","desc":"<p></p><p></p><p>Floor: 0G</p><p style='outline: none;'>Room Number: South Lounge East</p><p style='outline: none;'>Seats: 11</p><p>Natural Light</p><p>Outlets</p><p>Noise Level: Chatter</p><p></p><p></p>"},{"n":"Coffman Memorial Union - Ground Floor - Southwest Lounge","lat":44.97261417,"lon":-93.23577467,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_160_CoffmanSWLounge_comp.jpg","desc":"<p>Floor: 0G</p><p style='outline: none;'>Room Number: South Lounge West</p><p style='outline: none;'>Seats: 10</p><p>Natural Light</p><p>Outlets</p><p>Noise Level: Chatter</p>"},{"n":"Coffman Memorial Union - Ground Floor - The Cube","lat":44.97338455,"lon":-93.23615017,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_163_CoffmanTheCube_comp.jpg","desc":"<p>Floor: 0G</p><p style='outline: none;'>Room Number: The Cube (ground level)</p><p style='outline: none;'>Seats: 108</p><p>Tables and Chairs</p><p>Outlets</p><p>Natural Light</p><p>Noise Level: Chatter</p>"},{"n":"Coffman Memorial Union - Ground Floor - West Corridor","lat":44.97280771,"lon":-93.2357559,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_161_CoffmanWestCorridor_comp.jpg","desc":"<p>Floor: 0G</p><p style='outline: none;'>Room Number: West Corridor (Located across from the Great Hall main entrance)</p><p style='outline: none;'>Seats: 25</p><p>Tables and Chairs</p><p style='outline: none;'>Outlets<br /></p><p>Natural Light<br /></p><p>Noise Level: Chatter</p>"},{"n":"Coffman Memorial Union - Whole Music Club","lat":44.97278075,"lon":-93.23525347,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_16_WholeMusicClub_comp.jpg","desc":"<p></p><p></p><p style='outline: none;'>Floor: 01</p><p style='outline: none;'>Room: Whole Music Club</p><p>Seats: 119</p><p>Outlets</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum<br /></p><p></p><p></p>"},{"n":"Coffman Memorial Union B60","lat":44.97272025,"lon":-93.23510192,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_14_CoffmanMemorialUnionB60_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0B</p><p>Room Number: B60</p><p>Seats: 80</p><p>Study Room with Doors</p><p>Computer Lab</p><p>Outlets</p><p>Computer Types: Both Mac and PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p><p>More Info: <a href=\"https://it.umn.edu/computer-lab-cmu-b060\" target=\"_blank\">Computer Lab details</a></p></p>"},{"n":"Diehl Hall 206 - Bio-Medical Library","lat":44.97169865,"lon":-93.23165643,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_18_Diehl%20Hall%20BioMed_206_comp.jpg","desc":"<p></p><p></p><p style='outline: none;'>Floor: 02</p><p>Room Number: 206</p><p>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p style='outline: none;'>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span style='outline: none;'>z.umn.edu/biomedgroupstudy</span></a></p><p></p><p></p>"},{"n":"Diehl Hall 208 - Bio-Medical Library","lat":44.97170434,"lon":-93.23159741,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_19_Diehl208_comp.jpg","desc":"<p><p></p><p>Floor: 02</p><p>Room Number: 208</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 209 - Bio-Medical Library","lat":44.97171667,"lon":-93.23157594,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_20_Diehl%20Hall%20BioMed_208_comp.jpg","desc":"<p></p><p></p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: 209</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p><p></p>"},{"n":"Diehl Hall 218 - Bio-Medical Library","lat":44.97163365,"lon":-93.23162418,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_21_Diehl218_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p>Room Number: 218</p><p style='outline: none;'>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 219 - Bio-Medical Library","lat":44.97172284,"lon":-93.23164305,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_22_Diehl219_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: 219</p><p style='outline: none;'>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 220 - Bio-Medical Library ","lat":44.97162665,"lon":-93.2317857,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_23_Diehl220_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p>Room Number: 220</p><p style='outline: none;'>Seats: 8</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 221 - Bio-Medical Library","lat":44.97175305,"lon":-93.23160828,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_24_Diehl221_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p>Room Number: 221</p><p>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 222 - Bio-Medical Library","lat":44.97173043,"lon":-93.23154908,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_25_Diehl222_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p>Room Number: 222</p><p>Seats: 6</p><p>Study Room with Doors</p><p style='outline: none;'>Whiteboards</p><p style='outline: none;'>Large Display Monitor</p><p style='outline: none;'>Outlets</p><p style='outline: none;'>Printing (Gopher Gold)</p><p style='outline: none;'>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 278A - Bio-Medical Library","lat":44.97183294,"lon":-93.23165095,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_26_Diehl278A_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p>Room Number: 278A</p><p>Seats: 3</p><p>Study Room with Doors</p><p style='outline: none;'>Outlets</p><p style='outline: none;'>Computer - PC</p><p>Printing (Gopher Gold)</p><p style='outline: none;'>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 278B - Bio-Medical Library","lat":44.97183301,"lon":-93.23160855,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_27_Diehl278B_comp.jpg","desc":"<p><p></p><p>Floor: 02</p><p>Room Number: 278B</p><p>Seats: 3</p><p>Study Room with Doors</p><p>Outlets</p><p style='outline: none;'>Computer - PC</p><p style='outline: none;'>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 290-1 - Bio-Medical Library","lat":44.97167588,"lon":-93.23117682,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_28_Diehl%20Hall%20BioMed_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: 290-1</p><p style='outline: none;'>Seats: 4</p><p style='outline: none;'>Study Room with Doors</p><p style='outline: none;'>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p><p></p></p>"},{"n":"Diehl Hall 290-2 - Bio-Medical Library","lat":44.97170972,"lon":-93.23121141,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_139_Diehl%20Hall%20BioMed_290_comp.jpg","desc":"<p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: 290-2</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p></p>"},{"n":"Diehl Hall 290-3 - Bio-Medical Library","lat":44.97171613,"lon":-93.23118724,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_140_Diehl%20Hall%20BioMed209-3_comp.jpg","desc":"<p><p>Floor: 02</p><p style='outline: none;'>Room Number: 290-3</p><p style='outline: none;'>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p></p>"},{"n":"Diehl Hall 290-4 - Bio-Medical Library","lat":44.97171613,"lon":-93.23117458,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_141_Diehl%20Hall%20BioMed_290-4_comp.jpg","desc":"<p><p>Floor: 02</p><p style='outline: none;'>Room Number: 290-4</p><p style='outline: none;'>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p></p>"},{"n":"Diehl Hall - 2nd Floor - Bio-Medical Library","lat":44.97164758,"lon":-93.2313254,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_30_Diehl%20Hall%20BioMed_SecondFloor_comp.jpg","desc":"<p><p><p>Floor: 02</p><p>Room Number: Library</p><p>Room Alias: 2nd Floor Bio-Medical Library</p><p>Seats: 266</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p style='outline: none;'>Computer Types: Both Mac and PC</p><p>Large Display</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Quiet</p></p></p>"},{"n":"Diehl Hall 350-1 - Bio-Medical Library","lat":44.971807749999996,"lon":-93.23151091,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_136_Diehl350-1_comp.jpg","desc":"<p><p style='outline: none;'>Floor: 03</p><p>Room Number: 350-1</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p></p>"},{"n":"Diehl Hall 350-2- Bio-Medical Library","lat":44.97182767,"lon":-93.23145997,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_135_Diehl350-2_comp.jpg","desc":"<p><p style='outline: none;'>Floor: 03</p><p>Room Number: 350-2</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p></p>"},{"n":"Diehl Hall 350-3 - Bio-Medical Library","lat":44.97182767,"lon":-93.23138218,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_134_Diehl350-3_comp.jpg","desc":"<p><p style='outline: none;'>Floor: 03</p><p>Room Number: 350-3</p><p>Seats: 4</p><p>Study Room with Doors</p><p style='outline: none;'>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p></p>"},{"n":"Diehl Hall 350-4 - Bio-Medical Library","lat":44.97187796,"lon":-93.23136206,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_138_Diehl350-4_comp.jpg","desc":"<p><p style='outline: none;'>Floor: 03</p><p>Room Number: 350-4</p><p style='outline: none;'>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p></p>"},{"n":"Diehl Hall 350-5 - Bio-Medical Library","lat":44.97186657,"lon":-93.23142377,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_137_Diehl350-5_comp.jpg","desc":"<p><p style='outline: none;'>Floor: 03</p><p>Room Number: 350-5</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Reserve at <a href='https://z.umn.edu/biomedgroupstudy' target='_blank'><span>z.umn.edu/biomedgroupstudy</span></a></p></p>"},{"n":"Diehl Hall - 3rd Floor - Bio-Medical Library","lat":44.97164758,"lon":-93.2313254,"src":"https://egis.umn.edu/studyspace/studyspaceimages/Diehl%20Hall%20BioMed_ThirdFloor%20STUDYSPACE_400.jpg","desc":"<p><p><p>Floor: 03</p><p>Room Number: Library</p><p>Room Alias: 3rd Floor Bio-Medical Library</p><p style='outline: none;'>Seats: 84</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Low Hum</p></p></p>"},{"n":"Diehl Hall - 4th Floor - Bio-Medical Library","lat":44.97164758,"lon":-93.2313254,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_29_Diehl%20Hall%20BioMed_FourthFloor_comp.jpg","desc":"<p><p><p>Floor: 04</p><p>Room Number: Library</p><p>Room Alias: 4th Floor Bio-Medical Library</p><p>Seats: 150</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p style='outline: none;'>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p></p></p>"},{"n":"Ferguson Hall - 1st Floor - Music Library","lat":44.97066224,"lon":-93.24185528,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_31_MusicLibrary_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 01</p><p>Room Number: 70</p><p>Room Alias: Music Library</p><p>Seats: 180</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Low Hum</p></p></p>"},{"n":"Folwell Hall 111","lat":44.97838231,"lon":-93.2345588,"src":"https://egis.umn.edu/studyspace/studyspaceimages/FolwellHall111.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: 111</p><p style='outline: medium none;'>Seats: 12</p><p style='outline: medium none;'>Outlets</p><p>Markerboards</p><p>Wireless Internet access</p><p style='outline: medium none;'>Lounge seating</p><p style='outline: medium none;'>Natural Light</p><p>Noise Level: Low Hum</p><p></p></p>"},{"n":"Folwell Hall 27","lat":44.97820483,"lon":-93.23413983,"src":"https://egis.umn.edu/studyspace/studyspaceimages/FolwellHall27.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0G</p><p>Room Number: 27</p><p style='outline: medium none;'>Seats: 13</p><p style='outline: medium none;'>Outlets</p><p>Markerboards</p><p>Wireless Internet access</p><p style='outline: medium none;'>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Low Hum</p><p></p></p>"},{"n":"Folwell Hall 420A","lat":44.97817967,"lon":-93.23437429,"src":"https://egis.umn.edu/studyspace/studyspaceimages/FolwellHall420A.jpg","desc":"<p><p><p>Floor: 04</p><p>Room Number: 420A</p><p>Seats: 26</p><p style='outline: medium none;'>Outlets</p><p style='outline: medium none;'>Wireless Internet access</p><p style='outline: medium none;'>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Low Hum</p></p></p>"},{"n":"Folwell Hall 7","lat":44.97843496,"lon":-93.23470657,"src":"https://egis.umn.edu/studyspace/studyspaceimages/FolwellHall7.jpg","desc":"<p><p></p><p>Floor: 0G</p><p>Room Number: 7</p><p>Seats: 13</p><p style='outline: medium none;'>Study Room with Doors</p><p style='outline: medium none;'>Outlets</p><p>Markerboards</p><p>Wireless Internet access</p><p style='outline: medium none;'>Lounge seating</p><p>Natural Light</p><p>Noise Level: Low Hum</p><p></p></p>"},{"n":"Hasselmo Hall 201CC / 202CC","lat":44.97314527,"lon":-93.23422454,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_159_Hasselmo210CC_202CC_comp.jpg","desc":"<p></p><p style='outline: medium none;'>Floor: 02</p><p style='outline: none;'>Room Number: 201CC / 202CC<br /></p><p style='outline: medium none;'>Vending<br /></p><p style='outline: medium none;'>Lounge Seating<br /></p><p>Noise Level: Quiet<br /></p><p></p>"},{"n":"Hodson Hall - 3rd Floor - Natural Resources Library","lat":44.9876521,"lon":-93.18404222,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_38_HodsonHall375_comp.jpg","desc":"<p><p><p>Floor: 03</p><p>Room Number: 375</p><p>Room Alias: Natural Resources Library</p><p>Seats: 70</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p></p></p>"},{"n":"Humphrey School of Public Affairs 50","lat":44.97147935,"lon":-93.24501618,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_39_HumphreySchoolofPublicAffairs50_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0B</p><p style='outline: medium none;'>Room Number: 50</p><p>Room Alias: Learning Commons 50</p><p>Seats: 98</p><p>Computer Lab</p><p style='outline: medium none;'>Computer Types: Both Mac and PC</p><p style='outline: medium none;'>Printing (Gopher Gold)</p><p style='outline: medium none;'>Outlets</p><p>Markerboards</p><p>Wireless Internet access</p><p>Individual Desks</p><p style='outline: medium none;'>Tables and Chairs</p><p style='outline: medium none;'>Lounge seating</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p><p></p></p>"},{"n":"Keller Hall - 3rd floor","lat":44.97438029,"lon":-93.23266982,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_42_KHKH003211_comp.jpg","desc":"<p><p><p style='outline: medium none;'>Floor: 03</p><p style='outline: medium none;'>Room Number: 3-211<br /></p><p style='outline: medium none;'>Seats: 20<br /></p><p>Outlets<br /></p><p>Wireless Internet access</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: medium none;'>Noise Level: Chatter</p></p></p>"},{"n":"Keller Hall - 4th floor","lat":44.97486645,"lon":-93.23301181,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_43_KHKH004143_comp.jpg","desc":"<p><p><p style='outline: medium none;'>Floor: 04</p><p style='outline: medium none;'>Room Number: 4-143<br /></p><p style='outline: medium none;'>Seats: 16<br /></p><p>Outlets</p><p>Wireless Internet access</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Learning and Environmental Sciences - Atrium","lat":44.98407535,"lon":-93.18225484,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_44_LearningandEnvironmentalSciences235_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 02</p><p>Room Number: 235</p><p>Seats: 34</p><p>Outlets</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Quiet</p></p></p>"},{"n":"Magrath Library 125","lat":44.98394723,"lon":-93.18382968,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_48_Magrath125_comp.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: 125</p><p>Seats: 10</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/magrathgroupstudy' target='_blank'><span>z.umn.edu/magrathgroupstudy</span></a><br /></p><p></p></p>"},{"n":"Magrath Library 184","lat":44.9840647,"lon":-93.18398967,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_47_Magrath184_comp.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: 184</p><p>Seats: 8</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/magrathgroupstudy' target='_blank'><span>z.umn.edu/magrathgroupstudy</span></a><br /></p><p></p></p>"},{"n":"Magrath Library 185","lat":44.98410339,"lon":-93.18406989,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_46_Magrath185_comp.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: 185</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/magrathgroupstudy' target='_blank'><span>z.umn.edu/magrathgroupstudy</span></a><br /></p><p></p></p>"},{"n":"Magrath Library - 1st Floor","lat":44.98417202,"lon":-93.18357734,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_133_Magrath_FirstFloor_comp.jpg","desc":"<p><p style='outline: none;'>Floor: 01</p><p style='outline: none;'>Room Number: First Floor</p><p style='outline: none;'>Seats: 60</p><p style='outline: none;'>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p style='outline: none;'>Tables and Chairs</p><p style='outline: none;'>Natural Light</p><p>Noise Level: Quiet</p></p>"},{"n":"Magrath Library - 2nd Floor","lat":44.98409614,"lon":-93.18371416,"src":"https://egis.umn.edu/studyspace/studyspaceimages/MagrathLibrary_GroundFloor%20STUDYSPACE_50.JPG","desc":"<p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: Second Floor</p><p style='outline: none;'>Seats: 54</p><p style='outline: none;'>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Quiet</p></p>"},{"n":"Magrath Library 75C","lat":44.98414201,"lon":-93.18332734,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_54_MagrathLibrarySMART_75C_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0G</p><p>Room Number: 75C</p><p>Seats: 3</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/magrathgroupstudy' target='_blank'><span>z.umn.edu/magrathgroupstudy</span></a><br /></p><p></p></p>"},{"n":"Magrath Library 75D","lat":44.98415958,"lon":-93.18335384,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_55_MagrathLibrarySMART_75D_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0G</p><p>Room Number: 75D</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/magrathgroupstudy' target='_blank'><span>z.umn.edu/magrathgroupstudy</span></a><br /></p><p></p></p>"},{"n":"Magrath Library 75E","lat":44.98419524,"lon":-93.18337567,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_56_MagrathSMART_75E_comp.jpg","desc":"<p><p></p><p>Floor: 0G</p><p>Room Number: 75E</p><p>Seats: 3</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/magrathgroupstudy' target='_blank'><span>z.umn.edu/magrathgroupstudy</span></a><br /></p><p></p></p>"},{"n":"Magrath Library 80","lat":44.98418423,"lon":-93.1838472,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_49_MagrathLibrary80_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0G</p><p>Room Number: 80</p><p>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Large Display</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/magrathgroupstudy' target='_blank'><span>z.umn.edu/magrathgroupstudy</span></a><br /></p><p></p></p>"},{"n":"Magrath Library B55","lat":44.98406087,"lon":-93.18321963,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_45_MagrathLibraryB55_comp.jpg","desc":"<p><p></p><p>Floor: 0B</p><p>Room Number: B55</p><p>Seats: 16</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/magrathgroupstudy' target='_blank'><span>z.umn.edu/magrathgroupstudy</span></a><br /></p><p></p></p>"},{"n":"Magrath Library - Basement Floor - SMART Learning Commons","lat":44.98410145,"lon":-93.18334423,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_51_MagrathLibrarySMART_Basement_comp.jpg","desc":"<p><p><p>Floor: 0B</p><p>Room Number: B65</p><p>Room Alias: Basement level SMART learning commons</p><p>Seats: 42</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p style='outline: none;'>Noise Level: Low Hum</p></p></p>"},{"n":"Magrath Library - Ground Floor - Hallway","lat":44.98398643,"lon":-93.18346137,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_52_MagrathLibraryHallway_comp.jpg","desc":"<p><p><p>Floor: 0G</p><p>Room Number: Hallway</p><p>Room Alias: Magrath Library Outer Hallway</p><p style='outline: none;'>Seats: 20</p><p>Study Room without Doors</p><p>Outlets</p><p>Individual Desks</p><p>Natural Light</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Magrath Library - Ground Floor - Main Area","lat":44.98418423,"lon":-93.1838472,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_50_MagrathLibraryMainArea_comp.jpg","desc":"<p><p/><p style='outline: none;'>Floor: 0G</p><p>Room Number: Main Area</p><p>Seats: 103</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Computer Types: Both Mac and PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Noise Level: Low Hum</p></p>"},{"n":"Magrath Library - Ground Floor - SMART Learning Commons","lat":44.98410145,"lon":-93.18334423,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_53_MagrathSMART_MainFloor_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0G</p><p>Room Number: 75</p><p>Room Alias: Main level SMART learning commons</p><p>Seats: 92</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Chatter</p><p></p></p>"},{"n":"Mayo 3-150CC","lat":44.97270698,"lon":-93.23305295,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_153_Mayo3-150CC_comp.jpg","desc":"<p><p style='outline: medium none;'>Floor: 03</p><p style='outline: medium none;'>Room Number: 3-150CC</p><p style='outline: medium none;'>Seats: 32<br /></p><p style='outline: medium none;'>Outlets</p><p style='outline: medium none;'>Wireless Internet access</p><p style='outline: medium none;'>ADA Accessible</p><p style='outline: medium none;'>Lounge Seating<br /></p><p style='outline: medium none;'>Tables and Chairs</p><p>Natural Light</p><p style='outline: medium none;'>Noise Level: Chatter</p><p style='outline: medium none;'>Notes: Area outside of 3-100 and 3-125</p></p>"},{"n":"McNeal Hall  34","lat":44.98508848,"lon":-93.18342409,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_57_McNH34_comp.jpg","desc":"<p><p></p><p>Floor: 0G</p><p>Room Number: 34</p><p>Seats: 28</p><p>Outlets</p><p style='outline: medium none;'>Tables and Chairs</p><p style='outline: medium none;'>Lounge Seating</p><p style='outline: medium none;'>Bench<br /></p><p>Natural Light</p><p>Noise Level: Chatter</p><p></p></p>"},{"n":"McNeal Hall 190","lat":44.98582783,"lon":-93.18337468,"src":"https://egis.umn.edu/studyspace/studyspaceimages/McNeal_Hall_190.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: 190</p><p>Seats: 32</p><p>Study Room with Doors</p><p>Outlets</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Quiet</p><p></p></p>"},{"n":"McNeal Hall - 2nd Floor - Treehouse","lat":44.98487067,"lon":-93.18348589,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_59_McNealHall223_comp.jpg","desc":"<p><p><p>Floor: 02</p><p>Room Number: 223</p><p>Seats: 26</p><p>Study Room without Doors</p><p>Outlets</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Quiet</p></p></p>"},{"n":"McNeal Hall 393","lat":44.98592578,"lon":-93.18354213,"src":"https://egis.umn.edu/studyspace/studyspaceimages/McNeal_Hall_393.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 03</p><p>Room Number: 393</p><p>Seats: 10</p><p>Whiteboards</p><p>Outlets</p><p style='outline: medium none;'>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Quiet</p><p></p></p>"},{"n":"Molecular and Cellular Biology 3-107CC","lat":44.9731141,"lon":-93.23277475,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_154_MCB3-107CC_comp.jpg","desc":"<p><p style='outline: medium none;'>Floor: 03</p><p style='outline: medium none;'>Room Number: 3-107CC<br /></p><p style='outline: medium none;'>Lounge Seating<br /></p><p style='outline: medium none;'>Noise Level: Quiet</p><p style='outline: medium none;'>Notes: </p></p>"},{"n":"Mollecular and Cellular Biology 3-112CC","lat":44.9729642,"lon":-93.23321735,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_155_MCB3112-C_comp.jpg","desc":"<p><p style='outline: medium none;'>Floor: 03</p><p style='outline: medium none;'>Room Number: 3-112CC<br /></p><p style='outline: medium none;'>Lounge Seating<br /></p><p style='outline: medium none;'>Noise Level: Quiet</p><p style='outline: medium none;'>Notes: Lounge area on the way to Jackson Hall<br /></p></p>"},{"n":"Mondale Hall - 1st Floor - Auerbach Commons","lat":44.97324026,"lon":-93.24533005,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_63_MondaleHallAuerbachCommons_comp.jpg","desc":"<p><p><p>Floor: 01</p><p>Room Number: Auerbach Commons</p><p>Seats: 30</p><p>Study Room without Doors</p><p>Outlets</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Low Hum</p><p>Notes: Stein Terrace, an outdoor area, is attached with 30 additional seats with tables and chairs.</p></p></p>"},{"n":"Mondale Hall - 1st Floor - Law Library","lat":44.97305207,"lon":-93.24425557,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_64_MondaleHallLawLibraryFirstFloor_comp.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: Library</p><p>Room Alias: Law Library First Floor</p><p style='outline: none;'>Seats: 350</p><p>Study Room without Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p><p style='outline: none;'>Notes: Huge study space.</p><p></p></p>"},{"n":"Mondale Hall - 2nd Floor - Law Library","lat":44.97305207,"lon":-93.24425557,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_65_MondaleHallLawLibrarySecondFloor_comp.jpg","desc":"<p><p></p><p>Floor: 02</p><p>Room Number: Library</p><p style='outline: none;'>Room Alias: Law Library Second Floor</p><p>Seats: 45</p><p>Study Room without Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Low Hum</p><p style='outline: none;'>Notes: Study space which opens to the entrance to the Law Library so can be loud. Great windows and couches.</p><p></p></p>"},{"n":"Mondale Hall - 3rd Floor - Law Library","lat":44.97305207,"lon":-93.24425557,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_66_MondaleHallLawLibraryThirdFloor_comp.jpg","desc":"<p><p></p><p>Floor: 03</p><p>Room Number: Library</p><p>Room Alias: Law Library Third Floor</p><p style='outline: none;'>Seats: 80</p><p>Study Room without Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Natural Light</p><p>Noise Level: Quiet</p><p style='outline: none;'>Notes: Study carrels can be reserved by Law students.</p><p></p></p>"},{"n":"Mondale Hall - Basement Floor - Cafe","lat":44.97318682,"lon":-93.24445482,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_62_MondaleHallCafe_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0B</p><p>Room Number: Cafe</p><p>Room Alias: Basement Cafe</p><p>Seats: 30</p><p>Study Room without Doors</p><p>Coffee Shop/Cafe</p><p>Whiteboards</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Chatter</p><p></p></p>"},{"n":"Mondale Hall - Basement Floor - Hallway","lat":44.97329289,"lon":-93.24455516,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_61_MondaleHallHallway_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 0B</p><p>Room Number: Hallway</p><p>Room Alias: Basement Hallways</p><p>Seats: 50</p><p>Study Room without Doors</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p>Notes: Seating only. Could be useful for group meeting.</p></p></p>"},{"n":"Moos Health Sciences Tower 2-220","lat":44.97295871,"lon":-93.23175884,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_156_Moos2-220_comp.jpg","desc":"<p><p style='outline: medium none;'>Floor: 02</p><p style='outline: medium none;'>Room Number: 2-220<br /></p><p style='outline: medium none;'>Coffee Shop</p><p style='outline: medium none;'>Lounge Seating<br /></p><p>Tables and Chairs</p><p style='outline: medium none;'>Noise Level: Noisy</p><p style='outline: medium none;'>Notes: </p></p>"},{"n":"Murphy Hall - 1st Floor - Journalism Library","lat":44.97465207,"lon":-93.23416175,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_67_JournalismLibrary_comp.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: 20</p><p style='outline: none;'>Room Alias: Journalism Library</p><p>Seats: 49</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Both Mac and PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Quiet</p><p style='outline: none;'>Notes: Production rooms available to journalism students</p><p></p></p>"},{"n":"Nicholson Hall - Ground Floor","lat":44.97721058,"lon":-93.23565996,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_68_NicholsonHall1_comp.jpg","desc":"<p><p><p>Floor: 0G</p><p>Room Number: 1</p><p>Seats: 20</p><p style='outline: medium none;'>Outlets</p><p style='outline: medium none;'>Lounge seating</p><p>Natural Light</p><p>Noise Level: Low Hum</p></p></p>"},{"n":"Nolte Center 120","lat":44.97721779,"lon":-93.2338264,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_69_NolteCenter120_comp.jpg","desc":"<p><p></p><p>Floor: 01</p><p style='outline: medium none;'>Room Number: 120</p><p style='outline: none;'>Seats: 30</p><p style='outline: medium none;'>Outlets</p><p style='outline: medium none;'>Tables and Chairs</p><p style='outline: medium none;'>Lounge seating</p><p>Natural Light</p><p>Noise Level: Quiet</p><p>Notes: ADA Accesable</p><p></p></p>"},{"n":"Phillips-Wangensteen 2-575","lat":44.97217048,"lon":-93.23175956,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_157_PWB2-575_comp.jpg","desc":"<p><p style='outline: medium none;'>Floor: 02</p><p style='outline: medium none;'>Room Number: 2-575</p><p style='outline: medium none;'>Coffee Shop<br /></p><p style='outline: medium none;'>Lounge Seating<br /></p><p>Tables and Chairs</p><p style='outline: medium none;'>Noise Level: Noisy</p><p style='outline: medium none;'>Notes: Area outside of Freshi</p></p>"},{"n":"Rapson Hall - 2nd Floor - Architecture Library","lat":44.97667142,"lon":-93.23318222,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_70_Rapson%20Hall%20Architecture%20Library_comp.jpg","desc":"<p><p></p><p>Floor: 02</p><p>Room Number: 210</p><p>Room Alias: Architecture and Landscape Architecture Library</p><p>Seats: 65</p><p>Study Room without Doors</p><p>Outlets</p><p style='outline: none;'>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Quiet</p><p></p></p>"},{"n":"Ruttan Hall - Ground Floor","lat":44.98377932,"lon":-93.18436858,"src":"https://egis.umn.edu/studyspace/studyspaceimages/Ruttan_Hall_Ground_Floor.jpg","desc":"<p><p></p><p>Floor: 0G</p><p>Room Number: 10</p><p style='outline: medium none;'>Seats: 90</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Chatter</p><p></p></p>"},{"n":"Skok Hall B50","lat":44.98761849,"lon":-93.18519458,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_73_SkokHallB50_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 0B</p><p>Room Number: B50</p><p style='outline: medium none;'>Seats: 62<br /></p><p style='outline: medium none;'>Outlets</p><p>Markerboards</p><p>Vending</p><p>Wireless Internet access</p><p style='outline: medium none;'>Tables and Chairs</p><p style='outline: medium none;'>Lounge seating</p><p style='outline: medium none;'>Noise Level: Quiet</p></p></p>"},{"n":"St. Paul Student Center - 1st Floor - Terrace Cafe","lat":44.98490047,"lon":-93.18515065,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_169_StPaulStudentCenter_TerraceCafe_comp.jpg","desc":"<p style='outline: none;'>Floor: 01</p><p style='outline: none;'>Room Number: Terrace Cafe</p><p style='outline: none;'>Seats: 196</p><p>Coffee Shop / Cafe</p><p>Outlets</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Chatter</p>"},{"n":"St. Paul Student Center - 2nd Floor - Corridor outside North Star Ballroom","lat":44.98481511,"lon":-93.18557448,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_168_StPaulStudentCenter_CorridorOutsideNorthStarBallroom_comp.jpg","desc":"<p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: Corridor outside North Star Ballroom</p><p style='outline: none;'>Seats: 13</p><p>Outlets</p><p style='outline: none;'>Soft chairs</p><p style='outline: none;'>Terrace with outdoor seating, weather permitting<br /></p><p>Natural Light</p><p>Noise Level: Low Hum</p>"},{"n":"St. Paul Student Center - 2nd Floor - Lounge","lat":44.98509588,"lon":-93.18539742,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_167_StPaulStudentCenter240_2ndFloorLounge_comp.jpg","desc":"<p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: 240, 2nd Floor Lounge</p><p style='outline: none;'>Seats: 24</p><p style='outline: none;'>Outlets<br /></p><p style='outline: none;'>Tables and Chairs, also has Couches and Soft Chairs</p><p style='outline: none;'>Natural Light<br /></p><p>Noise Level: Low Hum</p>"},{"n":"St. Paul Student Center - Basement Floor - Gallery Lounges","lat":44.98484736,"lon":-93.18527399,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_170_StPaulStudentCenter_GalleryLounges_composite_comp.jpg","desc":"<p style='outline: none;'>Floor: 0B</p><p style='outline: none;'>Room Number: Gallery Lounges</p><p style='outline: none;'>Seats: 44</p><p style='outline: none;'>Outlets<br /></p><p style='outline: none;'>Tables and Chairs</p><p style='outline: none;'>Also has Soft Chairs and Couches<br /></p><p>Natural Light</p><p style='outline: none;'>Noise Level: Low Hum</p>"},{"n":"St. Paul Student Center - Basement Floor - OIT Tech Stop","lat":44.98439963,"lon":-93.18525791,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_171_StPaulStudentCenter_OITTechStop_comp.jpg","desc":"<p style='outline: none;'>Floor: 0B</p><p style='outline: none;'>Room Number: 4, OIT Tech Stop near Coffey Hall underground entrance</p><p style='outline: none;'>Seats: 18</p><p>Outlets</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum<br /></p><p style='outline: none;'>Note: This OIT Tech Help support area also has lounge/study seating<br /></p>"},{"n":"Veterinary Science - 4th Floor - Vet Med Library","lat":44.98104535,"lon":-93.18304033,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_81_VeterinaryScience450_comp.jpg","desc":"<p><p></p><p>Floor: 04</p><p>Room Number: 450</p><p style='outline: none;'>Room Alias: Veterinary Medical Library</p><p>Seats: 83</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p><p></p></p>"},{"n":"Vincent Hall - 3rd Floor - Math Library","lat":44.97452333,"lon":-93.23476874,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_82_Vincent%20Hall%20Math%20Library_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 03</p><p>Room Number: 310</p><p>Room Alias: Mathematics Library</p><p>Seats: 117</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p></p></p>"},{"n":"Walter Library - Basement Floor","lat":44.97526662,"lon":-93.23644553,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_87_Walter_Basement_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0B</p><p>Room Number: Basement</p><p>Room Alias: Basement Level</p><p>Seats: 63</p><p>Study Room without Doors</p><p style='outline: none;'>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p style='outline: none;'>Tables and Chairs</p><p style='outline: none;'>Whiteboards</p><p>Natural Light</p><p>Noise Level: Quiet</p><p></p></p>"},{"n":"Walter Library - Basement Floor - Wise Owl Cafe ","lat":44.97526994,"lon":-93.23625132,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_86_WalterLibraryCafe_comp.jpg","desc":"<p><p></p><p>Floor: 0B</p><p>Room Number: Cafe</p><p>Room Alias: Wise Owl Cafe</p><p>Seats: 30</p><p>Coffee Shop/Cafe</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p></p></p>"},{"n":"Walter Library - Foundation Floor","lat":44.97527141,"lon":-93.23647724,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_97_WalterFoundation_comp.jpg","desc":"<p><p></p><p>Floor: 0F</p><p>Room Number: F2</p><p>Room Alias: Foundation Level</p><p style='outline: none;'>Seats: 30</p><p style='outline: none;'>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Quiet</p><p></p></p>"},{"n":"Walter Library - Sub-Basement Floor","lat":44.97527141,"lon":-93.23647724,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_96_WalterSubbasement_comp.jpg","desc":"<p><p></p><p>Floor: SB</p><p>Room Number: S2</p><p style='outline: none;'>Room Alias: Sub-Basement</p><p style='outline: none;'>Seats: 30</p><p style='outline: none;'>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Quiet</p><p></p></p>"},{"n":"Walter Library 103","lat":44.97547446,"lon":-93.23634501,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_88_WalterLibrary103_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 01</p><p>Room Number: 103</p><p>Room Alias: 1st Floor Computer Lab</p><p>Seats: 131</p><p>Computer Lab</p><p>Outlets</p><p>Computer Types: Both Mac and PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p><p>More Info: <a href=\"https://it.umn.edu/computer-lab-walter-library-103\" target=\"_blank\">Computer Lab details</a></p></p>"},{"n":"Walter Library 202","lat":44.97547446,"lon":-93.23634501,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_83_WalterLibrary202_comp.jpg","desc":"<p><p><p>Floor: 02</p><p>Room Number: 202</p><p>Room Alias: Walter Library Great Hall</p><p>Seats: 74</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Low Hum</p></p></p>"},{"n":"Walter Library 204 - SMART Learning Commons","lat":44.97506345,"lon":-93.23632902,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_95_Walter_SMART_204_comp.jpg","desc":"<p><p><p>Floor: 02</p><p>Room Number: 204</p><p>Room Alias: Walter SMART Learning Commons</p><p>Seats: 100</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Computer Types: Computer-Mac</p><p>Noise Level: Low Hum</p></p></p>"},{"n":"Walter Library 204E","lat":44.97509188,"lon":-93.23650743,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_89_Walter204E_comp.jpg","desc":"<p><p></p><p>Floor: 02</p><p>Room Number: 204E</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Outlets</p><p style='outline: none;'>Printing (Gopher Gold)</p><p style='outline: none;'>Whiteboard</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/waltergroupstudy' target='_blank'><span>z.umn.edu/waltergroupstudy</span></a></p><p></p></p>"},{"n":"Walter Library 204F","lat":44.97506437,"lon":-93.23650868,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_90_Walter204F_comp.jpg","desc":"<p><p></p><p>Floor: 02</p><p>Room Number: 204F</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p style='outline: none;'>Tables and Chairs</p><p style='outline: none;'>Whiteboard</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/waltergroupstudy' target='_blank'><span>z.umn.edu/waltergroupstudy</span></a></p><p></p></p>"},{"n":"Walter Library 204G","lat":44.97503934,"lon":-93.23650958,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_91_Walter204G_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p>Noise level: 204G</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Whiteboard</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/waltergroupstudy' target='_blank'><span>z.umn.edu/waltergroupstudy</span></a></p><p></p></p>"},{"n":"Walter Library 206","lat":44.9752855,"lon":-93.23597733,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_84_Walter%20206_comp.jpg","desc":"<p><p><p>Floor: 02</p><p>Room Number: 206</p><p>Room Alias: Reference Room</p><p>Seats: 172</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Quiet</p></p></p>"},{"n":"Walter Library 206C","lat":44.97526795,"lon":-93.23608917,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_94_Walter206C_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p>Room Number: 206C</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p style='outline: none;'>Tables and Chairs</p><p style='outline: none;'>Whiteboards</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/waltergroupstudy' target='_blank'><span>z.umn.edu/waltergroupstudy</span></a></p><p></p></p>"},{"n":"Walter Library 208","lat":44.97545099,"lon":-93.23635211,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_85_Walter_208_comp.jpg","desc":"<p><p></p><p>Floor: 02</p><p style='outline: none;'>Room Number: 208</p><p style='outline: none;'>Room Alias: Quiet Study</p><p>Seats: 144</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p>Noise Level: Quiet</p><p style='outline: none;'>Notes: Very quiet!</p><p></p></p>"},{"n":"Walter Library B15C","lat":44.97525248,"lon":-93.23664622,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_93_WalterLibraryB15D_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0B</p><p>Room Number: B15C</p><p>Seats: 6</p><p style='outline: none;'>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/waltergroupstudy' target='_blank'><span>z.umn.edu/waltergroupstudy</span></a></p><p></p></p>"},{"n":"Walter Library B15D","lat":44.97528429,"lon":-93.23664801,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_92_WalterLibraryB15D_comp.jpg","desc":"<p><p></p><p>Floor: 0B</p><p>Room Number: B15D</p><p>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/waltergroupstudy' target='_blank'><span>z.umn.edu/waltergroupstudy</span></a></p><p></p></p>"},{"n":"Weaver-Densford Hall 201CC","lat":44.97330899,"lon":-93.23120171,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_158_WeaverDensford201CC_comp.jpg","desc":"<p><p style='outline: medium none;'>Floor: 02</p><p style='outline: medium none;'>Room Number: 201CC</p><p style='outline: medium none;'>Seats: 28<br /></p><p style='outline: medium none;'>Bench Seating<br /></p><p style='outline: medium none;'>Noise Level: Quiet</p><p style='outline: medium none;'>Notes: </p></p>"},{"n":"Willey Hall - Atrium","lat":44.97286187,"lon":-93.2437889,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_98_WileyHall101_comp.jpg","desc":"<p><p><p>Floor: 0P</p><p>Room Number: 101</p><p>Room Alias: Atrium</p><p>Seats: 139</p><p>Coffee Shop/Cafe</p><p style='outline: medium none;'>Outlets</p><p style='outline: medium none;'>Tables and Chairs</p><p style='outline: medium none;'>Lounge seating</p><p>Natural Light</p><p>Noise Level: Chatter</p></p></p>"},{"n":"Wilson Library 78","lat":44.97075123,"lon":-93.24325144,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_122_WilsonLibrary78_comp.jpg","desc":"<p><p><p>Floor: 0B</p><p>Room Number: 78</p><p style='outline: medium none;'>Seats: 82<br /></p><p style='outline: medium none;'>Outlets</p><p>Markerboards</p><p>Vending</p><p>Wireless Internet access</p><p>Individual Desks</p><p style='outline: medium none;'>Tables and Chairs</p><p>Noise Level: Quiet</p></p></p>"},{"n":"Wilson Library - 1st Floor","lat":44.9709403,"lon":-93.24350728,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_105_WilsonLibraryFirstFloor_comp.jpg","desc":"<p><p><p>Floor: 01</p><p>Room Number: First Floor</p><p>Seats: 50</p><p style='outline: none;'>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Large Display</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p></p></p>"},{"n":"Wilson Library - 2nd Floor","lat":44.9709403,"lon":-93.24350728,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_106_WilsonLibrarySecondFloor_comp.jpg","desc":"<p><p><p>Floor: 02</p><p>Room Number: Second Floor</p><p>Seats: 100</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p></p></p>"},{"n":"Wilson Library - 3rd Floor","lat":44.9709403,"lon":-93.24350728,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_111_WilsonLibraryThirdFloor_comp.jpg","desc":"<p><p><p>Floor: 03</p><p>Room Alias: Third Floor</p><p>seats: 100</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p></p></p>"},{"n":"Wilson Library - 4th Floor","lat":44.97093923,"lon":-93.24322018,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_116_Wilson04_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 04</p><p style='outline: none;'>Room Number: Fourth Floor</p><p style='outline: none;'>Seats: 50</p><p style='outline: none;'>Study Room without Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p><p></p></p>"},{"n":"Wilson Library - 4th Floor - SMART Learning Commons","lat":44.97092915,"lon":-93.24358777,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_115_WilsonSmartLearningCommons2_comp.jpg","desc":"<p><p><p>Floor: 04</p><p>Room Alias: SMART Learning Commons</p><p>Seats: 25</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer-PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Low Hum</p><p style='outline: none;'>Notes: Go to <a href='http://smart.umn.edu' target='_blank'><span>smart.umn.edu</span></a> to learn more including tutoring hours.</p></p></p>"},{"n":"Wilson Library - Basement Floor ","lat":44.97113121,"lon":-93.24360016,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_104_Wilson_Basement_comp.jpg","desc":"<p><p></p><p>Floor: 0B</p><p>Room Number: Basement Level</p><p style='outline: none;'>Seats: 100</p><p style='outline: none;'>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p><p></p></p>"},{"n":"Wilson Library - Basement Floor - Academic Blend Cafe","lat":44.9709403,"lon":-93.24350728,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_103_WilsonLibraryCafe_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 0B</p><p>Room Alias: Academic Blend Coffee Shop</p><p>Seats: 52</p><p>Study Room without Doors</p><p>Coffee Shop/Cafe</p><p>Whiteboards</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p></p></p>"},{"n":"Wilson Library - Basement Floor - Ames South Asian Collection","lat":44.97094199,"lon":-93.24328584,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_99_WilsonLibraryS10_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: SB</p><p>Room Number: S10</p><p>Room Alias: Ames Collection of South Asia</p><p>Seats: 50</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p><p></p></p>"},{"n":"Wilson Library 107","lat":44.97089512,"lon":-93.24361202,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_118Wilson107_comp.jpg","desc":"<p><p><p>Floor: 01</p><p>Room Number: 107</p><p>Seats: 4</p><p>Study Room without Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/wilsongroupstudy' target='_blank'><span>z.umn.edu/wilsongroupstudy</span></a></p></p></p>"},{"n":"Wilson Library 111","lat":44.97089398,"lon":-93.24366233,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_119_Wilson111_comp.jpg","desc":"<p><p><p>Floor: 01</p><p>Room Number: 111</p><p>Seats: 4</p><p>Study Room without Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/wilsongroupstudy' target='_blank'><span>z.umn.edu/wilsongroupstudy</span></a></p></p></p>"},{"n":"Wilson Library 112","lat":44.97088786,"lon":-93.24371569,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_120_Wilson112_comp.jpg","desc":"<p><p></p><p>Floor: 01</p><p>Room Number: 112</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p style='outline: none;'>Printing (Gopher Gold)</p><p style='outline: none;'>Large Display</p><p style='outline: none;'>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/wilsongroupstudy' target='_blank'><span>z.umn.edu/wilsongroupstudy</span></a></p><p></p></p>"},{"n":"Wilson Library 113","lat":44.97088792,"lon":-93.24376662,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_121_Wilson113_comp.jpg","desc":"<p></p><p></p><p>Floor: 01</p><p>Room Number: 113</p><p>Seats: 6</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Large Display</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/wilsongroupstudy' target='_blank'><span>z.umn.edu/wilsongroupstudy</span></a></p><p></p><p></p>"},{"n":"Wilson Library 201A","lat":44.97093983,"lon":-93.24395347,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_110_WilsonLibrary201A_comp.jpg","desc":"<p><p><p style='outline: none;'>Floor: 02</p><p>Room number: 201A</p><p>Seats: 20</p><p>Computer Lab</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Low Hum</p></p></p>"},{"n":"Wilson Library 201B","lat":44.97093923,"lon":-93.24322018,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_109_WilsonLibrary201B_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p style='outline: none;'>Room Number: 201B</p><p>Seats: 27</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p><p></p></p>"},{"n":"Wilson Library 207","lat":44.97095684,"lon":-93.24360376,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_107_Wilson207_comp.jpg","desc":"<p><p></p><p>Floor: 02</p><p>Room Number: 207</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Whiteboards</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/wilsongroupstudy' target='_blank'><span>z.umn.edu/wilsongroupstudy</span></a></p><p></p></p>"},{"n":"Wilson Library 209","lat":44.9709571,"lon":-93.24363735,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_108_Wilson209_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 02</p><p>Room Number: 209</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/wilsongroupstudy' target='_blank'><span>z.umn.edu/wilsongroupstudy</span></a></p><p></p></p>"},{"n":"Wilson Library 301A","lat":44.97093923,"lon":-93.24322018,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_117_WilsonLibrary301A_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 03</p><p>Room Number: 301A</p><p>Seats: 24</p><p>Study Room with Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Low Hum</p><p></p></p>"},{"n":"Wilson Library 301B","lat":44.97093983,"lon":-93.24395347,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_114_WilsonLibrary301B_comp.jpg","desc":"<p><p></p><p style='outline: none;'>Floor: 03</p><p>Room: 301B</p><p style='outline: none;'>Seats: 27</p><p>Study Room with Doors</p><p>Printing (Gopher Gold)</p><p>Individual Desks</p><p>Tables and Chairs</p><p>Natural Light</p><p style='outline: none;'>Noise Level: Quiet</p><p></p></p>"},{"n":"Wilson Library 308","lat":44.97095684,"lon":-93.24360376,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_112_Wilson308_comp.jpg","desc":"<p><p></p><p>Floor: 03</p><p>Room Number: 308</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/wilsongroupstudy' target='_blank'><span>z.umn.edu/wilsongroupstudy</span></a></p><p></p></p>"},{"n":"Wilson Library 309","lat":44.9709571,"lon":-93.24363735,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_113_Wilson309_comp.jpg","desc":"<p><p></p><p>Floor: 03</p><p>Room Number: 309</p><p>Seats: 4</p><p>Study Room with Doors</p><p>Outlets</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p>Noise Level: Chatter</p><p style='outline: none;'>Notes: Reserve at <a href='https://z.umn.edu/wilsongroupstudy' target='_blank'><span>z.umn.edu/wilsongroupstudy</span></a></p><p></p></p>"},{"n":"Wilson Library S50 - Wilson Annex ","lat":44.97094071,"lon":-93.24384666,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_100_Wilson_Annex_comp.jpg","desc":"<p><p><p>Floor: SB</p><p>Room Number: S50</p><p>Room Alias: Wilson Annex</p><p>Seats: 16</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p></p></p>"},{"n":"Wilson Library S75 - East Asian Collection","lat":44.97117967,"lon":-93.24381289,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_101_Wilson_EastAsianLibrary_comp.jpg","desc":"<p><p><p>Floor: SB</p><p>Room Number: S75</p><p>Room Alias: East Asian Library</p><p>Seats: 37</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Large Display</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p><p style='outline: none;'></p></p></p>"},{"n":"Wilson Library S76 - Borchert Map Library","lat":44.97119484,"lon":-93.24339849,"src":"https://egis.umn.edu/studyspace/studyspaceimages/STUDYSPACE_102_Wilson_MapLibrary_comp.jpg","desc":"<p><p><p>Floor: SB</p><p>Room Number: S76</p><p>Room Alias: Borchert Map Library</p><p>Seats: 50</p><p>Study Room without Doors</p><p>Outlets</p><p>Computer Types: Computer-PC</p><p>Large Display</p><p>Printing (Gopher Gold)</p><p>Tables and Chairs</p><p style='outline: none;'>Noise Level: Low Hum</p></p></p>"}];
