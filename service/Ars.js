let fs = require('fs');

let geo = fs.readFileSync("./data/ar.json", "utf8");
geo = JSON.parse(geo);
class Ars {
  constructor() {
    console.log('Ars');
  }


   make (words) {
        let studyAreaCnter = 60;
        console.log('Making Ars');
        let xml,
            question,
            answer,
            pageId,
            hint,
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
       console.log('Completed Making Ars');
    }

}
module.exports = Ars; 
